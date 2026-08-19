"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let lenis: any = null;
    let tickerCallback: any = null;

    async function initLenis() {
      try {
        const Lenis = (await import("lenis")).default;
        const isMobile = window.innerWidth < 1024 || "ontouchstart" in window;

        // Register ScrollTrigger
        if (typeof window !== "undefined") {
          gsap.registerPlugin(ScrollTrigger);
        }

        lenis = new Lenis({
          duration: isMobile ? 0.8 : 1.1,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          syncTouch: false,
          wheelMultiplier: 1.0,
          touchMultiplier: 1.0,
        });

        // Synchronize Lenis scroll position with GSAP ScrollTrigger
        lenis.on("scroll", ScrollTrigger.update);

        // Add Lenis to GSAP Ticker for frame-synchronized animation
        tickerCallback = (time: number) => {
          lenis?.raf(time * 1000);
        };
        gsap.ticker.add(tickerCallback);
        gsap.ticker.lagSmoothing(0);

        ScrollTrigger.refresh();
      } catch (err) {
        console.warn("Lenis smooth scroll fallback to standard CSS scroll.", err);
      }
    }

    initLenis();

    return () => {
      if (tickerCallback) {
        gsap.ticker.remove(tickerCallback);
      }
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  return <>{children}</>;
}

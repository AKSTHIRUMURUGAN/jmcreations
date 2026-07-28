"use client";

import React, { useEffect } from "react";

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let lenis: any = null;

    async function initLenis() {
      try {
        const Lenis = (await import("lenis")).default;
        lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          wheelMultiplier: 1.0,
          touchMultiplier: 1.5,
        });

        function raf(time: number) {
          lenis?.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
      } catch (err) {
        console.warn("Lenis smooth scroll fallback to standard CSS scroll.", err);
      }
    }

    initLenis();

    return () => {
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  return <>{children}</>;
}

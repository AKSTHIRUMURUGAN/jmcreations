"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface GSAPScrollProviderProps {
  children: React.ReactNode;
}

export default function GSAPScrollProvider({ children }: GSAPScrollProviderProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    // Check if device is mobile or touch-enabled
    const isMobile = window.innerWidth < 1024 || "ontouchstart" in window;

    // On mobile screens, do NOT force GSAP opacity overrides to prevent blank elements
    if (isMobile) {
      return;
    }

    const ctx = gsap.context(() => {
      const sections = containerRef.current?.querySelectorAll("section");

      sections?.forEach((section, index) => {
        // Skip hero section so it remains visible immediately
        if (index === 0) return;

        const titles = section.querySelectorAll(".gsap-title");
        const cards = section.querySelectorAll(".gsap-card");

        if (titles.length > 0) {
          gsap.fromTo(
            Array.from(titles),
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power2.out",
              stagger: 0.1,
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none none",
                once: true,
              },
            }
          );
        }

        if (cards.length > 0) {
          gsap.fromTo(
            Array.from(cards),
            { opacity: 0, y: 35 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power2.out",
              stagger: 0.08,
              scrollTrigger: {
                trigger: section,
                start: "top 78%",
                toggleActions: "play none none none",
                once: true,
              },
            }
          );
        }
      });
    }, containerRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return <div ref={containerRef} className="w-full">{children}</div>;
}

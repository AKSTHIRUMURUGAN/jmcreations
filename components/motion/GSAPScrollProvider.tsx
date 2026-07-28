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

    const ctx = gsap.context(() => {
      const sections = containerRef.current?.querySelectorAll("section");

      sections?.forEach((section, index) => {
        // Skip initial hero elements so top hero is instantly visible
        const isHero = index === 0;

        const titles = section.querySelectorAll("h1, h2, h3, .text-hero, .text-heading");
        const badges = section.querySelectorAll(".inline-flex, .badge, [class*='rounded-full']");
        const cards = section.querySelectorAll(".group, [class*='rounded-3xl'], [class*='glass-card']");

        if (!isHero) {
          // Hide all section elements initially
          if (titles.length > 0) gsap.set(titles, { opacity: 0, y: 55 });
          if (badges.length > 0) gsap.set(badges, { opacity: 0, scale: 0.8 });
          if (cards.length > 0) gsap.set(cards, { opacity: 0, y: 65, scale: 0.94 });

          // Animate titles with deliberate delay when section is centered in viewport (top 65%)
          if (titles.length > 0) {
            gsap.to(Array.from(titles), {
              opacity: 1,
              y: 0,
              duration: 0.9,
              delay: 0.15,
              ease: "power3.out",
              stagger: 0.12,
              scrollTrigger: {
                trigger: section,
                start: "top 68%",
                toggleActions: "play none none reverse",
              },
            });
          }

          // Animate badges with deliberate delay
          if (badges.length > 0) {
            gsap.to(Array.from(badges), {
              opacity: 1,
              scale: 1,
              duration: 0.75,
              delay: 0.25,
              ease: "back.out(1.7)",
              stagger: 0.1,
              scrollTrigger: {
                trigger: section,
                start: "top 68%",
                toggleActions: "play none none reverse",
              },
            });
          }

          // Animate cards with deliberate delay so user watches the cascade in view
          if (cards.length > 0) {
            gsap.to(Array.from(cards), {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.9,
              delay: 0.35,
              stagger: 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 65%",
                toggleActions: "play none none reverse",
              },
            });
          }
        }
      });
    }, containerRef);

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{children}</div>;
}

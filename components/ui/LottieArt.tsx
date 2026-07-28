"use client";

import React, { useEffect, useState } from "react";

interface LottieArtProps {
  type: "growth" | "analytics" | "consulting" | "tech" | "success";
  className?: string;
}

// Custom vector Lottie-style animated graphic components
export function LottieArt({ type, className = "w-24 h-24" }: LottieArtProps) {
  const [LottieComponent, setLottieComponent] = useState<any>(null);

  useEffect(() => {
    import("lottie-react")
      .then((mod) => setLottieComponent(() => mod.default))
      .catch((err) => console.warn("Lottie fallback active", err));
  }, []);

  // Preset Lottie JSON animation structures for each section
  const getAnimationData = () => {
    switch (type) {
      case "growth":
        return {
          v: "5.7.4",
          fr: 30,
          ip: 0,
          op: 60,
          w: 100,
          h: 100,
          nm: "Growth Pulse",
          ddd: 0,
          assets: [],
          layers: [
            {
              ddd: 0,
              ind: 1,
              ty: 4,
              nm: "Circle",
              sr: 1,
              ks: {
                o: { a: 1, k: [{ t: 0, s: [100] }, { t: 30, s: [40] }, { t: 60, s: [100] }] },
                r: { a: 1, k: [{ t: 0, s: [0] }, { t: 60, s: [360] }] },
                p: { a: 0, k: [50, 50, 0] },
                a: { a: 0, k: [0, 0, 0] },
                s: { a: 1, k: [{ t: 0, s: [100, 100, 100] }, { t: 30, s: [115, 115, 100] }, { t: 60, s: [100, 100, 100] }] },
              },
              shapes: [
                {
                  ty: "el",
                  d: 1,
                  s: { a: 0, k: [60, 60] },
                  p: { a: 0, k: [0, 0] },
                },
                {
                  ty: "st",
                  c: { a: 0, k: [0.83, 0.66, 0.32, 1] }, // #d4a853
                  w: { a: 0, k: 3 },
                },
              ],
            },
          ],
        };
      default:
        return {
          v: "5.7.4",
          fr: 30,
          ip: 0,
          op: 60,
          w: 100,
          h: 100,
          nm: "Pulse",
          ddd: 0,
          assets: [],
          layers: [],
        };
    }
  };

  if (LottieComponent) {
    return (
      <div className={className}>
        <LottieComponent animationData={getAnimationData()} loop={true} />
      </div>
    );
  }

  // Fallback CSS Lottie Art Visual
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#d4a853]/20 via-[#f0c36d]/10 to-transparent animate-ping" />
      <div className="w-10 h-10 rounded-full border-2 border-[#d4a853] border-t-transparent animate-spin" />
    </div>
  );
}

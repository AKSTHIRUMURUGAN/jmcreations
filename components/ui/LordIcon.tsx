"use client";

import React, { useState } from "react";
import Lottie from "lottie-react";

interface LordIconProps {
  iconType: "briefcase" | "rocket" | "code" | "chart" | "star" | "shield" | "mail" | "phone" | "award";
  size?: number;
  className?: string;
  trigger?: "hover" | "always";
}

// Preset animated vector JSON structures for Lordicon micro-interactions
const LORDICON_ANIMATIONS: Record<string, any> = {
  briefcase: {
    v: "5.7.4",
    fr: 30,
    ip: 0,
    op: 45,
    w: 50,
    h: 50,
    nm: "Briefcase",
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "Case",
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 1, k: [{ t: 0, s: [0] }, { t: 22, s: [8] }, { t: 45, s: [0] }] },
          p: { a: 0, k: [25, 25, 0] },
          s: { a: 1, k: [{ t: 0, s: [100, 100, 100] }, { t: 22, s: [110, 110, 100] }, { t: 45, s: [100, 100, 100] }] },
        },
        shapes: [
          {
            ty: "rect",
            s: { a: 0, k: [32, 24] },
            p: { a: 0, k: [0, 4] },
            r: { a: 0, k: 4 },
          },
          {
            ty: "st",
            c: { a: 0, k: [0.83, 0.66, 0.32, 1] }, // Gold #d4a853
            w: { a: 0, k: 2.5 },
          },
        ],
      },
    ],
  },
  rocket: {
    v: "5.7.4",
    fr: 30,
    ip: 0,
    op: 45,
    w: 50,
    h: 50,
    nm: "Rocket",
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "RocketBody",
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 0, k: -45 },
          p: { a: 1, k: [{ t: 0, s: [25, 25, 0] }, { t: 22, s: [25, 20, 0] }, { t: 45, s: [25, 25, 0] }] },
          s: { a: 0, k: [100, 100, 100] },
        },
        shapes: [
          {
            ty: "el",
            s: { a: 0, k: [18, 28] },
            p: { a: 0, k: [0, 0] },
          },
          {
            ty: "st",
            c: { a: 0, k: [0.83, 0.66, 0.32, 1] },
            w: { a: 0, k: 2.5 },
          },
        ],
      },
    ],
  },
  star: {
    v: "5.7.4",
    fr: 30,
    ip: 0,
    op: 45,
    w: 50,
    h: 50,
    nm: "Star",
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "StarShape",
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 1, k: [{ t: 0, s: [0] }, { t: 22, s: [36] }, { t: 45, s: [0] }] },
          p: { a: 0, k: [25, 25, 0] },
          s: { a: 1, k: [{ t: 0, s: [100, 100, 100] }, { t: 22, s: [120, 120, 100] }, { t: 45, s: [100, 100, 100] }] },
        },
        shapes: [
          {
            ty: "sr",
            sy: 1,
            pt: { a: 0, k: 5 },
            p: { a: 0, k: [0, 0] },
            or: { a: 0, k: 14 },
            ir: { a: 0, k: 7 },
          },
          {
            ty: "fl",
            c: { a: 0, k: [0.83, 0.66, 0.32, 1] },
          },
        ],
      },
    ],
  },
};

export function LordIcon({
  iconType,
  size = 28,
  className = "",
  trigger = "hover",
}: LordIconProps) {
  const [isHovered, setIsHovered] = useState(false);
  const animData = LORDICON_ANIMATIONS[iconType] || LORDICON_ANIMATIONS["star"];

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`inline-flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110 ${className}`}
      style={{ width: size, height: size }}
    >
      <Lottie
        animationData={animData}
        loop={trigger === "always" ? true : isHovered}
        autoplay={trigger === "always" ? true : isHovered}
        aria-label={`${iconType} Lordicon`}
      />
    </div>
  );
}

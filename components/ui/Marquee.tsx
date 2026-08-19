"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  repeat?: number;
  duration?: number; // seconds
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = true,
  children,
  repeat = 2,
  duration = 45,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden py-2 [--gap:1rem] [gap:var(--gap)] select-none w-full relative pointer-events-auto",
        className
      )}
      style={
        {
          "--duration": `${duration}s`,
        } as React.CSSProperties
      }
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 [gap:var(--gap)] flex-row items-stretch min-w-max",
            reverse ? "animate-marquee-reverse" : "animate-marquee",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
          style={{
            animationDuration: `${duration}s`,
          }}
        >
          {children}
        </div>
      ))}
    </div>
  );
}

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
  repeat = 4,
  duration = 40,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden p-2 [--gap:1.25rem] [gap:var(--gap)] select-none w-full relative",
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
            "flex shrink-0 justify-around [gap:var(--gap)] min-w-full flex-row items-center",
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

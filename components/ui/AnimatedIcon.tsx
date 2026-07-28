"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedIconProps {
  children: React.ReactNode;
  animation?: "pulse" | "spin" | "bounce" | "glow" | "hover-rotate" | "hover-scale" | "float";
  glowColor?: string;
  className?: string;
}

export function AnimatedIcon({
  children,
  animation = "hover-scale",
  glowColor = "rgba(212, 168, 83, 0.4)",
  className = "",
}: AnimatedIconProps) {
  const getAnimationClass = () => {
    switch (animation) {
      case "pulse":
        return "animate-pulse";
      case "spin":
        return "animate-spin";
      case "bounce":
        return "animate-bounce";
      case "glow":
        return "drop-shadow-[0_0_12px_var(--glow-color)] transition-all duration-300";
      case "hover-rotate":
        return "transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110";
      case "hover-scale":
        return "transition-transform duration-300 group-hover:scale-115";
      case "float":
        return "animate-pulse duration-1000";
      default:
        return "transition-transform duration-300 group-hover:scale-110";
    }
  };

  return (
    <div
      style={{ "--glow-color": glowColor } as React.CSSProperties}
      className={cn(
        "inline-flex items-center justify-center transition-all duration-300",
        getAnimationClass(),
        className
      )}
    >
      {children}
    </div>
  );
}

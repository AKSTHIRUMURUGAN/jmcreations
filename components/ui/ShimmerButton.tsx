"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

export function ShimmerButton({
  shimmerColor = "#ffffff",
  shimmerSize = "0.08em",
  shimmerDuration = "2.5s",
  borderRadius = "100px",
  background = "linear-gradient(135deg, #d4a853 0%, #f0c36d 50%, #aa7f30 100%)",
  className,
  children,
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      style={{
        borderRadius,
        background,
      }}
      className={cn(
        "group relative flex items-center justify-center overflow-hidden px-8 py-4 text-xs font-bold text-black shadow-2xl transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-[#d4a853]/25 hover:shadow-[#d4a853]/40 cursor-pointer",
        className
      )}
      {...props}
    >
      {/* Shimmer sweep effect */}
      <div
        className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent"
        style={{ animationDuration: shimmerDuration }}
      />
      
      <span className="relative z-10 flex items-center gap-2 font-sans tracking-wide">
        {children}
      </span>
    </button>
  );
}

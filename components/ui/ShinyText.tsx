"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ShinyTextProps {
  text: string;
  className?: string;
  disabled?: boolean;
  speed?: number;
}

export function ShinyText({ text, className = "", disabled = false, speed = 5 }: ShinyTextProps) {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={cn(
        "inline-block bg-clip-text text-transparent font-extrabold",
        disabled
          ? "text-white"
          : "bg-gradient-to-r from-[#ffffff] via-[#d4a853] via-50% to-[#ffffff] bg-[length:200%_100%] animate-shiny-text",
        className
      )}
      style={{ animationDuration }}
    >
      {text}
    </span>
  );
}

"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface TypingTextProps {
  text: string;
  className?: string;
  speed?: number;
}

export function TypingText({ text, className = "", speed = 35 }: TypingTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-30px" });
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!isInView) {
      setDisplayedText("");
      return;
    }

    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [isInView, text, speed]);

  return (
    <span ref={ref} className={className}>
      {displayedText}
      {displayedText.length < text.length && (
        <span className="inline-block w-[2px] h-[1em] bg-[#d4a853] ml-1 animate-pulse" />
      )}
    </span>
  );
}

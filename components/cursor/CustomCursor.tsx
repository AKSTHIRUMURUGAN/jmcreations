"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "drag" | "clickable">("default");
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth lerp physics using Framer Motion spring
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only activate custom cursor on desktop
    if (window.innerWidth < 1024) return;

    document.body.classList.add("custom-cursor-active");

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, [role='button'], input, textarea, select, .interactive-hover");
      if (interactive) {
        setCursorVariant("hover");
        const customText = interactive.getAttribute("data-cursor-text");
        if (customText) setCursorText(customText);
      } else {
        setCursorVariant("default");
        setCursorText("");
      }
    };

    const onMouseDown = () => setCursorVariant("clickable");
    const onMouseUp = () => setCursorVariant("hover");
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Soft Ambient Gold Spotlight Follower */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-40 rounded-full mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          width: cursorVariant === "hover" ? 320 : 260,
          height: cursorVariant === "hover" ? 320 : 260,
          background: "radial-gradient(circle, rgba(212, 168, 83, 0.12) 0%, rgba(212, 168, 83, 0) 70%)",
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Core Precision Cursor Dot & Ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 flex items-center justify-center rounded-full border border-[#d4a853]/80 bg-[#d4a853]/10 backdrop-blur-[2px]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: cursorVariant === "hover" ? 48 : cursorVariant === "clickable" ? 28 : 20,
          height: cursorVariant === "hover" ? 48 : cursorVariant === "clickable" ? 28 : 20,
          borderColor: cursorVariant === "hover" ? "#f0c36d" : "rgba(212, 168, 83, 0.8)",
          backgroundColor: cursorVariant === "hover" ? "rgba(212, 168, 83, 0.2)" : "rgba(212, 168, 83, 0.1)",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        {cursorText && (
          <span className="text-[10px] font-semibold tracking-wider text-[#fafafa] uppercase">
            {cursorText}
          </span>
        )}
      </motion.div>
    </>
  );
}

"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltMaxAngle?: number;
  scaleOnHover?: number;
  glareOpacity?: number;
  onClick?: () => void;
}

export function TiltCard({
  children,
  className = "",
  tiltMaxAngle = 10,
  scaleOnHover = 1.02,
  glareOpacity = 0.15,
  onClick,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 400, damping: 28 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [tiltMaxAngle, -tiltMaxAngle]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-tiltMaxAngle, tiltMaxAngle]), springConfig);
  const scale = useSpring(isHovered ? scaleOnHover : 1, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative rounded-3xl border border-white/10 bg-[#101014]/80 p-6 sm:p-8 overflow-hidden backdrop-blur-xl transition-colors duration-300 hover:border-[#d4a853]/50 hover:shadow-2xl hover:shadow-[#d4a853]/15 cursor-pointer group",
        className
      )}
    >
      {/* Glare specular highlight sheen */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at ${useTransform(x, [-0.5, 0.5], ["0%", "100%"]).get()} ${useTransform(y, [-0.5, 0.5], ["0%", "100%"]).get()}, rgba(212, 168, 83, ${glareOpacity}), transparent 60%)`,
        }}
      />

      {/* Content Container */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

"use client";

import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { ShinyText } from "@/components/ui/ShinyText";
import { ShimmerButton } from "@/components/ui/ShimmerButton";
import { CountUpNumber } from "@/components/ui/CountUpNumber";
import { Marquee } from "@/components/ui/Marquee";
import { LordIcon } from "@/components/ui/LordIcon";
import { SplineScene } from "@/components/ui/splite";

interface HeroSectionProps {
  onOpenQuote: () => void;
}

export default function HeroSection({ onOpenQuote }: HeroSectionProps) {
  // Mouse position for 3D perspective tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-300, 300], [4, -4]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-300, 300], [-4, 4]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const ecosystemBadges = [
    "Next.js 16 Web Apps",
    "Meta Ads (FB & Instagram)",
    "Google PPC & Search Ads",
    "Brand Identity & Logos",
    "WhatsApp Business API",
    "Corporate Video Editing",
    "MSME & GST Compliance",
    "360° Business Consulting",
    "Product Photography",
    "Event Management",
  ];

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background Radial Glow Spotlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[700px] sm:h-[900px] bg-gradient-to-tr from-[#d4a853]/20 via-[#c8946e]/8 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Grid Overlay Line Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Hero Storytelling Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left relative z-20">
            {/* Live Trust Badge with LordIcon Star */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-[#d4a853]/30 backdrop-blur-md mb-6 shadow-lg shadow-[#d4a853]/10"
            >
              <LordIcon iconType="star" size={20} trigger="always" />
              <span className="text-xs font-semibold text-zinc-200">
                End-to-End Business Solutions Company
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4a853] animate-ping" />
            </motion.div>

            {/* Headline with Shiny Text Sheen */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-hero font-extrabold tracking-tight text-white mb-6"
            >
              We Build, Scale {"&"} Elevate Your <br className="hidden sm:inline" />
              <ShinyText text="Complete Business Ecosystem" speed={4} />
            </motion.h1>

            {/* Subheadline with Copywriting Focus */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-subheading text-zinc-400 max-w-2xl mb-8 leading-relaxed"
            >
              From strategic consulting and brand identity to Next.js web applications, performance marketing (Meta {"&"} Google Ads), video production, event management, and business registration — everything under one roof.
            </motion.p>

            {/* CTAs with Magic UI Shimmer Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <ShimmerButton onClick={onOpenQuote}>
                <Sparkles className="w-4 h-4 text-black animate-pulse" />
                <span>Start Your Growth Engine</span>
                <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
              </ShimmerButton>

              <a
                href="#services"
                className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-xs text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-[#d4a853]/50 transition-all flex items-center justify-center gap-2 backdrop-blur-md"
              >
                <span>Explore 21 Services</span>
              </a>
            </motion.div>

            {/* Quick Value Indicators with CountUpNumber & LordIcon */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 mt-8 w-full max-w-xl"
            >
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-1.5">
                  <LordIcon iconType="briefcase" size={20} />
                  <span className="font-extrabold text-2xl text-white font-mono">
                    <CountUpNumber value={21} suffix="+" />
                  </span>
                </div>
                <p className="text-xs text-zinc-400 pt-1">Integrated Services</p>
              </div>

              <div className="flex flex-col items-start">
                <div className="flex items-center gap-1.5">
                  <LordIcon iconType="rocket" size={20} />
                  <span className="font-extrabold text-2xl text-[#d4a853] font-mono">
                    <CountUpNumber value={100} suffix="%" />
                  </span>
                </div>
                <p className="text-xs text-zinc-400 pt-1">In-House Execution</p>
              </div>

              <div className="flex flex-col items-start">
                <div className="flex items-center gap-1.5">
                  <LordIcon iconType="star" size={20} />
                  <span className="font-extrabold text-2xl text-white font-mono">
                    <CountUpNumber value={4} suffix="x ROI" prefix="~" />
                  </span>
                </div>
                <p className="text-xs text-zinc-400 pt-1">Average Client ROI</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Completely Seamless Transparent 3D Robot Canvas */}
          <div className="lg:col-span-6 flex justify-center items-center w-full relative z-10">
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative w-full h-[480px] sm:h-[560px] bg-transparent flex items-center justify-center pointer-events-auto"
            >
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full bg-transparent"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Infinite Ecosystem Marquee Ribbon */}
      <div className="w-full border-y border-white/10 bg-white/[0.02] py-4 relative z-10">
        <Marquee pauseOnHover repeat={4} className="[--duration:25s]">
          {ecosystemBadges.map((badge, bIdx) => (
            <div
              key={bIdx}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300 backdrop-blur-md"
            >
              <Sparkles className="w-3 h-3 text-[#d4a853]" />
              <span>{badge}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

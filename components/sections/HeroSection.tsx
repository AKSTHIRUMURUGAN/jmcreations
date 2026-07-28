"use client";

import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, Zap, TrendingUp, Star } from "lucide-react";

interface HeroSectionProps {
  onOpenQuote: () => void;
}

export default function HeroSection({ onOpenQuote }: HeroSectionProps) {
  // Mouse position for 3D card tilt & spotlight follow
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-300, 300], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-300, 300], [-8, 8]), { stiffness: 300, damping: 30 });

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

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background Radial Glow Spotlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-gradient-to-tr from-[#d4a853]/15 via-[#c8946e]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Grid Overlay Line Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Storytelling Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Live Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-[#d4a853]/30 backdrop-blur-md mb-6 shadow-lg shadow-[#d4a853]/10"
            >
              <div className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-[#d4a853] text-[#d4a853]" />
                <Star className="w-3.5 h-3.5 fill-[#d4a853] text-[#d4a853]" />
                <Star className="w-3.5 h-3.5 fill-[#d4a853] text-[#d4a853]" />
                <Star className="w-3.5 h-3.5 fill-[#d4a853] text-[#d4a853]" />
                <Star className="w-3.5 h-3.5 fill-[#d4a853] text-[#d4a853]" />
              </div>
              <span className="text-xs font-semibold text-zinc-200">
                End-to-End Business Solutions Company
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4a853] animate-ping" />
            </motion.div>

            {/* Headline with Stagger Typography */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-hero font-extrabold tracking-tight text-white mb-6"
            >
              We Build, Scale {"&"} Elevate Your <br className="hidden sm:inline" />
              <span className="gold-gradient-text">Complete Business Ecosystem</span>
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

            {/* CTAs with Magnetic Effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm text-black bg-gradient-to-r from-[#d4a853] via-[#f0c36d] to-[#d4a853] hover:from-[#f0c36d] hover:to-[#d4a853] shadow-xl shadow-[#d4a853]/25 hover:shadow-[#d4a853]/40 transition-all flex items-center justify-center gap-3 group"
              >
                <Sparkles className="w-4 h-4 text-black group-hover:rotate-12 transition-transform" />
                <span>Start Your Growth Engine</span>
                <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#services"
                className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-sm text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-[#d4a853]/50 transition-all flex items-center justify-center gap-2 backdrop-blur-md"
              >
                <span>Explore 21 Services</span>
              </a>
            </motion.div>

            {/* Quick Value Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-10 border-t border-white/10 mt-10 w-full max-w-xl"
            >
              <div>
                <span className="font-extrabold text-2xl text-white font-mono">21+</span>
                <p className="text-xs text-zinc-400">Integrated Services</p>
              </div>
              <div>
                <span className="font-extrabold text-2xl text-[#d4a853] font-mono">100%</span>
                <p className="text-xs text-zinc-400">In-House Execution</p>
              </div>
              <div>
                <span className="font-extrabold text-2xl text-white font-mono">3.8x</span>
                <p className="text-xs text-zinc-400">Average Client ROI</p>
              </div>
            </motion.div>
          </div>

          {/* Right 3D Interactive Card Column (React Bits / 21st.dev Inspired) */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative w-full max-w-md p-6 sm:p-8 rounded-3xl glass-card border border-white/15 shadow-2xl overflow-hidden group"
            >
              {/* Card Ambient Glow Accent */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#d4a853]/20 rounded-full blur-2xl pointer-events-none group-hover:bg-[#d4a853]/30 transition-all" />

              {/* Card Header Badge */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-gradient-to-br from-[#d4a853] to-[#aa7f30] text-black font-bold text-xs">
                    JM
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm text-white">Full-Stack Business Suite</h3>
                    <p className="text-[11px] text-zinc-400 font-mono">21 Core Services Ready</p>
                  </div>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* Bento Quick Highlights */}
              <div className="py-6 space-y-3">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-4 h-4 text-[#d4a853]" />
                    <span className="text-xs text-zinc-200 font-medium">Meta {"&"} Google Ads Funnels</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">ACTIVE</span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Zap className="w-4 h-4 text-[#d4a853]" />
                    <span className="text-xs text-zinc-200 font-medium">Next.js 16 Web Architecture</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#d4a853] font-bold">FAST</span>
                </div>

                <div className="p-[#0a0a0a] border border-white/10 rounded-xl p-3 flex items-center justify-between bg-white/[0.03]">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-4 h-4 text-[#d4a853]" />
                    <span className="text-xs text-zinc-200 font-medium">Instant WhatsApp Leads</span>
                  </div>
                  <span className="text-[10px] font-mono text-blue-400 font-bold">LIVE</span>
                </div>
              </div>

              {/* Card Footer Live Notification */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-zinc-400">Inquiry Dispatch:</span>
                <span className="font-mono text-[#d4a853] font-semibold">Instant WA + Email</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

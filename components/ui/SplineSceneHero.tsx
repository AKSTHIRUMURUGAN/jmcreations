"use client";

import React from "react";
import { SplineScene } from "@/components/ui/splite";
import { BorderBeam } from "@/components/ui/BorderBeam";
import { ShinyText } from "@/components/ui/ShinyText";
import { Sparkles, Bot, Cpu, Zap, ArrowRight } from "lucide-react";

interface SplineSceneHeroProps {
  onOpenQuote?: () => void;
}

export function SplineSceneHero({ onOpenQuote }: SplineSceneHeroProps) {
  return (
    <div className="w-full relative rounded-3xl bg-[#0c0c10]/90 border border-white/15 overflow-hidden shadow-2xl backdrop-blur-2xl p-6 sm:p-10 my-12">
      {/* Magic UI BorderBeam Laser Perimeter */}
      <BorderBeam size={300} duration={14} colorFrom="#d4a853" colorTo="#f0c36d" />

      {/* Ambient Radial Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#d4a853]/20 via-[#c8946e]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
        {/* Left Column: Interactive 3D Copywriting */}
        <div className="flex-1 flex flex-col items-start text-left max-w-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4a853]/15 border border-[#d4a853]/30 text-[#d4a853] text-xs font-mono mb-4 uppercase tracking-widest">
            <Bot className="w-4 h-4 text-[#d4a853] animate-bounce" />
            <span>Next-Gen Interactive 3D AI Experience</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
            Interactive AI {"&"} 3D Digital <br />
            <ShinyText text="Future of Business Automation" speed={4} />
          </h2>

          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
            Engage visitors with immersive 3D Spline web scenes, AI chatbot integrations, automated workflow engines, and futuristic visual experiences crafted to maximize client retention and conversion.
          </p>

          {/* Quick AI Capabilities Pills */}
          <div className="grid grid-cols-2 gap-3 mb-8 w-full">
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-zinc-200">
              <Cpu className="w-4 h-4 text-[#d4a853]" />
              <span>Spline 3D Render Engine</span>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-zinc-200">
              <Zap className="w-4 h-4 text-[#d4a853]" />
              <span>Real-Time WebGL 60FPS</span>
            </div>
          </div>

          {onOpenQuote && (
            <button
              onClick={onOpenQuote}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#d4a853] via-[#f0c36d] to-[#d4a853] text-black font-bold text-xs shadow-xl shadow-[#d4a853]/25 hover:scale-105 transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-black" />
              <span>Build Interactive 3D Site</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>
          )}
        </div>

        {/* Right Column: 3D Robot Spline Canvas */}
        <div className="flex-1 w-full h-[400px] sm:h-[480px] relative rounded-2xl overflow-hidden bg-gradient-to-b from-black/60 to-black/90 border border-white/10 shadow-inner">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
          {/* Subtle instruction badge */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-400 pointer-events-none">
            ✦ Hover / Drag mouse to interact with 3D Robot
          </div>
        </div>
      </div>
    </div>
  );
}

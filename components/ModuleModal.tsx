"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Gift, BookOpen, Target, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ModuleModalProps {
  module: any | null;
  onClose: () => void;
  accentColor?: string;
}

export default function ModuleModal({ module, onClose }: ModuleModalProps) {
  if (!module) return null;

  const IconComp = module.icon;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9990] flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="w-[94vw] max-w-xl bg-[#0e0e12] border border-[#d4a853]/40 rounded-3xl p-4 sm:p-6 shadow-2xl relative max-h-[85vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="flex items-start gap-3 mb-5 pr-8">
            <div className="p-2.5 sm:p-3 rounded-2xl bg-[#d4a853]/15 border border-[#d4a853]/30 text-[#d4a853] shrink-0 mt-0.5">
              {IconComp && <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Badge variant="gold">MODULE {module.num}</Badge>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-white mt-1 leading-tight">{module.title}</h3>
              <p className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">{module.desc}</p>
            </div>
          </div>

          {/* What it is & Why it matters */}
          <div className="space-y-3 mb-5">
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
              <h4 className="text-[11px] font-mono font-bold text-[#d4a853] uppercase mb-1 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" /> What It Is
              </h4>
              <p className="text-[11px] sm:text-xs text-zinc-300 leading-relaxed">{module.whatItIs}</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
              <h4 className="text-[11px] font-mono font-bold text-amber-400 uppercase mb-1 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5" /> Why It Matters
              </h4>
              <p className="text-[11px] sm:text-xs text-zinc-300 leading-relaxed">{module.whyItMatters}</p>
            </div>
          </div>

          {/* Syllabus */}
          {module.syllabus && module.syllabus.length > 0 && (
            <div className="mb-5">
              <h4 className="text-[10px] font-mono font-bold text-zinc-400 uppercase mb-2.5">Core Syllabus Topics:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {module.syllabus.map((item: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-2 p-2 rounded-xl bg-white/5 text-[11px] text-zinc-200 border border-white/5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#d4a853] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Gains */}
          {module.gains && module.gains.length > 0 && (
            <div className="mb-5">
              <h4 className="text-[10px] font-mono font-bold text-emerald-400 uppercase mb-2">Student Gains & Skills:</h4>
              <div className="flex flex-wrap gap-1.5">
                {module.gains.map((gain: string, gIdx: number) => (
                  <span key={gIdx} className="text-[10px] px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-mono">
                    ✓ {gain}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Bonus */}
          {module.bonus && (
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#d4a853]/15 to-amber-500/10 border border-[#d4a853]/40 mb-5">
              <h4 className="text-[11px] font-mono font-bold text-[#d4a853] uppercase mb-1 flex items-center gap-1.5">
                <Gift className="w-3.5 h-3.5 text-[#d4a853]" /> Exclusive Program Bonus
              </h4>
              <p className="text-[11px] text-zinc-200 leading-relaxed">{module.bonus}</p>
            </div>
          )}

          {/* Action */}
          <Button variant="gold" size="sm" className="w-full text-xs font-bold py-2.5" onClick={onClose}>
            <Sparkles className="w-3.5 h-3.5 mr-2" />
            <span>Close Details</span>
          </Button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

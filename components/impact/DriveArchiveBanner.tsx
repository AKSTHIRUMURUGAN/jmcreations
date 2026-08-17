"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FolderLock,
  ExternalLink,
  ShieldCheck,
  FileCheck,
  Camera,
  Mic,
  Video,
  Sparkles,
} from "lucide-react";
import { DRIVE_ARCHIVE_DATA } from "@/lib/impactData";
import { Badge } from "@/components/ui/badge";

export default function DriveArchiveBanner() {
  const iconMap: Record<string, React.ReactNode> = {
    FileCheck: <FileCheck className="w-5 h-5 text-[#d4a853]" />,
    Camera: <Camera className="w-5 h-5 text-[#10b981]" />,
    Mic: <Mic className="w-5 h-5 text-[#3b82f6]" />,
    Video: <Video className="w-5 h-5 text-[#f43f5e]" />,
  };

  return (
    <section className="relative py-20 bg-[#08080a] border-t border-white/10 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[#10b981]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-[#10b981]/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Top Radial Flare */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#10b981]/15 to-transparent rounded-tr-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 text-[#10b981] text-xs font-mono font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>100% Public & Verifiable Archives</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                {DRIVE_ARCHIVE_DATA.title}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-xl">
                {DRIVE_ARCHIVE_DATA.description}
              </p>

              <div className="pt-2">
                <a
                  href={DRIVE_ARCHIVE_DATA.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-xs text-black bg-gradient-to-r from-[#10b981] via-[#34d399] to-[#10b981] hover:shadow-xl hover:shadow-[#10b981]/30 transition-all cursor-pointer group"
                >
                  <FolderLock className="w-4 h-4" />
                  <span>Access Google Drive Proof Archive</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Proof Breakdown Grid (5 cols) */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {DRIVE_ARCHIVE_DATA.categories.map((cat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-black/50 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-3">
                    {iconMap[cat.iconName] || <FolderLock className="w-5 h-5 text-[#d4a853]" />}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">{cat.name}</span>
                    <span className="text-[11px] font-mono text-[#10b981] font-semibold mt-0.5 block">
                      {cat.count}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

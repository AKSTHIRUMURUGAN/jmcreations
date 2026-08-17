"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  ArrowDown,
  FolderLock,
  ExternalLink,
} from "lucide-react";
import { HERO_VIDEO_DATA } from "@/lib/impactData";
import { Badge } from "@/components/ui/badge";
import { ShinyText } from "@/components/ui/ShinyText";

export default function ImpactHero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 overflow-hidden flex flex-col justify-center">
      {/* Cinematic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-[#d4a853]/15 via-[#f0c36d]/5 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#10b981]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Badges & Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#d4a853]/30 backdrop-blur-md mb-6 shadow-lg shadow-[#d4a853]/10">
            <ShieldCheck className="w-4 h-4 text-[#d4a853]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#d4a853] uppercase">
              100% Verified Ground Reality • Zero Filtered PR
            </span>
          </div>

          <h1 className="text-hero font-black tracking-tight text-white mb-6 leading-tight">
            We Are Not Just A Brand. <br />
            <span className="gold-gradient-text">Our Real Impact Speaks.</span>
          </h1>

          <p className="text-subheading text-zinc-300 max-w-2xl leading-relaxed mb-8">
            No scripted actors. No fake 5-star screenshots. Only genuine transformations, heartfelt student audio notes, live auditorium sessions, and verifiable career milestones.
          </p>

          {/* Quick Action Navigation Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection("video-story")}
              className="px-6 py-3 rounded-full font-bold text-xs text-black bg-gradient-to-r from-[#d4a853] via-[#f0c36d] to-[#d4a853] hover:shadow-xl hover:shadow-[#d4a853]/25 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-black group-hover:scale-110 transition-transform" />
              <span>Watch Ground Story Film</span>
            </button>

            <button
              onClick={() => scrollToSection("student-feedback")}
              className="px-6 py-3 rounded-full font-bold text-xs text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#d4a853]/50 transition-all flex items-center gap-2 cursor-pointer"
            >
              <HeartHandshake className="w-4 h-4 text-[#d4a853]" />
              <span>Explore Student Testimonials</span>
            </button>

            <a
              href={HERO_VIDEO_DATA.driveProofUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full font-mono text-xs text-zinc-400 hover:text-white bg-transparent hover:bg-white/5 border border-white/5 hover:border-white/15 transition-all flex items-center gap-2"
            >
              <FolderLock className="w-3.5 h-3.5 text-[#10b981]" />
              <span>Open Drive Archives</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
          </div>
        </motion.div>

        {/* Cinematic Video Showcase Frame */}
        <motion.div
          id="video-story"
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden border border-[#d4a853]/40 bg-gradient-to-b from-white/[0.08] to-black/90 p-2 sm:p-3 shadow-2xl shadow-black/80"
        >
          {/* Outer Ambient Glow Ring */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#d4a853]/30 via-transparent to-[#10b981]/20 rounded-3xl blur-xl opacity-60 pointer-events-none" />

          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black/95 group">
            {/* Check if video source is Google Drive */}
            {HERO_VIDEO_DATA.videoSrc.includes("drive.google.com") ? (
              <div className="relative w-full h-full">
                <iframe
                  src={HERO_VIDEO_DATA.videoSrc}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  className="w-full h-full border-0 rounded-2xl bg-black"
                  title="JM Creations Real Impact Hero Video"
                />
              </div>
            ) : (
              <>
                {/* Standard Video Element */}
                <video
                  ref={videoRef}
                  src={HERO_VIDEO_DATA.videoSrc}
                  poster={HERO_VIDEO_DATA.videoPoster}
                  loop
                  autoPlay
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover"
                  onClick={togglePlay}
                />

                {/* Video Overlay Tint & Grain */}
                <div
                  onClick={togglePlay}
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 transition-opacity duration-300 cursor-pointer ${
                    isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                  }`}
                />

                {/* Center Big Play Button (When Paused) */}
                {!isPlaying && (
                  <div
                    onClick={togglePlay}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-4 cursor-pointer z-20"
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#d4a853] text-black flex items-center justify-center shadow-2xl shadow-[#d4a853]/60 transition-transform duration-300 hover:scale-110 active:scale-95">
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-black translate-x-0.5" />
                    </div>
                    <div className="text-center px-4">
                      <span className="text-xs sm:text-sm font-bold tracking-wide uppercase text-white drop-shadow-md">
                        Play Ground Impact Film ({HERO_VIDEO_DATA.videoDuration})
                      </span>
                      <p className="text-[11px] text-zinc-300 max-w-sm mt-1 drop-shadow">
                        Real classroom audio, stage keynotes, and student reactions
                      </p>
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Top Video Header Overlay */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-20">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/10">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider">
                  Ground Story Reel • In Loop
                </span>
              </div>

              <div className="flex items-center gap-2 pointer-events-auto">
                <a
                  href="https://drive.google.com/file/d/13-CRcBu2DP9K5bCoh19gzR_0rtwl9zXU/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-black/70 hover:bg-[#d4a853] text-zinc-300 hover:text-black text-[10px] font-mono font-bold backdrop-blur-md border border-white/10 transition-all flex items-center gap-1.5"
                  title="Open Original Video in Google Drive"
                >
                  <span>Drive Master HD</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Bottom Controls Bar (Visible on Hover or Play) */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-4 py-2.5 rounded-xl bg-black/80 backdrop-blur-xl border border-white/10 z-20">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-[#d4a853] text-white hover:text-black transition-all"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                </button>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white">Campus Transformation Story</span>
                  <span className="text-[10px] text-zinc-400 font-mono">Recorded Live Across 48+ Colleges</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <Sparkles className="w-3.5 h-3.5 text-[#d4a853]" />
                <span className="hidden sm:inline">Unfiltered Reality</span>
              </div>
            </div>
          </div>

          {/* Video Sub-Manifesto Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 sm:p-6 bg-black/40 border-t border-white/10">
            {HERO_VIDEO_DATA.manifesto.map((line, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5"
              >
                <span className="w-5 h-5 rounded-full bg-[#d4a853]/15 text-[#d4a853] text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                  0{idx + 1}
                </span>
                <p className="text-xs text-zinc-300 leading-relaxed">{line}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

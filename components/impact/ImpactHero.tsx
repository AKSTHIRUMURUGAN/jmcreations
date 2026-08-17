"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Sparkles,
  ShieldCheck,
  Headphones,
  ArrowDown,
  FolderLock,
  ExternalLink,
  Loader2,
} from "lucide-react";
import { HERO_VIDEO_DATA } from "@/lib/impactData";

export default function ImpactHero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Ensure initial autoplay attempt
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn("Autoplay muted required:", err);
      });
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(console.error);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[100dvh] sm:min-h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-12 sm:pb-16 overflow-hidden bg-[#060608]">
      {/* =========================================================================
          BACKGROUND VIDEO LAYER (AUTOPLAY LOOP + PROGRESSIVE STREAMING)
          ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Skeleton & Poster Placeholder */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          style={{ backgroundImage: `url(${HERO_VIDEO_DATA.videoPoster})` }}
        >
          {/* Skeleton Shimmer Overlay */}
          {!isVideoLoaded && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
                <Loader2 className="w-3.5 h-3.5 text-[#d4a853] animate-spin" />
                <span className="text-[10px] font-mono text-zinc-400">Loading ground reel...</span>
              </div>
            </div>
          )}
        </div>

        <video
          ref={videoRef}
          src={HERO_VIDEO_DATA.videoSrc}
          poster={HERO_VIDEO_DATA.videoPoster}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="auto"
          onLoadedData={() => setIsVideoLoaded(true)}
          onCanPlay={() => setIsVideoLoaded(true)}
          className="w-full h-full object-cover scale-[1.01] brightness-[0.88] contrast-[1.08] transition-opacity duration-700 ease-out"
          style={{ opacity: isVideoLoaded ? 1 : 0.9 }}
        />

        {/* Cinematic Lightweight Scrim & Vignette Overlays (Clearer Video) */}
        {/* Top Fade for Navbar */}
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#0a0a0a]/85 via-[#0a0a0a]/35 to-transparent" />
        
        {/* Center Transparent Scrim for Video Clarity */}
        <div className="absolute inset-0 bg-black/25 backdrop-contrast-[1.02]" />

        {/* Bottom Fade */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#08080a] via-[#08080a]/70 to-transparent" />

        {/* Subtle Ambient Brand Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-[#d4a853]/10 via-[#f0c36d]/5 to-transparent blur-[140px]" />
      </div>

      {/* =========================================================================
          HERO FOREGROUND CONTENT
          ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* Glowing Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-black/75 border border-[#d4a853]/40 backdrop-blur-xl mb-5 sm:mb-6 shadow-2xl shadow-black/80 max-w-full">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#d4a853] shrink-0" />
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider sm:tracking-widest text-[#d4a853] uppercase truncate">
              100% Verified Ground Reality • Zero Filtered PR
            </span>
          </div>

          {/* Hero Typography */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-4 sm:mb-6 leading-[1.1] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
            We Are Not Just A Brand. <br className="hidden xs:block" />
            <span className="gold-gradient-text">Our Real Impact Speaks.</span>
          </h1>

          <p className="text-xs sm:text-base md:text-lg text-zinc-100 max-w-2xl leading-relaxed mb-6 sm:mb-10 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] bg-black/35 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl backdrop-blur-sm border border-white/10">
            No scripted actors. No fake 5-star screenshots. Only genuine transformations, heartfelt student audio notes, live auditorium sessions, and verifiable career milestones.
          </p>

          {/* Quick Action Buttons (Responsive Mobile Stacking) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto mb-6 sm:mb-8">
            <button
              onClick={() => scrollToSection("student-feedback")}
              className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-bold text-xs text-black bg-gradient-to-r from-[#d4a853] via-[#f0c36d] to-[#d4a853] hover:shadow-xl hover:shadow-[#d4a853]/30 transition-all flex items-center justify-center gap-2 group cursor-pointer hover:scale-105 active:scale-95"
            >
              <span>Explore Student Proof</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection("audio-testimonials")}
              className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-full font-bold text-xs text-white bg-white/10 hover:bg-white/20 border border-white/20 hover:border-[#d4a853]/60 backdrop-blur-xl transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-105 active:scale-95 shadow-lg shadow-black/40"
            >
              <Headphones className="w-4 h-4 text-[#d4a853]" />
              <span>Listen To Voice Notes</span>
            </button>

            <a
              href={HERO_VIDEO_DATA.driveProofUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 sm:px-5 py-3 sm:py-3.5 rounded-full font-mono text-xs text-zinc-300 hover:text-white bg-black/40 hover:bg-black/60 border border-white/10 hover:border-white/25 backdrop-blur-xl transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <FolderLock className="w-3.5 h-3.5 text-[#10b981]" />
              <span>Open Drive Master</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* =========================================================================
          HERO FOOTER: MANIFESTO HIGHLIGHTS + FLOATING VIDEO CONTROLLER
          ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-white/10">
          
          {/* Glass Manifesto Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 w-full lg:w-auto flex-1">
            {HERO_VIDEO_DATA.manifesto.map((line, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-black/50 border border-white/10 backdrop-blur-md hover:border-[#d4a853]/40 transition-colors"
              >
                <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#d4a853]/20 border border-[#d4a853]/40 text-[#d4a853] text-[10px] sm:text-[11px] font-mono font-bold flex items-center justify-center shrink-0">
                  0{idx + 1}
                </span>
                <p className="text-[10px] sm:text-[11px] font-medium text-zinc-300 line-clamp-2">{line}</p>
              </div>
            ))}
          </div>

          {/* Floating Ambient Video Controls Dock */}
          <div className="flex items-center justify-center sm:justify-end gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-black/75 border border-white/15 backdrop-blur-2xl shadow-2xl shrink-0 w-full sm:w-auto">
            {/* Live Indicator */}
            <div className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/5">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[10px] font-mono font-bold text-zinc-300 uppercase tracking-wider">
                Live Ground Reel
              </span>
            </div>

            {/* Play / Pause Toggle */}
            <button
              onClick={togglePlay}
              className="p-2 rounded-xl bg-white/5 hover:bg-[#d4a853] text-white hover:text-black transition-all cursor-pointer"
              title={isPlaying ? "Pause Background Reel" : "Play Background Reel"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
            </button>

            {/* Mute / Unmute Toggle */}
            <button
              onClick={toggleMute}
              className={`p-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                isMuted
                  ? "bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white"
                  : "bg-[#d4a853] text-black font-bold shadow-lg shadow-[#d4a853]/25"
              }`}
              title={isMuted ? "Unmute Background Video" : "Mute Background Video"}
            >
              {isMuted ? (
                <VolumeX className="w-3.5 h-3.5" />
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-mono tracking-tight pr-0.5">Sound On</span>
                </>
              )}
            </button>

            {/* Fullscreen Master Button */}
            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all cursor-pointer hidden sm:block"
              title="Fullscreen Video"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>

            {/* Direct Drive Link */}
            <a
              href={HERO_VIDEO_DATA.driveProofUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all cursor-pointer"
              title="Open Original Video in Google Drive"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

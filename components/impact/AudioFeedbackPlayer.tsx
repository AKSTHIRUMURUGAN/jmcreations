"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Mic,
  ShieldCheck,
  FileText,
  ExternalLink,
  Volume2,
  VolumeX,
  Loader2,
} from "lucide-react";
import { AUDIO_FEEDBACK_ITEMS, AudioFeedbackItem } from "@/lib/impactData";
import { Badge } from "@/components/ui/badge";
import { ShinyText } from "@/components/ui/ShinyText";

export default function AudioFeedbackPlayer() {
  const [activeAudioId, setActiveAudioId] = useState<string>(AUDIO_FEEDBACK_ITEMS[0].id);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(48);
  const [isLoadingAudio, setIsLoadingAudio] = useState<boolean>(false);
  const [showFullTranscript, setShowFullTranscript] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const activeItem =
    AUDIO_FEEDBACK_ITEMS.find((item) => item.id === activeAudioId) || AUDIO_FEEDBACK_ITEMS[0];

  const getDriveFileId = (url: string) => {
    if (!url) return "";
    const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) return match[1];
    const idMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (idMatch && idMatch[1]) return idMatch[1];
    return url;
  };

  const activeDriveFileId = getDriveFileId(activeItem.driveAudioUrl);

  // Set duration default based on active item
  useEffect(() => {
    if (activeItem.durationSeconds) {
      setDuration(activeItem.durationSeconds);
    }
    setCurrentTime(0);
    setIsPlaying(false);
  }, [activeAudioId, activeItem]);

  // Handle Play / Start Action
  const handleStart = () => {
    if (audioRef.current) {
      setIsLoadingAudio(true);
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setIsLoadingAudio(false);
        })
        .catch((err) => {
          console.warn("Audio playback issue:", err);
          setIsLoadingAudio(false);
          // Fallback: If autoplay policy requires user interaction, mark playing
          setIsPlaying(true);
        });
    }
  };

  // Handle Stop / Pause Action
  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
  };

  // Handle Reset / Replay Action
  const handleReset = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
    setCurrentTime(0);
    handleStop();
  };

  // Handle Track Selection
  const handleSelectTrack = (id: string) => {
    if (id === activeAudioId) {
      if (isPlaying) {
        handleStop();
      } else {
        handleStart();
      }
      return;
    }
    setActiveAudioId(id);
    setTimeout(() => {
      handleStart();
    }, 150);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current && !isNaN(audioRef.current.duration) && audioRef.current.duration > 0) {
      setDuration(audioRef.current.duration);
    }
    setIsLoadingAudio(false);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setCurrentTime(val);
    if (audioRef.current) {
      audioRef.current.currentTime = val;
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <section id="audio-testimonials" className="relative py-24 bg-[#08080a] border-t border-white/10 overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[350px] bg-[#d4a853]/10 blur-[130px] pointer-events-none" />

      {/* Hidden Native HTML5 Audio Engine connected to Google Drive Proxy */}
      <audio
        ref={audioRef}
        key={activeDriveFileId}
        src={`/api/audio-proxy?id=${activeDriveFileId}`}
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        onWaiting={() => setIsLoadingAudio(true)}
        onPlaying={() => setIsLoadingAudio(false)}
        muted={isMuted}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <Badge variant="gold" className="mb-4">
            <Mic className="w-3.5 h-3.5 mr-1.5 text-[#d4a853]" />
            Real Student Audio Recordings
          </Badge>

          <h2 className="text-heading font-black text-white mb-4">
            Hear Real Voice Notes <br />
            <ShinyText text="Unfiltered Voices from Google Drive" speed={4} />
          </h2>

          <p className="text-subheading text-zinc-400 max-w-xl">
            Stream raw recorded voice notes sent directly from students after our campus bootcamps. Press **Start Audio** to listen to the real voice file or open the original Drive recording.
          </p>
        </div>

        {/* Master Player Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Active Voice Note Player (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-gradient-to-b from-white/[0.07] via-white/[0.03] to-black/90 border border-[#d4a853]/40 p-6 sm:p-8 shadow-2xl relative">
            {/* Top Bar with Live Indicator & Direct Open Button */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${isPlaying ? "bg-[#10b981] animate-ping" : "bg-[#d4a853]"}`} />
                <span className="text-xs font-mono font-bold text-[#d4a853] uppercase tracking-wider">
                  {isPlaying ? "Streaming Real Audio File" : "Real Google Drive Master Audio"}
                </span>
              </div>

              {/* Dedicated Open in Google Drive Button */}
              <a
                href={activeItem.driveAudioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d4a853]/20 hover:bg-[#d4a853] text-[#d4a853] hover:text-black text-xs font-mono font-bold transition-all border border-[#d4a853]/40 cursor-pointer shadow-md"
                title="Open Master Audio Recording on Google Drive"
              >
                <span>Open Audio in Drive</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Student Info Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#d4a853]/15 border-2 border-[#d4a853]/60 shadow-lg shadow-[#d4a853]/20 flex items-center justify-center text-[#d4a853] shrink-0 font-mono font-black text-lg">
                <Mic className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-black text-white">{activeItem.studentName}</h3>
                <p className="text-xs text-[#d4a853] font-medium">{activeItem.role}</p>
                <p className="text-[11px] text-zinc-400 font-mono mt-0.5">{activeItem.college}</p>
              </div>
            </div>

            {/* Animated Sound Waveform Visualizer */}
            <div className="p-4 rounded-2xl bg-black/60 border border-white/10 mb-6 flex items-center justify-center gap-1 sm:gap-1.5 h-20 overflow-hidden relative">
              {[
                35, 60, 45, 80, 50, 95, 70, 50, 85, 100, 65, 45, 90, 75, 55, 35, 70, 90, 60,
                85, 40, 95, 70, 50, 80, 60, 45, 75, 90, 55, 40, 85, 65, 50, 35,
              ].map((height, i) => (
                <motion.div
                  key={i}
                  animate={{
                    height: isPlaying
                      ? [`${Math.max(20, (height * (i % 3 + 1)) % 95)}%`, `${height}%`, `${Math.max(25, (height * 0.7))}%`]
                      : `${Math.max(15, (height * 0.3))}%`,
                  }}
                  transition={{
                    repeat: isPlaying ? Infinity : 0,
                    duration: 0.7 + (i % 4) * 0.15,
                    ease: "easeInOut",
                  }}
                  className={`w-1 sm:w-1.5 rounded-full transition-all ${
                    (currentTime / duration) * 35 > i
                      ? "bg-gradient-to-t from-[#d4a853] to-[#f0c36d] shadow-sm shadow-[#d4a853]/40"
                      : "bg-zinc-800"
                  }`}
                />
              ))}
            </div>

            {/* Time Scrubber & Progress Bar */}
            <div className="space-y-2 mb-6">
              <input
                type="range"
                min={0}
                max={duration || 60}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#d4a853]"
              />

              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <span className="text-[#d4a853] font-bold">{formatTime(currentTime)}</span>
                <span className="text-zinc-500 font-medium">Duration: {formatTime(duration)}</span>
              </div>
            </div>

            {/* Dedicated Transport Control Center (Start, Stop, Reset, Read) */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-black/50 border border-white/10 mb-6">
              {/* Separate Start & Stop & Reset Controls */}
              <div className="flex items-center gap-3">
                {/* Dedicated START Button */}
                <button
                  onClick={handleStart}
                  disabled={isPlaying}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer ${
                    isPlaying
                      ? "bg-white/5 text-zinc-600 border border-white/5 cursor-not-allowed opacity-50"
                      : "bg-gradient-to-r from-[#d4a853] via-[#f0c36d] to-[#d4a853] text-black shadow-lg shadow-[#d4a853]/25 hover:scale-105 active:scale-95"
                  }`}
                >
                  {isLoadingAudio ? (
                    <Loader2 className="w-4 h-4 animate-spin text-black" />
                  ) : (
                    <Play className="w-4 h-4 fill-current" />
                  )}
                  <span>{isLoadingAudio ? "Buffering..." : "Start Audio"}</span>
                </button>

                {/* Dedicated STOP Button */}
                <button
                  onClick={handleStop}
                  disabled={!isPlaying}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer ${
                    !isPlaying
                      ? "bg-white/5 text-zinc-600 border border-white/5 cursor-not-allowed opacity-50"
                      : "bg-[#e11d48] text-white shadow-lg shadow-[#e11d48]/25 hover:scale-105 active:scale-95"
                  }`}
                >
                  <Pause className="w-4 h-4 fill-current" />
                  <span>Stop</span>
                </button>

                {/* Dedicated RESET Button */}
                <button
                  onClick={handleReset}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
                  title="Reset to 0:00"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                {/* Mute/Unmute toggle */}
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
                  title={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-[#d4a853]" />}
                </button>
              </div>

              {/* Transcript Drawer Toggle */}
              <button
                onClick={() => setShowFullTranscript(!showFullTranscript)}
                className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-[#d4a853]" />
                <span>{showFullTranscript ? "Hide Transcript" : "Read Transcript"}</span>
              </button>
            </div>

            {/* Transcript Snippet / Full Transcript */}
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
              <p className="text-xs text-zinc-300 leading-relaxed italic">
                "{showFullTranscript ? activeItem.fullTranscript : activeItem.transcriptSnippet}"
              </p>
            </div>
          </div>

          {/* Playlist / Voice Notes Selector (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest">
                Select Audio Feedback ({AUDIO_FEEDBACK_ITEMS.length})
              </h4>
              <span className="text-[10px] text-[#d4a853] font-mono">Real Master Audio</span>
            </div>

            {AUDIO_FEEDBACK_ITEMS.map((item, idx) => {
              const isSelected = item.id === activeAudioId;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelectTrack(item.id)}
                  className={`p-4 rounded-2xl transition-all cursor-pointer border flex items-center justify-between group ${
                    isSelected
                      ? "bg-white/[0.08] border-[#d4a853] shadow-lg shadow-[#d4a853]/15"
                      : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-[#d4a853]/15 border border-[#d4a853]/30 flex items-center justify-center text-[#d4a853] shrink-0 font-mono font-bold text-xs">
                      {isSelected && isPlaying ? (
                        <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-ping block" />
                      ) : (
                        `0${idx + 1}`
                      )}
                    </div>

                    <div className="truncate">
                      <h4
                        className={`text-xs font-bold truncate transition-colors ${
                          isSelected ? "text-[#d4a853]" : "text-white group-hover:text-[#d4a853]"
                        }`}
                      >
                        {item.studentName}
                      </h4>
                      <p className="text-[11px] text-zinc-400 truncate">{item.role}</p>
                      <span className="text-[10px] text-zinc-500 font-mono">{item.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Dedicated Open in Drive Icon Button */}
                    <a
                      href={item.driveAudioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-[#d4a853] text-zinc-400 hover:text-black transition-all border border-white/10"
                      title="Open in Google Drive"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    {/* Start / Stop Toggle Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectTrack(item.id);
                      }}
                      className={`p-2.5 rounded-xl transition-all ${
                        isSelected && isPlaying
                          ? "bg-[#e11d48] text-white shadow-md shadow-[#e11d48]/30"
                          : "bg-white/5 group-hover:bg-[#d4a853] text-zinc-400 group-hover:text-black border border-white/10"
                      }`}
                      title={isSelected && isPlaying ? "Stop Audio" : "Start Audio"}
                    >
                      {isSelected && isPlaying ? (
                        <Pause className="w-3.5 h-3.5 fill-current" />
                      ) : (
                        <Play className="w-3.5 h-3.5 fill-current" />
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Video,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { INTERN_VIDEO_FEEDBACK_ITEMS, InternVideoFeedbackItem } from "@/lib/impactData";
import { Badge } from "@/components/ui/badge";
import { ShinyText } from "@/components/ui/ShinyText";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

function VideoCardPreview({
  video,
  onOpen,
}: {
  video: InternVideoFeedbackItem;
  onOpen: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasVideoLoaded, setHasVideoLoaded] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 2.0;
    }
  };

  return (
    <div
      onClick={onOpen}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative aspect-[16/10] w-full overflow-hidden bg-black cursor-pointer group/thumb"
    >
      {/* Fallback Poster Image */}
      <img
        src={video.thumbnailUrl}
        alt={video.internName}
        referrerPolicy="no-referrer"
        className={`w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500 ${
          hasVideoLoaded ? "opacity-0 absolute inset-0" : "opacity-80"
        }`}
      />

      {/* Real Live Video Frame (seeks to 2.0s to bypass initial black screen) */}
      <video
        ref={videoRef}
        src={`/api/video-proxy?id=${video.driveFileId}#t=2.0`}
        preload="metadata"
        muted
        loop
        playsInline
        onLoadedData={(e) => {
          setHasVideoLoaded(true);
          try {
            e.currentTarget.currentTime = 2.0;
          } catch {}
        }}
        className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500"
      />

      {/* Dark Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/20 pointer-events-none" />

      {/* Top Badge & Duration */}
      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none z-10">
        <Badge variant="gold" className="text-[10px]">
          Tech Intern
        </Badge>

        <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white font-mono text-[10px] font-bold border border-white/15">
          {video.duration}
        </span>
      </div>

      {/* Centered Glowing Play Button */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <div className="w-13 h-13 rounded-full bg-[#d4a853] text-black flex items-center justify-center shadow-xl shadow-[#d4a853]/50 group-hover/thumb:scale-110 group-hover/thumb:shadow-[#d4a853]/80 transition-all duration-300">
          <Play className="w-5 h-5 fill-black translate-x-0.5" />
        </div>
      </div>

      {/* Bottom Overlay Hint */}
      <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-[11px] font-mono text-zinc-300 pointer-events-none z-10">
        <span className="flex items-center gap-1 text-[#d4a853]">
          <ShieldCheck className="w-3.5 h-3.5" />
          Verified Intern
        </span>
        <span className="text-zinc-400">Click to Play</span>
      </div>
    </div>
  );
}

export default function InternVideoTestimonials() {
  const [selectedVideo, setSelectedVideo] = useState<InternVideoFeedbackItem | null>(null);

  return (
    <section id="intern-videos" className="relative py-24 bg-[#060608] border-t border-white/10 overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[350px] bg-[#d4a853]/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-[#10b981]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <Badge variant="gold" className="mb-4">
            <Video className="w-3.5 h-3.5 mr-1.5 text-[#d4a853]" />
            Unfiltered Video Proof
          </Badge>

          <h2 className="text-heading font-black text-white mb-4">
            Intern Real Video Feedback <br />
            <ShinyText text="Watch Real Students Speak from the Heart" speed={4} />
          </h2>

          <p className="text-subheading text-zinc-400 max-w-xl">
            Raw, unedited video reviews directly from tech interns who worked on live production systems with JM Creations.
          </p>
        </div>

        {/* 3-Column Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {INTERN_VIDEO_FEEDBACK_ITEMS.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group rounded-3xl overflow-hidden bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-[#d4a853]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#d4a853]/15 flex flex-col justify-between"
            >
              {/* Video Thumbnail / Live Video Preview Container */}
              <VideoCardPreview video={video} onOpen={() => setSelectedVideo(video)} />

              {/* Card Meta & Quote */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h3 className="text-base font-bold text-white group-hover:text-[#d4a853] transition-colors">
                      {video.internName}
                    </h3>

                    <a
                      href={video.driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white/5 hover:bg-[#d4a853] text-zinc-400 hover:text-black transition-all border border-white/10 shrink-0"
                      title="Open Video on Google Drive"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed italic mb-4">
                    "{video.highlightQuote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span className="flex items-center gap-1 text-[#d4a853]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Tech Intern
                  </span>

                  <button
                    onClick={() => setSelectedVideo(video)}
                    className="text-[#d4a853] font-bold hover:underline cursor-pointer flex items-center gap-1"
                  >
                    <span>Watch Full</span>
                    <Play className="w-2.5 h-2.5 fill-current" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Video Player Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={(open) => !open && setSelectedVideo(null)}>
        {selectedVideo && (
          <DialogContent className="max-w-4xl bg-[#0a0a0e] border-white/20 p-2 sm:p-4 text-white">
            <div className="flex items-center justify-between pb-3 px-2 border-b border-white/10 mb-2">
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <span>{selectedVideo.internName}</span>
                  <Badge variant="gold" className="text-[10px]">
                    Tech Intern
                  </Badge>
                </h4>
              </div>

              <a
                href={selectedVideo.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#d4a853] text-black font-bold text-xs font-mono hover:scale-105 transition-transform"
              >
                <span>Drive Master</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Video Iframe Stream Frame */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl">
              <iframe
                src={selectedVideo.videoUrl}
                className="w-full h-full border-0"
                allow="autoplay; fullscreen"
                title={`${selectedVideo.internName} Video Feedback`}
              />
            </div>

            {/* Quote Snippet Below Modal */}
            <div className="p-3 bg-black/60 rounded-xl border border-white/10 mt-2">
              <p className="text-xs text-zinc-300 italic leading-relaxed">
                "{selectedVideo.highlightQuote}"
              </p>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}

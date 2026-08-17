"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  Users,
  Sparkles,
  Maximize2,
  ExternalLink,
  Camera,
  Grid,
} from "lucide-react";
import { EVENT_GALLERY_ITEMS, EventGalleryItem } from "@/lib/impactData";
import { Badge } from "@/components/ui/badge";
import { ShinyText } from "@/components/ui/ShinyText";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

const FALLBACK_EVENT_IMAGE =
  "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1200&auto=format&fit=crop";

export default function ProofGalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxImage, setLightboxImage] = useState<EventGalleryItem | null>(null);
  const [viewMode, setViewMode] = useState<"carousel" | "masonry">("carousel");

  const categories = [
    { label: "All Photos", value: "All", count: EVENT_GALLERY_ITEMS.length },
    {
      label: "Startup Starter @ REC",
      value: "Startup Starter",
      count: EVENT_GALLERY_ITEMS.filter((i) => i.category === "Startup Starter").length,
    },
    {
      label: "DEVS REC IoT Workshop",
      value: "IoT & Embedded Workshop",
      count: EVENT_GALLERY_ITEMS.filter((i) => i.category === "IoT & Embedded Workshop").length,
    },
    {
      label: "Capture & Code Hackathon",
      value: "Capture & Code",
      count: EVENT_GALLERY_ITEMS.filter((i) => i.category === "Capture & Code").length,
    },
  ];

  const filteredItems =
    selectedCategory === "All"
      ? EVENT_GALLERY_ITEMS
      : EVENT_GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  const activeItem = filteredItems[currentIndex] || filteredItems[0];

  return (
    <section id="proof-gallery" className="relative py-24 bg-[#0a0a0c] border-t border-white/10 overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[350px] bg-[#d4a853]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <Badge variant="gold" className="mb-4">
            <Sparkles className="w-3.5 h-3.5 mr-1.5 text-[#d4a853]" />
            On-Ground Event Gallery
          </Badge>

          <h2 className="text-heading font-black text-white mb-4">
            Proof of Impact Gallery <br />
            <ShinyText text="Packed REC Auditoriums & Stage Moments" speed={4} />
          </h2>

          <p className="text-subheading text-zinc-400 max-w-xl mb-8">
            High-resolution photographic proof from our **Startup Starter Summit** & **DEVS REC IoT Workshop** at Rajalakshmi Engineering College (REC).
          </p>

          {/* Category Filter Pills & View Mode Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => {
                  setSelectedCategory(cat.value);
                  setCurrentIndex(0);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedCategory === cat.value
                    ? "bg-[#d4a853] text-black font-bold shadow-lg shadow-[#d4a853]/25"
                    : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                <span>{cat.label}</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-black/40">
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 mt-2">
            <button
              onClick={() => setViewMode("carousel")}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                viewMode === "carousel"
                  ? "bg-white/15 text-white border border-[#d4a853]"
                  : "bg-white/5 text-zinc-400 hover:text-white"
              }`}
            >
              <Camera className="w-3.5 h-3.5 text-[#d4a853]" />
              Spotlight Carousel
            </button>
            <button
              onClick={() => setViewMode("masonry")}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                viewMode === "masonry"
                  ? "bg-white/15 text-white border border-[#d4a853]"
                  : "bg-white/5 text-zinc-400 hover:text-white"
              }`}
            >
              <Grid className="w-3.5 h-3.5 text-[#d4a853]" />
              Full Masonry Wall ({filteredItems.length})
            </button>
          </div>
        </div>

        {/* View Mode 1: Spotlight Carousel */}
        {viewMode === "carousel" && filteredItems.length > 0 && activeItem && (
          <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-white/[0.04] to-black/80 p-3 sm:p-4 shadow-2xl mb-12">
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-black group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeItem.id}
                  src={activeItem.imageUrl}
                  alt={activeItem.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to direct thumbnail proxy or fallback photo if blocked
                    if (!e.currentTarget.src.includes("unsplash")) {
                      e.currentTarget.src = FALLBACK_EVENT_IMAGE;
                    }
                  }}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent flex flex-col justify-between p-6 sm:p-8">
                {/* Top Info Tags */}
                <div className="flex items-center justify-between">
                  <Badge variant="gold" className="text-xs">
                    {activeItem.highlightBadge}
                  </Badge>

                  <div className="flex items-center gap-2">
                    {activeItem.driveUrl && (
                      <a
                        href={activeItem.driveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-black/60 hover:bg-[#d4a853] text-white hover:text-black backdrop-blur-md border border-white/10 transition-all cursor-pointer inline-flex items-center gap-1 text-xs font-mono"
                        title="View Full Resolution in Google Drive"
                      >
                        <span>Drive Master</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}

                    <button
                      onClick={() => setLightboxImage(activeItem)}
                      className="p-2 rounded-xl bg-black/60 hover:bg-[#d4a853] text-white hover:text-black backdrop-blur-md border border-white/10 transition-all cursor-pointer"
                      title="Expand Fullscreen"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Bottom Event Meta */}
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-300">
                    <span className="flex items-center gap-1 text-[#d4a853]">
                      <MapPin className="w-3.5 h-3.5" />
                      {activeItem.institutionName}, {activeItem.location}
                    </span>
                    <span className="flex items-center gap-1 text-zinc-400">
                      <Users className="w-3.5 h-3.5" />
                      {activeItem.attendeesCount}
                    </span>
                    <span className="flex items-center gap-1 text-zinc-400">
                      <Calendar className="w-3.5 h-3.5" />
                      {activeItem.date}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                    {activeItem.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl leading-relaxed">
                    {activeItem.description}
                  </p>
                </div>
              </div>

              {/* Left / Right Carousel Navigation Controls */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-[#d4a853] text-white hover:text-black border border-white/15 flex items-center justify-center backdrop-blur-md transition-all cursor-pointer z-20"
                title="Previous Image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-[#d4a853] text-white hover:text-black border border-white/15 flex items-center justify-center backdrop-blur-md transition-all cursor-pointer z-20"
                title="Next Image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Thumbnail Strip */}
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-1.5 sm:gap-2 mt-3 overflow-x-auto pb-1">
              {filteredItems.map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer border-2 transition-all shrink-0 ${
                    idx === currentIndex
                      ? "border-[#d4a853] shadow-md shadow-[#d4a853]/30 scale-105"
                      : "border-white/10 opacity-50 hover:opacity-100"
                  }`}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      if (!e.currentTarget.src.includes("unsplash")) {
                        e.currentTarget.src = FALLBACK_EVENT_IMAGE;
                      }
                    }}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* View Mode 2: Full Masonry Grid */}
        {viewMode === "masonry" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] hover:border-[#d4a853]/50 group relative transition-all duration-300 hover:shadow-xl hover:shadow-[#d4a853]/10"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      if (!e.currentTarget.src.includes("unsplash")) {
                        e.currentTarget.src = FALLBACK_EVENT_IMAGE;
                      }
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                    <button
                      onClick={() => setLightboxImage(item)}
                      className="p-2 rounded-lg bg-[#d4a853] text-black font-bold text-xs flex items-center gap-1 cursor-pointer"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Zoom</span>
                    </button>
                    {item.driveUrl && (
                      <a
                        href={item.driveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-black/70 text-white hover:text-[#d4a853] text-xs font-mono flex items-center gap-1"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Drive</span>
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-4">
                  <Badge variant="gold" className="text-[9px] mb-2">
                    {item.highlightBadge}
                  </Badge>
                  <h4 className="text-sm font-bold text-white mb-1 line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-400 line-clamp-2 mb-2">
                    {item.description}
                  </p>
                  <span className="text-[10px] text-zinc-500 font-mono">
                    {item.institutionName}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <Dialog open={!!lightboxImage} onOpenChange={(open) => !open && setLightboxImage(null)}>
        {lightboxImage && (
          <DialogContent className="max-w-4xl bg-[#0a0a0e] border-white/20 p-2">
            <div className="relative rounded-2xl overflow-hidden bg-black aspect-[16/9] w-full">
              <img
                src={lightboxImage.imageUrl}
                alt={lightboxImage.title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  if (!e.currentTarget.src.includes("unsplash")) {
                    e.currentTarget.src = FALLBACK_EVENT_IMAGE;
                  }
                }}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 inset-x-0 bg-black/85 backdrop-blur-md p-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{lightboxImage.title}</h4>
                  <p className="text-xs text-zinc-400 font-mono">
                    {lightboxImage.institutionName} • {lightboxImage.attendeesCount} • {lightboxImage.date}
                  </p>
                </div>

                {lightboxImage.driveUrl && (
                  <a
                    href={lightboxImage.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#d4a853] text-black font-bold text-xs font-mono hover:scale-105 transition-transform"
                  >
                    <span>Open Master HD</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}

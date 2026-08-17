"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, ShieldCheck, Eye, Sparkles, Quote, ExternalLink, FileText } from "lucide-react";
import { EXTRACTED_FEEDBACK_ITEMS, ExtractedFeedbackItem } from "@/lib/impactData";
import { Marquee } from "@/components/ui/Marquee";
import { Badge } from "@/components/ui/badge";
import { ShinyText } from "@/components/ui/ShinyText";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function ImpactMarquee() {
  const [selectedFeedback, setSelectedFeedback] = useState<ExtractedFeedbackItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Career Catalyst", "Placement", "Tech Workshop", "Mentorship"];

  const filteredItems =
    activeCategory === "All"
      ? EXTRACTED_FEEDBACK_ITEMS
      : EXTRACTED_FEEDBACK_ITEMS.filter((item) => item.category === activeCategory);

  const half = Math.ceil(filteredItems.length / 2);
  const firstRow = filteredItems.slice(0, Math.max(half, 2));
  const secondRow = filteredItems.slice(Math.max(half, 2)).length > 0 ? filteredItems.slice(Math.max(half, 2)) : filteredItems;

  return (
    <section id="student-feedback" className="relative py-24 bg-[#0a0a0c] overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#d4a853]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#10b981]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <Badge variant="gold" className="mb-4">
            <Sparkles className="w-3.5 h-3.5 mr-1.5 text-[#d4a853]" />
            Unfiltered Student Voices
          </Badge>

          <h2 className="text-heading font-black text-white mb-4">
            From Students&apos; Hearts <br />
            <ShinyText text="With Zero Filter Or Script" speed={4} />
          </h2>

          <p className="text-subheading text-zinc-400 max-w-xl mb-8">
            Extracts directly transcribed from handwritten student feedback forms, post-workshop feedback sheets, and WhatsApp voice messages.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#d4a853] text-black font-bold shadow-lg shadow-[#d4a853]/25"
                    : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Infinite Moving Marquees */}
      <div className="space-y-6">
        {/* Row 1 - Left Direction */}
        <Marquee pauseOnHover duration={45} repeat={3}>
          {firstRow.map((item) => (
            <FeedbackCard
              key={item.id}
              item={item}
              onOpenModal={() => setSelectedFeedback(item)}
            />
          ))}
        </Marquee>

        {/* Row 2 - Reverse Right Direction */}
        <Marquee reverse pauseOnHover duration={50} repeat={3}>
          {secondRow.map((item) => (
            <FeedbackCard
              key={item.id + "-rev"}
              item={item}
              onOpenModal={() => setSelectedFeedback(item)}
            />
          ))}
        </Marquee>
      </div>

      {/* Trust Callout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center">
        <p className="text-xs text-zinc-500 font-mono inline-flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#10b981]" />
          <span>Click on any testimonial card above to view the original unedited proof scan.</span>
        </p>
      </div>

      {/* Raw Proof Modal */}
      <Dialog open={!!selectedFeedback} onOpenChange={(open) => !open && setSelectedFeedback(null)}>
        {selectedFeedback && (
          <DialogContent className="max-w-2xl bg-[#0e0e12] border-white/15">
            <DialogHeader>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="emerald" className="text-[10px]">
                  <ShieldCheck className="w-3 h-3 mr-1" />
                  Verified Student Proof
                </Badge>
                <span className="text-[10px] font-mono text-zinc-400">
                  Date: {selectedFeedback.feedbackDate}
                </span>
              </div>
              <DialogTitle className="text-xl font-black text-white">
                {selectedFeedback.studentName}
              </DialogTitle>
              <DialogDescription className="text-xs text-[#d4a853]">
                {selectedFeedback.courseOrRole} • {selectedFeedback.college}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 pt-2">
              {/* Full Extracted Quote */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 relative">
                <Quote className="w-8 h-8 text-[#d4a853]/20 absolute top-3 right-3 pointer-events-none" />
                <p className="text-sm text-zinc-200 leading-relaxed italic pr-8">
                  &ldquo;{selectedFeedback.quoteText}&rdquo;
                </p>
              </div>

              {/* Raw Image Proof / Handwritten Scan */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#d4a853]" />
                    Original Unedited Proof Scan
                  </span>
                  <span className="text-[10px] text-[#10b981]">100% Authentic Ground Capture</span>
                </div>
                <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-black max-h-72 group">
                  <img
                    src={selectedFeedback.rawProofImageUrl}
                    alt={`${selectedFeedback.studentName} Proof`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                    <span className="text-[11px] font-mono text-zinc-300">
                      Captured during {selectedFeedback.category} session at {selectedFeedback.college}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}

function FeedbackCard({
  item,
  onOpenModal,
}: {
  item: ExtractedFeedbackItem;
  onOpenModal: () => void;
}) {
  return (
    <div
      onClick={onOpenModal}
      className="w-[340px] sm:w-[400px] p-5 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-[#d4a853]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#d4a853]/10 cursor-pointer flex flex-col justify-between group shrink-0 mx-2"
    >
      <div>
        {/* Rating & Tag */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            {[...Array(item.rating)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#d4a853] text-[#d4a853]" />
            ))}
          </div>
          <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#d4a853]/15 text-[#d4a853] border border-[#d4a853]/30">
            {item.badge}
          </span>
        </div>

        {/* Quote text snippet */}
        <p className="text-xs text-zinc-300 leading-relaxed italic mb-4 line-clamp-3">
          &ldquo;{item.quoteText}&rdquo;
        </p>
      </div>

      {/* Student Profile Row */}
      <div className="pt-3 border-t border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2.5 min-w-0">
          {/* Clean Student Initials Badge */}
          <div className="w-8 h-8 rounded-full bg-[#d4a853]/15 border border-[#d4a853]/40 text-[#d4a853] text-[11px] font-mono font-bold flex items-center justify-center shrink-0">
            {item.studentName
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()}
          </div>
          <div className="truncate">
            <h4 className="text-xs font-bold text-white group-hover:text-[#d4a853] transition-colors truncate">
              {item.studentName}
            </h4>
            <p className="text-[10px] text-zinc-400 font-mono truncate">
              {item.college}
            </p>
          </div>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenModal();
          }}
          className="p-1.5 rounded-lg bg-white/5 group-hover:bg-[#d4a853] text-zinc-400 group-hover:text-black transition-all shrink-0 ml-2"
          title="View Original Proof"
        >
          <Eye className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

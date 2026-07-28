"use client";

import React from "react";
import { Star, Quote, Sparkles, TrendingUp } from "lucide-react";
import { INITIAL_TESTIMONIALS } from "@/lib/adminStore";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-28 bg-[#09090b] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4a853]/10 border border-[#d4a853]/30 text-[#d4a853] text-xs font-mono mb-4 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Executive Social Proof
          </div>
          <h2 className="text-heading font-extrabold text-white mb-4">
            Trusted by Founder & Enterprise <br />
            <span className="gold-gradient-text">Leaders Worldwide</span>
          </h2>
          <p className="text-subheading text-zinc-400 max-w-2xl">
            Hear directly from business executives who scaled their operations, elevated their brand prestige, and unlocked high ROI with JM Creations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INITIAL_TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-3xl glass-card border border-white/10 hover:border-[#d4a853]/40 flex flex-col justify-between relative group"
            >
              <Quote className="w-10 h-10 text-[#d4a853]/20 absolute top-6 right-6 pointer-events-none group-hover:text-[#d4a853]/40 transition-colors" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#d4a853] text-[#d4a853]" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-xs text-zinc-300 leading-relaxed italic mb-6">
                  "{t.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border border-[#d4a853]/40"
                />
                <div>
                  <h4 className="text-xs font-bold text-white">{t.name}</h4>
                  <p className="text-[10px] text-zinc-400 font-mono">{t.role}, {t.company}</p>
                  <span className="text-[10px] font-semibold text-[#d4a853] flex items-center gap-1 pt-0.5">
                    <TrendingUp className="w-3 h-3" /> {t.metric}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

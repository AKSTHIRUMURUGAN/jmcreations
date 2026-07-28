"use client";

import React from "react";
import { Star, Quote, Award } from "lucide-react";
import { INITIAL_TESTIMONIALS } from "@/lib/adminStore";
import { ShinyText } from "@/components/ui/ShinyText";
import { TiltCard } from "@/components/ui/TiltCard";
import { Badge } from "@/components/ui/badge";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-28 bg-[#08080a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <Badge variant="gold" className="mb-4">
            <Award className="w-3.5 h-3.5 mr-1.5 text-[#d4a853]" />
            Client Reviews & Trust
          </Badge>

          <h2 className="text-heading font-extrabold text-white mb-4">
            Trusted by Business Leaders <br />
            <ShinyText text="& Scaling Startups" speed={4} />
          </h2>
          <p className="text-subheading text-zinc-400 max-w-xl">
            Hear directly from executives and entrepreneurs who rely on JM Creations for their business strategy, tech infrastructure, and performance growth.
          </p>
        </div>

        {/* Testimonials Grid with 3D TiltCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INITIAL_TESTIMONIALS.map((item) => (
            <TiltCard key={item.id} className="h-full flex flex-col justify-between group">
              <div>
                {/* Header Row: Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#d4a853] text-[#d4a853]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#d4a853]/30 group-hover:text-[#d4a853]/60 transition-colors" />
                </div>

                {/* Review Quote */}
                <p className="text-xs text-zinc-300 leading-relaxed italic mb-6">
                  "{item.comment}"
                </p>
              </div>

              {/* Author & Result */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4a853] to-[#a87f32] p-[1px]">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white group-hover:text-[#d4a853] transition-colors">
                      {item.name}
                    </h4>
                    <span className="text-[10px] text-zinc-500 font-mono">
                      {item.role}, {item.company}
                    </span>
                  </div>
                </div>

                <Badge variant="emerald">{item.metric}</Badge>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

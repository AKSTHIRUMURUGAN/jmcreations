"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowUpRight, TrendingUp, Layers, CheckCircle2 } from "lucide-react";
import { INITIAL_PORTFOLIO, PortfolioItem } from "@/lib/adminStore";

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const filters = ["All", "Branding & Web", "Digital Marketing", "Events & Media"];

  const filteredPortfolio = INITIAL_PORTFOLIO.filter((item) => {
    return activeFilter === "All" || item.category === activeFilter;
  });

  return (
    <section id="portfolio" className="relative py-28 bg-[#070709] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4a853]/10 border border-[#d4a853]/30 text-[#d4a853] text-xs font-mono mb-4 uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            Curated Case Studies & Impact
          </div>
          <h2 className="text-heading font-extrabold text-white mb-4">
            Proven Growth & <br />
            <span className="gold-gradient-text">High-Impact Deliverables</span>
          </h2>
          <p className="text-subheading text-zinc-400 max-w-2xl">
            Explore how we empower brands to achieve measurable revenue expansion, high brand prestige, and seamless digital infrastructure.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-xl text-xs font-medium transition-all ${
                activeFilter === filter
                  ? "bg-[#d4a853] text-black font-bold shadow-lg shadow-[#d4a853]/20"
                  : "bg-white/[0.03] text-zinc-400 border border-white/10 hover:text-white hover:bg-white/5"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPortfolio.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="group relative rounded-3xl glass-card overflow-hidden border border-white/10 hover:border-[#d4a853]/50 flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div className="relative h-60 w-full overflow-hidden bg-black">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d10] via-transparent to-transparent" />
                
                {/* Metric Overlay Badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-[#d4a853]/40 text-[#d4a853] text-xs font-mono font-bold flex items-center gap-1.5 shadow-lg">
                  <TrendingUp className="w-3.5 h-3.5 text-[#d4a853]" />
                  <span>{item.metrics}</span>
                </div>
              </div>

              {/* Text Description */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                    {item.client}
                  </span>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#d4a853] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Tags & Action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {item.tags.map((t, idx) => (
                      <span key={idx} className="text-[9px] px-2 py-0.5 rounded bg-white/5 text-zinc-400">
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(item)}
                    className="p-2 rounded-xl bg-white/5 hover:bg-[#d4a853] text-zinc-300 hover:text-black transition-all"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

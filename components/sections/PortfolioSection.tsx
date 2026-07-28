"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, ExternalLink, TrendingUp } from "lucide-react";
import { INITIAL_PORTFOLIO } from "@/lib/adminStore";
import { ShinyText } from "@/components/ui/ShinyText";
import { TiltCard } from "@/components/ui/TiltCard";
import { Badge } from "@/components/ui/badge";
import { DecryptedText } from "@/components/ui/DecryptedText";

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Web App",
    "Performance Marketing",
    "Branding",
    "Media Production",
  ];

  const filteredPortfolio = INITIAL_PORTFOLIO.filter((item) => {
    return activeCategory === "All" || item.category === activeCategory;
  });

  return (
    <section id="portfolio" className="relative py-28 bg-[#09090b] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <Badge variant="gold" className="mb-4">
            <FolderGit2 className="w-3.5 h-3.5 mr-1.5 text-[#d4a853]" />
            Case Studies & Real Work
          </Badge>

          <h2 className="text-heading font-extrabold text-white mb-4">
            Proven Client Results & <br />
            <ShinyText text="High-Impact Deliverables" speed={4} />
          </h2>
          <p className="text-subheading text-zinc-400 max-w-2xl">
            Explore how we've helped startups and established enterprises design luxury web apps, scale Meta & Google Ads ROI, and refine their brand presence.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#d4a853] text-black font-bold shadow-lg shadow-[#d4a853]/20"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Case Studies Grid with 3D TiltCard & DecryptedText */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredPortfolio.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <TiltCard className="h-full flex flex-col justify-between group overflow-hidden">
                  <div>
                    {/* Image Preview Container */}
                    <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-5 border border-white/10">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      <div className="absolute top-3 right-3">
                        <Badge variant="gold">
                          <DecryptedText text={item.metrics} speed={25} />
                        </Badge>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
                      {item.category} • {item.client}
                    </span>

                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#d4a853] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Outcome Highlight */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono font-bold">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>Verified Growth Outcome</span>
                    </div>

                    <a
                      href="#contact"
                      className="p-2 rounded-xl bg-white/5 hover:bg-[#d4a853] text-zinc-400 hover:text-black transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

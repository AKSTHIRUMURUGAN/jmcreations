"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, MessageCircle, Play, ArrowUpRight, Sparkles, ExternalLink, Globe } from "lucide-react";
import { InstagramIcon, YoutubeIcon } from "@/components/shared/SocialIcons";
import { INSTAGRAM_WORKS, InstagramWorkItem } from "@/lib/impactData";
import { Badge } from "@/components/ui/badge";
import { ShinyText } from "@/components/ui/ShinyText";

export default function InstagramWorksGrid() {
  const [selectedPlatform, setSelectedPlatform] = useState<string>("All");

  const filterTabs = [
    { label: "All Client Works", value: "All", count: INSTAGRAM_WORKS.length },
    {
      label: "Instagram Clients",
      value: "Instagram",
      count: INSTAGRAM_WORKS.filter((w) => w.platform === "Instagram").length,
    },
    {
      label: "YouTube Channels",
      value: "YouTube",
      count: INSTAGRAM_WORKS.filter((w) => w.platform === "YouTube").length,
    },
  ];

  const filteredWorks =
    selectedPlatform === "All"
      ? INSTAGRAM_WORKS
      : INSTAGRAM_WORKS.filter((w) => w.platform === selectedPlatform);

  return (
    <section id="client-portfolio" className="relative py-24 bg-[#08080a] border-t border-white/10 overflow-hidden">
      {/* Background Gradient Glows */}
      <div className="absolute bottom-0 right-10 w-[600px] h-[350px] bg-gradient-to-t from-[#e1306c]/10 via-[#ff0000]/5 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-[400px] h-[300px] bg-[#d4a853]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <Badge variant="gold" className="mb-4">
            <Sparkles className="w-3.5 h-3.5 mr-1.5 text-[#d4a853]" />
            Client Portfolio & Production Channels
          </Badge>

          <h2 className="text-heading font-black text-white mb-4">
            Professional Media & Creator Works <br />
            <ShinyText text="Scaling High-Performance Brands & Channels" speed={4} />
          </h2>

          <p className="text-subheading text-zinc-400 max-w-xl mb-8">
            From fitness personal branding and corporate export identities to viral YouTube entertainment and tech channels. Explore our live client productions and channels below.
          </p>

          {/* Platform Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setSelectedPlatform(tab.value)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                  selectedPlatform === tab.value
                    ? "bg-[#d4a853] text-black font-bold shadow-lg shadow-[#d4a853]/25"
                    : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                <span>{tab.label}</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-black/40">
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Client Works & Media Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.map((work, idx) => (
            <motion.a
              key={work.id}
              href={work.postUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group rounded-3xl overflow-hidden bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-[#d4a853]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#d4a853]/15 flex flex-col justify-between"
            >
              {/* Media Thumbnail Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                <img
                  src={work.imageUrl}
                  alt={work.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Top Badge Overlay */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/15">
                    {work.badge || work.category}
                  </span>

                  {work.platform === "YouTube" ? (
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#ff0000] text-white text-[10px] font-bold shadow-lg shadow-[#ff0000]/40">
                      <YoutubeIcon className="w-3 h-3 fill-white" />
                      <span>YouTube</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white text-[10px] font-bold shadow-lg shadow-[#e1306c]/40">
                      <InstagramIcon className="w-3 h-3" />
                      <span>Instagram</span>
                    </div>
                  )}
                </div>

                {/* Hover Gradient Overlay with Stats */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <div className="flex items-center justify-between text-white text-xs font-mono mb-2">
                    <span className="flex items-center gap-1.5">
                      <Heart className="w-4 h-4 fill-[#d4a853] text-[#d4a853]" />
                      {work.likes} Likes
                    </span>
                    {work.views && (
                      <span className="flex items-center gap-1.5 text-[#d4a853]">
                        <Play className="w-3.5 h-3.5 fill-current" />
                        {work.views} Views
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] font-mono text-[#d4a853] flex items-center gap-1 font-bold">
                    <span>
                      {work.platform === "YouTube" ? "Open YouTube Channel" : "View Profile on Instagram"}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Card Caption & Meta */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-sm font-bold text-white mb-2 leading-snug group-hover:text-[#d4a853] transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 mb-4">
                    {work.caption}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                  <span className="text-zinc-500 font-mono">{work.date}</span>
                  <span
                    className={`font-semibold flex items-center gap-1 ${
                      work.platform === "YouTube" ? "text-[#ff4d4d]" : "text-[#e1306c]"
                    }`}
                  >
                    {work.platform === "YouTube" ? (
                      <YoutubeIcon className="w-3.5 h-3.5 fill-current" />
                    ) : (
                      <InstagramIcon className="w-3.5 h-3.5" />
                    )}
                    {work.handle}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

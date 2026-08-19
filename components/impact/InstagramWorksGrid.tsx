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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredWorks.map((work, idx) => (
            <motion.a
              key={work.id}
              href={work.postUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group rounded-3xl bg-gradient-to-b from-white/[0.06] via-white/[0.03] to-black/80 border border-white/10 hover:border-[#d4a853]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#d4a853]/15 flex flex-col justify-between p-6"
            >
              {/* Top: Creator / Brand Profile Header */}
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-black border border-[#d4a853]/40 p-1 flex items-center justify-center shrink-0 overflow-hidden shadow-md group-hover:scale-105 transition-transform">
                      {work.authorAvatar ? (
                        <img
                          src={work.authorAvatar}
                          alt={work.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover rounded-xl"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                            const fallback = e.currentTarget.parentElement?.querySelector(".avatar-fallback");
                            if (fallback) (fallback as HTMLElement).style.display = "flex";
                          }}
                        />
                      ) : null}
                      <div
                        className={`avatar-fallback w-full h-full rounded-xl bg-gradient-to-br from-[#d4a853] to-[#a17826] text-black font-black text-xs flex items-center justify-center font-mono ${
                          work.authorAvatar ? "hidden" : "flex"
                        }`}
                      >
                        {work.handle
                          ?.replace("@", "")
                          .split("_")
                          .map((n) => n[0])
                          .filter(Boolean)
                          .slice(0, 2)
                          .join("")
                          .toUpperCase() || "JM"}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-bold text-white group-hover:text-[#d4a853] transition-colors">
                          {work.handle}
                        </span>
                        {work.platform === "YouTube" ? (
                          <div className="w-4 h-4 rounded-full bg-[#ff0000] text-white flex items-center justify-center text-[9px] font-bold shrink-0">
                            ▶
                          </div>
                        ) : (
                          <div className="w-4 h-4 rounded-full bg-[#e1306c] text-white flex items-center justify-center text-[9px] font-bold shrink-0">
                            ✓
                          </div>
                        )}
                      </div>
                      <span className="text-xs font-mono text-zinc-400">{work.badge || work.category}</span>
                    </div>
                  </div>

                  <div className="p-2 rounded-xl bg-white/5 group-hover:bg-[#d4a853] text-zinc-400 group-hover:text-black transition-all">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Card Title & Content */}
                <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-[#d4a853] transition-colors">
                  {work.title}
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed mb-5">
                  {work.caption}
                </p>

                {/* Social Metrics Pills */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">
                    <Heart className="w-3.5 h-3.5 fill-[#d4a853] text-[#d4a853]" />
                    <span>{work.likes} Likes</span>
                  </span>
                  {work.views && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">
                      <Play className="w-3.5 h-3.5 fill-[#d4a853] text-[#d4a853]" />
                      <span>{work.views} Views</span>
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-400">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{work.comments} Comments</span>
                  </span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-500">{work.date}</span>
                <span
                  className={`font-semibold flex items-center gap-1.5 group-hover:underline ${
                    work.platform === "YouTube" ? "text-[#ff4d4d]" : "text-[#e1306c]"
                  }`}
                >
                  {work.platform === "YouTube" ? (
                    <>
                      <YoutubeIcon className="w-4 h-4 fill-current" />
                      <span>Open Channel</span>
                    </>
                  ) : (
                    <>
                      <InstagramIcon className="w-4 h-4" />
                      <span>Open Profile</span>
                    </>
                  )}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { ThumbsUp, MessageSquare, ExternalLink, ArrowUpRight, Sparkles, Share2 } from "lucide-react";
import { LinkedinIcon } from "@/components/shared/SocialIcons";
import { LINKEDIN_IMPACT_POSTS, LinkedInPostItem } from "@/lib/impactData";
import { Badge } from "@/components/ui/badge";
import { ShinyText } from "@/components/ui/ShinyText";

export default function LinkedInImpactGrid() {
  const [selectedTab, setSelectedTab] = React.useState<string>("All");

  const tabs = [
    { label: "All Posts", count: LINKEDIN_IMPACT_POSTS.length },
    {
      label: "Startup Starter Event",
      count: LINKEDIN_IMPACT_POSTS.filter((p) => p.eventCategory === "Startup Starter Event").length,
    },
    {
      label: "IoT & Embedded Workshop",
      count: LINKEDIN_IMPACT_POSTS.filter((p) => p.eventCategory === "IoT & Embedded Workshop").length,
    },
  ];

  const filteredPosts =
    selectedTab === "All"
      ? LINKEDIN_IMPACT_POSTS
      : LINKEDIN_IMPACT_POSTS.filter((p) => p.eventCategory === selectedTab);

  return (
    <section className="relative py-24 bg-[#0a0a0c] border-t border-white/10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0077b5]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <Badge variant="gold" className="mb-4">
            <LinkedinIcon className="w-3.5 h-3.5 mr-1.5 fill-current" />
            Verified Professional Network
          </Badge>

          <h2 className="text-heading font-black text-white mb-4">
            Real LinkedIn Milestones <br />
            <ShinyText text="& Public Student Endorsements" speed={4} />
          </h2>

          <p className="text-subheading text-zinc-400 max-w-xl mb-8">
            Every session, student achievement, and placement milestone is documented publicly on LinkedIn. Click any post below to view and engage directly on LinkedIn.
          </p>

          {/* Event Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.label}
                onClick={() => setSelectedTab(tab.label === "All Posts" ? "All" : tab.label)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                  (selectedTab === "All" && tab.label === "All Posts") || selectedTab === tab.label
                    ? "bg-[#0077b5] text-white font-bold shadow-lg shadow-[#0077b5]/30"
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

        {/* LinkedIn Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, idx) => (
            <motion.a
              key={post.id}
              href={post.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="block rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-[#0077b5]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#0077b5]/15 group relative overflow-hidden"
            >
              {/* Card Header: Author Profile */}
              <div className="p-6 pb-4 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-black border border-[#d4a853]/40 p-0.5 flex items-center justify-center shrink-0 overflow-hidden shadow-md">
                    {post.authorAvatar ? (
                      <img
                        src={post.authorAvatar}
                        alt={post.authorName}
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
                      className={`avatar-fallback w-full h-full rounded-xl bg-gradient-to-br from-[#d4a853] to-[#a17826] text-black font-black text-sm flex items-center justify-center font-mono ${
                        post.authorAvatar ? "hidden" : "flex"
                      }`}
                    >
                      {post.authorName
                        .split(" ")
                        .map((n) => n[0])
                        .filter(Boolean)
                        .slice(0, 2)
                        .join("")
                        .toUpperCase()}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-white group-hover:text-[#0077b5] transition-colors">
                        {post.authorName}
                      </h4>
                      <div className="w-4 h-4 rounded-full bg-[#0077b5] text-white flex items-center justify-center text-[9px] font-bold shrink-0">
                        in
                      </div>
                    </div>
                    <p className="text-[11px] text-zinc-400 line-clamp-1">{post.authorRole}</p>
                    <span className="text-[10px] text-zinc-500 font-mono">{post.date}</span>
                  </div>
                </div>

                <div className="p-2 rounded-xl bg-white/5 group-hover:bg-[#0077b5] text-zinc-400 group-hover:text-white transition-all">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Post Body: Headline & Excerpt */}
              <div className="px-6 pb-4">
                <h3 className="text-sm sm:text-base font-bold text-white mb-2 leading-snug group-hover:text-zinc-100">
                  {post.postHeadline}
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed line-clamp-3 mb-3">
                  {post.postExcerpt}
                </p>

                {/* Hashtags */}
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono text-[#0077b5] hover:underline"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Post Thumbnail / Visual Proof */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/60 border-y border-white/10">
                <img
                  src={post.imageProof}
                  alt={post.postHeadline}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-between p-4">
                  <span className="text-[10px] font-mono text-zinc-300 bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-md">
                    Click to view original LinkedIn post
                  </span>
                </div>
              </div>

              {/* Card Footer: Engagement Reactions */}
              <div className="px-6 py-4 flex items-center justify-between text-xs text-zinc-400 font-mono bg-black/30">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 text-zinc-300">
                    <ThumbsUp className="w-3.5 h-3.5 text-[#0077b5]" />
                    {post.likesCount} Reactions
                  </span>
                  <span className="flex items-center gap-1.5 text-zinc-400">
                    <MessageSquare className="w-3.5 h-3.5" />
                    {post.commentsCount} Comments
                  </span>
                </div>

                <span className="text-[10px] text-[#d4a853] font-semibold flex items-center gap-1">
                  <span>Open on LinkedIn</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

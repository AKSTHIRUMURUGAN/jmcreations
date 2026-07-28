"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Clock, ArrowRight, X, Sparkles } from "lucide-react";
import { INITIAL_BLOGS, BlogPost } from "@/lib/adminStore";

export default function BlogSection() {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="relative py-28 bg-[#08080a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4a853]/10 border border-[#d4a853]/30 text-[#d4a853] text-xs font-mono mb-4 uppercase tracking-widest">
            <FileText className="w-3.5 h-3.5" />
            Insights & Strategy Journal
          </div>
          <h2 className="text-heading font-extrabold text-white mb-4">
            Thought Leadership for <br />
            <span className="gold-gradient-text">Modern Founders & Marketers</span>
          </h2>
          <p className="text-subheading text-zinc-400 max-w-2xl">
            Stay ahead of digital trends with our strategic insights on branding, performance advertising, SEO, and business architecture.
          </p>
        </div>

        {/* Blog Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INITIAL_BLOGS.map((blog) => (
            <div
              key={blog.id}
              className="group rounded-3xl glass-card border border-white/10 overflow-hidden hover:border-[#d4a853]/40 flex flex-col justify-between"
            >
              <div className="relative h-56 w-full overflow-hidden bg-black">
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono text-[#d4a853] border border-white/10">
                  {blog.category}
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-3 text-[11px] text-zinc-500 font-mono mb-2">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[#d4a853]" /> {blog.readTime}</span>
                    <span>•</span>
                    <span>{blog.date}</span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#d4a853] transition-colors">
                    {blog.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {blog.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-zinc-400 font-mono">By {blog.author}</span>
                  <button
                    onClick={() => setSelectedBlog(blog)}
                    className="text-xs font-semibold text-[#d4a853] hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Detail Reader Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="w-full max-w-2xl bg-[#0d0d11] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-xs font-mono text-[#d4a853] uppercase">{selectedBlog.category} • {selectedBlog.readTime}</span>
              <h2 className="text-xl font-black text-white mt-1 mb-4">{selectedBlog.title}</h2>
              <div className="text-xs text-zinc-500 font-mono mb-6 pb-4 border-b border-white/10">
                Published {selectedBlog.date} by {selectedBlog.author}
              </div>

              <div className="text-xs text-zinc-300 leading-relaxed space-y-4 font-sans">
                <p>{selectedBlog.content}</p>
                <p>
                  At JM Creations, our cross-functional team combines deep technical execution with creative mastery to ensure that every campaign and digital surface yields measurable enterprise value.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="px-5 py-2 rounded-xl font-bold text-xs bg-[#d4a853] text-black"
                >
                  Close Article
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

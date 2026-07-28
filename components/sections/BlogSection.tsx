"use client";

import React, { useState } from "react";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import { INITIAL_BLOGS, BlogPost } from "@/lib/adminStore";
import { ShinyText } from "@/components/ui/ShinyText";
import { TiltCard } from "@/components/ui/TiltCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SplitText } from "@/components/ui/SplitText";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function BlogSection() {
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="relative py-28 bg-[#060608] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <Badge variant="gold" className="mb-4">
            <BookOpen className="w-3.5 h-3.5 mr-1.5 text-[#d4a853]" />
            Insights & Business Growth Journal
          </Badge>

          <h2 className="text-heading font-extrabold text-white mb-4">
            Strategic Knowledge & <br />
            <ShinyText text="Market Insights" speed={4} />
          </h2>
          <div className="text-subheading text-zinc-400 max-w-xl">
            <SplitText text="Actionable strategies on Meta Ads scaling, Next.js web performance, brand positioning, and Indian MSME business compliance." />
          </div>
        </div>

        {/* Articles Grid with 3D TiltCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INITIAL_BLOGS.map((item) => (
            <TiltCard key={item.id} className="h-full flex flex-col justify-between group overflow-hidden">
              <div>
                {/* Cover Image */}
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 border border-white/10">
                  <img
                    src={item.coverImage}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="gold">{item.category}</Badge>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-[10px] font-mono text-zinc-500 mb-2">
                  <span>{item.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#d4a853]" /> {item.readTime}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#d4a853] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {item.summary}
                </p>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-zinc-400">By {item.author}</span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setSelectedArticle(item)}
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* Reader Modal using shadcn Dialog */}
      <Dialog open={!!selectedArticle} onOpenChange={(open) => !open && setSelectedArticle(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          {selectedArticle && (
            <>
              <DialogHeader>
                <Badge variant="gold" className="w-fit mb-2">{selectedArticle.category}</Badge>
                <DialogTitle className="text-xl">{selectedArticle.title}</DialogTitle>
                <div className="flex items-center gap-3 text-xs text-zinc-400 font-mono pt-1">
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>By {selectedArticle.author}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
              </DialogHeader>

              <div className="h-56 w-full rounded-2xl overflow-hidden border border-white/10 my-4">
                <img src={selectedArticle.coverImage} alt={selectedArticle.title} className="w-full h-full object-cover" />
              </div>

              <div className="text-xs text-zinc-300 leading-relaxed space-y-4 font-normal">
                <p className="font-semibold text-white text-sm">{selectedArticle.summary}</p>
                <p>{selectedArticle.content}</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

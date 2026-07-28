"use client";

import React, { useState } from "react";
import { Users, MapPin, Briefcase, Send, CheckCircle2, ArrowRight } from "lucide-react";
import { INITIAL_CAREERS, CareerItem, INITIAL_SETTINGS } from "@/lib/adminStore";
import { ShinyText } from "@/components/ui/ShinyText";
import { TiltCard } from "@/components/ui/TiltCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TypingText } from "@/components/ui/TypingText";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function CareersSection() {
  const [selectedJob, setSelectedJob] = useState<CareerItem | null>(null);
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [portfolioLink, setPortfolioLink] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedJob) return;

    setSubmitted(true);

    const formattedText = `Hello JM Creations HR,\n\nJob Application for: ${selectedJob.title}\nApplicant Name: ${applicantName}\nEmail: ${applicantEmail}\nPortfolio/Resume Link: ${portfolioLink}`;
    const waUrl = `https://wa.me/${INITIAL_SETTINGS.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(formattedText)}`;

    window.open(waUrl, "_blank");

    setTimeout(() => {
      setSubmitted(false);
      setSelectedJob(null);
      setApplicantName("");
      setApplicantEmail("");
      setPortfolioLink("");
    }, 3000);
  };

  return (
    <section id="careers" className="relative py-28 bg-[#08080a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <Badge variant="gold" className="mb-4">
            <Users className="w-3.5 h-3.5 mr-1.5 text-[#d4a853]" />
            Join Our High-Performance Team
          </Badge>

          <h2 className="text-heading font-extrabold text-white mb-4">
            Future Ready <br />
            <ShinyText text="Careers at JM Creations" speed={4} />
          </h2>
          <p className="text-subheading text-zinc-400 max-w-xl">
            <TypingText text="We are hiring ambitious Next.js developers, performance marketers, motion graphic artists, and business consultants." speed={30} />
          </p>
        </div>

        {/* Careers Grid with 3D TiltCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INITIAL_CAREERS.map((item) => (
            <TiltCard key={item.id} className="h-full flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="gold">{item.department}</Badge>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">{item.type}</span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#d4a853] transition-colors">
                  {item.title}
                </h3>

                <div className="flex items-center gap-3 text-[11px] font-mono text-zinc-400 mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#d4a853]" /> {item.location}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-3 h-3 text-[#d4a853]" /> Full-Time Scope
                  </span>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#d4a853]">Competitive Package</span>
                <Button
                  size="sm"
                  variant="gold"
                  onClick={() => setSelectedJob(item)}
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* Application Form Modal using shadcn Dialog */}
      <Dialog open={!!selectedJob} onOpenChange={(open) => !open && setSelectedJob(null)}>
        <DialogContent className="max-w-md">
          {selectedJob && (
            <>
              <DialogHeader>
                <Badge variant="gold" className="w-fit mb-1">{selectedJob.department}</Badge>
                <DialogTitle>Apply for {selectedJob.title}</DialogTitle>
              </DialogHeader>

              {submitted ? (
                <div className="py-8 flex flex-col items-center text-center">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mb-3 animate-bounce" />
                  <h4 className="text-base font-bold text-white">Application Dispatched!</h4>
                  <p className="text-xs text-zinc-400 pt-1">HR WhatsApp window launched for direct review.</p>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit} className="space-y-4 my-2">
                  <div>
                    <label className="text-xs text-zinc-400 block mb-1 font-mono">Full Name *</label>
                    <Input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="text-xs text-zinc-400 block mb-1 font-mono">Email Address *</label>
                    <Input
                      type="email"
                      required
                      placeholder="jane@domain.com"
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="text-xs text-zinc-400 block mb-1 font-mono">Portfolio / Resume URL *</label>
                    <Input
                      type="url"
                      required
                      placeholder="https://linkedin.com/in/username or https://github.com/..."
                      value={portfolioLink}
                      onChange={(e) => setPortfolioLink(e.target.value)}
                    />
                  </div>

                  <Button type="submit" variant="gold" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    <span>Submit Application via HR WhatsApp</span>
                  </Button>
                </form>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

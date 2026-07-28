"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, MapPin, Check, ArrowRight, X, Sparkles } from "lucide-react";
import { INITIAL_CAREERS, CareerItem } from "@/lib/adminStore";

export default function CareersSection() {
  const [selectedJob, setSelectedJob] = useState<CareerItem | null>(null);
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedJob(null);
      setApplicantName("");
      setApplicantEmail("");
    }, 2000);
  };

  return (
    <section id="careers" className="relative py-28 bg-[#0a0a0d] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4a853]/10 border border-[#d4a853]/30 text-[#d4a853] text-xs font-mono mb-4 uppercase tracking-widest">
            <Briefcase className="w-3.5 h-3.5" />
            Future Ready Careers
          </div>
          <h2 className="text-heading font-extrabold text-white mb-4">
            Build the Future of Business with <br />
            <span className="gold-gradient-text">JM Creations</span>
          </h2>
          <p className="text-subheading text-zinc-400 max-w-2xl">
            We are always seeking visionaries, senior developers, growth marketers, and creative directors to join our high-performing team.
          </p>
        </div>

        {/* Careers Open Positions List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {INITIAL_CAREERS.map((career) => (
            <div
              key={career.id}
              className="p-6 rounded-3xl glass-card border border-white/10 hover:border-[#d4a853]/40 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#d4a853]/15 text-[#d4a853] border border-[#d4a853]/30">
                    {career.department}
                  </span>
                  <span className="text-xs text-zinc-400 font-mono flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#d4a853]" /> {career.location}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2">{career.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">{career.description}</p>

                <div className="space-y-1.5 mb-6">
                  {career.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-[#d4a853] shrink-0" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedJob(career)}
                className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-[#d4a853] text-white hover:text-black font-semibold text-xs transition-all flex items-center justify-center gap-2 border border-white/10"
              >
                <span>Apply for this Role</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Application Form Modal */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="w-full max-w-md bg-[#0e0e12] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-[10px] font-mono text-[#d4a853] uppercase">{selectedJob.department}</span>
              <h3 className="text-lg font-extrabold text-white mb-4">Apply for {selectedJob.title}</h3>

              {submitted ? (
                <div className="py-8 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-white">Application Submitted!</h4>
                  <p className="text-xs text-zinc-400 pt-1">Our HR team will reach out shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs text-zinc-400 block mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      placeholder="Your Full Name"
                      className="w-full px-3.5 py-2 text-xs bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#d4a853]"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-zinc-400 block mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full px-3.5 py-2 text-xs bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#d4a853]"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-zinc-400 block mb-1">Portfolio / LinkedIn Link</label>
                    <input
                      type="url"
                      required
                      placeholder="https://..."
                      className="w-full px-3.5 py-2 text-xs bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#d4a853]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl font-bold text-xs bg-[#d4a853] text-black hover:bg-[#f0c36d] transition-all"
                  >
                    Submit Application
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight, MessageCircle, PhoneCall, GraduationCap } from "lucide-react";
import Link from "next/link";
import { INITIAL_SETTINGS } from "@/lib/adminStore";
import { ShinyText } from "@/components/ui/ShinyText";

export default function ImpactCTA() {
  return (
    <section className="relative py-24 bg-[#0a0a0c] border-t border-white/10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-t from-[#d4a853]/15 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-black/90 border border-[#d4a853]/40 p-8 sm:p-16 text-center shadow-2xl relative overflow-hidden">
          {/* Ambient Corner Flare */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#d4a853]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d4a853]/15 border border-[#d4a853]/30 text-[#d4a853] text-xs font-mono font-bold">
              <GraduationCap className="w-4 h-4" />
              <span>Ready For Real Campus Transformation?</span>
            </div>

            <h2 className="text-heading font-black text-white leading-tight">
              Bring JM Creations & Career Catalyst <br />
              <ShinyText text="To Your College Campus" speed={4} />
            </h2>

            <p className="text-subheading text-zinc-300 max-w-xl mx-auto leading-relaxed">
              Empower your students with hands-on coding, placement interview mastery, and real industry roadmaps. Zero boring theory, 100% practical results.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="px-8 py-4 rounded-full font-bold text-xs sm:text-sm text-black bg-gradient-to-r from-[#d4a853] via-[#f0c36d] to-[#d4a853] hover:shadow-2xl hover:shadow-[#d4a853]/30 transition-all flex items-center gap-2 group cursor-pointer"
              >
                <Sparkles className="w-4 h-4 fill-black" />
                <span>Book Campus Workshop / Meeting</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <a
                href={`https://wa.me/${INITIAL_SETTINGS.whatsappNumber.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-full font-bold text-xs sm:text-sm text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#25D366] transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Direct WhatsApp Chat</span>
              </a>

              <a
                href="https://drive.google.com/drive/folders/1sBBo06qIw-Ik3RWptjrs7Tu7GZ67LKI0"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-full font-mono text-xs sm:text-sm text-[#d4a853] hover:text-white bg-[#d4a853]/10 hover:bg-[#d4a853]/20 border border-[#d4a853]/30 transition-all flex items-center gap-2"
              >
                <span>Google Drive Portfolio</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <Link
                href="/catalyst"
                className="px-6 py-4 rounded-full font-mono text-xs sm:text-sm text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center gap-2"
              >
                <span>View 19 Modules</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

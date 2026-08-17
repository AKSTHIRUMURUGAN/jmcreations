"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, GraduationCap, TrendingUp, ShieldCheck } from "lucide-react";
import { IMPACT_STATS } from "@/lib/impactData";
import { CountUpNumber } from "@/components/ui/CountUpNumber";

const STAT_ICONS = [Users, GraduationCap, TrendingUp, ShieldCheck];

export default function ImpactStats() {
  return (
    <section className="relative py-16 bg-[#08080a] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {IMPACT_STATS.map((stat, idx) => {
            const Icon = STAT_ICONS[idx % STAT_ICONS.length];
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#d4a853]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#d4a853]/10"
              >
                {/* Background Hover Flare */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#d4a853]/10 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#d4a853] group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    Verified
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold text-white mb-2 flex items-baseline gap-1">
                  <CountUpNumber value={stat.value} duration={2200} />
                  <span className="text-[#d4a853] font-bold">{stat.suffix}</span>
                </div>

                <h3 className="text-sm font-bold text-white group-hover:text-[#d4a853] transition-colors mb-1">
                  {stat.label}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

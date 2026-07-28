"use client";

import React, { useState } from "react";
import { Calculator, Check, MessageSquare, Sparkles } from "lucide-react";
import { INITIAL_SETTINGS } from "@/lib/adminStore";
import { ShinyText } from "@/components/ui/ShinyText";
import { LottieArt } from "@/components/ui/LottieArt";

interface OptionItem {
  id: string;
  name: string;
  category: string;
  basePrice: number;
}

const CALCULATOR_OPTIONS: OptionItem[] = [
  { id: "o1", name: "Brand Identity & Logo Suite", category: "Branding", basePrice: 450 },
  { id: "o2", name: "Corporate Next.js Website", category: "Web Dev", basePrice: 1200 },
  { id: "o3", name: "E-Commerce Online Store", category: "Web Dev", basePrice: 1800 },
  { id: "o4", name: "Meta Ads Performance Setup (FB & Insta)", category: "Marketing", basePrice: 650 },
  { id: "o5", name: "Google PPC & Search Campaign", category: "Marketing", basePrice: 700 },
  { id: "o6", name: "Full SEO Strategy & Technical Audit", category: "SEO", basePrice: 600 },
  { id: "o7", name: "Commercial Video Editing & Motion Graphics", category: "Media", basePrice: 500 },
  { id: "o8", name: "Product Studio Photography (20 shots)", category: "Media", basePrice: 400 },
  { id: "o9", name: "WhatsApp Business API & Automation", category: "Automation", basePrice: 350 },
  { id: "o10", name: "Event Branding & Physical Signage Setup", category: "Events", basePrice: 900 },
];

export default function QuoteCalculator() {
  const [selectedIds, setSelectedIds] = useState<string[]>(["o2", "o4"]);
  const [clientName, setClientName] = useState("");
  const [timeline, setTimeline] = useState<"Urgent (1-2 wks)" | "Standard (3-4 wks)" | "Flexible">("Standard (3-4 wks)");

  const toggleOption = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const calculatedTotal = selectedIds.reduce((sum, id) => {
    const item = CALCULATOR_OPTIONS.find((o) => o.id === id);
    return sum + (item ? item.basePrice : 0);
  }, 0);

  const formattedWhatsAppPayload = () => {
    const selectedNames = CALCULATOR_OPTIONS.filter((o) => selectedIds.includes(o.id)).map((o) => o.name).join(", ");
    const text = `Hello JM Creations team, my name is ${clientName || "a potential client"}. I selected the following solutions:\n\nServices: ${selectedNames}\nTimeline: ${timeline}\nEstimated Investment: $${calculatedTotal} USD.\n\nPlease contact me for the formal proposal.`;
    return `https://wa.me/${INITIAL_SETTINGS.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="calculator" className="relative py-28 bg-[#0a0a0d] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Solution Selector */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4a853]/10 border border-[#d4a853]/30 text-[#d4a853] text-xs font-mono mb-4 w-fit uppercase">
              <Calculator className="w-3.5 h-3.5" />
              Interactive Solution Estimator
            </div>
            
            <h2 className="text-heading font-extrabold text-white mb-4">
              Build Your Custom <br />
              <ShinyText text="Business Package" speed={4} />
            </h2>
            <p className="text-xs text-zinc-400 mb-8">
              Select the business capabilities required for your growth goals. Receive an instant preliminary estimate and export directly to our strategy team.
            </p>

            {/* Options Checkboxes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {CALCULATOR_OPTIONS.map((opt) => {
                const isSelected = selectedIds.includes(opt.id);
                return (
                  <button
                    key={opt.id}
                    onClick={() => toggleOption(opt.id)}
                    className={`p-3.5 rounded-2xl border text-left flex items-start justify-between gap-3 transition-all ${
                      isSelected
                        ? "bg-[#d4a853]/10 border-[#d4a853] shadow-lg shadow-[#d4a853]/10"
                        : "bg-white/[0.03] border-white/10 hover:border-white/20"
                    }`}
                  >
                    <div>
                      <span className="text-[9px] font-mono text-zinc-400 uppercase">{opt.category}</span>
                      <h4 className="text-xs font-semibold text-white">{opt.name}</h4>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-lg border flex items-center justify-center shrink-0 ${
                        isSelected ? "bg-[#d4a853] border-[#d4a853] text-black" : "border-white/20"
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Calculated Quote Box with Lottie Art */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md p-6 sm:p-8 rounded-3xl glass-card border border-white/15 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <span className="text-xs font-mono text-[#d4a853] uppercase font-bold">ESTIMATE SUMMARY</span>
                <LottieArt type="growth" className="w-8 h-8" />
              </div>

              {/* Total Calculation Display */}
              <div className="py-6 flex flex-col items-center text-center">
                <span className="text-xs text-zinc-400">Estimated Project Package</span>
                <div className="text-4xl font-black text-white gold-gradient-text my-1">
                  ${calculatedTotal.toLocaleString()} <span className="text-sm font-normal text-zinc-400">USD</span>
                </div>
                <span className="text-[10px] text-zinc-500 font-mono">*Preliminary estimate based on standard scope</span>
              </div>

              {/* Form Input */}
              <div className="space-y-3 pb-6">
                <div>
                  <label className="text-[11px] text-zinc-400 block mb-1 font-mono">Your Name / Company</label>
                  <input
                    type="text"
                    placeholder="e.g. Apex Global"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#d4a853]"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-zinc-400 block mb-1 font-mono">Target Delivery Timeline</label>
                  <select
                    value={timeline}
                    onChange={(e: any) => setTimeline(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs bg-[#121216] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#d4a853]"
                  >
                    <option value="Urgent (1-2 wks)">Urgent (1-2 wks)</option>
                    <option value="Standard (3-4 wks)">Standard (3-4 wks)</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>
              </div>

              {/* Action Button */}
              <a
                href={formattedWhatsAppPayload()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-2xl font-bold text-xs text-black bg-gradient-to-r from-[#d4a853] via-[#f0c36d] to-[#d4a853] hover:from-[#f0c36d] hover:to-[#d4a853] transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#d4a853]/25"
              >
                <MessageSquare className="w-4 h-4 fill-black text-[#d4a853]" />
                <span>Send Estimate via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

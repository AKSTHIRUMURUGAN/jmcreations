"use client";

import React from "react";
import { MessageSquare, PhoneCall, Sparkles } from "lucide-react";
import { INITIAL_SETTINGS } from "@/lib/adminStore";

interface FloatingDockProps {
  onOpenQuote: () => void;
}

export default function FloatingDock({ onOpenQuote }: FloatingDockProps) {
  const whatsappUrl = `https://wa.me/${INITIAL_SETTINGS.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello JM Creations team, I would like to inquire about your business solutions.")}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Floating WhatsApp Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center gap-3 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs shadow-2xl shadow-emerald-900/50 transition-all hover:scale-105 border border-emerald-400/30"
        title="Chat on WhatsApp"
      >
        <span className="hidden md:inline font-sans text-xs">Chat on WhatsApp</span>
        <div className="relative">
          <MessageSquare className="w-5 h-5 fill-white text-emerald-600" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-300 rounded-full animate-ping" />
        </div>
      </a>

      {/* Click to Call Button */}
      <a
        href={`tel:${INITIAL_SETTINGS.whatsappNumber}`}
        className="flex items-center gap-3 px-4 py-3 rounded-full bg-[#16161a] hover:bg-[#222228] text-white font-medium text-xs shadow-2xl border border-white/10 hover:border-[#d4a853]/50 transition-all hover:scale-105"
        title="Click to Call"
      >
        <span className="hidden md:inline font-mono text-xs">{INITIAL_SETTINGS.phoneDisplay}</span>
        <PhoneCall className="w-4 h-4 text-[#d4a853]" />
      </a>

      {/* Floating Quick Quote Trigger */}
      <button
        onClick={onOpenQuote}
        className="hidden sm:flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-[#d4a853] via-[#f0c36d] to-[#d4a853] text-black font-semibold text-xs shadow-2xl shadow-[#d4a853]/30 hover:scale-105 transition-all"
      >
        <Sparkles className="w-4 h-4 text-black animate-spin" style={{ animationDuration: "6s" }} />
        <span>Quick Estimate</span>
      </button>
    </div>
  );
}

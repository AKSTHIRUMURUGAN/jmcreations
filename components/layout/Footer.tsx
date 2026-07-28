"use client";

import React from "react";
import { ArrowUp, Mail, Phone, MapPin, Sparkles } from "lucide-react";
import { INITIAL_SETTINGS } from "@/lib/adminStore";
import { InstagramIcon, LinkedinIcon, FacebookIcon } from "@/components/shared/SocialIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#060606] border-t border-white/10 pt-20 pb-12 overflow-hidden text-zinc-400">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-gradient-to-b from-[#d4a853]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d4a853] via-[#f0c36d] to-[#aa7f30] p-[1px]">
                <div className="w-full h-full bg-[#0a0a0a] rounded-[11px] flex items-center justify-center">
                  <span className="font-extrabold text-lg text-[#d4a853]">JM</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg text-white tracking-tight">JM CREATIONS</span>
                <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">End-to-End Business Solutions</span>
              </div>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed max-w-md">
              JM Creations is an end-to-end business solutions company. We empower startups, brands, and enterprises with high-converting web architecture, performance marketing, brand identity, and complete digital & offline business support.
            </p>

            {/* Social Media Badges */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={INITIAL_SETTINGS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-[#d4a853] hover:border-[#d4a853]/40 hover:bg-[#d4a853]/10 transition-all"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={INITIAL_SETTINGS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-[#d4a853] hover:border-[#d4a853]/40 hover:bg-[#d4a853]/10 transition-all"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={INITIAL_SETTINGS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-[#d4a853] hover:border-[#d4a853]/40 hover:bg-[#d4a853]/10 transition-all"
                title="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Business Pillar 1: Strategy & Tech */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono text-[#d4a853]">
              Strategy & Tech
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-zinc-400">
              <li><a href="#services" className="hover:text-white transition-colors">Business Consulting</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Startup Consulting</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Brand Identity & Logo Design</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Website Design & Dev</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">E-commerce Stores</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Business Registration</a></li>
            </ul>
          </div>

          {/* Business Pillar 2: Marketing & Growth */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono text-[#d4a853]">
              Marketing & Growth
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-zinc-400">
              <li><a href="#services" className="hover:text-white transition-colors">Digital Marketing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Social Media Management</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Meta Ads (FB & Insta)</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Google Ads (PPC)</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">SEO Optimization</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Lead Generation Engine</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">WhatsApp & Email Marketing</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono text-[#d4a853]">
              Connect With Us
            </h4>
            <div className="flex flex-col gap-3 text-xs">
              <a href={`mailto:${INITIAL_SETTINGS.email}`} className="flex items-start gap-2.5 hover:text-white transition-colors group">
                <Mail className="w-4 h-4 text-[#d4a853] shrink-0 mt-0.5" />
                <span className="break-all font-mono">{INITIAL_SETTINGS.email}</span>
              </a>
              <a href={`tel:${INITIAL_SETTINGS.whatsappNumber}`} className="flex items-center gap-2.5 hover:text-white transition-colors group">
                <Phone className="w-4 h-4 text-[#d4a853] shrink-0" />
                <span className="font-mono">{INITIAL_SETTINGS.phoneDisplay}</span>
              </a>
              <div className="flex items-start gap-2.5 text-zinc-400">
                <MapPin className="w-4 h-4 text-[#d4a853] shrink-0 mt-0.5" />
                <span>{INITIAL_SETTINGS.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-zinc-500">
            © {new Date().getFullYear()} JM Creations. All rights reserved. End-to-End Business Solutions.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#d4a853]/40 text-zinc-300 hover:text-white transition-all group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#d4a853] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Mail, Phone, MapPin, Sparkles } from "lucide-react";
import { INITIAL_SETTINGS } from "@/lib/adminStore";
import { InstagramIcon, LinkedinIcon, FacebookIcon } from "@/components/shared/SocialIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerServices = [
    "Business & Startup Consulting",
    "Brand Identity & Logo Design",
    "Website & E-commerce Dev",
    "Meta & Google Ads Marketing",
    "SEO & Search Optimization",
    "Video Production & Editing",
    "Product Photography",
    "WhatsApp & Email Marketing",
    "Printing & Event Solutions",
    "MSME & GST Compliance",
  ];

  return (
    <footer className="relative bg-[#050507] border-t border-white/10 text-white pt-20 pb-12 overflow-hidden">
      {/* Ambient Radial Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-[#d4a853]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info & Vision (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 group mb-6">
              <img
                src="/logo.jpeg"
                alt="JM Creations Official Logo"
                className="w-10 h-10 object-cover rounded-xl border border-[#d4a853]/40 shadow-lg shadow-[#d4a853]/20"
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-[#d4a853] transition-colors">
                  JM CREATIONS
                </span>
                <span className="text-[10px] text-zinc-400 font-mono uppercase tracking-wider">
                  Solutions Company
                </span>
              </div>
            </Link>

            <p className="text-xs text-zinc-400 leading-relaxed mb-6">
              JM Creations is an end-to-end business solutions company providing strategic consulting, digital marketing, website development, content production, printing, and compliance support for startups and scaling companies.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={INITIAL_SETTINGS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-[#d4a853] text-zinc-400 hover:text-black transition-all border border-white/10"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={INITIAL_SETTINGS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-[#d4a853] text-zinc-400 hover:text-black transition-all border border-white/10"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={INITIAL_SETTINGS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-[#d4a853] text-zinc-400 hover:text-black transition-all border border-white/10"
                title="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Sitemap (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold text-[#d4a853] uppercase tracking-widest mb-4">
              21 Core Solutions
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              {footerServices.slice(0, 5).map((service, idx) => (
                <li key={idx}>
                  <Link href="/#services" className="hover:text-white transition-colors flex items-center gap-1.5">
                    <span className="text-[#d4a853]">›</span> {service}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/catalogue" className="text-[#d4a853] font-semibold hover:underline flex items-center gap-1 mt-2">
                  <Sparkles className="w-3 h-3" /> View All 21 Solutions & Prices
                </Link>
              </li>
            </ul>
          </div>

          {/* Additional Sitemap (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold text-[#d4a853] uppercase tracking-widest mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li><Link href="/#services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/catalogue" className="hover:text-white transition-colors">Price Catalogue</Link></li>
              <li><Link href="/#portfolio" className="hover:text-white transition-colors">Portfolio Case Studies</Link></li>
              <li><Link href="/#testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link href="/#blog" className="hover:text-white transition-colors">Insights Journal</Link></li>
              <li><Link href="/#contact" className="hover:text-white transition-colors">Contact Strategy Team</Link></li>
            </ul>
          </div>

          {/* Direct Contact Details (3 cols) */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-xs font-mono font-bold text-[#d4a853] uppercase tracking-widest mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs text-zinc-400">
              <a
                href={`mailto:${INITIAL_SETTINGS.email}`}
                className="flex items-center gap-2 hover:text-[#d4a853] transition-colors font-mono break-all"
              >
                <Mail className="w-4 h-4 text-[#d4a853] shrink-0" />
                <span>{INITIAL_SETTINGS.email}</span>
              </a>

              <a
                href={`tel:${INITIAL_SETTINGS.whatsappNumber}`}
                className="flex items-center gap-2 hover:text-[#d4a853] transition-colors font-mono"
              >
                <Phone className="w-4 h-4 text-[#d4a853] shrink-0" />
                <span>{INITIAL_SETTINGS.phoneDisplay}</span>
              </a>

              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-[#d4a853] shrink-0 mt-0.5" />
                <span>{INITIAL_SETTINGS.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <p>© {new Date().getFullYear()} JM Creations. All rights reserved. Built with Next.js 16 & Turbopack.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[#d4a853] text-zinc-300 hover:text-white transition-all"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#d4a853]" />
          </button>
        </div>
      </div>
    </footer>
  );
}

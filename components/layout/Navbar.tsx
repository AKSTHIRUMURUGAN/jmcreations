"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Menu, X, ArrowUpRight, PhoneCall } from "lucide-react";
import Link from "next/link";
import { INITIAL_SETTINGS } from "@/lib/adminStore";

interface NavbarProps {
  onOpenQuote: () => void;
  onOpenAdmin?: () => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "Our Impact", href: "/our-impact", badge: "REAL PROOF" },
    { name: "Price Catalogue", href: "/catalogue", badge: "₹ PRICES" },
    { name: "Career Catalyst", href: "/catalyst", badge: "19 MODULES" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0c]/90 backdrop-blur-2xl border-b border-white/10 py-3 shadow-2xl"
            : "bg-gradient-to-b from-black/80 to-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 overflow-hidden">
          {/* Official Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-xl bg-[#0a0a0a] border border-[#d4a853]/50 p-1 flex items-center justify-center shadow-lg shadow-[#d4a853]/20 transition-transform group-hover:scale-105">
              <img
                src="/logo.jpeg"
                alt="JM Creations Official Logo"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div className="flex flex-col shrink-0">
              <span className="font-extrabold text-xs sm:text-sm tracking-tight text-white group-hover:text-[#d4a853] transition-colors flex items-center gap-1.5 leading-none">
                JM CREATIONS
                <span className="text-[8px] font-semibold font-mono tracking-widest px-1.5 py-0.5 rounded bg-[#d4a853]/15 text-[#d4a853] border border-[#d4a853]/30 uppercase hidden sm:inline-block">
                  SOLUTIONS
                </span>
              </span>
              <span className="text-[8px] sm:text-[9px] text-zinc-400 tracking-wider font-mono uppercase mt-1">
                End-to-End Business Engine
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-inner shrink-0">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs font-semibold text-zinc-300 hover:text-white hover:bg-white/10 rounded-full transition-all flex items-center gap-1.5 shrink-0 whitespace-nowrap"
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="text-[8px] font-mono font-extrabold px-1.5 py-0.5 rounded bg-[#d4a853] text-black">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* Direct Phone Call */}
            <a
              href={`tel:${INITIAL_SETTINGS.whatsappNumber}`}
              className="hidden 2xl:flex items-center gap-2 text-xs text-zinc-300 hover:text-[#d4a853] px-3.5 py-2 rounded-xl hover:bg-white/5 transition-all shrink-0 font-mono"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#d4a853]" />
              <span>{INITIAL_SETTINGS.phoneDisplay}</span>
            </a>

            {/* Primary CTA Button */}
            <button
              onClick={onOpenQuote}
              className="relative group px-4 sm:px-5 py-2.5 rounded-full font-bold text-xs text-black bg-gradient-to-r from-[#d4a853] via-[#f0c36d] to-[#d4a853] hover:from-[#f0c36d] hover:to-[#d4a853] shadow-lg shadow-[#d4a853]/25 hover:shadow-[#d4a853]/40 transition-all flex items-center gap-2 overflow-hidden shrink-0 whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 text-black animate-pulse" />
              <span>Get Custom Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile & Tablet Menu Button */}
          <div className="flex xl:hidden items-center gap-2 shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[72px] z-30 xl:hidden bg-[#0a0a0c]/95 backdrop-blur-2xl border-b border-white/10 p-6 shadow-2xl max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-xs font-semibold text-zinc-200 hover:text-[#d4a853] hover:bg-white/5 rounded-xl transition-all flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#d4a853] text-black">
                      {link.badge}
                    </span>
                  )}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3 mt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full py-3 rounded-xl font-bold text-xs text-black bg-gradient-to-r from-[#d4a853] via-[#f0c36d] to-[#d4a853] flex items-center justify-center gap-2 shadow-lg shadow-[#d4a853]/20"
                >
                  <Sparkles className="w-4 h-4 text-black" />
                  <span>Get Instant Custom Quote</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

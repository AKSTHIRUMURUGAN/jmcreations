"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Menu, X, ArrowUpRight, Shield, PhoneCall, Tag } from "lucide-react";
import Link from "next/link";
import { INITIAL_SETTINGS } from "@/lib/adminStore";

interface NavbarProps {
  onOpenQuote: () => void;
  onOpenAdmin: () => void;
}

export default function Navbar({ onOpenQuote, onOpenAdmin }: NavbarProps) {
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
    { name: "Price Catalogue", href: "/catalogue", badge: "₹ PRICES" },
    { name: "Solutions", href: "/#calculator" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Blog", href: "/#blog" },
    { name: "Careers", href: "/#careers" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Tagline */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d4a853] via-[#f0c36d] to-[#aa7f30] p-[1px] shadow-lg shadow-[#d4a853]/20 transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-[#0a0a0a] rounded-[11px] flex items-center justify-center">
                <span className="font-extrabold text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#d4a853] to-[#f0c36d] tracking-tighter">
                  JM
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-[#d4a853] transition-colors flex items-center gap-1.5">
                JM CREATIONS
                <span className="text-[9px] font-semibold tracking-widest px-1.5 py-0.5 rounded bg-[#d4a853]/15 text-[#d4a853] border border-[#d4a853]/30">
                  SOLUTIONS
                </span>
              </span>
              <span className="text-[10px] text-zinc-400 tracking-wider font-mono uppercase">
                End-to-End Business Engine
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-full transition-all flex items-center gap-1.5"
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="text-[8px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#d4a853] text-black">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Admin Portal Launcher Trigger */}
            <button
              onClick={onOpenAdmin}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-400 hover:text-white transition-all"
              title="Admin Portal"
            >
              <Shield className="w-4 h-4 text-[#d4a853]" />
            </button>

            {/* Quick Call */}
            <a
              href={`tel:${INITIAL_SETTINGS.whatsappNumber}`}
              className="hidden xl:flex items-center gap-2 text-xs text-zinc-300 hover:text-[#d4a853] px-3 py-2 rounded-xl hover:bg-white/5 transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#d4a853]" />
              <span className="font-mono">{INITIAL_SETTINGS.phoneDisplay}</span>
            </a>

            {/* Primary Action Button */}
            <button
              onClick={onOpenQuote}
              className="relative group px-5 py-2.5 rounded-full font-medium text-xs text-black bg-gradient-to-r from-[#d4a853] via-[#f0c36d] to-[#d4a853] hover:from-[#f0c36d] hover:to-[#d4a853] shadow-lg shadow-[#d4a853]/25 hover:shadow-[#d4a853]/40 transition-all flex items-center gap-2 overflow-hidden"
            >
              <Sparkles className="w-3.5 h-3.5 text-black animate-pulse" />
              <span>Get Custom Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenAdmin}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#d4a853]"
            >
              <Shield className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="fixed inset-x-0 top-[72px] z-30 lg:hidden bg-[#0a0a0a]/95 backdrop-blur-2xl border-b border-white/10 p-6 shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-zinc-200 hover:text-[#d4a853] hover:bg-white/5 rounded-xl transition-all flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#d4a853] text-black">
                      {link.badge}
                    </span>
                  )}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full py-3 rounded-xl font-semibold text-xs text-black bg-gradient-to-r from-[#d4a853] via-[#f0c36d] to-[#d4a853] flex items-center justify-center gap-2 shadow-lg shadow-[#d4a853]/20"
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

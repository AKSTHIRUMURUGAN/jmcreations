"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Check,
  ArrowRight,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  Globe,
  TrendingUp,
  Palette,
  Video,
  Award,
  Briefcase,
  Layers,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import CustomCursor from "@/components/cursor/CustomCursor";
import SmoothScrollProvider from "@/components/motion/SmoothScrollProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingDock from "@/components/layout/FloatingDock";
import AdminModal from "@/components/admin/AdminModal";
import { INITIAL_SETTINGS } from "@/lib/adminStore";
import {
  FULL_CATALOGUE_DATA,
  MONTHLY_PACKAGES,
  CatalogueCategory,
  CatalogueService,
} from "@/lib/catalogueData";

const ICON_MAP: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#d4a853]" />,
  Globe: <Globe className="w-5 h-5 text-[#d4a853]" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-[#d4a853]" />,
  Palette: <Palette className="w-5 h-5 text-[#d4a853]" />,
  Video: <Video className="w-5 h-5 text-[#d4a853]" />,
  Award: <Award className="w-5 h-5 text-[#d4a853]" />,
  Briefcase: <Briefcase className="w-5 h-5 text-[#d4a853]" />,
};

export default function CataloguePage() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<string>("all");
  const [inquiryItem, setInquiryItem] = useState<{ name: string; price: string } | null>(null);

  const filterCategories = FULL_CATALOGUE_DATA.filter((cat) => {
    if (activeTab !== "all" && cat.id !== activeTab) return false;
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    const matchesCategory = cat.title.toLowerCase().includes(query);
    const matchesService = cat.services.some(
      (s) => s.name.toLowerCase().includes(query) || s.price.toLowerCase().includes(query)
    );
    return matchesCategory || matchesService;
  });

  const handleWhatsAppInquiry = (serviceName: string, servicePrice: string) => {
    const text = `Hello JM Creations team, I am interested in inquiring about:\n\nService: ${serviceName}\nListed Price: ${servicePrice}\n\nPlease share the detailed proposal and onboarding steps.`;
    const waUrl = `https://wa.me/${INITIAL_SETTINGS.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank");
  };

  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-[#09090b] text-white selection:bg-[#d4a853] selection:text-black">
        <CustomCursor />

        <Navbar
          onOpenQuote={() => {
            const el = document.getElementById("packages");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          onOpenAdmin={() => setIsAdminOpen(true)}
        />

        <main className="pt-28 pb-20 relative z-10">
          {/* Header Banner */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#d4a853]/10 rounded-full blur-3xl pointer-events-none" />

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white hover:border-[#d4a853]/40 transition-all mb-6"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#d4a853]" />
              <span>Back to Main Platform</span>
            </Link>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4a853]/10 border border-[#d4a853]/30 text-[#d4a853] text-xs font-mono mb-4 uppercase tracking-widest block w-fit mx-auto">
              <Sparkles className="w-3.5 h-3.5" />
              Complete Service Portfolio {"&"} Pricing Catalogue
            </div>

            <h1 className="text-hero font-extrabold tracking-tight text-white mb-4">
              One Company. <br />
              <span className="gold-gradient-text">Complete Business Solutions.</span>
            </h1>

            <p className="text-subheading text-zinc-400 max-w-2xl mx-auto mb-8">
              Transparent, competitive pricing across our entire portfolio of business registration, digital marketing, website development, video editing, event management, and consulting services.
            </p>

            {/* Search Input */}
            <div className="relative max-w-xl mx-auto">
              <Search className="w-5 h-5 absolute left-4 top-3.5 text-zinc-500" />
              <input
                type="text"
                placeholder="Search across 100+ services and prices (e.g. GST, Next.js, Meta Ads, Video)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 text-xs bg-white/[0.04] border border-white/15 rounded-2xl text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4a853] transition-colors shadow-2xl backdrop-blur-md"
              />
            </div>
          </div>

          {/* Monthly Retainer Bundles Section */}
          <section id="packages" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="flex flex-col items-center text-center mb-10">
              <span className="text-xs font-mono text-[#d4a853] uppercase tracking-widest">
                ALL-IN-ONE MONTHLY RETAINERS
              </span>
              <h2 className="text-heading font-extrabold text-white">Featured Growth Bundles</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {MONTHLY_PACKAGES.map((pkg, index) => (
                <div
                  key={index}
                  className={`p-8 rounded-3xl glass-card border flex flex-col justify-between relative ${
                    pkg.popular
                      ? "border-[#d4a853] bg-gradient-to-b from-[#d4a853]/15 via-transparent to-transparent shadow-2xl shadow-[#d4a853]/10"
                      : "border-white/10"
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[10px] font-extrabold font-mono uppercase px-3 py-1 rounded-full bg-[#d4a853] text-black shadow-lg">
                      MOST POPULAR PACKAGE
                    </span>
                  )}

                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-black text-white gold-gradient-text mb-6">
                      {pkg.price}
                    </div>

                    <div className="space-y-3 mb-8">
                      {pkg.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                          <Check className="w-4 h-4 text-[#d4a853] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => handleWhatsAppInquiry(pkg.name, pkg.price)}
                    className={`w-full py-3.5 rounded-2xl font-bold text-xs transition-all flex items-center justify-center gap-2 ${
                      pkg.popular
                        ? "bg-[#d4a853] text-black hover:bg-[#f0c36d] shadow-lg shadow-[#d4a853]/25"
                        : "bg-white/5 hover:bg-[#d4a853] text-white hover:text-black border border-white/10"
                    }`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{pkg.ctaText}</span>
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Category Navigation Pills */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 scrollbar-none">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  activeTab === "all"
                    ? "bg-[#d4a853] text-black shadow-lg shadow-[#d4a853]/20"
                    : "bg-white/5 text-zinc-400 border border-white/10 hover:text-white"
                }`}
              >
                All Categories ({FULL_CATALOGUE_DATA.reduce((acc, c) => acc + c.services.length, 0)})
              </button>

              {FULL_CATALOGUE_DATA.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                    activeTab === cat.id
                      ? "bg-[#d4a853] text-black font-semibold shadow-lg shadow-[#d4a853]/20"
                      : "bg-white/5 text-zinc-400 border border-white/10 hover:text-white"
                  }`}
                >
                  {cat.title.split(". ")[1] || cat.title} ({cat.services.length})
                </button>
              ))}
            </div>
          </div>

          {/* Full Pricing Tables */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {filterCategories.map((cat) => {
              const matchedServices = searchQuery
                ? cat.services.filter(
                    (s) =>
                      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      s.price.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                : cat.services;

              if (matchedServices.length === 0) return null;

              return (
                <div
                  key={cat.id}
                  className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 relative"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-6 border-b border-white/10 mb-6">
                    <div className="p-3 rounded-2xl bg-[#d4a853]/15 border border-[#d4a853]/30">
                      {ICON_MAP[cat.iconName] || <Sparkles className="w-5 h-5 text-[#d4a853]" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-white">{cat.title}</h3>
                      <p className="text-xs text-zinc-400 font-mono">{cat.subtitle}</p>
                    </div>
                  </div>

                  {/* Services Grid Table */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {matchedServices.map((service, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#d4a853]/40 flex items-start justify-between gap-3 group transition-all"
                      >
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2">
                            <h4 className="text-xs font-bold text-white group-hover:text-[#d4a853] transition-colors">
                              {service.name}
                            </h4>
                            {service.badge && (
                              <span className="text-[8px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#d4a853]/20 text-[#d4a853]">
                                {service.badge}
                              </span>
                            )}
                          </div>
                          <span className="text-sm font-extrabold text-[#d4a853] font-mono">
                            {service.price}
                          </span>
                        </div>

                        <button
                          onClick={() => handleWhatsAppInquiry(service.name, service.price)}
                          className="p-2 rounded-xl bg-white/5 hover:bg-[#d4a853] text-zinc-400 hover:text-black transition-all shrink-0"
                          title={`Inquire about ${service.name}`}
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </main>

        <Footer />
        <FloatingDock
          onOpenQuote={() => {
            const el = document.getElementById("packages");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        />

        <AdminModal isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
      </div>
    </SmoothScrollProvider>
  );
}

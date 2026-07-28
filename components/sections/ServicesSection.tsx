"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Rocket,
  Palette,
  Globe,
  ShoppingBag,
  TrendingUp,
  Share2,
  Target,
  Search,
  BarChart3,
  FileText,
  Layers,
  Video,
  Camera,
  MessageSquare,
  Mail,
  UserCheck,
  Users,
  Printer,
  Award,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  X,
  Check,
} from "lucide-react";
import { INITIAL_SERVICES, ServiceItem } from "@/lib/adminStore";

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Briefcase: <Briefcase className="w-5 h-5 text-[#d4a853]" />,
  Rocket: <Rocket className="w-5 h-5 text-[#d4a853]" />,
  Palette: <Palette className="w-5 h-5 text-[#d4a853]" />,
  Globe: <Globe className="w-5 h-5 text-[#d4a853]" />,
  ShoppingBag: <ShoppingBag className="w-5 h-5 text-[#d4a853]" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-[#d4a853]" />,
  Share2: <Share2 className="w-5 h-5 text-[#d4a853]" />,
  Target: <Target className="w-5 h-5 text-[#d4a853]" />,
  Search: <Search className="w-5 h-5 text-[#d4a853]" />,
  BarChart3: <BarChart3 className="w-5 h-5 text-[#d4a853]" />,
  FileText: <FileText className="w-5 h-5 text-[#d4a853]" />,
  Layers: <Layers className="w-5 h-5 text-[#d4a853]" />,
  Video: <Video className="w-5 h-5 text-[#d4a853]" />,
  Camera: <Camera className="w-5 h-5 text-[#d4a853]" />,
  MessageSquare: <MessageSquare className="w-5 h-5 text-[#d4a853]" />,
  Mail: <Mail className="w-5 h-5 text-[#d4a853]" />,
  UserCheck: <UserCheck className="w-5 h-5 text-[#d4a853]" />,
  Users: <Users className="w-5 h-5 text-[#d4a853]" />,
  Printer: <Printer className="w-5 h-5 text-[#d4a853]" />,
  Award: <Award className="w-5 h-5 text-[#d4a853]" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#d4a853]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-[#d4a853]" />,
};

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const categories = [
    "All",
    "Consulting",
    "Design & Tech",
    "Digital Marketing",
    "Media & Content",
    "Operations & Branding",
  ];

  const filteredServices = INITIAL_SERVICES.filter((service) => {
    const matchesCategory = activeCategory === "All" || service.category === activeCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="relative py-28 bg-[#08080a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4a853]/10 border border-[#d4a853]/30 text-[#d4a853] text-xs font-mono mb-4 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            21 End-to-End Business Solutions
          </div>
          <h2 className="text-heading font-extrabold text-white mb-4">
            Everything Your Business Needs to <br />
            <span className="gold-gradient-text">Dominate & Scale Online</span>
          </h2>
          <p className="text-subheading text-zinc-400 max-w-2xl">
            Explore our 21 specialized solutions across consulting, web development, performance marketing, video editing, printing, and brand registration.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#d4a853] text-black font-bold shadow-lg shadow-[#d4a853]/20"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-zinc-500" />
            <input
              type="text"
              placeholder="Search 21 services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-white/[0.03] border border-white/10 rounded-2xl text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4a853] transition-colors"
            />
          </div>
        </div>

        {/* Bento Grid Services Display */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative p-6 rounded-2xl glass-card border border-white/10 hover:border-[#d4a853]/40 flex flex-col justify-between"
              >
                {/* Popular Badge */}
                {service.popular && (
                  <span className="absolute top-4 right-4 text-[9px] font-extrabold uppercase font-mono px-2 py-0.5 rounded-full bg-[#d4a853]/20 text-[#d4a853] border border-[#d4a853]/40">
                    MOST REQUESTED
                  </span>
                )}

                <div>
                  {/* Icon & Category */}
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-[#d4a853]/50 transition-all">
                    {ICON_MAP[service.iconName] || <Sparkles className="w-5 h-5 text-[#d4a853]" />}
                  </div>

                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
                    {service.category}
                  </span>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#d4a853] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Deliverable Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] text-zinc-300 border border-white/5"
                      >
                        ✓ {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs text-zinc-300 hover:text-white flex items-center gap-1 font-medium transition-colors"
                  >
                    View Details
                  </button>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="px-3.5 py-1.5 rounded-xl bg-[#d4a853]/15 hover:bg-[#d4a853] text-[#d4a853] hover:text-black font-semibold text-xs transition-all flex items-center gap-1"
                  >
                    <span>Inquire Now</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Expanded Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="w-full max-w-xl bg-[#0e0e12] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-[#d4a853]/15 border border-[#d4a853]/30">
                  {ICON_MAP[selectedService.iconName]}
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#d4a853] uppercase">{selectedService.category}</span>
                  <h3 className="text-lg font-extrabold text-white">{selectedService.title}</h3>
                </div>
              </div>

              <p className="text-xs text-zinc-300 leading-relaxed mb-6">
                {selectedService.fullDesc}
              </p>

              <h4 className="text-xs font-mono text-zinc-400 uppercase mb-3">Key Deliverables Included:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                {selectedService.deliverables.map((del, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-white/5 text-xs text-zinc-200">
                    <Check className="w-3.5 h-3.5 text-[#d4a853] shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    onSelectService(title);
                  }}
                  className="w-full py-3 rounded-xl font-bold text-xs text-black bg-[#d4a853] hover:bg-[#f0c36d] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#d4a853]/25"
                >
                  <span>Request Proposal for {selectedService.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

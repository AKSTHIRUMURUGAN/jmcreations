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
  Check,
} from "lucide-react";
import { INITIAL_SERVICES, ServiceItem } from "@/lib/adminStore";
import { ShinyText } from "@/components/ui/ShinyText";
import { BorderBeam } from "@/components/ui/BorderBeam";
import { AnimatedIcon } from "@/components/ui/AnimatedIcon";
import { TiltCard } from "@/components/ui/TiltCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

const renderAnimatedIcon = (icon: React.ReactNode) => (
  <AnimatedIcon animation="hover-rotate" glowColor="rgba(212, 168, 83, 0.5)">
    {icon}
  </AnimatedIcon>
);

const ICON_MAP: Record<string, React.ReactNode> = {
  Briefcase: renderAnimatedIcon(<Briefcase className="w-5 h-5 text-[#d4a853]" />),
  Rocket: renderAnimatedIcon(<Rocket className="w-5 h-5 text-[#d4a853]" />),
  Palette: renderAnimatedIcon(<Palette className="w-5 h-5 text-[#d4a853]" />),
  Globe: renderAnimatedIcon(<Globe className="w-5 h-5 text-[#d4a853]" />),
  ShoppingBag: renderAnimatedIcon(<ShoppingBag className="w-5 h-5 text-[#d4a853]" />),
  TrendingUp: renderAnimatedIcon(<TrendingUp className="w-5 h-5 text-[#d4a853]" />),
  Share2: renderAnimatedIcon(<Share2 className="w-5 h-5 text-[#d4a853]" />),
  Target: renderAnimatedIcon(<Target className="w-5 h-5 text-[#d4a853]" />),
  Search: renderAnimatedIcon(<Search className="w-5 h-5 text-[#d4a853]" />),
  BarChart3: renderAnimatedIcon(<BarChart3 className="w-5 h-5 text-[#d4a853]" />),
  FileText: renderAnimatedIcon(<FileText className="w-5 h-5 text-[#d4a853]" />),
  Layers: renderAnimatedIcon(<Layers className="w-5 h-5 text-[#d4a853]" />),
  Video: renderAnimatedIcon(<Video className="w-5 h-5 text-[#d4a853]" />),
  Camera: renderAnimatedIcon(<Camera className="w-5 h-5 text-[#d4a853]" />),
  MessageSquare: renderAnimatedIcon(<MessageSquare className="w-5 h-5 text-[#d4a853]" />),
  Mail: renderAnimatedIcon(<Mail className="w-5 h-5 text-[#d4a853]" />),
  UserCheck: renderAnimatedIcon(<UserCheck className="w-5 h-5 text-[#d4a853]" />),
  Users: renderAnimatedIcon(<Users className="w-5 h-5 text-[#d4a853]" />),
  Printer: renderAnimatedIcon(<Printer className="w-5 h-5 text-[#d4a853]" />),
  Award: renderAnimatedIcon(<Award className="w-5 h-5 text-[#d4a853]" />),
  ShieldCheck: renderAnimatedIcon(<ShieldCheck className="w-5 h-5 text-[#d4a853]" />),
  Sparkles: renderAnimatedIcon(<Sparkles className="w-5 h-5 text-[#d4a853]" />),
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
          <Badge variant="gold" className="mb-4">
            <AnimatedIcon animation="pulse" className="mr-1.5">
              <Sparkles className="w-3.5 h-3.5" />
            </AnimatedIcon>
            21 End-to-End Business Solutions
          </Badge>

          <h2 className="text-heading font-extrabold text-white mb-4">
            Everything Your Business Needs to <br />
            <ShinyText text="Dominate & Scale Online" speed={4} />
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

        {/* Bento Grid with 3D TiltCard Containers & BorderBeam */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredServices.map((service, idx) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <TiltCard className="h-full flex flex-col justify-between group">
                  {/* BorderBeam for top requested items */}
                  {service.popular && (
                    <BorderBeam size={180} duration={14} delay={idx * 2} colorFrom="#d4a853" colorTo="#f0c36d" />
                  )}

                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="gold">MOST REQUESTED</Badge>
                    </div>
                  )}

                  <div>
                    {/* Icon & Category */}
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-[#d4a853]/50 transition-all shadow-inner">
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
                      {service.deliverables.slice(0, 3).map((item, dIdx) => (
                        <span
                          key={dIdx}
                          className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] text-zinc-300 border border-white/5 font-mono"
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

                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => onSelectService(service.title)}
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Expanded Service Detail Modal using shadcn Dialog */}
      <Dialog open={!!selectedService} onOpenChange={(open) => !open && setSelectedService(null)}>
        <DialogContent className="max-w-xl">
          {selectedService && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-2xl bg-[#d4a853]/15 border border-[#d4a853]/30">
                    {ICON_MAP[selectedService.iconName]}
                  </div>
                  <div>
                    <Badge variant="gold">{selectedService.category}</Badge>
                    <DialogTitle className="mt-1">{selectedService.title}</DialogTitle>
                  </div>
                </div>
              </DialogHeader>

              <p className="text-xs text-zinc-300 leading-relaxed my-4">
                {selectedService.fullDesc}
              </p>

              <h4 className="text-xs font-mono text-zinc-400 uppercase mb-3">Key Deliverables Included:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {selectedService.deliverables.map((del, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-white/5 text-xs text-zinc-200 border border-white/5">
                    <Check className="w-3.5 h-3.5 text-[#d4a853] shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>

              <Button
                variant="gold"
                size="lg"
                className="w-full"
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onSelectService(title);
                }}
              >
                <span>Request Proposal for {selectedService.title}</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

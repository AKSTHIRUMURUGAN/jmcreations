"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Search, Check, Sparkles, MessageSquare } from "lucide-react";
import { FULL_CATALOGUE_DATA, MONTHLY_PACKAGES } from "@/lib/catalogueData";
import { INITIAL_SETTINGS } from "@/lib/adminStore";
import CustomCursor from "@/components/cursor/CustomCursor";
import SmoothScrollProvider from "@/components/motion/SmoothScrollProvider";
import { ShinyText } from "@/components/ui/ShinyText";
import { BorderBeam } from "@/components/ui/BorderBeam";
import { TiltCard } from "@/components/ui/TiltCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function PriceCataloguePage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://jmcreations.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Price Catalogue",
        item: "https://jmcreations.in/catalogue",
      },
    ],
  };

  const categories = [
    "All",
    ...FULL_CATALOGUE_DATA.map((cat) => cat.title),
  ];

  const filteredCategories = FULL_CATALOGUE_DATA.filter((cat) => {
    if (activeCategory !== "All" && cat.title !== activeCategory) {
      return false;
    }
    return true;
  }).map((cat) => {
    const filteredItems = cat.services.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.desc && item.desc.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.price.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
    return { ...cat, services: filteredItems };
  }).filter((cat) => cat.services.length > 0);

  const getWhatsAppLink = (serviceName: string, price: string) => {
    const text = `Hello JM Creations, I am interested in ordering/inquiring about: ${serviceName} (${price}). Please share the onboarding process.`;
    return `https://wa.me/${INITIAL_SETTINGS.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`;
  };

  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-[#0a0a0a] text-white selection:bg-[#d4a853] selection:text-black">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />

        <CustomCursor />

        {/* Top Header Navigation */}
        <header className="sticky top-0 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/10 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <Link href="/" className="inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 text-[#d4a853]" />
              <span>Back to Home</span>
            </Link>

            <div className="flex items-center gap-2">
              <Badge variant="gold">OFFICIAL SERVICE & PRICING CATALOGUE</Badge>
            </div>

            <a
              href={`https://wa.me/${INITIAL_SETTINGS.whatsappNumber.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-[#d4a853] hover:text-white font-mono transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </header>

        <main aria-label="Official Service & Pricing Catalogue" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          {/* Page Banner Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <Badge variant="gold" className="mb-4">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-[#d4a853]" />
              Transparent Pricing & Service SLA
            </Badge>

            <h1 className="text-hero font-extrabold text-white mb-4">
              JM Creations Official <br />
              <ShinyText text="Service & Pricing Catalogue" speed={4} />
            </h1>
            <p className="text-subheading text-zinc-400 max-w-2xl">
              100+ business solutions and transparent rates extracted straight from our service manifesto.
            </p>
          </div>

          {/* Featured Monthly Retainer Plans with 3D TiltCard & BorderBeam */}
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
              <h2 className="text-xl font-black text-white flex items-center gap-2">
                <span>Monthly Business Retainers</span>
                <Badge variant="emerald">MOST POPULAR FOR STARTUPS</Badge>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {MONTHLY_PACKAGES.map((plan, idx) => (
                <TiltCard key={idx} className="h-full flex flex-col justify-between group relative overflow-hidden">
                  {plan.popular && (
                    <BorderBeam size={220} duration={12} colorFrom="#d4a853" colorTo="#f0c36d" />
                  )}

                  {plan.popular && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="gold">RECOMMENDED</Badge>
                    </div>
                  )}

                  <div>
                    <span className="text-[10px] font-mono text-[#d4a853] uppercase">{plan.name}</span>
                    <h3 className="text-xl font-black text-white mt-1 mb-2">{plan.price}</h3>

                    <h4 className="text-[11px] font-mono text-zinc-500 uppercase mb-3">Included Monthly Scope:</h4>
                    <div className="space-y-2 mb-8">
                      {plan.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                          <Check className="w-3.5 h-3.5 text-[#d4a853] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={getWhatsAppLink(`Monthly Retainer - ${plan.name}`, plan.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant={plan.popular ? "gold" : "outline"} size="lg" className="w-full">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      <span>{plan.ctaText}</span>
                    </Button>
                  </a>
                </TiltCard>
              ))}
            </div>
          </div>

          {/* Catalogue Filter Tabs & Search */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-12">
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

            <div className="relative w-full lg:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-3 text-zinc-500" />
              <Input
                type="text"
                placeholder="Search 100+ services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Render Categorized Pricing Tables */}
          <div className="space-y-16">
            {filteredCategories.map((catGroup, cIdx) => (
              <div key={cIdx} className="p-8 rounded-3xl glass-card border border-white/10">
                <h3 className="text-xl font-black text-[#d4a853] mb-6 flex items-center gap-2 font-mono uppercase">
                  <span>{catGroup.title}</span>
                  <span className="text-xs font-normal text-zinc-500 font-sans">({catGroup.services.length} items)</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {catGroup.services.map((item, iIdx) => (
                    <TiltCard key={iIdx} className="p-5 flex flex-col justify-between group">
                      <div>
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h4 className="text-sm font-bold text-white group-hover:text-[#d4a853] transition-colors">
                            {item.name}
                          </h4>
                          <Badge variant="gold" className="shrink-0">{item.price}</Badge>
                        </div>
                        {item.desc && (
                          <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                            {item.desc}
                          </p>
                        )}
                      </div>

                      <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                        <span className="text-[10px] font-mono text-zinc-500">SLA: 24-72 hrs dispatch</span>
                        <a
                          href={getWhatsAppLink(item.name, item.price)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button size="sm" variant="outline">
                            <MessageSquare className="w-3.5 h-3.5 mr-1" />
                            <span>Inquire Rate</span>
                          </Button>
                        </a>
                      </div>
                    </TiltCard>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </SmoothScrollProvider>
  );
}

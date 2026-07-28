"use client";

import React, { useState } from "react";
import CustomCursor from "@/components/cursor/CustomCursor";
import SmoothScrollProvider from "@/components/motion/SmoothScrollProvider";
import GSAPScrollProvider from "@/components/motion/GSAPScrollProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingDock from "@/components/layout/FloatingDock";
import AdminModal from "@/components/admin/AdminModal";

import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>("");

  const handleOpenQuote = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForContact(serviceTitle);
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <SmoothScrollProvider>
      <GSAPScrollProvider>
        <div className="relative min-h-screen bg-[#0a0a0a] text-white selection:bg-[#d4a853] selection:text-black">
          {/* Custom Precision Lerp Cursor */}
          <CustomCursor />

          {/* Header Navigation */}
          <Navbar
            onOpenQuote={handleOpenQuote}
            onOpenAdmin={() => setIsAdminOpen(true)}
          />

          {/* Main Website Sections */}
          <main className="relative z-10">
            <HeroSection onOpenQuote={handleOpenQuote} />
            <ServicesSection onSelectService={handleSelectService} />
            <PortfolioSection />
            <TestimonialsSection />
            <FAQSection />
            <ContactSection prefilledService={selectedServiceForContact} />
          </main>

          {/* Footer & Sitemap */}
          <Footer />

          {/* Floating Quick Action Dock (WhatsApp, Call, Quote) */}
          <FloatingDock onOpenQuote={handleOpenQuote} />

          {/* Integrated Admin Console Modal */}
          <AdminModal
            isOpen={isAdminOpen}
            onClose={() => setIsAdminOpen(false)}
          />
        </div>
      </GSAPScrollProvider>
    </SmoothScrollProvider>
  );
}

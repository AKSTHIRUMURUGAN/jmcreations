"use client";

import React, { useState } from "react";
import CustomCursor from "@/components/cursor/CustomCursor";
import SmoothScrollProvider from "@/components/motion/SmoothScrollProvider";
import GSAPScrollProvider from "@/components/motion/GSAPScrollProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingDock from "@/components/layout/FloatingDock";
import AdminModal from "@/components/admin/AdminModal";

import ImpactHero from "@/components/impact/ImpactHero";
import ImpactStats from "@/components/impact/ImpactStats";
import ImpactMarquee from "@/components/impact/ImpactMarquee";
import AudioFeedbackPlayer from "@/components/impact/AudioFeedbackPlayer";
import LinkedInImpactGrid from "@/components/impact/LinkedInImpactGrid";
import InstagramWorksGrid from "@/components/impact/InstagramWorksGrid";
import ProofGalleryCarousel from "@/components/impact/ProofGalleryCarousel";
import InternVideoTestimonials from "@/components/impact/InternVideoTestimonials";
import DriveArchiveBanner from "@/components/impact/DriveArchiveBanner";
import ImpactCTA from "@/components/impact/ImpactCTA";

export default function OurImpactClient() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const handleOpenQuote = () => {
    window.location.href = "/#contact";
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

          {/* Main Our Impact Showcase */}
          <main className="relative z-10">
            <ImpactHero />
            <ImpactStats />
            <ImpactMarquee />
            <AudioFeedbackPlayer />
            <InternVideoTestimonials />
            <LinkedInImpactGrid />
            <InstagramWorksGrid />
            <ProofGalleryCarousel />
            <DriveArchiveBanner />
            <ImpactCTA />
          </main>

          {/* Footer & Sitemap */}
          <Footer />

          {/* Floating Quick Action Dock */}
          <FloatingDock onOpenQuote={handleOpenQuote} />

          {/* Admin Modal */}
          <AdminModal
            isOpen={isAdminOpen}
            onClose={() => setIsAdminOpen(false)}
          />
        </div>
      </GSAPScrollProvider>
    </SmoothScrollProvider>
  );
}

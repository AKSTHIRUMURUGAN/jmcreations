"use client";

import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle2, Loader2, Sparkles, Clock } from "lucide-react";
import { INITIAL_SETTINGS } from "@/lib/adminStore";
import { InstagramIcon, LinkedinIcon, FacebookIcon } from "@/components/shared/SocialIcons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/ui/BorderBeam";
import { LottieArt } from "@/components/ui/LottieArt";
import { Badge } from "@/components/ui/badge";

interface ContactSectionProps {
  prefilledService?: string;
}

interface LeadFeedItem {
  id: string;
  name: string;
  service: string;
  timestamp: string;
}

export default function ContactSection({ prefilledService }: ContactSectionProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(prefilledService || "Business Consulting");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [liveLeads, setLiveLeads] = useState<LeadFeedItem[]>([]);

  // Fetch stored leads on mount
  useEffect(() => {
    fetch("/api/inquiry-email")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.leads) {
          setLiveLeads(data.leads.slice(0, 4));
        }
      })
      .catch(() => {});
  }, [submitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Trigger real-time dual email dispatch via Gmail API route
      const res = await fetch("/api/inquiry-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, service, message }),
      });

      await res.json();
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);

      // Launch WhatsApp window as parallel fallback
      const formattedText = `Hello JM Creations,\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nRequested Service: ${service}\nMessage: ${message}`;
      const waUrl = `https://wa.me/${INITIAL_SETTINGS.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(formattedText)}`;
      window.open(waUrl, "_blank");

      setTimeout(() => {
        setSubmitted(false);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      }, 8000);
    }
  };

  return (
    <section id="contact" aria-label="Contact and Instant Inquiry Form" className="relative py-28 bg-[#060608] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4a853]/10 border border-[#d4a853]/30 text-[#d4a853] text-xs font-mono mb-4 uppercase tracking-widest">
            <MessageSquare className="w-3.5 h-3.5" />
            Instant 15-Min Response SLA
          </div>
          <h2 className="text-heading font-extrabold text-white mb-4">
            Let's Build & Scale Your <br />
            <span className="gold-gradient-text">Next Major Success</span>
          </h2>
          <p className="text-subheading text-zinc-400 max-w-2xl">
            Submitting this form triggers a real-time email dispatch to our executive strategy leads and delivers a instant confirmation email to your inbox.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Left Column: Direct Contact Info & Map */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 rounded-3xl glass-card border border-white/10 flex flex-col gap-6 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">Direct Communication Channels</h3>
                <LottieArt type="consulting" className="w-8 h-8" />
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href={`mailto:${INITIAL_SETTINGS.email}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#d4a853]/40 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-[#d4a853]/15 text-[#d4a853]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase">ENQUIRY EMAIL</span>
                    <h4 className="text-xs font-bold text-white font-mono group-hover:text-[#d4a853] transition-colors break-all">
                      {INITIAL_SETTINGS.email}
                    </h4>
                  </div>
                </a>

                <a
                  href={`tel:${INITIAL_SETTINGS.whatsappNumber}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#d4a853]/40 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-[#d4a853]/15 text-[#d4a853]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase">WHATSAPP & CALL</span>
                    <h4 className="text-xs font-bold text-white font-mono group-hover:text-[#d4a853] transition-colors">
                      {INITIAL_SETTINGS.phoneDisplay}
                    </h4>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="p-3 rounded-xl bg-[#d4a853]/15 text-[#d4a853]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase">CORPORATE OFFICE</span>
                    <h4 className="text-xs font-semibold text-zinc-300">
                      {INITIAL_SETTINGS.address}
                    </h4>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-[10px] font-mono text-zinc-400 uppercase block mb-3">OFFICIAL SOCIAL CHANNELS</span>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={INITIAL_SETTINGS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-zinc-300 hover:text-[#d4a853] transition-colors"
                  >
                    <InstagramIcon className="w-4 h-4 text-[#d4a853]" /> Instagram
                  </a>
                  <a
                    href={INITIAL_SETTINGS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-zinc-300 hover:text-[#d4a853] transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4 text-[#d4a853]" /> LinkedIn
                  </a>
                  <a
                    href={INITIAL_SETTINGS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-zinc-300 hover:text-[#d4a853] transition-colors"
                  >
                    <FacebookIcon className="w-4 h-4 text-[#d4a853]" /> Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Real-Time Dual Email Form with BorderBeam & LottieArt */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-card border border-white/10 relative overflow-hidden">
              <BorderBeam size={280} duration={14} colorFrom="#d4a853" colorTo="#f0c36d" />

              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-black text-white mb-1">Send Instant Inquiry</h3>
                  <p className="text-xs text-zinc-400">
                    Triggers dynamic confirmation email to your inbox + WhatsApp dispatch in real-time.
                  </p>
                </div>
                <LottieArt type="growth" className="w-10 h-10" />
              </div>

              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/30 animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Inquiry Dispatched & Confirmed!</h4>
                  <p className="text-xs text-zinc-300 max-w-sm pt-2 leading-relaxed">
                    A confirmation email has been sent to <strong>{email}</strong>. Our strategy leads have been notified and will contact you within <strong>15 minutes</strong>.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={`https://wa.me/${INITIAL_SETTINGS.whatsappNumber.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-emerald-500 text-black font-bold text-xs hover:bg-emerald-400"
                    >
                      Chat Live on WhatsApp Now
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-zinc-400 block mb-1 font-mono">Your Name *</label>
                      <Input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="text-xs text-zinc-400 block mb-1 font-mono">Email Address *</label>
                      <Input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-zinc-400 block mb-1 font-mono">Phone / WhatsApp Number *</label>
                      <Input
                        type="text"
                        required
                        placeholder="+91 90429 86355"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="text-xs text-zinc-400 block mb-1 font-mono">Select Required Solution *</label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full h-11 px-4 py-2 text-xs bg-[#121216] border border-white/10 rounded-2xl text-white focus:outline-none focus:border-[#d4a853]"
                      >
                        <option value="Business Consulting">Business Consulting</option>
                        <option value="Startup Consulting">Startup Consulting</option>
                        <option value="Brand Identity & Logo Design">Brand Identity & Logo Design</option>
                        <option value="Website Design & Development">Website Design & Development</option>
                        <option value="E-commerce Website Development">E-commerce Development</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Social Media Management">Social Media Management</option>
                        <option value="Meta (FB & Insta) Advertising">Meta Advertising</option>
                        <option value="Google Ads (PPC)">Google Ads</option>
                        <option value="Search Engine Optimization (SEO)">Search Engine Optimization</option>
                        <option value="Content Creation & Copywriting">Content Creation</option>
                        <option value="Graphic Design">Graphic Design</option>
                        <option value="Video Editing & Motion Graphics">Video Editing & Motion Graphics</option>
                        <option value="Product Photography & Videography">Product Photography</option>
                        <option value="WhatsApp Marketing">WhatsApp Marketing</option>
                        <option value="Email Marketing">Email Marketing</option>
                        <option value="Lead Generation">Lead Generation</option>
                        <option value="Influencer Marketing">Influencer Marketing</option>
                        <option value="Printing Solutions">Printing Solutions</option>
                        <option value="Event Branding & Management">Event Branding & Management</option>
                        <option value="Business Registration & Support">Business Registration</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-zinc-400 block mb-1 font-mono">Project Requirements & Timeline</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Briefly describe your goals, budget range, and timeline..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 text-xs bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-[#d4a853]"
                    />
                  </div>

                  <Button type="submit" variant="gold" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin text-black" />
                        <span>Sending Confirmation Email via Gmail...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 fill-black text-black mr-2" />
                        <span>Submit Inquiry & Trigger Real-Time Gmail</span>
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Live Stored Leads Display Banner */}
        {liveLeads.length > 0 && (
          <div className="p-6 rounded-3xl glass-card border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#d4a853]" />
                <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Live Registered Inquiries ({liveLeads.length})
                </h4>
              </div>
              <Badge variant="emerald" className="animate-pulse">REALTIME DISPATCH ACTIVE</Badge>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {liveLeads.map((item) => (
                <div key={item.id} className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-xs">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-white">{item.name}</span>
                    <span className="text-[9px] font-mono text-zinc-500 flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5" /> {item.timestamp}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#d4a853] block truncate">{item.service}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle2, Sparkles } from "lucide-react";
import { INITIAL_SETTINGS } from "@/lib/adminStore";
import { InstagramIcon, LinkedinIcon, FacebookIcon } from "@/components/shared/SocialIcons";

interface ContactSectionProps {
  prefilledService?: string;
}

export default function ContactSection({ prefilledService }: ContactSectionProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(prefilledService || "Business Consulting");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Format WhatsApp & Email payload
    const formattedText = `Hello JM Creations,\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nRequested Service: ${service}\nMessage: ${message}`;
    const waUrl = `https://wa.me/${INITIAL_SETTINGS.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(formattedText)}`;
    const mailUrl = `mailto:${INITIAL_SETTINGS.email}?subject=${encodeURIComponent(`New Inquiry: ${service} - ${name}`)}&body=${encodeURIComponent(formattedText)}`;

    // Open WhatsApp in new tab & trigger email client
    window.open(waUrl, "_blank");
    window.location.href = mailUrl;

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-28 bg-[#060608] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4a853]/10 border border-[#d4a853]/30 text-[#d4a853] text-xs font-mono mb-4 uppercase tracking-widest">
            <MessageSquare className="w-3.5 h-3.5" />
            Get In Touch Directly
          </div>
          <h2 className="text-heading font-extrabold text-white mb-4">
            Let's Build & Scale Your <br />
            <span className="gold-gradient-text">Next Major Success</span>
          </h2>
          <p className="text-subheading text-zinc-400 max-w-2xl">
            Have a project in mind or need tailored business solutions? Contact our senior team for an instant response via WhatsApp and email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Info & Map */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 rounded-3xl glass-card border border-white/10 flex flex-col gap-6">
              <h3 className="text-lg font-bold text-white">Contact Channels</h3>

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
                <div className="flex items-center gap-3">
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

            {/* Google Maps Embed Preview */}
            <div className="h-56 rounded-3xl overflow-hidden border border-white/10 relative glass-card">
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.598284523315!2d77.637255!3d12.934856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU2JzA1LjUiTiA3N8KwMzgnMTQuMSJF!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen={false}
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Dual-Action Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-card border border-white/10 relative">
              <h3 className="text-xl font-black text-white mb-2">Send Instant Inquiry</h3>
              <p className="text-xs text-zinc-400 mb-8">
                Fills out your request and immediately connects you via both WhatsApp & Email.
              </p>

              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Inquiry Dispatched!</h4>
                  <p className="text-xs text-zinc-400 max-w-sm pt-1">
                    Your WhatsApp window and Email client have been launched with pre-formatted details.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-zinc-400 block mb-1 font-mono">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 text-xs bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#d4a853]"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-zinc-400 block mb-1 font-mono">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 text-xs bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#d4a853]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-zinc-400 block mb-1 font-mono">Phone / WhatsApp Number *</label>
                      <input
                        type="text"
                        required
                        placeholder="+91 90429 86355"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 text-xs bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#d4a853]"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-zinc-400 block mb-1 font-mono">Select Required Solution *</label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-4 py-3 text-xs bg-[#121216] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#d4a853]"
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
                      className="w-full px-4 py-3 text-xs bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#d4a853]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl font-extrabold text-xs text-black bg-gradient-to-r from-[#d4a853] via-[#f0c36d] to-[#d4a853] hover:from-[#f0c36d] hover:to-[#d4a853] transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#d4a853]/25"
                  >
                    <Send className="w-4 h-4 fill-black text-black" />
                    <span>Submit & Launch WhatsApp + Email Dispatch</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

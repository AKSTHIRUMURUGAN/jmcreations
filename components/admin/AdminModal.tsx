"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Shield,
  BarChart3,
  Inbox,
  Briefcase,
  Layers,
  FileText,
  MessageSquare,
  Settings,
  Plus,
  Trash2,
  Edit2,
  CheckCircle,
  Eye,
  Search,
  Phone,
  Mail,
  User,
} from "lucide-react";
import {
  INITIAL_ENQUIRIES,
  INITIAL_SERVICES,
  INITIAL_PORTFOLIO,
  INITIAL_BLOGS,
  INITIAL_TESTIMONIALS,
  INITIAL_SETTINGS,
  EnquiryItem,
  ServiceItem,
  PortfolioItem,
  BlogPost,
  TestimonialItem,
  AppSettings,
} from "@/lib/adminStore";

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminModal({ isOpen, onClose }: AdminModalProps) {
  const [activeTab, setActiveTab] = useState<
    "enquiries" | "analytics" | "services" | "portfolio" | "blogs" | "testimonials" | "settings"
  >("enquiries");

  // Local state for admin CRUD
  const [enquiries, setEnquiries] = useState<EnquiryItem[]>(INITIAL_ENQUIRIES);
  const [services, setServices] = useState<ServiceItem[]>(INITIAL_SERVICES);
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>(INITIAL_PORTFOLIO);
  const [blogs, setBlogs] = useState<BlogPost[]>(INITIAL_BLOGS);
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(INITIAL_TESTIMONIALS);
  const [settings, setSettings] = useState<AppSettings>(INITIAL_SETTINGS);

  const [searchTerm, setSearchTerm] = useState("");
  const [newServiceTitle, setNewServiceTitle] = useState("");
  const [selectedEnquiry, setSelectedEnquiry] = useState<EnquiryItem | null>(null);

  if (!isOpen) return null;

  const markEnquiryStatus = (id: string, status: "New" | "Contacted" | "Closed") => {
    setEnquiries(enquiries.map((e) => (e.id === id ? { ...e, status } : e)));
  };

  const deleteEnquiry = (id: string) => {
    setEnquiries(enquiries.filter((e) => e.id !== id));
  };

  const addService = () => {
    if (!newServiceTitle.trim()) return;
    const newService: ServiceItem = {
      id: `s_${Date.now()}`,
      title: newServiceTitle,
      category: "Consulting",
      shortDesc: "Custom business solution.",
      fullDesc: "Comprehensive service package customized according to client requirements.",
      iconName: "Sparkles",
      deliverables: ["Custom Scope Blueprint", "Implementation Strategy"],
      estimatedPrice: "Custom Quote",
    };
    setServices([newService, ...services]);
    setNewServiceTitle("");
  };

  const deleteService = (id: string) => {
    setServices(services.filter((s) => s.id !== id));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-6xl h-[85vh] bg-[#0c0c0e] border border-white/10 rounded-2xl flex flex-col overflow-hidden shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#d4a853]/15 border border-[#d4a853]/30 text-[#d4a853]">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white flex items-center gap-2">
                JM Creations Admin Console
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  LIVE SYSTEM
                </span>
              </h3>
              <p className="text-xs text-zinc-400 font-mono">Manage Leads, Content & Growth Analytics</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body: Sidebar Navigation + Main Panel */}
        <div className="flex-1 flex overflow-hidden">
          {/* Sidebar */}
          <div className="w-56 border-r border-white/10 bg-[#09090b] p-3 flex flex-col gap-1 shrink-0">
            <button
              onClick={() => setActiveTab("enquiries")}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                activeTab === "enquiries"
                  ? "bg-[#d4a853] text-black font-semibold shadow-lg shadow-[#d4a853]/20"
                  : "text-zinc-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Inbox className="w-4 h-4" />
              <span>Enquiries Log</span>
              <span className="ml-auto text-[10px] px-1.5 py-0.5 rounded bg-black/20 font-mono">
                {enquiries.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("analytics")}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                activeTab === "analytics"
                  ? "bg-[#d4a853] text-black font-semibold shadow-lg shadow-[#d4a853]/20"
                  : "text-zinc-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>Visitor Analytics</span>
            </button>

            <button
              onClick={() => setActiveTab("services")}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                activeTab === "services"
                  ? "bg-[#d4a853] text-black font-semibold shadow-lg shadow-[#d4a853]/20"
                  : "text-zinc-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Services ({services.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("portfolio")}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                activeTab === "portfolio"
                  ? "bg-[#d4a853] text-black font-semibold shadow-lg shadow-[#d4a853]/20"
                  : "text-zinc-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Portfolio Projects</span>
            </button>

            <button
              onClick={() => setActiveTab("blogs")}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                activeTab === "blogs"
                  ? "bg-[#d4a853] text-black font-semibold shadow-lg shadow-[#d4a853]/20"
                  : "text-zinc-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Blog Articles</span>
            </button>

            <button
              onClick={() => setActiveTab("testimonials")}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                activeTab === "testimonials"
                  ? "bg-[#d4a853] text-black font-semibold shadow-lg shadow-[#d4a853]/20"
                  : "text-zinc-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Testimonials</span>
            </button>

            <button
              onClick={() => setActiveTab("settings")}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                activeTab === "settings"
                  ? "bg-[#d4a853] text-black font-semibold shadow-lg shadow-[#d4a853]/20"
                  : "text-zinc-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Settings className="w-4 h-4" />
              <span>Brand Settings</span>
            </button>
          </div>

          {/* Panel View */}
          <div className="flex-1 p-6 overflow-y-auto bg-[#0d0d10]">
            {/* ENQUIRIES TAB */}
            {activeTab === "enquiries" && (
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-white">Client Enquiry Logs</h4>
                    <p className="text-xs text-zinc-400">Incoming inquiries via Website, WhatsApp & Email</p>
                  </div>
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-2.5 text-zinc-500" />
                    <input
                      type="text"
                      placeholder="Search inquiries..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-9 pr-4 py-1.5 text-xs bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#d4a853]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {enquiries
                    .filter((e) => e.name.toLowerCase().includes(searchTerm.toLowerCase()) || e.service.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map((enquiry) => (
                      <div
                        key={enquiry.id}
                        className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:border-[#d4a853]/30 transition-all"
                      >
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-3">
                            <span className="font-semibold text-sm text-white">{enquiry.name}</span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-zinc-300">
                              {enquiry.service}
                            </span>
                            <span
                              className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                                enquiry.status === "New"
                                  ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                                  : enquiry.status === "Contacted"
                                  ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                                  : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                              }`}
                            >
                              {enquiry.status}
                            </span>
                          </div>

                          <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 pt-1">
                            <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-[#d4a853]" /> {enquiry.email}</span>
                            <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-[#d4a853]" /> {enquiry.phone}</span>
                            <span className="font-mono text-[11px] text-zinc-500">{enquiry.date}</span>
                          </div>

                          <p className="text-xs text-zinc-300 italic pt-2">"{enquiry.message}"</p>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            onClick={() => markEnquiryStatus(enquiry.id, "Contacted")}
                            className="px-3 py-1.5 text-xs rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/20 transition-all"
                          >
                            Mark Contacted
                          </button>
                          <button
                            onClick={() => markEnquiryStatus(enquiry.id, "Closed")}
                            className="px-3 py-1.5 text-xs rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 transition-all"
                          >
                            Close
                          </button>
                          <button
                            onClick={() => deleteEnquiry(enquiry.id)}
                            className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-all"
                            title="Delete Lead"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* ANALYTICS TAB */}
            {activeTab === "analytics" && (
              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="text-base font-bold text-white">Website Visitor & Click Statistics</h4>
                  <p className="text-xs text-zinc-400">Real-time engagement telemetry across digital channels</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col gap-2">
                    <span className="text-xs text-zinc-400 font-mono uppercase">Total Site Visits</span>
                    <span className="text-2xl font-black text-white">24,850</span>
                    <span className="text-[10px] text-emerald-400">↑ 18% vs last month</span>
                  </div>

                  <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col gap-2">
                    <span className="text-xs text-zinc-400 font-mono uppercase">WhatsApp Click Rate</span>
                    <span className="text-2xl font-black text-[#d4a853]">1,420</span>
                    <span className="text-[10px] text-emerald-400">↑ 24% conversion</span>
                  </div>

                  <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col gap-2">
                    <span className="text-xs text-zinc-400 font-mono uppercase">Quote Calculator Leads</span>
                    <span className="text-2xl font-black text-amber-400">385</span>
                    <span className="text-[10px] text-zinc-400">Avg value $4.2k</span>
                  </div>

                  <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col gap-2">
                    <span className="text-xs text-zinc-400 font-mono uppercase">Form Submissions</span>
                    <span className="text-2xl font-black text-emerald-400">194</span>
                    <span className="text-[10px] text-emerald-400">100% response SLA</span>
                  </div>
                </div>

                {/* Popular Services Telemetry */}
                <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col gap-4">
                  <h5 className="text-xs font-mono text-[#d4a853] uppercase">Top Clicked Services Breakdown</h5>
                  <div className="flex flex-col gap-3">
                    <div>
                      <div className="flex justify-between text-xs text-zinc-300 pb-1">
                        <span>Website Design & Dev</span>
                        <span className="font-mono">38% clicks</span>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#d4a853] to-[#f0c36d]" style={{ width: "38%" }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs text-zinc-300 pb-1">
                        <span>Digital Marketing & Meta/Google Ads</span>
                        <span className="font-mono">29% clicks</span>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#d4a853] to-[#f0c36d]" style={{ width: "29%" }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs text-zinc-300 pb-1">
                        <span>Brand Identity & Logo Design</span>
                        <span className="font-mono">18% clicks</span>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#d4a853] to-[#f0c36d]" style={{ width: "18%" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SERVICES TAB */}
            {activeTab === "services" && (
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-white">Services Catalog Manager (21 Total)</h4>
                    <p className="text-xs text-zinc-400">Add, edit or toggle visibility of business solutions</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="New Service Title..."
                      value={newServiceTitle}
                      onChange={(e) => setNewServiceTitle(e.target.value)}
                      className="px-3 py-1.5 text-xs bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none"
                    />
                    <button
                      onClick={addService}
                      className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-[#d4a853] text-black flex items-center gap-1.5"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Service</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {services.map((service, index) => (
                    <div
                      key={service.id}
                      className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start justify-between gap-3"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-[#d4a853]">#{index + 1}</span>
                          <h5 className="text-sm font-semibold text-white">{service.title}</h5>
                        </div>
                        <span className="text-[10px] text-zinc-400 font-mono">{service.category}</span>
                        <p className="text-xs text-zinc-400 pt-1 line-clamp-2">{service.shortDesc}</p>
                      </div>

                      <button
                        onClick={() => deleteService(service.id)}
                        className="p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-all shrink-0"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PORTFOLIO TAB */}
            {activeTab === "portfolio" && (
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-white">Portfolio & Case Studies</h4>
                    <p className="text-xs text-zinc-400">Manage client success stories and visual assets</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {portfolio.map((item) => (
                    <div key={item.id} className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col gap-2">
                      <h5 className="text-sm font-bold text-white">{item.title}</h5>
                      <span className="text-xs text-[#d4a853] font-mono">{item.metrics}</span>
                      <p className="text-xs text-zinc-400">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* BLOGS TAB */}
            {activeTab === "blogs" && (
              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="text-base font-bold text-white">Blog & Insights CMS</h4>
                  <p className="text-xs text-zinc-400">Publish thought leadership articles to boost SEO & authority</p>
                </div>

                <div className="flex flex-col gap-3">
                  {blogs.map((blog) => (
                    <div key={blog.id} className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                      <div>
                        <h5 className="text-sm font-bold text-white">{blog.title}</h5>
                        <span className="text-xs text-zinc-400">{blog.category} • {blog.readTime}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TESTIMONIALS TAB */}
            {activeTab === "testimonials" && (
              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="text-base font-bold text-white">Client Testimonials</h4>
                  <p className="text-xs text-zinc-400">Manage social proof ratings & executive quotes</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {testimonials.map((t) => (
                    <div key={t.id} className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-white">{t.name}</span>
                        <span className="text-xs text-[#d4a853] font-mono">{"★".repeat(t.rating)}</span>
                      </div>
                      <span className="text-xs text-zinc-400">{t.role}, {t.company}</span>
                      <p className="text-xs text-zinc-300 italic">"{t.comment}"</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SETTINGS TAB */}
            {activeTab === "settings" && (
              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="text-base font-bold text-white">Brand Contact & Channel Settings</h4>
                  <p className="text-xs text-zinc-400">Update global email, WhatsApp number, and social URLs</p>
                </div>

                <div className="flex flex-col gap-4 max-w-xl">
                  <div>
                    <label className="text-xs text-zinc-400 block mb-1">Enquiry Email Address</label>
                    <input
                      type="email"
                      value={settings.email}
                      onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-zinc-400 block mb-1">WhatsApp Number (with country code)</label>
                    <input
                      type="text"
                      value={settings.whatsappNumber}
                      onChange={(e) => setSettings({ ...settings, whatsappNumber: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-zinc-400 block mb-1">Instagram Profile URL</label>
                    <input
                      type="text"
                      value={settings.instagram}
                      onChange={(e) => setSettings({ ...settings, instagram: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-zinc-400 block mb-1">LinkedIn Profile URL</label>
                    <input
                      type="text"
                      value={settings.linkedin}
                      onChange={(e) => setSettings({ ...settings, linkedin: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-zinc-400 block mb-1">Facebook Page URL</label>
                    <input
                      type="text"
                      value={settings.facebook}
                      onChange={(e) => setSettings({ ...settings, facebook: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none"
                    />
                  </div>

                  <button
                    onClick={() => alert("Brand Settings Saved Successfully!")}
                    className="mt-2 py-2.5 rounded-xl bg-[#d4a853] text-black font-bold text-xs shadow-lg shadow-[#d4a853]/20"
                  >
                    Save Global Settings
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

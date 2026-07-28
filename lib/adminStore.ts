"use client";

export interface ServiceItem {
  id: string;
  title: string;
  category: "Consulting" | "Design & Tech" | "Digital Marketing" | "Media & Content" | "Operations & Branding";
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
  estimatedPrice: string;
  popular?: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  client: string;
  metrics: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  comment: string;
  rating: number;
  avatar: string;
  metric: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  summary: string;
  content: string;
  coverImage: string;
}

export interface CareerItem {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
  requirements: string[];
}

export interface EnquiryItem {
  id: string;
  date: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
  status: "New" | "Contacted" | "Closed";
}

export interface AppSettings {
  email: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  phoneDisplay: string;
  address: string;
  instagram: string;
  linkedin: string;
  facebook: string;
}

export const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: "s1",
    title: "Business Consulting",
    category: "Consulting",
    shortDesc: "Strategic roadmap planning, operations efficiency, and market positioning.",
    fullDesc: "We provide high-impact business analysis, workflow structuring, revenue optimization, and long-term scaling strategy for established enterprises and growth businesses.",
    iconName: "Briefcase",
    deliverables: ["Market Gap Analysis", "Financial Projections", "Operational Blueprint", "Growth Roadmap"],
    estimatedPrice: "Custom Quote",
    popular: true,
  },
  {
    id: "s2",
    title: "Startup Consulting",
    category: "Consulting",
    shortDesc: "End-to-end launch guidance from MVP definition to pitch deck creation.",
    fullDesc: "Complete ecosystem support for early-stage founders: go-to-market strategies, business model validation, investor readiness, and operational setup.",
    iconName: "Rocket",
    deliverables: ["Go-to-Market Blueprint", "Pitch Deck Optimization", "Business Model Canvas", "Founders Checklist"],
    estimatedPrice: "Custom Quote",
  },
  {
    id: "s3",
    title: "Brand Identity & Logo Design",
    category: "Operations & Branding",
    shortDesc: "Cinematic visual identity, logo design, typography, and brand style guides.",
    fullDesc: "Crafting memorable luxury visual identities that command authority. Includes primary & secondary logos, typography systems, color palettes, and brand guidelines.",
    iconName: "Palette",
    deliverables: ["Master Vector Logo Suite", "Color System & Typography", "Brand Guidelines Book", "Stationery Mockups"],
    estimatedPrice: "Popular Package",
    popular: true,
  },
  {
    id: "s4",
    title: "Website Design & Development",
    category: "Design & Tech",
    shortDesc: "High-converting, responsive Next.js/React websites with modern motion design.",
    fullDesc: "Bespoke web architecture engineered for speed, SEO, aesthetic excellence, and visitor-to-client conversion. Fully accessible and mobile-optimized.",
    iconName: "Globe",
    deliverables: ["Next.js App Architecture", "Framer Motion Animations", "Mobile Responsive Layout", "SEO Meta Structure"],
    estimatedPrice: "Popular Package",
    popular: true,
  },
  {
    id: "s5",
    title: "E-commerce Website Development",
    category: "Design & Tech",
    shortDesc: "Custom high-volume e-commerce storefronts with seamless payment gateways.",
    fullDesc: "Scalable online stores built with fluid checkout experience, automated inventory management, payment integration, and conversion rate optimization.",
    iconName: "ShoppingBag",
    deliverables: ["Payment Gateway Setup", "Product Catalog Engine", "Cart & Checkout Flow", "Analytics Integration"],
    estimatedPrice: "Custom Quote",
  },
  {
    id: "s6",
    title: "Digital Marketing",
    category: "Digital Marketing",
    shortDesc: "Multi-channel digital campaigns designed to maximize brand reach and ROI.",
    fullDesc: "Data-driven marketing strategies spanning performance channels, retargeting funnels, campaign analytics, and continuous conversion optimization.",
    iconName: "TrendingUp",
    deliverables: ["Funnel Strategy Blueprint", "Omnichannel Ad Setup", "Performance Dashboard", "Weekly ROI Reporting"],
    estimatedPrice: "Monthly Retainer",
    popular: true,
  },
  {
    id: "s7",
    title: "Social Media Management",
    category: "Digital Marketing",
    shortDesc: "Curated content creation, grid aesthetic planning, and audience engagement.",
    fullDesc: "Full management of Instagram, LinkedIn, and Facebook brand channels. Includes monthly content calendars, visual asset design, caption copywriting, and community management.",
    iconName: "Share2",
    deliverables: ["30 Monthly Visual Posts", "Reels Scripting & Editing", "Content Calendar", "Community Engagement"],
    estimatedPrice: "Monthly Retainer",
  },
  {
    id: "s8",
    title: "Meta Advertising (FB & Insta)",
    category: "Digital Marketing",
    shortDesc: "High-ROI Facebook & Instagram ad funnels for direct lead acquisition.",
    fullDesc: "Targeted Meta ad management utilizing lookalike audiences, retargeting sequences, high-converting video/carousel creatives, and A/B testing.",
    iconName: "Target",
    deliverables: ["Ad Creative Design", "Copywriting & Angles", "Audience Targeting", "Pixel Tracking Setup"],
    estimatedPrice: "Ad Spend + Retainer",
  },
  {
    id: "s9",
    title: "Google Ads (PPC)",
    category: "Digital Marketing",
    shortDesc: "Intent-based Search, Display, and Video ads for high-converting traffic.",
    fullDesc: "Capture high-intent buyers on Google Search & YouTube. Keyword research, negative keyword management, ad copywriting, and landing page optimization.",
    iconName: "Search",
    deliverables: ["Search Campaign Setup", "Negative Keyword Audit", "Quality Score Optimization", "Conversion Tracking"],
    estimatedPrice: "Ad Spend + Retainer",
  },
  {
    id: "s10",
    title: "Search Engine Optimization (SEO)",
    category: "Digital Marketing",
    shortDesc: "Organic search ranking, GEO/AEO optimization, and technical site audit.",
    fullDesc: "Dominate search engine results and AI answer engines. Technical SEO, keyword mapping, high-authority backlink outreach, and Schema markup generation.",
    iconName: "BarChart3",
    deliverables: ["Technical SEO Audit", "On-Page Optimization", "JSON-LD Schema Setup", "Monthly Ranking Reports"],
    estimatedPrice: "Monthly Retainer",
    popular: true,
  },
  {
    id: "s11",
    title: "Content Creation & Copywriting",
    category: "Media & Content",
    shortDesc: "Persuasive sales copy, website copy, video scripts, and brand storytelling.",
    fullDesc: "Words that convert casual readers into loyal buyers. Brand messaging frameworks, website landing page copy, sales email sequences, and scriptwriting.",
    iconName: "FileText",
    deliverables: ["Website Sales Copy", "Video Script Writing", "Email Nurture Flow", "Brand Messaging Guide"],
    estimatedPrice: "Project Based",
  },
  {
    id: "s12",
    title: "Graphic Design",
    category: "Media & Content",
    shortDesc: "Bespoke marketing collateral, social banners, pitch decks, and print graphics.",
    fullDesc: "Visual aesthetics tailored to elevate brand perception across print, digital ads, pitch presentations, and promotional assets.",
    iconName: "Layers",
    deliverables: ["Pitch Deck Presentation", "Social Media Graphics", "Brochures & Flyers", "Banner Artworks"],
    estimatedPrice: "Project Based",
  },
  {
    id: "s13",
    title: "Video Editing & Motion Graphics",
    category: "Media & Content",
    shortDesc: "Cinematic commercial video edits, 2D/3D motion graphics, and social reels.",
    fullDesc: "Engaging video content with sound design, color grading, visual FX, motion text, and dynamic transitions built for high engagement.",
    iconName: "Video",
    deliverables: ["Color Grading & FX", "Motion Graphic Overlays", "Sound Design & Mix", "Multi-Ratio Exports"],
    estimatedPrice: "Project Based",
    popular: true,
  },
  {
    id: "s14",
    title: "Product Photography & Videography",
    category: "Media & Content",
    shortDesc: "Studio photography, lifestyle product shoots, and 4K commercial videos.",
    fullDesc: "Professional studio setup with cinematic lighting, model staging, macro detail shots, and 4K video showcase for luxury products.",
    iconName: "Camera",
    deliverables: ["High-Res Color Corrected Photos", "4K Video Snippets", "Studio Lighting Setup", "Commercial License"],
    estimatedPrice: "Shoot Based",
  },
  {
    id: "s15",
    title: "WhatsApp Marketing",
    category: "Digital Marketing",
    shortDesc: "Automated WhatsApp API broadcast campaigns, interactive chatbots, and flows.",
    fullDesc: "Direct-to-customer communication engine with verified WhatsApp Business API integration, catalog showcases, interactive reply triggers, and broadcast analytics.",
    iconName: "MessageSquare",
    deliverables: ["WhatsApp API Setup", "Broadcast Campaign Creation", "Chatbot Auto-Responder", "Contact Segmentation"],
    estimatedPrice: "Campaign Based",
  },
  {
    id: "s16",
    title: "Email Marketing",
    category: "Digital Marketing",
    shortDesc: "Automated customer nurture sequences, newsletter design, and sales broadcasts.",
    fullDesc: "Drive recurring revenue with segmented email flows: welcome series, abandoned cart recovery, product launches, and high-deliverability campaigns.",
    iconName: "Mail",
    deliverables: ["Klaviyo/Mailchimp Setup", "HTML Newsletter Templates", "Automated Flow Setup", "Deliverability Audit"],
    estimatedPrice: "Monthly Retainer",
  },
  {
    id: "s17",
    title: "Lead Generation",
    category: "Digital Marketing",
    shortDesc: "B2B and B2C qualified lead acquisition systems with CRM integration.",
    fullDesc: "End-to-end lead generation engines combining high-converting landing pages, targeted ads, lead magnet creation, and CRM routing.",
    iconName: "UserCheck",
    deliverables: ["Lead Magnet Asset", "Landing Page Creation", "CRM Automation Flow", "Lead Qualification Scoring"],
    estimatedPrice: "Pay-Per-Lead / Retainer",
    popular: true,
  },
  {
    id: "s18",
    title: "Influencer Marketing",
    category: "Digital Marketing",
    shortDesc: "End-to-end influencer outreach, negotiation, campaign tracking, and content usage.",
    fullDesc: "Connect with key opinion leaders and niche content creators to boost brand authority, social proof, and organic virality.",
    iconName: "Users",
    deliverables: ["Influencer Identification", "Outreach & Contracts", "Content Brief Creation", "ROI Tracking"],
    estimatedPrice: "Campaign Based",
  },
  {
    id: "s19",
    title: "Printing Solutions",
    category: "Operations & Branding",
    shortDesc: "Premium physical print production: business cards, brochures, packages, banners.",
    fullDesc: "High-grade tactile print materials with gold foil stamping, spot UV, embossed textures, custom packaging boxes, and corporate event prints.",
    iconName: "Printer",
    deliverables: ["Gold Foil Business Cards", "Custom Product Packaging", "Large Format Banners", "Corporate Letterheads"],
    estimatedPrice: "Quantity Based",
  },
  {
    id: "s20",
    title: "Event Branding & Management",
    category: "Operations & Branding",
    shortDesc: "Complete visual design, staging, signage, and marketing for corporate events.",
    fullDesc: "Elevate physical gatherings into unforgettable brand experiences. Backdrop design, stall setup, stage lighting coordination, and event coverage.",
    iconName: "Award",
    deliverables: ["Stage & Backdrop Design", "Event Entrance Signage", "Exhibition Stall Setup", "On-site Media Team"],
    estimatedPrice: "Event Based",
  },
  {
    id: "s21",
    title: "Business Registration & Support",
    category: "Consulting",
    shortDesc: "Official entity incorporation, GST registration, trademark filing, and compliance.",
    fullDesc: "Seamless legal and registration assistance for startups and expanding companies: Private Limited, LLP, MSME, GST, and trademark protection.",
    iconName: "ShieldCheck",
    deliverables: ["Company Incorporation", "GST & MSME Registration", "Trademark Application", "Compliance Filing"],
    estimatedPrice: "Filing Based",
  },
];

export const INITIAL_PORTFOLIO: PortfolioItem[] = [
  {
    id: "p1",
    title: "Aura Luxe — High-End Fashion Brand Rebrand",
    category: "Branding & Web",
    client: "Aura Luxe International",
    metrics: "+240% Direct Sales • 3.8x ROI",
    description: "Complete visual identity, 3D web experience, and Shopify e-commerce engine for luxury apparel line.",
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    tags: ["Brand Identity", "E-commerce", "Meta Ads"],
  },
  {
    id: "p2",
    title: "Vanguard Tech — B2B Lead Gen Campaign",
    category: "Digital Marketing",
    client: "Vanguard Solutions",
    metrics: "1,450+ Qualified B2B Leads",
    description: "Multi-channel Google Ads and LinkedIn funnel resulting in $1.2M pipeline growth within 90 days.",
    imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
    tags: ["Google Ads", "SEO", "Lead Generation"],
  },
  {
    id: "p3",
    title: "Verde Gourmet — Event Branding & Launch",
    category: "Events & Media",
    client: "Verde Culinary Group",
    metrics: "5,000+ Opening Night Attendees",
    description: "Cinematic commercial production, influencer campaign, physical print assets, and event staging.",
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
    tags: ["Video Editing", "Event Branding", "Influencer"],
  },
];

export const INITIAL_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    name: "Vikram Malhotra",
    role: "Founder & CEO",
    company: "Apex Global Ventures",
    comment: "JM Creations transformed our entire digital presence. Their attention to detail, luxury aesthetic, and strategic campaign execution yielded a 3.4x return on our ad spend.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    metric: "3.4x Revenue Growth",
  },
  {
    id: "t2",
    name: "Priya Sundaram",
    role: "Marketing Director",
    company: "Lumiere Jewels",
    comment: "The custom website and brand identity delivered by JM Creations exceeded every expectation. Our online inquiries doubled in the first month alone.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
    metric: "+115% Inquiries",
  },
  {
    id: "t3",
    name: "Arjun Reddy",
    role: "Managing Director",
    company: "Elevate Real Estate",
    comment: "From corporate event branding to targeted WhatsApp & Google lead campaigns, JM Creations handled everything seamlessly under one roof.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    metric: "1,200+ Leads Generated",
  },
];

export const INITIAL_BLOGS: BlogPost[] = [
  {
    id: "b1",
    title: "How to Build a High-Converting Brand Identity in 2026",
    category: "Branding",
    readTime: "5 min read",
    date: "July 24, 2026",
    author: "JM Creations Strategy Team",
    summary: "Discover the core principles of luxury brand positioning, visual hierarchy, and emotional trust triggers.",
    content: "Building a brand identity is no longer just about designing a logo. In today's digital landscape, luxury perception is built through micro-interactions, consistent color harmony, and authoritative storytelling...",
    coverImage: "https://images.unsplash.com/photo-1542744094-3a317272018a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "b2",
    title: "Meta Ads vs. Google Ads: Which Strategy Drives Higher ROI?",
    category: "Digital Marketing",
    readTime: "7 min read",
    date: "July 18, 2026",
    author: "Performance Growth Team",
    summary: "A deep dive comparison of search intent vs visual discovery campaigns for modern business growth.",
    content: "Choosing between Meta Ads and Google Ads depends heavily on your buyer's journey. Google captures immediate commercial intent, while Meta excels at visual discovery and retargeting...",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
];

export const INITIAL_CAREERS: CareerItem[] = [
  {
    id: "c1",
    title: "Senior UI/UX & Motion Designer",
    department: "Design",
    type: "Full-Time / Remote",
    location: "Hybrid / Remote",
    description: "Lead the visual direction for luxury corporate clients, crafting high-end web layouts and motion prototypes.",
    requirements: ["4+ years experience with Figma, Framer, GSAP", "Portfolio showcasing luxury/cinematic UI design", "Strong eye for typography and layout hierarchy"],
  },
  {
    id: "c2",
    title: "Performance Marketing Lead (Meta & Google)",
    department: "Digital Marketing",
    type: "Full-Time",
    location: "On-site / Hybrid",
    description: "Manage high-budget ad accounts, optimize lead conversion funnels, and deliver scalable client ROI.",
    requirements: ["3+ years handling $50k+/mo ad spend", "Expertise in Meta Pixel, CAPI, and Google Ads PPC", "Analytical mindset with reporting mastery"],
  },
];

export const INITIAL_SETTINGS: AppSettings = {
  email: "jmcreationinfo@gmail.com",
  whatsappNumber: "+919042986355",
  whatsappDisplay: "+91 90429 86355",
  phoneDisplay: "+91 90429 86355",
  address: "JM Creations Corporate Tower, Suite 402, Business District, India",
  instagram: "https://www.instagram.com/j_m__creation",
  linkedin: "https://www.linkedin.com/in/jm-creations-971a43423",
  facebook: "https://www.facebook.com/share/19FRBKVjDX/",
};

export const INITIAL_ENQUIRIES: EnquiryItem[] = [
  {
    id: "e1",
    date: "2026-07-28 10:15 AM",
    name: "Rajesh Kumar",
    email: "rajesh@techcorp.in",
    phone: "+91 98765 43210",
    service: "Website Design & Development",
    budget: "Custom Package",
    message: "We need an end-to-end corporate portal redesign with modern motion graphics and lead funnel.",
    status: "New",
  },
  {
    id: "e2",
    date: "2026-07-27 04:45 PM",
    name: "Anita Sharma",
    email: "anita@luxeinterior.com",
    phone: "+91 91234 56789",
    service: "Brand Identity & Logo Design",
    budget: "Standard Package",
    message: "Looking for complete rebranding including logo, print collateral, and luxury social media design.",
    status: "Contacted",
  },
];

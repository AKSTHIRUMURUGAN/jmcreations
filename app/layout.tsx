import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JM Creations | End-to-End Business Solutions Company",
  description:
    "JM Creations provides business & startup consulting, brand identity, website & e-commerce development, digital marketing (Meta & Google Ads), SEO, video production, event branding, printing, and business registration.",
  keywords: [
    "JM Creations",
    "Business Solutions Company",
    "Website Design and Development",
    "Brand Identity Design",
    "Digital Marketing Agency",
    "Meta Ads",
    "Google Ads PPC",
    "SEO Services",
    "Video Editing",
    "Printing Solutions",
    "Startup Consulting",
    "Event Branding",
  ],
  authors: [{ name: "JM Creations" }],
  openGraph: {
    title: "JM Creations | End-to-End Business Solutions Company",
    description:
      "Transforming businesses with luxury design, Next.js web applications, performance marketing, video editing, and complete business support.",
    url: "https://jmcreations.in",
    siteName: "JM Creations",
    images: [
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "JM Creations Business Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JM Creations | End-to-End Business Solutions",
    description: "End-to-end consulting, website development, performance marketing, and branding.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "JM Creations",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    email: "jmcreationinfo@gmail.com",
    telephone: "+919042986355",
    url: "https://jmcreations.in",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Suite 402, Business District",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.instagram.com/j_m__creation",
      "https://www.linkedin.com/in/jm-creations-971a43423",
      "https://www.facebook.com/share/19FRBKVjDX/",
    ],
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Consulting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Startup Consulting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brand Identity & Logo Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Design & Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-commerce Website Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Marketing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Meta Advertising" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Ads" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Search Engine Optimization (SEO)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Content Creation & Copywriting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Graphic Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Video Editing & Motion Graphics" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Product Photography & Videography" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "WhatsApp Marketing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Email Marketing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lead Generation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Influencer Marketing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Printing Solutions" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Event Branding & Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Registration & Support" } },
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jmcreations.in"),
  title: {
    default: "JM Creations | End-to-End Business Solutions Company",
    template: "%s | JM Creations",
  },
  description:
    "JM Creations is an end-to-end business solutions company specializing in business consulting, brand identity, Next.js website & e-commerce development, performance marketing (Meta & Google Ads), SEO, video production, and compliance support.",
  keywords: [
    "JM Creations",
    "Business Solutions Company",
    "Startup Consulting",
    "Website Design and Development",
    "Next.js E-Commerce Store",
    "Brand Identity Design",
    "Digital Marketing Agency",
    "Meta Ads Agency",
    "Google Ads PPC",
    "SEO Services",
    "Video Production & Editing",
    "Printing Solutions",
    "MSME Registration Support",
  ],
  authors: [{ name: "JM Creations", url: "https://jmcreations.in" }],
  creator: "JM Creations",
  publisher: "JM Creations",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
  alternates: {
    canonical: "https://jmcreations.in",
  },
  openGraph: {
    title: "JM Creations | End-to-End Business Solutions Company",
    description:
      "Transforming businesses with strategic consulting, Next.js web applications, Meta & Google Ads performance marketing, video production, and compliance.",
    url: "https://jmcreations.in",
    siteName: "JM Creations",
    images: [
      {
        url: "/logo.jpeg",
        width: 800,
        height: 800,
        alt: "JM Creations Business Solutions Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JM Creations | End-to-End Business Solutions",
    description: "360° consulting, Next.js web apps, performance marketing, and brand identity.",
    images: ["/logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "JM Creations",
    image: "https://jmcreations.in/logo.jpeg",
    logo: "https://jmcreations.in/logo.jpeg",
    email: "jmcreationinfo@gmail.com",
    telephone: "+919042986355",
    url: "https://jmcreations.in",
    priceRange: "$$",
    description: "End-to-End Business Solutions Company offering strategy consulting, website development, Meta/Google Ads, video editing, printing, and business registration.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Suite 402, Business District",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.934856,
      longitude: 77.637255,
    },
    sameAs: [
      "https://www.instagram.com/j_m__creation",
      "https://www.linkedin.com/in/jm-creations-971a43423",
      "https://www.facebook.com/share/19FRBKVjDX/",
    ],
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "JM Creations",
    url: "https://jmcreations.in",
    logo: "https://jmcreations.in/logo.jpeg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+919042986355",
      contactType: "customer support",
      areaServed: "IN",
      availableLanguage: ["English", "Tamil", "Hindi"],
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "JM Creations",
    url: "https://jmcreations.in",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://jmcreations.in/catalogue?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[#0a0a0a] text-white selection:bg-[#d4a853] selection:text-black"
      >
        {children}
      </body>
    </html>
  );
}

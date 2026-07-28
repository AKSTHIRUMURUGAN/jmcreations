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
  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
  openGraph: {
    title: "JM Creations | End-to-End Business Solutions Company",
    description:
      "Transforming businesses with luxury design, Next.js web applications, performance marketing, video editing, and complete business support.",
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
    description: "End-to-end consulting, website development, performance marketing, and branding.",
    images: ["/logo.jpeg"],
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
    image: "https://jmcreations.in/logo.jpeg",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[#0a0a0a] text-white"
      >
        {children}
      </body>
    </html>
  );
}

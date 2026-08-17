import type { Metadata } from "next";
import OurImpactClient from "@/components/impact/OurImpactClient";

export const metadata: Metadata = {
  title: "Our Real Impact | 100% Unfiltered Student Proof & Milestones",
  description:
    "Explore the genuine, unfiltered ground reality of JM Creations and Career Catalyst. Real student audio notes, live college auditorium sessions, verified LinkedIn milestones, and open Google Drive proof archives.",
  keywords: [
    "JM Creations Impact",
    "Career Catalyst Results",
    "Student Testimonials Unfiltered",
    "College Coding Workshops",
    "Placement Success Stories",
    "Tech Education Ground Proof",
    "Coimbatore Tech Bootcamps",
    "Student Voice Notes",
    "Live Project Deployments",
  ],
  alternates: {
    canonical: "https://jmcreations.in/our-impact",
  },
  openGraph: {
    title: "Our Real Impact | JM Creations Solutions",
    description:
      "Zero scripted actors. Zero fake testimonials. Pure transformation from the hearts of thousands of students across 48+ engineering colleges.",
    url: "https://jmcreations.in/our-impact",
    siteName: "JM Creations",
    images: [
      {
        url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "JM Creations Real Ground Impact across Colleges",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Real Impact | JM Creations",
    description:
      "Real student audio notes, live auditorium sessions, verified LinkedIn milestones, and open proof archives.",
    images: ["https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop"],
  },
};

export default function OurImpactPage() {
  const impactSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "JM Creations & Career Catalyst",
    url: "https://jmcreations.in/our-impact",
    logo: "https://jmcreations.in/logo.jpeg",
    description: "End-to-end practical tech workshops, Career Catalyst mentorship, and placement acceleration.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      ratingCount: "520",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Dharshan R.",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        reviewBody:
          "Before attending JM Creations Career Catalyst session, I was rejected in 4 technical screening rounds. Their DSA & System Design breakdown literally cleared my concepts in 2 days. Cracked my dream role at ₹8.5 LPA!",
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Kavya Murugan",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        reviewBody:
          "No fake PPTs or boring theory. Sir showed live deployments with Next.js, GitHub CI/CD, and real client workflows right in front of us.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(impactSchema) }}
      />
      <OurImpactClient />
    </>
  );
}

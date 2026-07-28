"use client";

import React from "react";
import { HelpCircle } from "lucide-react";
import { ShinyText } from "@/components/ui/ShinyText";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What business services does JM Creations provide?",
    answer: "JM Creations is a 360° end-to-end business solutions company. We provide business & startup consulting, registration & government licenses (MSME, GST, Trademark, Private Limited), custom Next.js website & e-commerce development, performance digital marketing (Meta & Google Ads), SEO, content creation, video editing, photography, printing solutions, and corporate event management.",
    category: "General",
  },
  {
    question: "How fast can you launch a business website or digital ad campaign?",
    answer: "Landing pages and standard business websites are typically delivered within 5 to 7 business days. Custom e-commerce stores and web platforms take 2 to 3 weeks. Performance marketing ad campaigns (Meta & Google Ads) are set up, audited, and launched within 48 to 72 hours.",
    category: "Delivery",
  },
  {
    question: "How do lead inquiries and quote requests work?",
    answer: "When a potential client submits an inquiry form, the payload is formatted instantly and dispatched directly to our executive WhatsApp (+91 90429 86355) and email (jmcreationinfo@gmail.com). A senior strategy lead contacts you within 15 minutes.",
    category: "Operations",
  },
  {
    question: "Do you offer customized monthly marketing and maintenance packages?",
    answer: "Yes! We offer 3 standard monthly retainers starting from ₹15,000/month (Basic), ₹25,000/month (Standard), and ₹50,000/month (Premium Enterprise), as well as custom performance marketing packages tailored to your exact ad budget and revenue targets.",
    category: "Pricing",
  },
  {
    question: "Can JM Creations assist with official government compliance & trademark filing?",
    answer: "Yes. Our legal & compliance division handles MSME, GST, Trade License, FSSAI, Import-Export Code (IEC), Private Limited / LLP incorporation, and Trademark & Copyright filings with full documentation support.",
    category: "Legal",
  },
];

export default function FAQSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" aria-label="Frequently Asked Questions and Answers" className="relative py-28 bg-[#09090b] border-t border-white/10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <Badge variant="gold" className="mb-4">
            <HelpCircle className="w-3.5 h-3.5 mr-1.5" />
            Answer Engine & Search FAQ
          </Badge>
          <h2 className="text-heading font-extrabold text-white mb-4">
            Everything You Need to Know About <br />
            <ShinyText text="Our Solutions & Execution" speed={4} />
          </h2>
          <p className="text-subheading text-zinc-400 max-w-xl">
            Clear, transparent answers regarding our business process, pricing structures, compliance filing, and project delivery SLAs.
          </p>
        </div>

        {/* Accordion using shadcn UI primitive */}
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger>
                <div className="flex items-center gap-3">
                  <Badge variant="gold">0{index + 1}</Badge>
                  <span>{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

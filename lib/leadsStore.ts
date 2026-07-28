export interface LeadItem {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  timestamp: string;
  status: "New" | "Contacted" | "Closed";
}

// In-memory leads store
export const IN_MEMORY_LEADS: LeadItem[] = [
  {
    id: "lead-101",
    name: "Vikram Sharma",
    email: "vikram@techventures.in",
    phone: "+91 98765 43210",
    service: "Meta (FB & Insta) Advertising",
    message: "Looking for performance ad management for scaling e-commerce sales to 50L/mo.",
    timestamp: "2026-07-28 14:30",
    status: "New",
  },
  {
    id: "lead-102",
    name: "Ananya Roy",
    email: "ananya.roy@fashionhub.com",
    phone: "+91 91234 56789",
    service: "Website Design & Development",
    message: "Need a Next.js 16 high-converting brand showcase and catalogue site.",
    timestamp: "2026-07-28 11:15",
    status: "Contacted",
  },
];

export function addLead(leadData: Omit<LeadItem, "id" | "timestamp" | "status">): LeadItem {
  const newLead: LeadItem = {
    ...leadData,
    id: `lead-${Date.now()}`,
    timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    status: "New",
  };
  IN_MEMORY_LEADS.unshift(newLead);
  return newLead;
}

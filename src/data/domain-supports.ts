import type { SupportSection } from "@/types/domain-support";
import { MessageSquare, Phone } from "lucide-react";

export const supportSectionData: SupportSection = {
  titleParts: [
    "Need Some Help?",
    "Call to get assist with",
    "Registering your Domains",
  ],
  description:
    "Our team of experts is always available to assist you with registering your desired domains with Hostnin. For live 24/7 assistance, call us on WhatsApp. We're here to help you every step of the way.",
  buttons: [
    {
      label: "Call Now",
      href: "tel:+8801325875955",
      icon: Phone,
    },
    {
      label: "WhatsApp Now",
      href: "https://wa.me/8801325875955",
      icon: MessageSquare,
    },
  ],
  image: {
    src: "/assets/hostnin-team.jpg",
    alt: "Support Team - Hostnin Customer Service Representatives",
  },
};

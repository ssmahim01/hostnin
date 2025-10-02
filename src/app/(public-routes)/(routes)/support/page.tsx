import { SupportTicketForm } from "../../components/about/support/support-ticket-form";
import { SupportHeader } from "../../components/about/support/support-header";
import { SupportFeatures } from "../../components/about/support/support-features";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Ticket | Hostnin",
  description:
    "Get professional assistance from the Hostnin support team. Submit a support ticket for hosting, billing, domain or technical issues and we’ll respond promptly.",
  keywords: [
    "support ticket",
    "customer support",
    "web hosting support",
    "domain support",
    "technical support",
    "billing support",
  ],
   openGraph: {
    title: "Support Ticket | Hostnin",
    description:
      "Get professional assistance from the Hostnin support team. Submit a support ticket for hosting, billing, domain or technical issues and we’ll respond promptly.",
    url: "https://hostnin.com/support",
    type: "website",
    images: [
      {
        url: "https://hostnin.com/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hostnin Hosting Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Support Ticket | Hostnin",
    description:
      "Get professional assistance from the Hostnin support team. Submit a support ticket for hosting, billing, domain or technical issues and we’ll respond promptly.",
    images: ["https://hostnin.com/assets/og-image.jpg"],
  },
};

export default function SupportPage() {
  return (
    <div className="pt-20 pb-16 container mx-auto px-4 lg:px-8 max-w-7xl">
      <SupportHeader />
      <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
        <div className="lg:col-span-2">
          <SupportTicketForm />
        </div>
        <div className="lg:col-span-1">
          <SupportFeatures />
        </div>
      </div>
    </div>
  );
}

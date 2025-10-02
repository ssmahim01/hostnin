import Offer from "@/components/shared/offer";
import ManagedVPSSection from "@/app/(public-routes)/components/vps-hosting/managed-vps";
import { VPSBannerSection } from "@/app/(public-routes)/components/vps-hosting/vps-banner";
import HostninVPSFeatures from "@/app/(public-routes)/components/vps-hosting/vps-features";
import PricingTable from "@/app/(public-routes)/components/vps-hosting/vps-pricing";
import HostingFAQs from "@/components/shared/hosting/hosting-faqs";
import SupportSection from "@/components/shared/hosting/support-section";
import { TestimonialsSection } from "@/components/shared/testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "High Performance VPS Hosting | Hostnin",
  description:
    "Get lightning-fast VPS hosting with 100% NVMe storage. Starter plan starting at ৳1999/mo. Deploy standard distro, 1-click apps, or custom images.",
  keywords: [
    "VPS hosting",
    "High performance VPS",
    "NVMe VPS",
    "Cloud VPS",
    "Fast VPS hosting",
    "VPS Starter plan",
  ],
  openGraph: {
    title: "High Performance VPS Hosting | Hostnin",
    description:
      "Get lightning-fast VPS hosting with 100% NVMe storage. Starter plan starting at ৳1999/mo. Deploy standard distro, 1-click apps, or custom images.",
    url: "https://hostnin.com/hosting/vps-hosting",
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
    title: "High Performance VPS Hosting | Hostnin",
    description:
      "Get lightning-fast VPS hosting with 100% NVMe storage. Starter plan starting at ৳1999/mo. Deploy standard distro, 1-click apps, or custom images.",
    images: ["https://hostnin.com/assets/og-image.jpg"],
  },
};

export default function VPSHostingPage() {
  return (
    <>
      <VPSBannerSection />
      <PricingTable />
      <TestimonialsSection />
      <ManagedVPSSection />
      <HostninVPSFeatures />
      <SupportSection />
      <div className="pt-8 md:pt-16 lg:pt-10">
        <HostingFAQs />
      </div>
      <Offer />
    </>
  );
}

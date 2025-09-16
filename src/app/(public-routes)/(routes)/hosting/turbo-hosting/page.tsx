import TurboHostingBanner from "@/app/(public-routes)/components/turbo-hosting/turbo-hosting-banner";
import TurboHostingFeatures from "@/app/(public-routes)/components/turbo-hosting/turbo-hosting-features";
import { TurboHostingPricing } from "@/app/(public-routes)/components/turbo-hosting/turbo-hosting-pricing";
import HostingPlansInclude from "@/components/shared/hosting/hosting-plans-include";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Turbo Hosting | Hostnin – Fast, Secure & Reliable",
  description:
    "Experience enterprise-grade security, blazing-fast speed and 24/7 expert support with our Turbo Hosting plans. Perfect for businesses who demand performance.",
  keywords:
    "Turbo Hosting, NVMe Hosting, Fast Hosting, Enterprise Security, 24/7 Support, Reliable Hosting, Web Hosting Plans",
};

export default function TurboHostingPage() {
  return (
    <>
      <TurboHostingBanner />
      <div id="turbo-pricing">
        <TurboHostingPricing />
      </div>
      <HostingPlansInclude title="All Turbo Hosting Plans Include" />
      <TurboHostingFeatures />
    </>
  );
}

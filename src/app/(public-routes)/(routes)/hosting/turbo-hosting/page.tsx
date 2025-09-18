import ManagedTurboHighlights from "@/app/(public-routes)/components/turbo-hosting/managed-turbo-highlights";
import TurboHostingBanner from "@/app/(public-routes)/components/turbo-hosting/turbo-hosting-banner";
import TurboHostingFeatures from "@/app/(public-routes)/components/turbo-hosting/turbo-hosting-features";
import TurboHostingPricing from "@/app/(public-routes)/components/turbo-hosting/turbo-hosting-pricing";
import HostingFAQs from "@/components/shared/hosting/hosting-faqs";
import HostingPlansInclude from "@/components/shared/hosting/hosting-plans-include";
import { QuestionsSection } from "@/components/shared/questions";
import { highlights } from "@/data/turbo-highlights";
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
      <ManagedTurboHighlights
        heading="Managed Turbo Hosting Highlights"
        subheading="Keep your attention on running your company, and don't bother yourself with the intricacies of Turbo hosting. Superior speed, uptime, and support are the hallmarks of our managed hosting."
        highlights={highlights}
      />

      <QuestionsSection
        heading="Do You Have Questions?"
        subheading="About Hostnin Budget Hosting Service"
        liveChatUrl="https://tawk.to/chat/64e3c190cc26a871b0308e91/1h8cqo8b6"
        whatsappUrl="https://wa.me/8801325875955"
        whatsappNumber="01325 875 955"
      />

      <HostingFAQs />
    </>
  );
}

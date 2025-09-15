import WebHostingHero from "@/app/(public-routes)/components/web-hosting/web-hosting-hero";
import { Metadata } from "next";
import { TestimonialsSection } from "@/components/shared/testimonials";
import { DomainSearchSection } from "@/app/(public-routes)/components/web-hosting/domain-search-section";
import { InfrastructurePartners } from "@/app/(public-routes)/components/web-hosting/infrastructure-partners";
import { WhyChooseHosting } from "@/app/(public-routes)/components/web-hosting/why-choose-hosting";
import { MoneyBackGuarantee } from "@/app/(public-routes)/components/web-hosting/money-back-gurantee";
import WhyHostnin from "@/app/(public-routes)/components/web-hosting/why-hostnin";
// import UniqueFeatures from "@/app/(public-routes)/components/web-hosting/unique-features";
import QuestionsSection from "@/app/(public-routes)/components/web-hosting/questions-section";
import MigrationSection from "@/app/(public-routes)/components/web-hosting/migration-section";
import AdvancedFeatures from "@/app/(public-routes)/components/web-hosting/advanced-features";
import PricingPlans from "@/app/(public-routes)/components/web-hosting/pricing-plans";
import HostingFAQs from "@/components/shared/hosting/hosting-faqs";

export const metadata: Metadata = {
  title: "Fast & Secure Web Hosting | Hostnin",
  description:
    "Get blazing fast, secure, and affordable web hosting with Hostnin. Enjoy free SSL, domain, 99.9% uptime, and 24/7 support. Perfect for businesses & developers.",
  keywords: [
    "web hosting",
    "fast hosting",
    "secure hosting",
    "affordable hosting",
    "cloud hosting",
    "dedicated server",
    "hostnin hosting",
  ],
};

export default function WebHostingPage() {
  return (
    <>
      <WebHostingHero />
      <div id="pricing">
        <PricingPlans />
      </div>
      <TestimonialsSection />
      <DomainSearchSection />
      <InfrastructurePartners />
      <WhyChooseHosting />
      <MoneyBackGuarantee />
      <WhyHostnin />
      {/* <UniqueFeatures /> */}
      <QuestionsSection />
      <AdvancedFeatures />
      <MigrationSection />
      <HostingFAQs />
    </>
  );
}

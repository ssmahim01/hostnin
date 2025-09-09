import WebHostingHero from "@/app/(public-routes)/components/web-hosting/web-hosting-hero";
import PricingPlans from "@/app/(public-routes)/components/web-hosting/pricing-plans";
import { Metadata } from "next";
import { TestimonialsSection } from "@/app/(public-routes)/components/web-hosting/testimonials";
import { DomainSearchSection } from "@/app/(public-routes)/components/web-hosting/domain-search-section";
import { InfrastructurePartners } from "@/app/(public-routes)/components/web-hosting/infrastructure-partners";
import { FAQSection } from "@/app/(public-routes)/components/web-hosting/faq-section";
import { WhyChooseHosting } from "@/app/(public-routes)/components/web-hosting/why-choose-hosting";
import { MoneyBackGuarantee } from "@/app/(public-routes)/components/web-hosting/money-back-gurantee";

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
        <TestimonialsSection />
        <DomainSearchSection />
        <InfrastructurePartners />
        <WhyChooseHosting />
        <MoneyBackGuarantee />
        <FAQSection />
      </div>
    </>
  );
}

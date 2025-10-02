import WebHostingHero from "@/app/(public-routes)/components/web-hosting/web-hosting-hero";
import { Metadata } from "next";
import { TestimonialsSection } from "@/components/shared/testimonials";
import { DomainSearchSection } from "@/components/shared/hosting/domain-search-section";
import { InfrastructurePartners } from "@/components/shared/hosting/infrastructure-partners";
import { WhyChooseHosting } from "@/components/shared/hosting/why-choose-hosting";
import { MoneyBackGuarantee } from "@/components/shared/hosting/money-back-gurantee";
import WhyHostnin from "@/components/shared/hosting/why-hostnin";
// import UniqueFeatures from "@/app/(public-routes)/components/web-hosting/unique-features";
import MigrationSection from "@/app/(public-routes)/components/web-hosting/migration-section";
import PricingPlans from "@/app/(public-routes)/components/web-hosting/pricing-plans";
import HostingFAQs from "@/components/shared/hosting/hosting-faqs";
import VideoReviews from "@/components/shared/video-reviews/video-reviews";
import DomainSupports from "@/app/(public-routes)/components/domain/domain-supports";

export const metadata: Metadata = {
  title: "Web Hosting | Hostnin",
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
  openGraph: {
    title: "Web Hosting | Hostnin",
    description:
      "Get blazing fast, secure, and affordable web hosting with Hostnin. Enjoy free SSL, domain, 99.9% uptime, and 24/7 support. Perfect for businesses & developers.",
    url: "https://hostnin.com/hosting/web-hosting",
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
    title: "Web Hosting | Hostnin",
    description:
      "Get blazing fast, secure, and affordable web hosting with Hostnin. Enjoy free SSL, domain, 99.9% uptime, and 24/7 support. Perfect for businesses & developers.",
    images: ["https://hostnin.com/assets/og-image.jpg"],
  },
};

export default function WebHostingPage() {
  return (
    <>
      <WebHostingHero />
      <PricingPlans />
      <TestimonialsSection />
      <DomainSearchSection />
      <div className="pb-6">
        <VideoReviews show={true} />
      </div>
      {/* <MeetOurTeam /> */}
      <InfrastructurePartners />
      <WhyChooseHosting
        heading="Why Choose Web Hosting?"
        subTitle={`With our Web Hosting plans, you'll receive more resources for less money, ensuring
            the reliability you can count on. Starting your own business with
            Hostnin is easier than you think!`}
      />
      <MoneyBackGuarantee />
      <WhyHostnin />
      {/* <UniqueFeatures /> */}
      <div className="py-10">
        <DomainSupports />
      </div>
      <MigrationSection />
      <HostingFAQs />
    </>
  );
}

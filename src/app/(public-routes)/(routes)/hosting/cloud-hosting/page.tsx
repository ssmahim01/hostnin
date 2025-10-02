import WhyHostnin from "@/components/shared/hosting/why-hostnin";
import { Banner } from "@/components/shared/hosting/banner";
import { MoneyBackGuarantee } from "@/components/shared/hosting/money-back-gurantee";
import { TestimonialsSection } from "@/components/shared/testimonials";
import { Metadata } from "next";
import CloudHostingFeatures from "@/app/(public-routes)/components/cloud-hosting/cloud-hosting-features";
import HostingFAQs from "@/components/shared/hosting/hosting-faqs";
import CloudHostingPlans from "@/app/(public-routes)/components/cloud-hosting/cloud-hosting-plans";
import CloudPlanSection from "@/app/(public-routes)/components/cloud-hosting/cloud-plan-section";
import SpecialsSection from "@/components/shared/specials-section";
import CloudPlanFeatures from "@/app/(public-routes)/components/cloud-hosting/cloud-plan-features";
import CloudControlPanel from "@/app/(public-routes)/components/cloud-hosting/cloud-control-panel";
import ComprehensiveGuides from "@/app/(public-routes)/components/cloud-hosting/comprehensive-guides";
import CloudHostingPricing from "@/app/(public-routes)/components/cloud-hosting/cloud-hosting-pricing";
import VideoReviews from "@/components/shared/video-reviews/video-reviews";
import FreeCdnComparison from "@/components/shared/free-cdn-comparison";

export const metadata: Metadata = {
  title: "Cloud Hosting | Hostnin – Fast, Secure & Scalable Cloud Hosting",
  description:
    "Get lightning-fast, secure and scalable Cloud Hosting from Hostnin. Enjoy up to 90% discount, free domain on 3 years billing, lifetime free SSL certificate, 24/7 expert support, and powerful global CDN for your website.",
  keywords:
    "Cloud Hosting, Scalable Hosting, Fast Web Hosting, Secure Cloud Hosting, Affordable Cloud Hosting, Free SSL, Free Domain Hosting, 24/7 Hosting Support, Global CDN Hosting, Hostnin Cloud Plans",
     openGraph: {
    title: "Cloud Hosting | Hostnin – Fast, Secure & Scalable Cloud Hosting",
    description:
      "Get lightning-fast, secure and scalable Cloud Hosting from Hostnin. Enjoy up to 90% discount, free domain on 3 years billing, lifetime free SSL certificate, 24/7 expert support, and powerful global CDN for your website.",
    url: "https://hostnin.com/hosting/cloud-hosting",
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
    title: "Cloud Hosting | Hostnin – Fast, Secure & Scalable Cloud Hosting",
    description:
      "Get lightning-fast, secure and scalable Cloud Hosting from Hostnin. Enjoy up to 90% discount, free domain on 3 years billing, lifetime free SSL certificate, 24/7 expert support, and powerful global CDN for your website.",
    images: ["https://hostnin.com/assets/og-image.jpg"],
  },
};

export default function CloudHostingPage() {
  return (
    <>
      <Banner
        backgroundImage="/assets/sh-hero-bg.png"
        tagline="Everything You Need to Create a Website"
        headline={
          <>
            Get Cloud Hosting
            <br />
            Upto 90% Discount
          </>
        }
        bullets={[
          { text: "Free Domain on 3 Years Billing" },
          { text: "24/7 Chat, Call and Ticket Support" },
          { text: "Lifetime Free Wildcard SSL Certificate" },
        ]}
        countdown={true}
        buttonText="Claim Offer Now"
        illustration="/assets/security-machine.png"
        scrollId="pricing"
      />
      <CloudHostingPricing />
      <VideoReviews show={true} />
      <CloudHostingPlans />
      <CloudPlanSection />
      <SpecialsSection />
      <MoneyBackGuarantee />
      <TestimonialsSection />
      <FreeCdnComparison />
        <WhyHostnin />
      <div className="md:block hidden">
        <CloudPlanFeatures />
      </div>
      <CloudControlPanel />
      <CloudHostingFeatures />
      <ComprehensiveGuides />
      <HostingFAQs />
    </>
  );
}

import BdixHostingPlans from "@/app/(public-routes)/components/bdix-hosting/bdix-hosting-plans";
import BDIXHostingPricing from "@/app/(public-routes)/components/bdix-hosting/bdix-pricing";
import { WhyChooseHosting } from "@/components/shared/hosting/why-choose-hosting";
import { Banner } from "@/components/shared/hosting/banner";
import { DomainSearchSection } from "@/components/shared/hosting/domain-search-section";
import HostingFAQs from "@/components/shared/hosting/hosting-faqs";
import { TestimonialsSection } from "@/components/shared/testimonials";
import { Metadata } from "next";
import HostingFeatures from "@/components/shared/hosting/hosting-features";
import BDIXReviews from "@/app/(public-routes)/components/bdix-hosting/bdix-reviews";
import AffordableBdix from "@/app/(public-routes)/components/bdix-hosting/affordable-bdix";
import VideoReviews from "@/components/shared/video-reviews/video-reviews";

export const metadata: Metadata = {
  title: "BDIX Hosting in Bangladesh | Hostnin",
  description:
    "Hostnin BDIX Hosting offers lightning-fast SSD hosting with lifetime free SSL, unlimited bandwidth, managed WordPress, and expert 24x7 support. Perfect for Bangladeshi websites.",
  keywords:
    "BDIX hosting, Bangladeshi hosting, SSD hosting Bangladesh, fast web hosting, WordPress hosting Bangladesh, secure hosting, managed hosting, Hostnin",
     openGraph: {
    title: "BDIX Hosting in Bangladesh | Hostnin",
    description:
      "Hostnin BDIX Hosting offers lightning-fast SSD hosting with lifetime free SSL, unlimited bandwidth, managed WordPress, and expert 24x7 support. Perfect for Bangladeshi websites.",
    url: "https://hostnin.com/hosting/bdix-hosting",
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
    title: "BDIX Hosting in Bangladesh | Hostnin",
    description:
      "Hostnin BDIX Hosting offers lightning-fast SSD hosting with lifetime free SSL, unlimited bandwidth, managed WordPress, and expert 24x7 support. Perfect for Bangladeshi websites.",
    images: ["https://hostnin.com/assets/og-image.jpg"],
  },
};

export default function BDIXHostingPage() {
  return (
    <>
      <Banner
        backgroundImage="/assets/sh-hero-bg.png"
        tagline="Expertly Crafted for Online Businesses"
        headline={
          <>
            We Provide Fastest
            <br />
            Bangladeshi Hosting
          </>
        }
        bullets={[
          { text: "Super Fast SSD Storage" },
          { text: "Advanced Cache Management" },
          { text: "Lifetime Free SSL Certificate" },
          { text: "Unlimited Bandwidth" },
          { text: "Managed Wordpress" },
          { text: "WordPress Acceleration" },
        ]}
        countdown={true}
        buttonText="Claim Offer Now"
        illustration="/assets/banglaee.svg"
        scrollId="bdix-pricing"
      />
      <BDIXHostingPricing />

      <div className="-mt-6">
        <TestimonialsSection />
      </div>
      <DomainSearchSection />
      <BdixHostingPlans />
      <div className="pt-6">
        <VideoReviews show={true} />
      </div>
      <WhyChooseHosting
        heading="Why Choose BDIX Hosting?"
        subTitle="Get more resources for less with our reliable plans. Starting your business with Hostnin is easier than you think!"
      />
      <HostingFeatures
        heading="BDIX Hosting Features"
        subheading="Our BDIX hosting offers essential features for easier use and faster response times for your website."
      />
      <AffordableBdix />
      <BDIXReviews />
      <HostingFAQs />
    </>
  );
}

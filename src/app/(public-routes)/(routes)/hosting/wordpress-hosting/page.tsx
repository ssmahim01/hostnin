import { TestimonialsSection } from "@/components/shared/testimonials";
import JoinHostingSection from "@/app/(public-routes)/components/wordpress-hosting/join-hosting-section";
import ManagedWordPressHighlights from "@/app/(public-routes)/components/wordpress-hosting/managed-wordpress-highlights";
import WordPressTestimonials from "@/components/shared/hosting/client-testimonials";
import HostingFAQs from "@/components/shared/hosting/hosting-faqs";
import { Metadata } from "next";
import HostingPlansInclude from "@/components/shared/hosting/hosting-plans-include";
import WordpressPricing from "@/app/(public-routes)/components/wordpress-hosting/wordpress-pricing";
import { Banner } from "@/components/shared/hosting/banner";

export const metadata: Metadata = {
  title: "WordPress Hosting | Hostnin",
  description:
    "Get the best WordPress hosting in Bangladesh with Hostnin. Enjoy 2X faster speed, free SSL, daily backups, 99.9% uptime guarantee, and 24/7 expert support. Managed WordPress plans starting from just ৳2399/year for secure and reliable WordPress websites.",
  keywords: [
    "WordPress hosting Bangladesh",
    "best WordPress hosting in Bangladesh",
    "managed WordPress hosting",
    "cheap WordPress hosting",
    "fast WordPress hosting",
    "WordPress hosting with free SSL",
    "WordPress hosting with daily backups",
    "99.9% uptime WordPress hosting",
    "Hostnin WordPress hosting",
    "WordPress hosting plans Bangladesh",
  ],
   openGraph: {
    title: "WordPress Hosting | Hostnin",
    description:
      "Get the best WordPress hosting in Bangladesh with Hostnin. Enjoy 2X faster speed, free SSL, daily backups, 99.9% uptime guarantee, and 24/7 expert support. Managed WordPress plans starting from just ৳2399/year for secure and reliable WordPress websites.",
    url: "https://hostnin.com/hosting/wordpress-hosting",
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
    title: "WordPress Hosting | Hostnin",
    description:
      "Get the best WordPress hosting in Bangladesh with Hostnin. Enjoy 2X faster speed, free SSL, daily backups, 99.9% uptime guarantee, and 24/7 expert support. Managed WordPress plans starting from just ৳2399/year for secure and reliable WordPress websites.",
    images: ["https://hostnin.com/assets/og-image.jpg"],
  },
};

export default function WordpressHosting() {
  return (
    <>
      {/* <WordPressBanner /> */}
      <Banner
        backgroundImage="/assets/sh-hero-bg.png"
        tagline="Everything You Need to Create a Website"
        headline={
          <>
            2X Fast & Secure
            <br />
            WordPress Hosting
          </>
        }
        bullets={[
          { text: "Super Fast SSD Storage" },
          { text: "Unlimited Bandwidth" },
          { text: "Advanced Cache Management" },
          { text: "Managed WordPress" },
          { text: "Lifetime Free SSL Certificate" },
          { text: "WordPress Acceleration" },
        ]}
        countdown={true}
        buttonText="Claim Offer Now"
        illustration="/assets/hero-img-1.png"
        scrollId="wordpress-pricing"
      />
      <WordpressPricing />
      <TestimonialsSection />
      <ManagedWordPressHighlights />
      <JoinHostingSection />
      <HostingPlansInclude title="All WordPress Hosting Plans Include" />
      {/* <WordPressSignUp /> */}
      <WordPressTestimonials />
      <HostingFAQs />
    </>
  );
}

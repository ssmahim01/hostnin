import { Metadata } from "next";
import AffiliateHero from "../../components/affiliate/affiliate-hero";
import AffiliateSteps from "../../components/affiliate/affiliate-steps";
import AffiliateMarketing from "../../components/affiliate/affiliate-marketing";
import { TestimonialsSection } from "@/components/shared/testimonials";
import AffiliateCta from "../../components/affiliate/affiliate-cta";

export const metadata: Metadata = {
  title: "Affiliate Program | Hostnin",
  description:
    "Join the Hostnin Affiliate Program and earn industry-leading commissions promoting premium cloud hosting. Get up to 15,000 BDT per sale with fast approval, ready-made banners, and marketing tools.",
  keywords: [
    "Hostnin Affiliate Program",
    "web hosting affiliate",
    "earn money hosting",
    "hosting commission program",
    "cloud hosting affiliate",
    "high paying affiliate program",
    "Bangladesh hosting affiliate",
  ],
   openGraph: {
    title: "Affiliate Program | Hostnin",
    description:
      "Join the Hostnin Affiliate Program and earn industry-leading commissions promoting premium cloud hosting. Get up to 15,000 BDT per sale with fast approval, ready-made banners, and marketing tools.",
    url: "https://hostnin.com/affiliate",
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
    title: "Affiliate Program | Hostnin",
    description:
      "Join the Hostnin Affiliate Program and earn industry-leading commissions promoting premium cloud hosting. Get up to 15,000 BDT per sale with fast approval, ready-made banners, and marketing tools.",
    images: ["https://hostnin.com/assets/og-image.jpg"],
  },
};

export default function AffiliatePage() {
  return (
    <>
      <AffiliateHero />
      <AffiliateSteps />
      <AffiliateMarketing />
      <TestimonialsSection />
      <AffiliateCta />
    </>
  );
}

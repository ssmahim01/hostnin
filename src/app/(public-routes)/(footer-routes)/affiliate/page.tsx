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

import { TestimonialsSection } from "@/app/(public-routes)/components/web-hosting/testimonials";
import JoinHostingSection from "@/app/(public-routes)/components/wordpress-hosting/join-hosting-section";
import ManagedWordPressHighlights from "@/app/(public-routes)/components/wordpress-hosting/managed-wordpress-highlights";
import { WordPressBanner } from "@/app/(public-routes)/components/wordpress-hosting/wordpress-banner";
import WordPressPlansInclude from "@/app/(public-routes)/components/wordpress-hosting/wordpress-plans-include";
import { WordPressPricingSection } from "@/app/(public-routes)/components/wordpress-hosting/wordpress-pricing";
import WordPressSignUp from "@/app/(public-routes)/components/wordpress-hosting/wordpress-signup";
import WordPressTestimonials from "@/app/(public-routes)/components/wordpress-hosting/wordpress-testimonials";
import HostingFAQs from "@/components/shared/hosting/hosting-faqs";
import { Metadata } from "next";

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
};

export default function WordpressHosting() {
  return (
    <>
      <WordPressBanner />
      <div id="wordpress-pricing">
        <WordPressPricingSection />
      </div>
      <TestimonialsSection />
      <ManagedWordPressHighlights />
      <JoinHostingSection />
      <WordPressPlansInclude />
      <WordPressSignUp />
      <WordPressTestimonials />
      <HostingFAQs />
    </>
  );
}

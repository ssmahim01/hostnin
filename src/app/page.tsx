import { Metadata } from "next";
import { HeroSection } from "./(public-routes)/components/home/hero";
import HostingPlan from "./(public-routes)/components/home/hosting-plan";
import MovingWebsites from "./(public-routes)/components/home/moving-websites";
import Offer from "../components/shared/offer";
import { DomainSearchSection } from "./(public-routes)/components/web-hosting/domain-search-section";
import { TestimonialsSection } from "../components/shared/testimonials";
import ControlPanelSection from "./(public-routes)/components/home/control-panel";
import SupportBanner from "./(public-routes)/components/home/support-banner";
import SupportTeam from "./(public-routes)/components/home/support-team";

export const metadata: Metadata = {
  title: "Hostnin - Reliable Hosting Solutions",
  description:
    "Discover the best web hosting in Bangladesh with Hostnin. Enjoy top-notch hosting for portfolios, e-commerce, and more with 24/7 support, advanced features, and a 30-day money-back guarantee.",
  keywords: [
    "web hosting Bangladesh",
    "best hosting provider",
    "affordable hosting",
    "e-commerce hosting",
    "portfolio hosting",
    "reliable hosting",
    "Hostnin hosting",
  ],
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <div id="hosting-plans">
        <HostingPlan />
        <MovingWebsites />
        <DomainSearchSection />
        <ControlPanelSection />
        <SupportBanner />
        <TestimonialsSection />
        <SupportTeam />
        <Offer />
      </div>
    </>
  );
}

import { Metadata } from "next";
import { HeroSection } from "./(public-routes)/components/home/hero";
import HostingPlan from "../components/shared/hosting-plan";
import MovingWebsites from "./(public-routes)/components/home/moving-websites";
import Offer from "../components/shared/offer";
import { DomainSearchSection } from "../components/shared/hosting/domain-search-section";
import { TestimonialsSection } from "../components/shared/testimonials";
import ControlPanelSection from "./(public-routes)/components/home/control-panel";
import SupportBanner from "./(public-routes)/components/home/support-banner";
import SupportTeam from "./(public-routes)/components/home/support-team";
import VideoReviews from "../components/shared/video-reviews/video-reviews";
import HostingFeaturesBlock from "@/components/shared/hosting/hosting-features-block";

export const metadata: Metadata = {
  title: "Home | Best Web Hosting Company in Bangladesh",
  description:
    "Discover the best web hosting in Bangladesh with Hostnin. Enjoy top-notch hosting for portfolios, e-commerce, and more with 24/7 support, advanced features, and a 30-day money-back guarantee.",
  openGraph: {
    title: "Best Web Hosting Company in Bangladesh | Hostnin",
    description:
      "Hostnin is a web hosting company that provides reliable and affordable web hosting services.",
    url: "https://hostnin.com",
    type: "website",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hostnin Hosting Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Web Hosting Company in Bangladesh | Hostnin",
    description:
      "Reliable and affordable web hosting solutions with global data centers.",
    images: ["/assets/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <HostingPlan />
      <div className="lg:-my-16 md:my-0 -mb-10">
        <MovingWebsites />
      </div>{" "}
      <div className="-mb-8 -mt-10">
        <HostingFeaturesBlock />
      </div>
      <DomainSearchSection />
      <ControlPanelSection />
      <VideoReviews show={true} featuresShow={false} />
      <SupportBanner />
      <TestimonialsSection />
      <SupportTeam />
      <Offer />
    </>
  );
}

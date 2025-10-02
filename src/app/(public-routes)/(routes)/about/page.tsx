import type { Metadata } from "next";
import AboutHero from "../../components/about/about-sections/about-hero";
import AboutStats from "../../components/about/about-sections/about-stats";
import AboutFeatures from "../../components/about/about-sections/about-features";
import Support from "../../components/about/about-sections/support";
import { TestimonialsSection } from "@/components/shared/testimonials";
import MeetOurTeam from "@/components/shared/team/meet-team";
import CDNLocations from "../../components/about/about-sections/about-cdn";
import VisionMission from "../../components/about/about-sections/vision-mission";
import SupportTeam from "../../components/home/support-team";
import Offer from "../../../../components/shared/offer";
import AdvancedFeatures from "../../components/about/about-sections/advanced-features";

export const metadata: Metadata = {
  title: "About Us | Hostnin - Leading Web Hosting Solutions",
  description:
    "Discover Hostnin's journey in providing reliable, fast, and secure web hosting solutions. Learn about our mission, values, and commitment to empowering businesses online.",
  keywords:
    "about hostnin, web hosting company, hosting solutions, reliable hosting, fast hosting, secure hosting",
 openGraph: {
    title: "About Us | Hostnin - Leading Web Hosting Solutions",
    description:
      "Discover Hostnin's journey in providing reliable, fast, and secure web hosting solutions. Learn about our mission, values, and commitment to empowering businesses online.",
    url: "https://hostnin.com/about",
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
    title: "About Us | Hostnin - Leading Web Hosting Solutions",
    description:
      "Discover Hostnin's journey in providing reliable, fast, and secure web hosting solutions. Learn about our mission, values, and commitment to empowering businesses online.",
    images: ["https://hostnin.com/assets/og-image.jpg"],
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStats />
      <VisionMission />
      <AboutFeatures />
      <Support />
      <MeetOurTeam />
      <AdvancedFeatures />

      <TestimonialsSection />
      <CDNLocations />
      <SupportTeam />
      <Offer />
    </>
  );
}

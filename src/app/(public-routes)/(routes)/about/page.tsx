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

export const metadata: Metadata = {
  title: "About Us | Hostnin - Leading Web Hosting Solutions",
  description:
    "Discover Hostnin's journey in providing reliable, fast, and secure web hosting solutions. Learn about our mission, values, and commitment to empowering businesses online.",
  keywords:
    "about hostnin, web hosting company, hosting solutions, reliable hosting, fast hosting, secure hosting",
  openGraph: {
    title: "About Us - Hostnin | Leading Web Hosting Solutions",
    description:
      "Discover Hostnin's journey in providing reliable, fast, and secure web hosting solutions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Hostnin | Leading Web Hosting Solutions",
    description:
      "Discover Hostnin's journey in providing reliable, fast, and secure web hosting solutions.",
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
      <TestimonialsSection />
      <CDNLocations />
      <SupportTeam />
      <Offer />
    </>
  );
}

import type { Metadata } from "next";
import SuperchargeSection from "../../components/locations/supercharge-section";
import LocationsHero from "../../components/locations/locations-hero";
import SupportTeam from "../../components/home/support-team";
import Offer from "../../../../components/shared/offer";
import FreeCdnComparison from "@/components/shared/free-cdn-comparison";
import LocationFeatures from "../../components/locations/location-features";
import HostninPricing from "../../components/locations/hostnin-pricing";
import HostingFAQs from "@/components/shared/hosting/hosting-faqs";
import DataCentersSection from "../../../../components/shared/data-centers";

export const metadata: Metadata = {
  title: "Global CDN Locations | Hostnin",
  description:
    "Discover Hostnin's global CDN network with edge caching technology. Deploy faster websites with unlimited traffic, premium edge servers, and enhanced security across worldwide locations.",
  keywords:
    "CDN locations, edge caching, content delivery network, global servers, website speed, Hostnin CDN",
 openGraph: {
    title: "Global CDN Locations | Hostnin",
    description:
      "Discover Hostnin's global CDN network with edge caching technology. Deploy faster websites with unlimited traffic, premium edge servers, and enhanced security across worldwide locations.",
    url: "https://hostnin.com/locations",
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
    title: "Global CDN Locations | Hostnin",
    description:
      "Discover Hostnin's global CDN network with edge caching technology. Deploy faster websites with unlimited traffic, premium edge servers, and enhanced security across worldwide locations.",
    images: ["https://hostnin.com/assets/og-image.jpg"],
  },
};

export default function LocationsPage() {
  return (
    <>
      <LocationsHero />
      <SuperchargeSection />
      <LocationFeatures />
      <DataCentersSection />
      <FreeCdnComparison />
      <HostninPricing />
      <SupportTeam />
      <HostingFAQs />
      <Offer />
    </>
  );
}

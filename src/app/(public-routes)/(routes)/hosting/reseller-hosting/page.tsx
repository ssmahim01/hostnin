import SupportBanner from "@/app/(public-routes)/components/home/support-banner";
import ResellerHostingBanner from "@/app/(public-routes)/components/reseller-hosting/reseller-hosting-banner";
import ResellerHostingFeatures from "@/app/(public-routes)/components/reseller-hosting/reseller-hosting-features";
import ResellerPricing from "@/app/(public-routes)/components/reseller-hosting/reseller-pricing";
import DataCentersSection from "@/components/shared/data-centers";
import BenefitsSection from "@/components/shared/hosting/benefits";
import Testimonials from "@/components/shared/hosting/client-testimonials";
import { InfrastructurePartners } from "@/components/shared/hosting/infrastructure-partners";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reseller Hosting | Hostnin – High-Performance Reseller Plans",
  description:
    "Hostnin Reseller Hosting gives you enterprise-grade SSD/NVMe servers, low client density per server, and 24×7 expert technical support. Launch your own hosting business with blazing-fast speed and unmatched reliability.",
  keywords:
    "Reseller Hosting, White-Label Hosting, NVMe Reseller Hosting, SSD Reseller Hosting, Fast Hosting, 24x7 Support, Low Client Density Hosting, Hostnin",
    openGraph: {
    title: "Reseller Hosting | Hostnin",
    description:
      "Hostnin Reseller Hosting gives you enterprise-grade SSD/NVMe servers, low client density per server, and 24×7 expert technical support. Launch your own hosting business with blazing-fast speed and unmatched reliability.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reseller Hosting | Hostnin",
    description:
      "Hostnin Reseller Hosting gives you enterprise-grade SSD/NVMe servers, low client density per server, and 24×7 expert technical support. Launch your own hosting business with blazing-fast speed and unmatched reliability.",
  },
};

export default function ResellerHostingPage() {
  return (
    <>
      <ResellerHostingBanner />
      <ResellerPricing />
      <BenefitsSection
        mainTitle={`We Offers massive benefits with\nour reseller hosting plans!`}
        mainDescription={`Let your dreams become a reality with the most advanced tailored hosting. Traditional shared hosting is buggy, slow, and way more, but we're not. Our advanced technology makes your website fast and secure with no downtime.`}
        mainCard={{
          title: "Low Number of Clients per Server",
          description:
            "We believe in quality, not quantity. Maintaining low numbers of clients per server makes a website more powerful and fastest. All the sites can get a better share of resources, bandwidth and more advanced features. For this, your websites are fully loaded with cutting-edge resources.",
          icon: "/assets/happy-client.svg",
          iconAlt: "Low Number of Clients per Server",
        }}
        sideCards={[
          {
            title: "24x7 Technical Support",
            description:
              "Developing a business is hard, but with our always-on support system, it's getting easier than you think. Working at midnight or dawn and worried about proper support? You shouldn't be. Our expert support members are always available for your need.",
            icon: "/assets/support.svg",
            iconAlt: "24x7 Technical Support",
          },
          {
            title: "Most Advanced SSD/NVMe Servers",
            description:
              "We use the latest server hardware with the most advanced technology to run websites without hassle. For this reason, we're the only one providing the best quality hosting at affordable prices. Get your website online with our advanced technology and run your business like a pro.",
            icon: "/assets/ssd-storage.svg",
            iconAlt: "Most Advanced SSD/NVMe Servers",
          },
        ]}
      />

      <DataCentersSection />

      <ResellerHostingFeatures />
      <Testimonials />
      <InfrastructurePartners />
      <SupportBanner />
    </>
  );
}

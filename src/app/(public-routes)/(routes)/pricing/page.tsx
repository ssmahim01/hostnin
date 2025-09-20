import { Metadata } from "next";
import { TestimonialsSection } from "../../../../components/shared/testimonials";
import { InfrastructurePartners } from "../../../../components/shared/hosting/infrastructure-partners";
import ControlPanelSection from "../../components/home/control-panel";
import PricingTab from "@/components/shared/pricing-tab";
import HostingPlan from "../../../../components/shared/hosting-plan";
import ScrollToSection from "@/components/shared/scroll";

export const metadata: Metadata = {
  title: "Pricing Plans | Hostnin",
  description:
    "Explore Hostnin's affordable hosting and server pricing plans. Choose between yearly and monthly plans and find the best fit for your website or business.",
  keywords: [
    "Hostnin pricing",
    "web hosting plans",
    "cloud hosting pricing",
    "VPS pricing",
    "dedicated server pricing",
    "affordable hosting",
  ],
};

export default async function PricingPlan({
  searchParams,
}: {
  searchParams?: Promise<{ scrollTo?: string }> | { scrollTo?: string };
}) {
  const resolvedParams = await searchParams;
  const scrollToId = resolvedParams?.scrollTo;

  return (
    <div className="pt-4">
      <PricingTab />
      <TestimonialsSection />
      <InfrastructurePartners />
      {scrollToId && <ScrollToSection id={scrollToId} />}
      <div id="plans">
        <HostingPlan />
      </div>
      <ControlPanelSection />
    </div>
  );
}

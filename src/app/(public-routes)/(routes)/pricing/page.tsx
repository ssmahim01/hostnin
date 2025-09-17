import { Metadata } from "next";
import { TestimonialsSection } from "../../../../components/shared/testimonials";
import { InfrastructurePartners } from "../../../../components/shared/hosting/infrastructure-partners";
import ControlPanelSection from "../../components/home/control-panel";
import PricingTab from "@/components/shared/pricing-tab";

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

export default function PricingPlan() {
  return (
    <div className="pt-4">
      <PricingTab />
      <TestimonialsSection />
      <InfrastructurePartners />
      <ControlPanelSection />
    </div>
  );
}

import ServerCoreFeatures from "@/app/(public-routes)/components/dedicated-server/core-features";
import DedicatedHosting from "@/app/(public-routes)/components/dedicated-server/dedicated-hosting";
import DedicatedServerBanner from "@/app/(public-routes)/components/dedicated-server/dedicated-server-banner";
import DedicatedServerFeatures from "@/app/(public-routes)/components/dedicated-server/dedicated-server-features";
import DedicatedServerHelp from "@/app/(public-routes)/components/dedicated-server/dedicated-server-help";
import EnterpriseNVMe from "@/app/(public-routes)/components/dedicated-server/enterprise-nvme";
import Testimonials from "@/components/shared/hosting/client-testimonials";
import HostingFAQs from "@/components/shared/hosting/hosting-faqs";
import Offer from "@/components/shared/offer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dedicated Server Hosting | Hostnin – High-Performance & Secure",
  description:
    "Hostnin offers powerful, fully managed dedicated servers with free DDoS protection, premium network connectivity, full root access and 99.9% uptime. Deploy CentOS, Ubuntu, Debian or Windows instantly.",
  keywords:
    "Hostnin dedicated server, dedicated server hosting, secure servers, free DDoS protection, full root access, premium network, high performance hosting, CentOS Ubuntu Debian Windows servers, 99.9% uptime",
};

export default function DedicatedServerPage() {
  return (
    <>
      <DedicatedServerBanner />
      <DedicatedHosting />
      <DedicatedServerFeatures />
      <ServerCoreFeatures />
      <DedicatedServerHelp />
      <EnterpriseNVMe />
      <Testimonials />
      <HostingFAQs />
      <Offer />
    </>
  );
}

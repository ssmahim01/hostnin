import type { Metadata } from "next";
import RefundPolicy from "../../components/footer/refund-policy/refund-policy";

export const metadata: Metadata = {
  title: "Refund Policy | Hostnin",
  description:
    "Read Hostnin's transparent refund policy including 30-day money-back guarantee, eligibility, timelines, exclusions, and how to request a refund.",
  keywords:
    "Hostnin refund policy, money back guarantee, hosting refund, bdix hosting refund, refund process, Hostnin support",
      openGraph: {
    title: "Refund Policy | Hostnin",
    description:
      "Read Hostnin's transparent refund policy including 30-day money-back guarantee, eligibility, timelines, exclusions, and how to request a refund.",
    url: "https://hostnin.com/refund-policy",
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
    title: "Refund Policy | Hostnin",
    description:
      "Read Hostnin's transparent refund policy including 30-day money-back guarantee, eligibility, timelines, exclusions, and how to request a refund.",
    images: ["https://hostnin.com/assets/og-image.jpg"],
  },
};

export default function RefundPolicyPage() {
  return <RefundPolicy />;
}

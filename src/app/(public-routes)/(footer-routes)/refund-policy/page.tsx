import type { Metadata } from "next";
import RefundPolicy from "../../components/footer/refund-policy/refund-policy";

export const metadata: Metadata = {
  title: "Refund Policy | Hostnin",
  description:
    "Read Hostnin's transparent refund policy including 30-day money-back guarantee, eligibility, timelines, exclusions, and how to request a refund.",
  keywords:
    "Hostnin refund policy, money back guarantee, hosting refund, bdix hosting refund, refund process, Hostnin support",
};

export default function RefundPolicyPage() {
  return <RefundPolicy />;
}

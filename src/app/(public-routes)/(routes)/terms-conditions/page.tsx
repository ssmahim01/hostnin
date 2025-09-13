import { Metadata } from "next";
import TermsAndConditions from "../../components/about/terms-conditions/terms-conditions";

export const metadata: Metadata = {
  title: "Terms & Conditions | Hostnin",
  description:
    "Read Hostnin's Terms & Conditions including account responsibilities, acceptable use, payments, privacy, and more.",
  keywords: [
    "Hostnin",
    "Terms and Conditions",
    "Privacy",
    "Account",
    "Hosting",
    "Bangladesh",
  ],
};

export default function TermsConditions() {
  return <TermsAndConditions />;
}

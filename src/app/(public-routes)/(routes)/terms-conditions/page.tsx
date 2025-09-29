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
   openGraph: {
    title: "Terms & Conditions | Hostnin",
    description:
      "Read Hostnin's Terms & Conditions including account responsibilities, acceptable use, payments, privacy, and more.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Hostnin",
    description:
      "Read Hostnin's Terms & Conditions including account responsibilities, acceptable use, payments, privacy, and more.",
  },
};

export default function TermsConditions() {
  return <TermsAndConditions />;
}

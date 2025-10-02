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
    url: "https://hostnin.com/terms-conditions",
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
    title: "Terms & Conditions | Hostnin",
    description:
      "Read Hostnin's Terms & Conditions including account responsibilities, acceptable use, payments, privacy, and more.",
    images: ["https://hostnin.com/assets/og-image.jpg"],
  },
};

export default function TermsConditions() {
  return <TermsAndConditions />;
}

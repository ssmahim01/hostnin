import PrivacyPolicySection from "../../components/about/privacy-policy/privacy-policy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Hostnin Web Hosting",
  description:
    "Read Hostnin's Privacy Policy to learn how we collect, use, store, and protect your personal data when using our web hosting services in Bangladesh.",
  keywords: [
    "Hostnin privacy policy",
    "data protection",
    "web hosting privacy",
    "Bangladesh hosting privacy",
    "data security",
  ],
   openGraph: {
    title: "Privacy Policy | Hostnin",
    description:
      "Read Hostnin's Privacy Policy to learn how we collect, use, store, and protect your personal data when using our web hosting services in Bangladesh.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Hostnin",
    description:
      "Read Hostnin's Privacy Policy to learn how we collect, use, store, and protect your personal data when using our web hosting services in Bangladesh.",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicySection />;
}

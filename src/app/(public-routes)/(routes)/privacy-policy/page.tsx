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
    title: "Privacy Policy | Hostnin Web Hosting",
    description:
      "Read Hostnin's Privacy Policy to learn how we collect, use, store, and protect your personal data when using our web hosting services in Bangladesh.",
    url: "https://hostnin.com/privacy-policy",
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
    title: "Privacy Policy | Hostnin Web Hosting",
    description:
      "Read Hostnin's Privacy Policy to learn how we collect, use, store, and protect your personal data when using our web hosting services in Bangladesh.",
    images: ["https://hostnin.com/assets/og-image.jpg"],
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicySection />;
}

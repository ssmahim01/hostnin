import { Metadata } from "next";
import ContactHero from "../../components/about/contact/contact-hero";
import OurTeam from "../../components/about/contact/our-team";
import SupportBanner from "../../components/home/support-banner";

export const metadata: Metadata = {
  title: "Contact Us | Hostnin",
  description:
    "Get in touch with Hostnin for 24/7 support via live chat, WhatsApp, or email. Reach out for additional features or management support.",
  applicationName: "Hostnin",
  authors: [{ name: "Hostnin", url: "https://hostnin.com" }],
  keywords: [
    "Hostnin",
    "contact",
    "support",
    "live chat",
    "WhatsApp",
    "email",
    "customer support",
    "web hosting",
  ],
  openGraph: {
    title: "Contact Us | Hostnin",
    description:
      "Get in touch with Hostnin for 24/7 support via live chat, WhatsApp, or email. Reach out for additional features or management support.",
    url: "https://hostnin.com/contact",
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
    title: "Contact Us | Hostnin",
    description:
      "Get in touch with Hostnin for 24/7 support via live chat, WhatsApp, or email. Reach out for additional features or management support.",
    images: ["https://hostnin.com/assets/og-image.jpg"],
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />;
      <OurTeam />
      <div className="py-8">
        <SupportBanner />
      </div>
    </>
  );
}

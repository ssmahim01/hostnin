import { Metadata } from "next";
import { HeroSection } from "./(public-routes)/components/home/hero";

export const metadata: Metadata = {
  title: "Hostnin - Reliable Hosting Solutions",
  description:
    "Discover the best web hosting in Bangladesh with Hostnin. Enjoy top-notch hosting for portfolios, e-commerce, and more with 24/7 support, advanced features, and a 30-day money-back guarantee.",
  keywords: [
    "web hosting Bangladesh",
    "best hosting provider",
    "affordable hosting",
    "e-commerce hosting",
    "portfolio hosting",
    "reliable hosting",
    "Hostnin hosting",
  ],
};

export default function Home() {
  return (
    <>
      <HeroSection />
    </>
  );
}

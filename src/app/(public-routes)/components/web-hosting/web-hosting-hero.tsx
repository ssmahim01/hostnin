"use client";
import { Banner } from "@/components/shared/hosting/banner";
import FlashSaleBanner from "./first-sale-banner";

export default function WebHostingHero() {
  return (
    <div className="py-16">
      {/* Flash Sale Banner */}
      <FlashSaleBanner />

      <Banner
        backgroundImage="/assets/sh-hero-bg.png"
        tagline="Everything You Need to Create a Website"
        headline={
          <>
            Get Fastest Hosting
            <br />
            Up to 63% Discount
          </>
        }
        bullets={[
          { text: "Free .COM Domain on Trinnially" },
          { text: "Genuine & Latest Control Panel" },
          { text: "Free WildCard SSL for Lifetime" },
        ]}
        countdown={true}
        buttonText="Claim Offer Now"
        illustration="/assets/webhero.png"
        scrollId="pricing"
      />
    </div>
  );
}

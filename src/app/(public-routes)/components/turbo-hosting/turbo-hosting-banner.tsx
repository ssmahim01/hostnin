"use client";

import { Banner } from "@/components/shared/hosting/banner";

export default function TurboHostingBanner() {
  return (
    <Banner
      backgroundImage="/assets/sh-hero-bg.png"
      tagline="Lightning-Fast Hosting for Seamless Performance"
      headline={
        <>
          Get Turbo Hosting
          <br />
          Flat 50% Discount
        </>
      }
      bullets={[
        { text: "Free Domain on 3 Years Billing" },
        { text: "Latest cPanel Control Panel" },
        { text: "Free WildCard SSL for Lifetime" },
      ]}
      countdown={true}
      buttonText="Claim Offer Now"
      illustration="/assets/turbo-hero.svg"
      scrollId="turbo-pricing"
    />
  );
}

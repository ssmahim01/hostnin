"use client";

import { Banner } from "@/components/shared/hosting/banner";
export default function ResellerHostingBanner() {
  return (
    <section>
      <Banner
        backgroundImage="/assets/sh-hero-bg.png"
        tagline="Everything You Need to Create a Website"
        headline={
          <>
            KickStart Your Business
            <br />
            With Reseller Hosting
          </>
        }
        bullets={[
          { text: "Blazing Performance" },
          { text: "24/7 Support" },
          { text: "Unlimited Features" },
        ]}
        countdown={true}
        buttonText="Claim Offer Now"
        illustration="/assets/reseller.svg"
        scrollId="pricing"
      />
    </section>
  );
}

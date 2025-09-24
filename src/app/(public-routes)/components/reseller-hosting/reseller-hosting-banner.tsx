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
            KickStart Business
            <br />
            With Reseller Hosting
          </>
        }
        bullets={[
          { text: "Blazing Fast Performance" },
          { text: "24/7 Expert Support Included" },
          { text: "Limitless Hosting Features" },
        ]}
        countdown={true}
        buttonText="Claim Offer Now"
        illustration="/assets/reseller.svg"
        scrollId="pricing"
      />
    </section>
  );
}

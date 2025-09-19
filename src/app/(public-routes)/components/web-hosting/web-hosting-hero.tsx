"use client";

import { CountdownTimer } from "../../../../components/shared/hosting/countdown-timer";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Banner } from "@/components/shared/hosting/banner";

export default function WebHostingHero() {
  const [showBanner, setShowBanner] = useState(true);

  // Smooth scroll function
  const handleScrollToPricing = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const section = document.querySelector("#pricing");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="py-16">
      {/* Flash Sale Banner */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-gradient-to-r from-blue-700 to-blue-900 text-white text-center relative"
      >
        <div className="flex items-center justify-between gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col md:flex-row md:items-center items-start gap-2 md:gap-6">
            <p className="flex flex-col items-start gap-y-2 lg:text-lg text-sm font-bold">
              <span>24-Hour Flash Sale!</span>
              <span className="lg:block hidden">
                Get 76% off Hosting plans + free Domain & SSL!
              </span>
            </p>
            <CountdownTimer />
          </div>
          {showBanner && (
            <div className="flex items-center gap-2 text-base lg:text-lg">
              <button
                onClick={handleScrollToPricing}
                className="text-white/90 hover:text-white underline font-semibold cursor-pointer"
              >
                View Details
              </button>
              <button
                onClick={() => setShowBanner(false)}
                className="text-white/90 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </motion.div>

      <Banner
        backgroundImage="/assets/sh-hero-bg.png"
        tagline="Everything You Need to Create a Website"
        headline={
          <>
            Get Fastest Hosting
            <br />
            Up to 76% Discount
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

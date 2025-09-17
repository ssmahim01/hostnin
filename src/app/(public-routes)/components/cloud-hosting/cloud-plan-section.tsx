"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function CloudPlanSection() {
  // Smooth scroll function
  const handleScrollToPricing = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const section = document.querySelector("#pricing");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="rounded-2xl shadow-xl bg-white dark:bg-slate-950 px-4 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-16 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
      {/* Left column */}
      <div className="flex-1 lg:pr-8 xl:pr-16">
        <h2
          className="text-2xl md:text-xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2 sm:mb-3"
          style={{ fontFamily: "Urbanist, sans-serif" }}
        >
          Our cloud plan includes
        </h2>

        <h3
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-4 sm:mb-6 drop-shadow-lg"
          style={{ fontFamily: "Urbanist, sans-serif" }}
        >
          16+ CDN Locations Worldwide
        </h3>

        <p
          className="text-gray-600 dark:text-gray-300 text-[15px] sm:text-sm lg:text-base leading-relaxed mb-6 sm:mb-8 max-w-lg"
          style={{ fontFamily: "Mulish, sans-serif" }}
        >
          Go beyond a basic one-click app and deliver lightning-fast load times
          packed full of features like WordPress staging, cloning, cache,
          backups, unlimited CDN, image/code optimisation and more built-in (no
          expensive plug-ins required).
        </p>

        <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
          <li
            className="flex items-start gap-2 sm:gap-3 text-gray-700"
            style={{ fontFamily: "Mulish, sans-serif" }}
          >
            <Check className="text-blue-500 w-5 h-5 sm:w-5 sm:h-5 mt-0.5 sm:mt-1 flex-shrink-0" />
            <span className="text-sm sm:text-sm dark:text-gray-200 lg:text-base">
              PHP-FPM Advanced Process Management with Dedicated Opcache
              Performance
            </span>
          </li>

          <li
            className="flex items-start gap-2 sm:gap-3 text-gray-700"
            style={{ fontFamily: "Mulish, sans-serif" }}
          >
            <Check className="text-blue-500 w-5 h-5 sm:w-5 sm:h-5 mt-0.5 sm:mt-1 flex-shrink-0" />
            <span className="text-sm sm:text-sm dark:text-gray-200 lg:text-base">
              One-Click Gmail and Office 365 DNS Setup
            </span>
          </li>

          <li
            className="flex items-start gap-2 sm:gap-3 text-gray-700"
            style={{ fontFamily: "Mulish, sans-serif" }}
          >
            <Check className="text-blue-500 w-5 h-5 sm:w-5 sm:h-5 mt-0.5 sm:mt-1 flex-shrink-0" />
            <span className="text-sm sm:text-sm dark:text-gray-200 lg:text-base">
              Load Balanced &amp; Redundant Platform
            </span>
          </li>
        </ul>

        <div className="flex flex-col sm:flex-row gap-2">
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold cursor-pointer px-4 sm:px-6 lg:px-8 py-6 rounded-lg transition-colors text-[15px] sm:text-base"
            onClick={handleScrollToPricing}
          >
            See Pricing
          </Button>
        </div>
      </div>

      {/* Right column: image */}
      <div className="flex-1 flex justify-center lg:justify-end mt-8 sm:mt-12 lg:mt-0 w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
        <Image
          src="/assets/hotim-bg.png"
          alt="Cloud Security Illustration"
          width={1200}
          height={640}
          className="object-contain w-full h-auto"
        />
      </div>
    </section>
  );
}

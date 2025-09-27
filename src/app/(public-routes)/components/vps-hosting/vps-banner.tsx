"use client";

import Image from "next/image";
import React from "react";
import { Check, Zap } from "lucide-react";
import VPSFeatureCard from "./vps-feature-cards";

interface Feature {
  label: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    label: "Unbeatable Performance, Security, & Updates",
    description: "",
    icon: "/assets/check-icon.svg",
  },
  {
    label: "Deploy standard distro, 1-click app or custom image",
    description: "",
    icon: "/assets/check-icon.svg",
  },
  {
    label: "Spin up your VPS in 50s",
    description: "",
    icon: "/assets/check-icon.svg",
  },
];

export const VPSBannerSection: React.FC = () => {
  // Smooth scroll function
  const handleScrollToPricing = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const section = document.querySelector("#vps-packages");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="pt-20 pb-24 lg:pr-2 lg:pl-[72px] sm:pt-24 sm:pb-6 sm:px-6 lg:pt-24 lg:pb-44 lg:px-10 relative overflow-visible"
      style={{
        backgroundImage:
          "url('/assets/sh-hero-bg.png'), linear-gradient(278deg, rgba(0, 40, 160, 0.9) 16%, rgba(0, 20, 80, 0.9) 98%)",
        backgroundPosition: "left center, center center",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "contain, cover",
      }}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-6 lg:gap-0">
        {/* Text Column */}
        <div className="flex-1 text-white lg:pr-12 text-center lg:text-left mb-6 lg:mb-0">
          <p className="text-white font-bold mb-2 text-xl sm:text-2xl">
            Lightning-fast with 100% NVMe storage
          </p>
          <h1 className="text-[34px] sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-3 sm:mb-6">
            We Provide High
            <br className="hidden sm:block" /> Performance VPS
          </h1>
          <p className="mb-2 sm:mb-3 text-base my-4 sm:text-xl font-semibold text-white/90">
            VPS Starter plan - Starting at{" "}
            <span className="text-yellow-500">৳1999/mo</span>
          </p>

          {/* Features List */}
          <ul className="flex flex-col gap-y-2 mt-4 mb-8 sm:mb-8 text-sm sm:text-base">
            {features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center lg:justify-start justify-center gap-2 font-semibold text-[13px] md:text-lg"
              >
                <Check className="w-5 h-5 text-white" />
                <span>{feature.label}</span>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="px-4 md:px-0 flex flex-col sm:flex-row gap-4 lg:items-start lg:justify-start justify-center items-center mx-auto">
            <button
              onClick={handleScrollToPricing}
              className="relative bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-500 text-base sm:text-lg shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-auto mb-6 sm:mb-10 transform hover:-translate-y-1 hover:border-transparent border-2 border-blue-400 flex items-center justify-center gap-2 cursor-pointer lg:mx-0 mx-auto"
            >
              <Zap /> <span className="relative z-10">Claim Offer Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300/20 to-indigo-300/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>

        {/* Image Column */}
        <div className="flex-1 flex justify-center items-center w-full max-w-xl h-40 xs:h-36 sm:h-72 md:h-96 lg:h-[600px]">
          <Image
            src="/assets/vps-header-1.png"
            alt="Server Illustration"
            width={800}
            height={600}
            className="object-contain w-full h-full"
            priority
          />
        </div>
      </div>

      {/* Specs Cards */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-7xl -bottom-[36rem] sm:-bottom-[30rem] lg:-bottom-[22rem] z-20 px-3 sm:px-0">
       <VPSFeatureCard />
      </div>
    </section>
  );
};

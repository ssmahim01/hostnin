"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Feature {
  label: string;
  description: string;
  icon: string;
}

interface Plan {
  name: string;
  price: string;
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

const specs = [
  { label: "Shared vCPU", value: "2 vCPU Cores", icon: "/assets/cpu-icon.svg" },
  { label: "Dedicated RAM", value: "4 GB", icon: "/assets/ram-icon.svg" },
  { label: "NVMe Storage", value: "40 GB", icon: "/assets/storage-icon.svg" },
  { label: "Port Speed", value: "1GBit", icon: "/assets/speed-icon.svg" },
];

const plans: Plan[] = [
  { name: "Starter", price: "2999৳/mo" },
  { name: "Starter Plus", price: "3999৳/mo" },
  { name: "Pro", price: "4999৳/mo" },
  { name: "Ultimate", price: "6999৳/mo" },
];

export const VPSBannerSection: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<number>(0);

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
      className="pt-20 pb-24 px-3 sm:pt-24 sm:pb-32 sm:px-6 lg:pt-28 lg:pb-44 lg:px-10 relative overflow-visible"
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
          <h1 className="text-[36px] sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-3 sm:mb-6">
            We Provide High
            <br className="hidden sm:block" /> Performance VPS
          </h1>
          <p className="mb-2 sm:mb-3 text-lg my-4 sm:text-xl font-semibold text-white/90">
            VPS Starter plan - Starting at{" "}
            <span className="text-yellow-500">৳1999/mo</span>
          </p>

          {/* Features List */}
          <ul className="flex flex-col gap-y-2 mt-4 mb-8 sm:mb-8 text-base sm:text-base">
            {features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center lg:justify-start justify-center gap-2 font-semibold text-[16px] md:text-lg"
              >
                <Check className="w-5 h-5 text-white" />
                <span>{feature.label}</span>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="px-4 md:px-0 flex flex-col sm:flex-row gap-4 lg:items-start lg:justify-start justify-center items-center mx-auto">
            <Button
              variant={"default"}
              onClick={handleScrollToPricing}
              size={"lg"}
              className="py-7 px-16 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform border-2 lg:justify-start justify-center border-indigo-500 hover:border-none hover:cursor-pointer flex gap-2 items-center"
            >
              <Zap /> <span>Buy VPS Hosting</span>
            </Button>
          </div>
        </div>

        {/* Image Column */}
        <div className="flex-1 flex justify-center items-center w-full max-w-xl h-40 xs:h-52 sm:h-72 md:h-96 lg:h-[600px]">
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
      <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-7xl md:-bottom-[28rem] lg:-bottom-[18rem] z-20 px-3 sm:px-0">
        <section className="w-full bg-white dark:bg-gray-900 pt-16 sm:pt-20 md:pt-32 lg:pt-12 pb-8 flex flex-col items-center relative overflow-x-hidden transition-colors duration-300">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-10 text-[#03206B] dark:text-[#90cdf4] transition-colors duration-300">
            Your High Speed Cloud VPS!
          </h2>

          {/* Progress bar for plans */}
          <div className="w-full max-w-3xl flex flex-col items-center mb-6 sm:mb-8 relative px-4">
            <div className="w-full h-3 sm:h-4 bg-gray-200 dark:bg-gray-700 rounded-full relative flex items-center cursor-pointer">
              <div
                className="absolute left-0 top-0 h-3 sm:h-4 bg-blue-500 dark:bg-blue-400 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${(selectedPlan + 1) * 25}%` }}
              />
            </div>
            <div className="w-full flex justify-between mt-4 sm:mt-6 px-2">
              {plans.map((plan, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPlan(idx)}
                  className={`text-xs font-medium transition-all duration-300 px-2 py-1 rounded ${
                    selectedPlan === idx
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900"
                      : "text-gray-400 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  {plan.name}
                </button>
              ))}
            </div>
          </div>

          {/* Specs Cards */}
          <div className="w-full max-w-5xl grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 mb-8 sm:mb-10 px-4">
            {specs.map((spec, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow p-4 flex flex-row items-center border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-500 transform hover:scale-105"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-blue-50 dark:bg-blue-900 mr-4 hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors duration-300">
                  <Image
                    src={spec.icon}
                    alt={spec.label}
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-semibold text-base text-[#03206B] dark:text-blue-200 mb-1 transition-colors duration-300">
                    {spec.label}
                  </span>
                  <span className="text-gray-500 dark:text-gray-300 text-sm transition-colors duration-300">
                    {spec.value}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Plan Price */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 px-4">
            <span className="text-2xl sm:text-3xl font-bold text-[#03206B] dark:text-blue-200 transition-colors duration-300">
              {plans[selectedPlan].price}
            </span>
            <Link
              target="_blank"
              href="https://my.hostnin.com/cart.php?a=confproduct"
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-500 text-white font-semibold px-10 py-3 rounded-full transition-all duration-300 text-[17px] shadow hover:shadow-lg hover:scale-105 transform w-full sm:w-auto text-center"
            >
              Purchase Plan
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
};

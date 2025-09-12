"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import PricingCard from "./pricing-card";
import { hostingPlansData } from "@/data/pricing-data";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "yearly"
  );
  const [activeHostingType, setActiveHostingType] = useState("web");

  const currentHostingData = hostingPlansData.find(
    (hosting) => hosting.id === activeHostingType
  );

  const arrowSrc = "/assets/right-arrow.png";

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Select your Perfect Plan
          </h2>

          {/* Hosting Type Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {hostingPlansData.map((type) => (
              <Button
                key={type.id}
                variant={activeHostingType === type.id ? "default" : "outline"}
                onClick={() => setActiveHostingType(type.id)}
                className={`px-4 cursor-pointer py-2 text-sm font-medium rounded-lg ${
                  activeHostingType === type.id
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 hover:bg-blue-600 hover:text-white backdrop-blur-md"
                }`}
              >
                {type.label}
              </Button>
            ))}
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <div className="flex bg-gray-700 p-1 rounded-full">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 hover:cursor-pointer text-white/90 rounded-full hover:text-white text-sm font-medium transition-all ${
                  billingCycle === "monthly"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-6 py-2 hover:cursor-pointer text-sm font-medium text-white rounded-full hover:text-white/85 transition-all ${
                  billingCycle === "yearly"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Yearly
              </button>
            </div>
            <div className="text-base flex items-center text-blue-500 dark:text-gray-200 font-medium">
              <Image
                src={arrowSrc}
                alt="Right Arrow"
                width={120}
                height={90}
                className={"w-16 h-14"}
                priority
              />
              <span className="text-base font-medium">
                Upto{" "}
                {currentHostingData?.id === "web"
                  ? "76%"
                  : currentHostingData?.id === "cloud"
                  ? "90%"
                  : currentHostingData?.id === "turbo"
                  ? "50%"
                  : "75%"}{" "}
                Save
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        {currentHostingData && (
          <PricingCard
            billingCycle={billingCycle}
            plans={currentHostingData.plans}
            hostingId={currentHostingData.id}
          />
        )}
      </div>
    </section>
  );
}

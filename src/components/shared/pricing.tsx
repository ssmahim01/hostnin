"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import PricingCard from "./pricing-card";



const hostingTypes = [
  { id: "web", label: "Web Hosting", active: true },
  { id: "cloud", label: "Cloud Hosting", active: false },
  { id: "turbo", label: "Turbo Hosting", active: false },
  { id: "bdix", label: "BDIX Hosting", active: false },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "yearly"
  );

 

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
            {hostingTypes.map((type) => (
              <Button
                key={type.id}
                variant={type.active ? "default" : "outline"}
                className={`px-4 py-2 text-sm font-medium rounded-lg ${
                  type.active
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
              >
                {type.label}
              </Button>
            ))}
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="flex bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 rounded-md text-white/90 hover:text-white text-sm font-medium transition-all ${
                  billingCycle === "monthly"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  billingCycle === "yearly"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Yearly
              </button>
            </div>
            <p className="text-sm flex gap-2 items-center text-blue-800 dark:text-gray-200 font-medium">
              <Image
                src={"/assets/arrow-dark.webp"}
                alt="Right Arrow "
                width={100}
                height={80}
                className="w-8 h-8"
                priority
              />{" "}
              <span>Save 70% more</span>
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <PricingCard billingCycle={billingCycle} />
      </div>
    </section>
  );
}

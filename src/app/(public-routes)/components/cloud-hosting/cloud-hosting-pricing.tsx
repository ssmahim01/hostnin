"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import PricingCard from "@/components/shared/pricing-card";
import { hostingPlansData } from "@/data/pricing-data";

export function CloudHostingPricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "yearly"
  );

  const currentHostingData = hostingPlansData.find(
    (hosting) => hosting?.id === "cloud"
  );

  return (
    <div className="lg:pt-60 pb-20 md:pt-96 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-700 dark:text-white mb-8 text-balance">
            Choose Your Perfect Plan
          </h2>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center justify-center gap-4 mb-2">
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
              <div className="text-base flex gap-2 items-center text-blue-600 dark:text-gray-200 font-medium">
                <Image
                  src={"/assets/right-arrow.png"}
                  alt="Right Arrow"
                  width={120}
                  height={90}
                  className={"w-16 h-14"}
                  priority
                />
                <span className="font-medium text-base">Upto 90% save</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pricing Card Component */}
        <PricingCard
          billingCycle={billingCycle}
          plans={currentHostingData?.plans || []}
        />
      </div>
    </div>
  );
}

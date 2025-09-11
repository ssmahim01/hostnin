"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import PricingCard from "@/components/shared/pricing-card";

export default function PricingPlans() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "yearly"
  );

  return (
    <div className="lg:pt-40 pb-20 md:pt-64 pt-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-balance">
            Choose Your Perfect Plan
          </h2>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-4">
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
                <span>Save 76% more</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <PricingCard billingCycle={billingCycle} />
      </div>
    </div>
  );
}

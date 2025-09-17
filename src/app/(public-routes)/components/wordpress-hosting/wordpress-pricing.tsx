"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PricingCard from "@/components/shared/pricing-card";
import { hostingPlansData } from "@/data/pricing-data";

export function WordPressPricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );

  const currentHostingData = hostingPlansData.find(
    (hosting) => hosting?.id === "wordpress"
  );

  return (
    <div className="lg:pt-52 pb-20 md:pt-72 pt-20">
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
          <div className="flex items-center justify-center gap-4 mb-4">
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
                <svg
              width="90"
              height="40"
              viewBox="0 0 90 40"
              fill="none"
              className="absolute -top-6 left-0 sm:-top-6 lg:-top-8 lg:left-0"
              style={{ pointerEvents: "none" }}
            >
              <path
                d="M10 30 C40 0, 70 0, 80 20"
                stroke="#2563eb"
                strokeWidth="2"
                strokeDasharray="4,4"
                fill="none"
                markerEnd="url(#arrowhead)"
              />
              <defs>
                <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                  <path d="M0,0 L8,4 L0,8 L2,4 Z" fill="#2563eb" />
                </marker>
              </defs>
            </svg>
                <span className="font-medium text-base">Flat 75% save</span>
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

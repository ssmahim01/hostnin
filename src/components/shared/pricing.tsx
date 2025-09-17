"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import PricingCard from "./pricing-card";
import { hostingPlansData } from "@/data/pricing-data";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );
  const [activeHostingType, setActiveHostingType] = useState("web");

  const currentHostingData = hostingPlansData.find(
    (hosting) => hosting.id === activeHostingType
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
             <div className="relative flex items-center -ml-3 mt-3 sm:mt-0" style={{ minWidth: 120 }}>
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

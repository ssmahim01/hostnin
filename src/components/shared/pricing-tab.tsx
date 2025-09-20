"use client";

import BDIXHostingPricing from "@/app/(public-routes)/components/bdix-hosting/bdix-pricing";
import CloudHostingPricing from "@/app/(public-routes)/components/cloud-hosting/cloud-hosting-pricing";
import TurboHostingPricing from "@/app/(public-routes)/components/turbo-hosting/turbo-hosting-pricing";
import PricePlans from "@/app/(public-routes)/components/web-hosting/pricing-plans";
import React, { useState } from "react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  { id: "Web Hosting", label: "Web Hosting", component: <PricePlans /> },
  {
    id: "Cloud Hosting",
    label: "Cloud Hosting",
    component: <CloudHostingPricing />,
  },
  {
    id: "Turbo Hosting",
    label: "Turbo Hosting",
    component: <TurboHostingPricing />,
  },
  {
    id: "BDIX Hosting",
    label: "BDIX Hosting",
    component: <BDIXHostingPricing />,
  },
];

export default function PricingTab() {
  const [activeTab, setActiveTab] = useState("Web Hosting");

  return (
    <div className="pt-8 md:pb-0 pb-5">
      {/* Heading */}
      <p className="text-[25px] md:text-4xl lg:text-5xl text-center font-bold py-9 text-gray-900 dark:text-white">
        Select your Perfect Plan
      </p>

      {/* Buttons inside ScrollArea */}
      <div className="px-3">
        <ScrollArea className="w-full">
          <div className="flex gap-4 items-center justify-start mx-auto w-max rounded-full border-2 border-gray-200 dark:border-gray-700 shadow-sm bg-gradient-to-r from-white/60 via-white/40 to-white/60 dark:from-gray-800/60 dark:via-gray-900/40 dark:to-gray-800/60 backdrop-blur-md p-2 mb-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`
            px-6 py-2 rounded-full font-medium hover:cursor-pointer whitespace-nowrap text-sm md:text-lg transition-all duration-500
            ${
              activeTab === tab.id
                ? "bg-blue-600 text-white shadow-lg scale-105"
                : "text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white hover:scale-105"
            }
          `}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      {/* Tab Content */}
      <div className="rounded-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {tabs.find((tab) => tab.id === activeTab)?.component}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

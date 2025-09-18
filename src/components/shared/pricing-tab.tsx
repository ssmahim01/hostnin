"use client";
import BDIXHostingPricing from "@/app/(public-routes)/components/bdix-hosting/bdix-pricing";
import CloudHostingPricing from "@/app/(public-routes)/components/cloud-hosting/cloud-hosting-pricing";
import TurboHostingPricing from "@/app/(public-routes)/components/turbo-hosting/turbo-hosting-pricing";
import PricePlans from "@/app/(public-routes)/components/web-hosting/pricing-plans";
import React, { useState } from "react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

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
    id: "Bdix Hosting",
    label: "BDIX Hosting",
    component: <BDIXHostingPricing />,
  },
];

export default function PricingTab() {
  const [activeTab, setActiveTab] = useState("Web Hosting");

  return (
    <div className="pt-8">
      {/* Heading */}
      <p className="text-[25px] md:text-4xl lg:text-5xl text-center font-bold py-9 text-gray-900 dark:text-white">
        Select your Perfect Plan
      </p>

      {/* Scrollable Tab Buttons */}
      <div className="px-3">
        <ScrollArea className="w-full">
          <div className="flex gap-3 items-center justify-center mx-auto w-max pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-4 py-2 rounded-md font-medium cursor-pointer whitespace-nowrap transition-all duration-300
                  ${
                    activeTab === tab.id
                      ? "bg-blue-600 text-white shadow-md text-sm md:text-xl font-semibold"
                      : "text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-700 text-xs md:text-lg"
                  }`}
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
      <div className="rounded-xl shadow-lg">
        {tabs.find((tab) => tab.id === activeTab)?.component}
      </div>
    </div>
  );
}

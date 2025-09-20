"use client";
import {
  Headphones,
  Cpu,
  BarChart2,
  Shield,
  HardDrive,
  Zap,
  Code,
  Clock,
} from "lucide-react";

import React from "react";
import { Card } from "@/components/ui/card";
import { HostingFeaturesProps } from "@/types/hosting-features";
import { Feature } from "@/types/hosting-features";

export const featuresData: Feature[] = [
  {
    id: 1,
    title: "24x7 Pro Support",
    description:
      "Having support is crucial for BDIX, so we make sure to provide you with the quick support you need.",
    icon: Headphones,
  },
  {
    id: 2,
    title: "All Managed Includes",
    description:
      "More options means more control of your hosting, we provide almost every option to manage.",
    icon: Cpu,
  },
  {
    id: 3,
    title: "Awstats & Webalizer",
    description:
      "AWStats is a powerful and feature-rich tool that generates advanced web statistics graphically.",
    icon: BarChart2,
  },
  {
    id: 4,
    title: "Anti-Virus Protection",
    description:
      "To protect the websites you host, we use advanced antivirus protection, which prevents all kinds of malware.",
    icon: Shield,
  },
  {
    id: 5,
    title: "Lightning-Fast Storage",
    description:
      "Website speed is an important ranking signal for both Google and the user experience.",
    icon: HardDrive,
  },
  {
    id: 6,
    title: "Next-gen Firewalls",
    description:
      "The ability to manage and filter traffic by country is one of the most-requested features of cPanel servers.",
    icon: Zap,
  },
  {
    id: 7,
    title: "Ruby, Python, NodeJS",
    description:
      "We provide Ruby, Python, and Node.js features with our BDIX plans so users can use them.",
    icon: Code,
  },
  {
    id: 8,
    title: "99.9% Server Uptime",
    description:
      "With our enterprise-grade datacenter, we ensure almost 100% uptime to keep your websites always online.",
    icon: Clock,
  },
];

export default function HostingFeatures({
  heading,
  subheading,
}: HostingFeaturesProps) {
  return (
    <section className="w-full flex flex-col items-center justify-center py-11 sm:py-12 lg:py-14 px-4">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold text-black dark:text-white mb-4 text-start">
          {heading}
        </h2>
        {subheading && (
          <p className="text-[#232946] dark:text-gray-300 text-base mb-5 text-start max-w-2xl">
            {subheading}
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresData?.map((feature) => (
            <Card
              key={feature.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 flex flex-col items-start hover:shadow-xl hover:scale-110 transition-all duration-300 min-h-[200px]"
            >
              <div className="text-5xl text-[#1a40c6] dark:text-blue-400">
                <feature.icon size={40} />
              </div>
              <h3 className="font-bold text-xl text-[#232946] dark:text-gray-100 font-['Urbanist',sans-serif]">
                {feature.title}
              </h3>
              <p className="text-[#6b7280] dark:text-gray-300 text-base font-['Mulish',sans-serif]">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

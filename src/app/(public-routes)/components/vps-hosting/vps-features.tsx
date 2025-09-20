"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

type Feature = {
  title: string;
  description: string;
  icon: string;
  alt: string;
};

const features: Feature[] = [
  {
    title: "Enhanced Performance",
    description:
      "With AMD processors, you can handle heavy loads and meet the needs of all your apps and projects. For stable performance, we use Dell, HP Enterprise, Samsung, AMD, and Intel hardware.",
    icon: "/assets/performance-2.svg",
    alt: "Enhanced Performance",
  },
  {
    title: "Web Based UI",
    description:
      "With our web-based user interface, you can manage your account much more easily and efficiently. Having everything in one place makes it easy for you to manage it all.",
    icon: "/assets/web-2.svg",
    alt: "Web Based UI",
  },
  {
    title: "Daily Backup",
    description:
      "We make regular copies of our data to make sure that your data stays safe and secure. This will prevent you from having to worry about protecting your data in any way.",
    icon: "/assets/backup-2.svg",
    alt: "Daily Backup",
  },
  {
    title: "99.9% Uptime Guarantee",
    description:
      "With our VPS hosting, you'll get up to 100% uptime. Using our uptime feature, we improve the reliability and trustworthiness of your VPS. We make sure your website is online.",
    icon: "/assets/dollar.svg",
    alt: "99.9% Uptime Guarantee",
  },
  {
    title: "A Dedicated Environment",
    description:
      "You can host websites or business applications using all of your hardware resources, and you will also have access to your virtual server as an administrator.",
    icon: "/assets/ssd-2.svg",
    alt: "A dedicated environment",
  },
  {
    title: "Scalable to Any Size",
    description:
      "VPS solutions that are designed to meet all your business needs, and will grow with your business as it grows. The Hostnin Control Panel allows you to add what you need, when you need it.",
    icon: "/assets/performance-2.svg",
    alt: "Scalable to any size",
  },
];

export default function HostninVPSFeatures() {
  return (
    <section className="w-full py-10 sm:py-8 pb-14 sm:pb-20 flex flex-col items-center relative overflow-x-hidden">
      <div className="max-w-7xl w-full mx-auto px-4">
        <h2 className="text-[30px] sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black dark:text-white mb-3 sm:mb-8 text-center font-['Urbanist',sans-serif]">
          Hostnin Virtual Private Servers Include
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3 sm:gap-4 md:gap-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg p-5 pb-6 sm:p-5 md:p-8 flex flex-col items-start border border-gray-100 dark:border-neutral-700 min-h-[120px] sm:min-h-[140px] md:min-h-[180px] hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <CardContent className="p-0 flex flex-col items-start">
                <div className="flex-shrink-0 w-20 h-20 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-[#f1f6ff] dark:bg-neutral-700 mb-2 sm:mb-3 md:mb-4 relative">
                  <Image
                    alt={feature.alt}
                    width={50}
                    height={50}
                    className="object-contain w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform duration-300"
                    src={feature.icon}
                  />
                </div>
                <span className="font-bold text-xl sm:text-base md:text-lg lg:text-xl text-black dark:text-white mb-1 sm:mb-2 font-['Urbanist',sans-serif]">
                  {feature.title}
                </span>
                <span className="text-gray-500 dark:text-gray-300 text-base md:text-sm lg:text-[17px] font-medium text-left font-['Mulish',sans-serif]">
                  {feature.description}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

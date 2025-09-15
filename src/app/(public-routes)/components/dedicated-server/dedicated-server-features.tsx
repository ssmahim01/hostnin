"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

type Feature = {
  title: string;
  description: string;
  icon: string;
  alt: string;
};

const features: Feature[] = [
  {
    title: "Scalability Guranteed",
    description:
      "You can build a reliable technical platform for your business applications with Hostnin dedicated servers. By interconnecting your servers with other Hostnin solutions, like Hosted Private Cloud and Public Cloud, you're able to scale your infrastructure even further.",
    icon: "/assets/choose-management-1.svg",
    alt: "Scalability Guranteed",
  },
  {
    title: "One Click Deploy",
    description:
      "Your servers will be set up in one of our 11 datacenters around the world in less than one minute. Your customers' services will continue to run smoothly as a result of the security and high-resilience of your network. The one-click deployment option makes it easier for you to operate the server.",
    icon: "/assets/choose-1-click-1.svg",
    alt: "One Click Deploy",
  },
  {
    title: "Make it last",
    description:
      "With a Hostnin dedicated server, you are able to take advantage of a wide variety of innovative and unique solutions across our entire infrastructure, such as water-cooling for energy efficiency, and Hostnin Link Aggregation (OLA) technology, which has been designed and developed by our experts.",
    icon: "/assets/server-icon2.svg",
    alt: "Make it last",
  },
  {
    title: "Security Optimized",
    description:
      "It is our goal to provide you with clear information about our pricing, services, and options. As part of every one of our solutions, you will receive features included by default at no extra charge, such as unlimited ingress and egress traffic, anti-DDoS protection, and even 500 GB of external storage space.",
    icon: "/assets/menu-nav.svg",
    alt: "Security Optimized",
  },
];

export default function DedicatedServerFeatures() {
  return (
    <section
      className="w-full py-10 px-2 md:px-0 relative"
      style={{
        backgroundImage: "url('/assets/ds-about-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        minHeight: "350px",
      }}
    >
      <div className="max-w-7xl mx-auto text-center mb-6 md:mb-12">
        <h2
          className="text-[30px] md:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: "Urbanist, sans-serif" }}
        >
          Why choose Hostnin for Dedicated Servers?
        </h2>
        <p
          className="text-lg text-white/90 max-w-2xl mx-auto"
          style={{ fontFamily: "Mulish, sans-serif" }}
        >
          You should choose a dedicated server based on the applications you use
          for your business
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-5 md:p-8 flex flex-col items-start min-h-[150px] text-left hover:shadow-2xl transition-shadow"
          >
            <CardContent className="p-0 w-full">
              <div className="flex items-center mb-3">
                <div className="relative w-12 h-12 mr-3">
                  <Image
                    src={feature.icon}
                    alt={feature.alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3
                  className="font-bold text-xl md:text-xl lg:text-[22px] text-black dark:text-gray-200"
                  style={{ fontFamily: "Urbanist, sans-serif" }}
                >
                  {feature.title}
                </h3>
              </div>
              <p
                className="text-gray-700 dark:text-gray-300 text-base md:text-base"
                style={{ fontFamily: "Mulish, sans-serif" }}
              >
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

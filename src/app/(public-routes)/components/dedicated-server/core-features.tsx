"use client";

import React from "react";
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
    title: "Free DDOS Protection",
    description:
      "In order to protect our customers against DDoS attacks and intrusions, we developed our own DDoS Attack and Intrusion Prevention Solution.",
    icon: "/assets/icon-1.svg",
    alt: "Free DDOS Protection",
  },
  {
    title: "Full Control",
    description:
      "With every dedicated server, you have full root access, which allows you to install and run any program you want.",
    icon: "/assets/icon-2.svg",
    alt: "Full Control",
  },
  {
    title: "Wide Selection of OS",
    description:
      "You can choose from many different operating systems, including the most recent versions of Centos, Ubuntu, Debian, and Windows.",
    icon: "/assets/icon-3.svg",
    alt: "Wide Selection of OS",
  },
  {
    title: "Windows selection",
    description:
      "Windows Server 2019 64 bit, Windows Server 2016 R2 64 bit & Windows Server 2012 R2 64 bit.",
    icon: "/assets/icon-4.svg",
    alt: "Windows selection",
  },
  {
    title: "Premium Network",
    description:
      "Having multiple Tier-3 network providers is important for a stable network and the best connection. It also ensure best speed.",
    icon: "/assets/icon-5.svg",
    alt: "Premium Network",
  },
  {
    title: "Premium Hardware",
    description:
      "The servers we use for our Node servers are always of enterprise-class hardware that ensures the best performance and reliability.",
    icon: "/assets/icon-6.svg",
    alt: "Premium Hardware",
  },
  {
    title: "99.9% Uptime Guarantee",
    description:
      "The network is protected with hardware firewalls to offer 24/7 network availability with a 99.9% uptime guarantee.",
    icon: "/assets/icon-7.svg",
    alt: "99.9% Uptime Guarantee",
  },
  {
    title: "Secured Server",
    description:
      "We use an advanced firewall system to ensure the security of our servers. This ensures the security of your server.",
    icon: "/assets/icon-8.svg",
    alt: "Secured Server",
  },
];

export default function ServerCoreFeatures() {
  return (
    <section
      className="py-5"
      style={{ fontFamily: "Mulish, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold mb-3 text-black dark:text-gray-200"
          style={{ fontFamily: "Mulish, sans-serif" }}
        >
          Core Features Available!
        </h2>
        <p
          className="text-gray-500 dark:text-gray-300 mb-10 max-w-2xl"
          style={{ fontFamily: "Mulish, sans-serif" }}
        >
          Efficiently redefine high-quality potentialities rather than
          innovative ideas. Accurate infomediaries with high-payoff technology.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="bg-white dark:bg-slate-900 rounded-xl shadow-sm p-6 flex flex-col items-start hover:shadow-lg hover:shadow-blue-200 hover:scale-105 transition-all duration-300 min-h-[220px]"
              style={{ fontFamily: "Mulish, sans-serif" }}
            >
              <CardContent className="p-0 w-full">
                <div className="w-12 h-12 mb-4 relative">
                  <Image
                    src={feature.icon}
                    alt={feature.alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3
                  className="font-bold text-xl md:text-xl lg:text-[22px] mb-2 text-black dark:text-gray-200"
                  style={{ fontFamily: "Mulish, sans-serif" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-gray-500 dark:text-gray-300 text-base md:text-base"
                  style={{ fontFamily: "Mulish, sans-serif" }}
                >
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Cpu,
  Database,
  Globe,
  Monitor,
  Network,
  Settings,
  Shield,
} from "lucide-react";
import Link from "next/link";
import FeatureGrid from "./server-features";

type PlanProps = {
  title: string;
  description: string;
  featuresLeft: { icon: React.ReactNode; label: string }[];
  featuresRight: { icon: React.ReactNode; label: string }[];
  price: string;
  link: string;
  vat?: boolean;
};

const plans: PlanProps[] = [
  {
    title: "Dedicated Server - Intel® CoreTM i5-13500",
    description: "The perfect way to start your dedicated server journey...",
    featuresLeft: [
      { icon: <Cpu className="text-blue-600" />, label: "64 GB DDR4" },
      { icon: <Cpu className="text-blue-600" />, label: "Core™ i5-13500" },
      { icon: <Database className="text-blue-600" />, label: "2x500 GB SSD" },
      {
        icon: <Settings className="text-blue-600" />,
        label: "6-Performance-Cores",
      },
    ],
    featuresRight: [
      {
        icon: <Globe className="text-blue-600" />,
        label: "90 Terabyte Bandwidth",
      },
      { icon: <Shield className="text-blue-600" />, label: "Fully Managed" },
      {
        icon: <Network className="text-blue-600" />,
        label: "IPv4 IPv6 Address",
      },
      {
        icon: <Monitor className="text-blue-600" />,
        label: "Windows or Linux",
      },
    ],
    price: "৳9,999",
    link: "https://my.hostnin.com/index.php/store/dedicated-server/i5?_gl=1*1k2uwnx*_gcl_au*MTcxOTUzMzk4My4xNzU3NjE1ODM0",
  },
  {
    title: "Dedicated Server - AMD Ryzen 5 3600",
    description: "Now is the right time for you to dig in deeper...",
    featuresLeft: [
      { icon: <Cpu className="text-blue-600" />, label: "64 GB DDR4" },
      {
        icon: <Cpu className="text-blue-600" />,
        label: "AMD Ryzen™ 5 3600",
      },
      {
        icon: <Database className="text-blue-600" />,
        label: "2x512 GB (Gen4)",
      },
      {
        icon: <Settings className="text-blue-600" />,
        label: "6-Performance-Cores",
      },
    ],
    featuresRight: [
      {
        icon: <Globe className="text-blue-600" />,
        label: "90 Terabyte Bandwidth",
      },
      { icon: <Shield className="text-blue-600" />, label: "Fully Managed" },
      {
        icon: <Network className="text-blue-600" />,
        label: "IPv4 IPv6 Address",
      },
      {
        icon: <Monitor className="text-blue-600" />,
        label: "Windows or Linux",
      },
    ],
    price: "৳9,999",
    link: "https://my.hostnin.com/index.php/store/dedicated-server/r5?_gl=1*1k2uwnx*_gcl_au*MTcxOTUzMzk4My4xNzU3NjE1ODM0",
  },
  {
    title: "Dedicated Server - Intel® CoreTM i9-13900",
    description: "The server is designed to meet the needs of complex...",
    featuresLeft: [
      { icon: <Cpu className="text-blue-600" />, label: "64 GB DDR5 ECC" },
      {
        icon: <Cpu className="text-blue-600" />,
        label: "Core™ i9-13900",
      },
      {
        icon: <Database className="text-blue-600" />,
        label: "NvME SSD 2 x 1.92 TB (Gen4)",
      },
      {
        icon: <Settings className="text-blue-600" />,
        label: "6+8-Efficient-Cores",
      },
    ],
    featuresRight: [
      {
        icon: <Globe className="text-blue-600" />,
        label: "90 Terabyte Bandwith",
      },
      { icon: <Shield className="text-blue-600" />, label: "Fully Managed" },
      {
        icon: <Network className="text-blue-600" />,
        label: "IPv4 IPv6 Address",
      },
      {
        icon: <Monitor className="text-blue-600" />,
        label: "Windows or Linux",
      },
    ],
    price: "৳14,999",
    link: "https://my.hostnin.com/index.php/store/dedicated-server/i9?_gl=1*1k2uwnx*_gcl_au*MTcxOTUzMzk4My4xNzU3NjE1ODM0",
  },
  {
    title: "Dedicated Server - AMD RyzenTM 7 7700",
    description: "It is designed for higher performance...",
    featuresLeft: [
      { icon: <Cpu className="text-blue-600" />, label: "RAM 64 GB DDR5" },
      {
        icon: <Cpu className="text-blue-600" />,
        label: "Ryzen™ 7 7700",
      },
      {
        icon: <Database className="text-blue-600" />,
        label: "NvME SSD 2 x 1 TB (Gen 4)",
      },
      {
        icon: <Settings className="text-blue-600" />,
        label: "Octa-Core Raphael (Zen 4)",
      },
    ],
    featuresRight: [
      {
        icon: <Globe className="text-blue-600" />,
        label: "90 Terabyte Bandwidth",
      },
      { icon: <Shield className="text-blue-600" />, label: "Fully Managed" },
      {
        icon: <Network className="text-blue-600" />,
        label: "IPv4 IPv6 Address",
      },
      {
        icon: <Monitor className="text-blue-600" />,
        label: "Windows or Linux",
      },
    ],
    price: "৳14,999",
    link: "https://my.hostnin.com/index.php/store/dedicated-server/r?_gl=1*1k2uwnx*_gcl_au*MTcxOTUzMzk4My4xNzU3NjE1ODM0",
    vat: true,
  },
];

export default function DedicatedPlans() {
  return (
    <section
      id="pricing"
      className="w-full flex flex-col items-center justify-center pt-12 pb-6 px-2 bg-background"
    >
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mt-7 mb-10 text-foreground">
          Dedicated CPU Hosting plans <br /> and Pricing
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {plans.map((plan, idx) => (
            <Card
              key={idx}
              className="rounded-2xl shadow-md p-7 flex flex-col justify-between border border-border hover:shadow-xl transition-all bg-card"
            >
              <CardContent>
                <h3 className="font-bold text-2xl md:text-3xl mb-3 text-foreground">
                  {plan.title}
                </h3>
                <p className="text-muted-foreground text-base mb-8 min-h-[40px]">
                  {plan.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <div className="flex-1 flex flex-col gap-4">
                    {plan.featuresLeft.map((f, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-foreground/70 text-base"
                      >
                        {f.icon}
                        <span>{f.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="hidden sm:block w-px bg-border mx-2"></div>
                  <div className="flex-1 flex flex-col gap-4">
                    {plan.featuresRight.map((f, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-foreground/70 text-base"
                      >
                        {f.icon}
                        <span>{f.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full">
                  <Button
                    asChild
                    size={"lg"}
                    className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold px-8 py-6 rounded-full shadow hover:scale-105 transition-transform text-lg"
                  >
                    <Link target="_blank" href={plan.link}>
                      Purchase Now
                    </Link>
                  </Button>
                  <div className="flex items-center gap-2">
                    <span className="text-pink-600 font-bold text-3xl">
                      {plan.price}
                    </span>
                    <span className="text-foreground text-lg">/monthly</span>
                    {plan.vat && (
                      <span className="text-gray-500 dark:text-gray-300 text-base">
                        /mo ex VAT
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <FeatureGrid />
      </div>
    </section>
  );
}

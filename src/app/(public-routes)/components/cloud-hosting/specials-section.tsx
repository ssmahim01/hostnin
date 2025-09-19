"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

interface SpecialItem {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
}

const specials: SpecialItem[] = [
  {
    title: "OneClick Install",
    description:
      "It only takes one click to generate a copy of your entire website, which can then be used for testing, updating, or adding new content or code. As soon as you are satisfied with the results, you may deploy those changes to the live site in an effortless manner.",
    icon: "/assets/wordpress-staging.svg",
    iconAlt: "OneClick Install",
  },
  {
    title: "Built-in Analytics",
    description:
      "Monitor critical metrics for all of your WordPress sites, including load average, disk I/O, and bandwidth utilization, among other things. Get all the report right from your control panel, data can filtered by country, regions.",
    icon: "/assets/built-in-analytics.svg",
    iconAlt: "Built-in Analytics",
  },
  {
    title: "Secured Login",
    description:
      "Two-factor authentication, FTP security lock, brute-force login protection with StackProtect, and blocking by IP address or country all help keep people from getting into your control panel and files without your permission.",
    icon: "/assets/login-security.svg",
    iconAlt: "Secured Login",
  },
  {
    title: "Email Management",
    description:
      "For protection and privacy, TLS encrypts all email while it's being sent. We use network-level scans, virus scans, and content-based scans to look for spam and viruses that come in.",
    icon: "/assets/email-management.svg",
    iconAlt: "Email Management",
  },
  {
    title: "Powerful multisite hosting",
    description:
      "Manage hosting, security, and domains in one location. No of your site count, advanced multi-site administration capabilities and filters give you control.",
    icon: "/assets/powerful-multisite-hosting.svg",
    iconAlt: "Powerful multisite hosting",
  },
  {
    title: "Built in SSH Terminal",
    description:
      "There are more than 80 1-click tools, including WordPress. phpMyAdmin, Git Version Control, domain names and DNS manager, SSH access, email manager, 2FA, and a lot more.",
    icon: "/assets/loaded-with-features.svg",
    iconAlt: "Built in SSH Terminal",
  },
];

export default function SpecialsSection() {
  return (
    <section
      className="w-full bg-no-repeat bg-cover bg-center my-14"
      style={{
        backgroundImage: "url('/assets/bg-curve.png')",
        fontFamily: "Mulish, sans-serif",
      }}
    >
      <div className="flex flex-col items-center pt-6 sm:pt-8 lg:pt-10 px-3 sm:px-4">
        <h1 className="text-center text-3xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4 font-['Mulish',sans-serif]">
          What are Specials?
        </h1>
        <p className="text-gray-500 dark:text-gray-300 w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl text-center mx-auto mb-6 sm:mb-8 text-[15px] sm:text-base lg:text-lg px-3 sm:px-4 font-['Mulish',sans-serif]">
          You&apos;ll get more resources for less money with our plans, so you
          can count on their reliability. It&apos;s easier than you think to
          start your own website with Hostnin!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl w-full px-3 sm:px-4 pb-6 sm:pb-8 lg:pb-20">
          {specials.map((item, idx) => (
            <Card
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm p-6 sm:p-6 lg:p-8 flex flex-col hover:shadow-md transition"
            >
              <CardContent className="p-0">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="w-12 h-12 sm:w-15 sm:h-15 flex items-center justify-center rounded-full bg-blue-50 dark:bg-blue-950 flex-shrink-0">
                    <Image
                      src={item.icon}
                      alt={item.iconAlt}
                      width={50}
                      height={50}
                      className="text-blue-600 w-8 h-8 sm:w-10 sm:h-12"
                    />
                  </div>
                  <h3 className="font-bold text-xl md:text-[22px] text-gray-900 dark:text-white font-['Urbanist',sans-serif]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-500 dark:text-gray-300 text-[15px] md:text-base leading-relaxed font-medium font-['Mulish',sans-serif]">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
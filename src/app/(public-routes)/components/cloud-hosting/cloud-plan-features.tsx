"use client";

import React from "react";
import { Check } from "lucide-react";

interface FeatureItem {
  text: string;
}

interface FeatureColumn {
  items: FeatureItem[];
}

const features: FeatureColumn[] = [
  {
    items: [
      { text: "Easy Control Panel" },
      { text: "100% Server Uptime" },
      { text: "1 Hour Response Time" },
      { text: "24/7 Technical Support" },
      { text: "Clustered Failover DNS" },
      { text: "1TB+ DDOS Protection" },
    ],
  },
  {
    items: [
      { text: "CMS Script Installer" },
      { text: "Malware & Exploit Scanning" },
      { text: "Advanced CDN FREE" },
      { text: "Edge Caching System" },
      { text: "ASP.NET Access Hosting" },
      { text: "Unlimited Auto Responders" },
    ],
  },
  {
    items: [
      { text: "Spam Protection" },
      { text: "SSH Access Available" },
      { text: "Latest PHP Extensions" },
      { text: "ionCube PHP Loader" },
      { text: "Temporary Domain" },
      { text: "Junk Mail Filters" },
    ],
  },
  {
    items: [
      { text: "Git Version Control" },
      { text: "Cloud Based Server" },
      { text: "Latest Configuration" },
      { text: "10GB Mailbox Storage" },
      { text: "Unlimited SFTP Users" },
      { text: "45+ Web Optimization Tools" },
    ],
  },
];

export default function CloudPlanFeatures() {
  return (
    <section className="w-full bg-[#f8f8f8] dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold md:font-bold text-center text-black dark:text-white mb-3 sm:mb-4 font-['Urbanist',sans-serif]">
          Cloud Hosting all Plans
          <br />
          <span className="block">Include Features</span>
        </h2>

        <div className="mt-6 sm:mt-8 lg:mt-12 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 justify-items-start sm:justify-items-center">
          {features.map((col, colIndex) => (
            <ul
              key={colIndex}
              className="space-y-2 sm:space-y-3 md:space-y-4 w-full"
            >
              {col.items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center text-sm sm:text-base text-black dark:text-gray-100"
                >
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 mr-2">
                    <Check className="w-2 h-2 text-white" strokeWidth={3} />
                  </div>
                  <span className="font-semibold text-gray-600 dark:text-gray-300 text-base sm:text-sm md:text-base font-['Urbanist',sans-serif]">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
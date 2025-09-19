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
    <section className="w-full bg-[#f8f8f8] dark:bg-gray-900 py-14">
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold md:font-bold text-center text-black dark:text-white mb-3 sm:mb-4 font-['Urbanist',sans-serif]">
          Cloud Hosting all Plans
          <br />
          <span className="block">Include Features</span>
        </h2>

        <div className="mt-6 sm:mt-8 lg:mt-12 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 justify-items-start sm:justify-items-center">
          {features.map((col, colIndex) =>
            col.items.map((item, idx) => (
              <div
                key={`${colIndex}-${idx}`}
                className="flex flex-col justify-center items-center p-4 w-full bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-black/40 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] "
              >
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 mr-3">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="font-semibold text-gray-700 dark:text-gray-200 text-base sm:text-sm md:text-base font-['Urbanist',sans-serif]">
                    {item.text}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

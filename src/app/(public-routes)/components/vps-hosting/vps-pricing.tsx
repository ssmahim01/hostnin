"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

type Plan = {
  name: string;
  price: string;
  features: { label: string; value?: string; included?: boolean }[];
};

const plans: Plan[] = [
  {
    name: "Starter",
    price: "৳1999",
    features: [
      { label: "vCPU", value: "2 vCPU Cores" },
      { label: "Memory (RAM)", value: "4 GB RAM" },
      { label: "NVMe SSD Storage", value: "40 GB NVMe" },
      { label: "Provisioning Time", value: "30 minute" },
      { label: "Bandwidth", value: "20 TB Traffic" },
      { label: "Inode Limit", value: "No Limit" },
      { label: "Dedicated IP", included: true },
      { label: "Full Root Access", included: true },
      { label: "1 Tbps+ Anti-DDoS", included: true },
      { label: "Windows & Linux Support", included: true },
      { label: "24/7/365 Support", included: true },
    ],
  },
  {
    name: "Plus",
    price: "৳2999",
    features: [
      { label: "vCPU", value: "4 vCPU Cores" },
      { label: "Memory (RAM)", value: "8 GB RAM" },
      { label: "NVMe SSD Storage", value: "80 GB NVMe" },
      { label: "Provisioning Time", value: "30 minute" },
      { label: "Bandwidth", value: "20 TB Traffic" },
      { label: "Inode Limit", value: "No Limit" },
      { label: "Dedicated IP", included: true },
      { label: "Full Root Access", included: true },
      { label: "1 Tbps+ Anti-DDoS", included: true },
      { label: "Windows & Linux Support", included: true },
      { label: "24/7/365 Support", included: true },
    ],
  },
  {
    name: "Pro",
    price: "৳4999",
    features: [
      { label: "vCPU", value: "8 vCPU Cores" },
      { label: "Memory (RAM)", value: "16 GB RAM" },
      { label: "NVMe SSD Storage", value: "160 GB NVMe" },
      { label: "Provisioning Time", value: "30 minute" },
      { label: "Bandwidth", value: "20 TB Traffic" },
      { label: "Inode Limit", value: "No Limit" },
      { label: "Dedicated IP", included: true },
      { label: "Full Root Access", included: true },
      { label: "1 Tbps+ Anti-DDoS", included: true },
      { label: "Windows & Linux Support", included: true },
      { label: "24/7/365 Support", included: true },
    ],
  },
  {
    name: "Ultimate",
    price: "৳7999",
    features: [
      { label: "vCPU", value: "16 vCPU Cores" },
      { label: "Memory (RAM)", value: "32 GB RAM" },
      { label: "NVMe SSD Storage", value: "320 GB NVMe" },
      { label: "Provisioning Time", value: "30 minute" },
      { label: "Bandwidth", value: "20 TB Traffic" },
      { label: "Inode Limit", value: "No Limit" },
      { label: "Dedicated IP", included: true },
      { label: "Full Root Access", included: true },
      { label: "1 Tbps+ Anti-DDoS", included: true },
      { label: "Windows & Linux Support", included: true },
      { label: "24/7/365 Support", included: true },
    ],
  },
];

export default function PricingTable() {
  return (
    <section className="bg-accent py-10 lg:pt-[400px] pt-[700px] md:pt-[550px]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            We Have the Perfect VPS Package
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-3 text-sm sm:text-base md:text-lg">
            Compare our plans according to your needs
          </p>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-4 text-center">
                <div className="text-xl font-bold text-white">{plan.name}</div>
                <div className="bg-white/15 rounded-lg p-3 backdrop-blur-sm border border-white/25 mt-2">
                  <div className="text-2xl sm:text-3xl font-bold text-white">
                    {plan.price}
                  </div>
                  <div className="text-sm text-blue-200">/mo</div>
                </div>
              </div>
              <div className="p-4 space-y-2">
                {plan.features.map((feature) => (
                  <div
                    key={feature.label}
                    className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <span className="font-medium text-gray-700 dark:text-gray-200">
                      {feature.label}
                    </span>
                    <div className="ml-2">
                      {feature.included ? (
                        <Check className="text-green-500 dark:text-green-400" />
                      ) : (
                        <span className="font-medium text-gray-700 dark:text-gray-200">
                          {feature.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block mt-10 overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg">
          <table className="w-full min-w-[900px] table-fixed border-collapse">
            <colgroup>
              <col className="w-1/5" />
              {plans.map(() => (
                <col key={Math.random()} className="w-1/5" />
              ))}
            </colgroup>
            <thead className="sticky top-0 z-50 bg-gradient-to-r from-blue-700 to-blue-500">
              <tr>
                <th className="p-4 text-white font-bold text-lg border-r border-blue-600/50">
                  Features
                </th>
                {plans.map((plan) => (
                  <th
                    key={plan.name}
                    className="p-4 text-white font-bold text-center border-r border-blue-600/50 last:border-r-0"
                  >
                    <div className="space-y-2">
                      <div className="font-bold text-xl">{plan.name}</div>
                      <div className="bg-white/15 rounded-lg p-2 backdrop-blur-sm border border-white/25">
                        <div className="text-2xl font-bold text-white">
                          {plan.price}
                        </div>
                        <div className="text-sm text-blue-200">/mo</div>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {plans[0].features.map((feature, idx) => (
                <tr
                  key={feature.label}
                  className={`hover:bg-blue-50/50 dark:hover:bg-gray-800 transition-colors duration-200 ${
                    idx % 2 === 0
                      ? "bg-gray-50 dark:bg-gray-900/50"
                      : "bg-white dark:bg-gray-800"
                  }`}
                >
                  <td className="p-4 font-semibold text-gray-700 dark:text-gray-200 border-r border-gray-200 dark:border-gray-700">
                    {feature.label}
                  </td>
                  {plans.map((plan) => (
                    <td
                      key={plan.name + feature.label}
                      className="p-4 text-center border-r border-gray-200 dark:border-gray-700 last:border-r-0"
                    >
                      {plan.features[idx].included ? (
                        <Check className="inline text-green-500 dark:text-green-400 text-lg" />
                      ) : (
                        <span className="font-medium text-gray-700 dark:text-gray-200">
                          {plan.features[idx].value}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import React from "react";

interface AffiliateFeature {
  title: string;
  description: string;
}

const features: AffiliateFeature[] = [
  {
    title: "High conversion rates",
    description:
      "Our brand and effective promo materials mean the traffic you send our way will convert.",
  },
  {
    title: "Commissions based on performance",
    description: "The more sales you make, the bigger your commission.",
  },
  {
    title: "Easy to start and grow",
    description:
      "Drive conversions with professionally-designed banner packages, screenshots, and more.",
  },
];

export default function AffiliateMarketing() {
  return (
    <section className="w-full pb-6 md:px-4 lg:px-8">
      <div className="max-w-7xl mx-auto py-10 px-4 lg:px-8 rounded-xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text column */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              User-first affiliate marketing
            </h2>

            <div className="space-y-6">
              {features.map((item, idx) => (
                <div key={idx}>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image column */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/assets/services-img.webp"
                alt="Affiliate Marketing"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

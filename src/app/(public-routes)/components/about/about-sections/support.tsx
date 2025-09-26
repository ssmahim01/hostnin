"use client";

import Image from "next/image";

interface SupportItem {
  title: string;
  description: string;
}

const supportItems: SupportItem[] = [
  {
    title: "Web hosting experts",
    description:
      "Every customer gets top-tier support as standard, from web hosting fanatics who know it all inside and out.",
  },
  {
    title: "Support you can rely on 24x7",
    description:
      "Here when you need us, with quick responses and resolutions all hours of the day, 365 days per year.",
  },
  {
    title: "Top-rated support",
    description:
      "We are rated #1 on Trustpilot by our customers. We were also named hosting provider that users were most likely to recommend by the G2 awards.",
  },
];

export default function Support() {
  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 flex justify-center">
            <Image
              src="/assets/work-hostnin.jpg"
              alt="Support Agent"
              width={1138}
              height={709}
              loading="lazy"
              className="w-full max-w-2xl h-auto object-contain rounded-xl"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-center lg:text-left text-gray-900 dark:text-white">
              Expert Support Team
            </h2>

            <div className="mt-6 space-y-6">
              {supportItems.map((item, idx) => (
                <div key={idx}>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

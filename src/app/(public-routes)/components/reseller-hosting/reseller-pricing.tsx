"use client";

import { Check } from "lucide-react";
import Link from "next/link";

interface FeatureItem {
  text: string;
}

interface Plan {
  title: string;
  price: string;
  link: string;
  features: FeatureItem[];
}

const resellerPlans: Plan[] = [
  {
    title: "Reseller Starter",
    price: "৳2999 /mo",
    link: "https://my.hostnin.com/index.php/store/reseller/starter",
    features: [
      { text: "50 GB NVMe SSD Storage" },
      { text: "1000 GB Bandwidth" },
      { text: "50 cPanel Account" },
      { text: "1 GB RAM Per cPanel" },
      { text: "1 Core CPU Per cPanel" },
      { text: "20 Entry Process Per cPanel" },
      { text: "Whitelabel Reseller" },
      { text: "Private Name Servers" },
    ],
  },
  {
    title: "Reseller Standard",
    price: "৳4999 /mo",
    link: "https://my.hostnin.com/index.php/store/reseller/standard",
    features: [
      { text: "100 GB NVMe Storage" },
      { text: "Unlimited Bandwidth" },
      { text: "100 cPanel Account" },
      { text: "1 GB RAM Per cPanel" },
      { text: "1 Core CPU Per cPanel" },
      { text: "20 Entry Process Per cPanel" },
      { text: "Whitelabel Reseller" },
      { text: "Private Name Servers" },
    ],
  },
  {
    title: "Reseller Ultimate",
    price: "৳9999 /mo",
    link: "https://my.hostnin.com/index.php/store/reseller/ultimate",
    features: [
      { text: "250 GB SSD Storage" },
      { text: "Unlimited Bandwidth" },
      { text: "200 cPanel Account" },
      { text: "2 GB RAM Per cPanel" },
      { text: "2 Core CPU Per cPanel" },
      { text: "30 Entry Process Per cPanel" },
      { text: "Whitelabel Reseller" },
      { text: "Private Name Servers" },
    ],
  },
];

export default function ResellerPricing() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-16 pb-10 md:pt-60">
      {/* Section header */}
      <div id="pricing" className="text-center mb-10 max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white">
          Powerful <span className="text-blue-600">Reseller Hosting</span> Plans
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-slate-600 dark:text-slate-300">
          Start your own hosting business with our reliable, white-label
          reseller packages with scalable, secure and built for performance.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 justify-center items-stretch">
        {resellerPlans.map((plan, idx) => (
          <div
            key={idx}
            className="relative w-full max-w-[400px] sm:max-w-sm mx-auto bg-white dark:bg-slate-900 shadow-xl flex flex-col items-center px-4 md:px-6 py-6 lg:py-8 border border-gray-200 dark:border-slate-700 rounded-xl hover:shadow-2xl transition-shadow"
          >
            <div className="flex flex-col items-center mb-4 w-full">
              <span className="text-slate-900 dark:text-white font-bold text-xl mb-3 w-full text-center">
                {plan.title}
              </span>
              <div className="flex items-end justify-center mb-4 w-full">
                <span className="text-[#232946] dark:text-slate-50 text-4xl lg:text-5xl font-bold">
                  {plan.price.split(" ")[0]}
                </span>
                <span className="text-gray-500 dark:text-gray-300 text-sm sm:text-base md:text-lg font-medium ml-1 mb-2">
                  {plan.price.split(" ")[1]}
                </span>
              </div>
              <Link
                href={plan.link}
                target="_blank"
                className="w-full block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 text-center rounded-md transition-colors"
              >
                Buy Now
              </Link>
            </div>

            <ul className="w-full flex-1 mb-2 space-y-2 text-sm sm:text-base">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-slate-700 dark:text-slate-200 text-[15px] md:text-[13px] lg:text-lg">
                    {f.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

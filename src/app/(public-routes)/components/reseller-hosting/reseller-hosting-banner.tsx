"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

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

export default function ResellerHostingBanner() {
  return (
    <section
      className="relative min-h-[500px] sm:min-h-[700px] md:min-h-[750px] lg:min-h-[850px] flex items-center justify-center pt-8 md:pt-0 bg-cover bg-center bg-no-repeat text-white dark:text-white"
      style={{ backgroundImage: `url('/assets/hero-bg-scaled-1.jpg')` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/60 dark:bg-black/70 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center py-8 md:py-16 md:px-4 px-1">
        <h1 className="text-[32px] md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6">
          KickStart Your Business <br /> With Our Reseller Hosting
        </h1>

        <ul className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 md:gap-8 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg font-semibold pt-3">
          {["Blazing Performance", "24/7 Support", "Unlimited Features"].map(
            (item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-lg md:text-xl text-blue-400">
                  <Check className="w-5 h-5" />
                </span>
                <span className="text-[17px] font-bold">{item}</span>
              </li>
            )
          )}
        </ul>

        <Link href={"/pricing"}>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3 hover:cursor-pointer hover:scale-105 rounded transition-transform duration-500 text-[15px] sm:text-base md:text-lg gap-2 shadow mb-6 flex items-center justify-center">
            <span> View Pricing</span> <ArrowRight />
          </button>
        </Link>
      </div>

      {/* Pricing Cards */}
      <div  id="pricing" className="absolute left-0 right-0 bottom-[-1300px] md:bottom-[-530px] lg:bottom-[-320px] xl:bottom-[-400px] z-10 flex justify-center px-4">
        <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 justify-center items-stretch">
          {resellerPlans.map((plan, idx) => (
            <div
              key={idx}
              className="relative w-full max-w-[400px] sm:max-w-sm mx-auto bg-white dark:bg-neutral-900 shadow-xl flex flex-col items-center px-3 sm:px-4 md:px-6 py-2.5 sm:py-6 md:py-8 border border-gray-200 dark:border-neutral-700 mt-4 sm:mt-0 rounded-lg"
            >
              <div className="flex flex-col items-center mb-2 sm:mb-4 mt-1 sm:mt-2 w-full">
                <span className="text-[#232946] dark:text-white font-bold text-xl mb-2 text-start w-full">
                  {plan.title}
                </span>
                <div className="flex items-start mb-2 sm:mb-4 w-full">
                  <span className="text-pink-600 text-3xl sm:text-3xl md:text-5xl font-bold">
                    {plan.price.split(" ")[0]}
                  </span>
                  <span className="text-gray-500 dark:text-gray-300 text-sm sm:text-base font-medium ml-1 mb-1">
                    {plan.price.split(" ")[1]}
                  </span>
                </div>
                <Link
                  href={plan.link}
                  target="_blank"
                  className="w-full block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 text-center rounded transition"
                >
                  Buy Now
                </Link>
              </div>

              <ul className="w-full flex-1 mb-2 sm:mb-4 space-y-1 sm:space-y-2 text-sm sm:text-base">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <Check className="w-2 h-2 text-white" />
                    </div>
                    <span className="text-slate-700 dark:text-slate-200 text-[15px] md:text-lg py-1">
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AffordableBdix() {
      const handleScrollToPricing = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const section = document.querySelector("#bdix-pricing");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 relative">
        {/* Text */}
        <div className="flex-1 max-w-xl text-center lg:text-left order-2 lg:order-1">
          <h1
            className="text-[28px] sm:text-3xl md:text-4xl lg:text-5xl md:font-bold font-semibold text-black dark:text-white mb-3 sm:mb-4 leading-tight"
            style={{ fontFamily: "var(--font-urbanist)" }}
          >
            Affordable BDIX
          </h1>
          <p className="text-[#232946] dark:text-neutral-300 text-[15px] sm:text-base mb-3 sm:mb-4 leading-relaxed text-justify">
            We offer the fastest speeds for your BDIX hosting by providing
            servers located right here in Bangladesh. This proximity ensures
            that your website runs as smoothly and quickly as if it were hosted
            on your local computer.
          </p>
          <p className="text-[#232946] dark:text-neutral-300 text-[15px] sm:text-base mb-6 sm:mb-8 leading-relaxed text-justify">
            With our BDIX hosting, you can expect lightning-fast response times,
            minimal latency, and seamless connectivity, giving your visitors an
            exceptional browsing experience. Our local servers guarantee
            top-notch performance, making your website more efficient and
            reliable. Choose our BDIX hosting for unmatched speed and superior
            service.
          </p>
          <Button onClick={handleScrollToPricing} className="bg-[#1769ff] py-6 hover:cursor-pointer hover:bg-[#0a3ec9] text-white font-semibold px-6 sm:px-8 rounded-sm transition text-[15px] sm:text-base shadow mb-4 w-full sm:w-auto">
            Order Now
          </Button>
        </div>

        {/* Image */}
        <div className="flex-1 flex items-center justify-center relative w-full max-w-sm sm:max-w-md lg:max-w-xl order-1 lg:order-2 mb-6 lg:mb-0 p-2 rounded-lg shadow-md hover:scale-105 hover:shadow-xl transition-transform transform duration-500 ease-in-out bg-accent">
          <Image
            src="/assets/laptop-man.webp"
            alt="Man holding laptop"
            width={420}
            height={420}
            className="object-contain w-full h-auto -mb-[7px] z-0 max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-none"
            priority
          />
        </div>
      </div>
    </section>
  );
}

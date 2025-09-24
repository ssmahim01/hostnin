"use client";

import { ManagedTurboHighlightsProps } from "@/types/turbo-highlights";
import Image from "next/image";


export default function ManagedTurboHighlights({
  heading,
  subheading,
  highlights,
}: ManagedTurboHighlightsProps) {
  return (
    <section className="w-full pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* heading */}
        <div className="flex flex-col lg:flex-row md:items-center lg:justify-between mb-10 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#03206B] dark:text-white lg:mb-2">
              {heading}
            </h2>
          </div>
          <div className="text-gray-500 dark:text-gray-300 max-w-2xl text-base font-normal">
            {subheading}
          </div>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col min-h-[260px] relative overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
            >
              {/* icon */}
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 text-2xl shadow-sm relative">
                <Image
                  src={item.icon}
                  alt={item.iconAlt}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              {/* faded side icon */}
              <div className="absolute top-1 right-6 w-28 h-24 opacity-20 pointer-events-none select-none">
                <Image
                  src={item.sideIcon}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>

              {/* content */}
              <h3 className="text-2xl md:text-[22px] font-bold text-[#03206B] dark:text-white mb-2 font-['Urbanist',sans-serif]">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-[15px] md:text-base font-normal font-['Mulish',sans-serif]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

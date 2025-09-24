"use client";

import { BenefitsSectionProps } from "@/types/benefit";
import Image from "next/image";

export default function BenefitsSection({
  mainTitle,
  mainDescription,
  mainCard,
  sideCards,
}: BenefitsSectionProps) {
  return (
    <section className="pt-7 md:pb-10 pb-14">
      <div className=" px-4 md:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
        {/* Left */}
        <div>
          <h2 className="text-[26px] sm:text-3xl md:text-4xl font-bold text-[#001858] dark:text-white mb-3 sm:mb-4 leading-tight">
            {mainTitle}
          </h2>
          <p className="text-[#6b7280] dark:text-gray-300 text-base sm:text-lg mb-4 sm:mb-10 max-w-xl text-justify">
            {mainDescription}
          </p>

          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-blue-100 dark:border-gray-700 p-6 md:p-8 pb-8 w-full transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <div className="flex items-center gap-4 sm:gap-6 mb-3">
              <div className="flex-shrink-0">
                <Image
                  src={mainCard.icon}
                  alt={mainCard.iconAlt}
                  width={56}
                  height={56}
                  className="w-14 h-14"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#001858] dark:text-white">
                {mainCard.title}
              </h3>
            </div>
            <p className="text-[#6b7280] dark:text-gray-300 text-[15px] sm:text-base w-full text-justify">
              {mainCard.description}
            </p>
          </div>
        </div>

        {/* Right Cards */}
        <div className="flex flex-col gap-6 sm:gap-8">
          {sideCards.map((card, i) => (
            <div
              key={i}
              className="bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-blue-100 dark:border-gray-700 p-6 md:p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              <div className="flex items-center gap-4 sm:gap-6 mb-3">
                <div className="flex-shrink-0">
                  <Image
                    src={card.icon}
                    alt={card.iconAlt}
                    priority
                    width={56}
                    height={56}
                    className="w-14 h-14"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#001858] dark:text-white">
                  {card.title}
                </h3>
              </div>
              <p className="text-[#6b7280] dark:text-gray-300 text-[15px] sm:text-base w-full text-justify">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { ComponentType } from "react";

type FeatureCardProps = {
  iconSrc: string;
  decorativeSrc?: ComponentType<any>;
  title: string;
  description: string;
};

export default function FeatureCard({
  iconSrc,
  decorativeSrc: DecorativeIcon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-xl p-4 sm:p-6 lg:p-8 flex-1 min-w-0 flex flex-col justify-between overflow-hidden font-[Mulish,sans-serif]">
      <div className="flex items-center justify-between mb-3 sm:mb-4 relative z-10 w-full">
        {/* Main icon from props */}
        <span className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white dark:bg-gray-800 shadow-lg flex-shrink-0 hover:scale-105 hover:shadow-lg transition-all duration-500 ease-in-out">
          <Image
            alt={title}
            src={iconSrc}
            width={64}
            height={64}
            className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16"
          />
        </span>

        {/* Decorative icons */}
        <span
          className="flex items-center justify-center select-none pointer-events-none hover:scale-105 hover:shadow-lg transition-all duration-500 ease-in-out"
          style={{ opacity: 0.13, marginTop: "-12px" }}
        >
          {DecorativeIcon && (
            <DecorativeIcon className="w-8 h-8 sm:w-14 sm:h-14 md:w-16 md:h-16 text-blue-500" />
          )}
        </span>
      </div>

      {/* Title */}
      <span className="font-bold text-lg sm:text-xl md:text-2xl text-[#03206B] dark:text-white mb-2 sm:mb-3 block text-left">
        {title}
      </span>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base relative z-10 text-left leading-relaxed">
        {description}
      </p>
    </div>
  );
}

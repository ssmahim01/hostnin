"use client"

import Image from "next/image";

type FeatureCardProps = {
  iconSrc: string;
  title: string;
  description: string;
};

export default function FeatureCard({
  iconSrc,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-xl p-4 sm:p-6 lg:p-8 flex-1 min-w-0 flex flex-col justify-between overflow-hidden font-[Mulish,sans-serif]">
      <div className="flex items-center justify-between mb-3 sm:mb-4 relative z-10 w-full">
        <span className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white dark:bg-gray-800 shadow-lg flex-shrink-0">
          <Image
            alt={title}
            src={iconSrc}
            width={64}
            height={64}
            className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16"
          />
        </span>
        <span
          className="flex items-center justify-center select-none pointer-events-none"
          style={{ opacity: 0.13, marginTop: "-12px" }}
        >
          <Image
            alt=""
            src={iconSrc}
            width={96}
            height={96}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
          />
        </span>
      </div>
      <span className="font-bold text-lg sm:text-xl md:text-2xl text-[#03206B] dark:text-white mb-2 sm:mb-3 block text-left">
        {title}
      </span>
      <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base relative z-10 text-left leading-relaxed">
        {description}
      </p>
    </div>
  );
}

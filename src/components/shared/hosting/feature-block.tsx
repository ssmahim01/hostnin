"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface FeatureBlockProps {
  heading: string;
  largeHeading?: boolean;
  description: string;
  buttonLabel?: string;
  buttonHref?: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  scrollId?: boolean;
  bullets?: string[];
}

export default function FeatureBlock({
  heading,
  largeHeading,
  description,
  buttonLabel,
  buttonHref,
  scrollId,
  imageSrc,
  imageAlt,
  reverse,
  bullets,
}: FeatureBlockProps) {
  // Smooth scroll function
  const handleScrollToPricing = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const section = document.querySelector("#pricing");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center justify-between gap-6 sm:gap-8 xs:gap-12`}
    >
      <div className="flex-1 max-w-xl order-2 md:order-1">
        <h2
          className={`text-[27px] sm:text-2xl ${
            largeHeading ? "md:text-4xl" : "md:text-5xl"
          } font-bold text-[#0a174e] dark:text-white mb-3 sm:mb-4 leading-tight font-[Urbanist,sans-serif]`}
        >
          {heading}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-base md:text-[17px] leading-relaxed font-['Mulish',sans-serif]">
          {description}
        </p>

        {bullets && (
          <div className="mb-6 sm:mb-8 grid grid-cols-1 gap-3">
            {bullets.map((b, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 sm:gap-3 p-2 sm:p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md hover:scale-105 ease-in-out transition-all duration-500"
              >
                <CheckCircle2
                  className="text-blue-600 flex-shrink-0 mt-0.5"
                  size={22}
                />
                <span className="font-semibold leading-relaxed text-[#0a174e] dark:text-white font-[Urbanist,sans-serif]">
                  {b}
                </span>
              </div>
            ))}
          </div>
        )}

        {buttonLabel && buttonHref && !scrollId && (
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 sm:px-6 md:px-8 py-6 hover:scale-105 duration-500 rounded-full transition-colors text-[15px] sm:text-base w-full sm:w-auto"
          >
            <Link href={buttonHref} target="_blank">
              {buttonLabel}
            </Link>
          </Button>
        )}

        {buttonLabel && scrollId && (
          <Button
            onClick={handleScrollToPricing}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 sm:px-6 md:px-8 py-6 hover:scale-105 duration-500 rounded-full hover:cursor-pointer transition-colors text-[15px] sm:text-base w-full sm:w-auto"
          >
            {buttonLabel}
          </Button>
        )}
      </div>

      <div className="flex-1 flex justify-center w-full max-w-[250px] sm:max-w-[220px] xs:max-w-xs md:max-w-lg order-1 md:order-2">
        <Image
          alt={imageAlt}
          src={imageSrc}
          width={640}
          height={400}
          className="object-contain drop-shadow-xl w-full h-auto"
        />
      </div>
    </div>
  );
}

"use client";

import { careersBannerData } from "@/data/careers-banner";
import Image from "next/image";

export default function CareersBanner() {
  const {
    title,
    highlighted,
    subtitle,
    description1,
    description2,
    cta,
    images,
  } = careersBannerData;

  // Smooth scroll function
  const handleScrollToApply = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const section = document.querySelector("#job-apply");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#f8f8f8] dark:bg-gray-900 pt-20 pb-5 lg:pt-24 lg:pb-16 md:pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-12 items-center mb-16">
          {/* Left text content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              {title} <span className="text-blue-600">{highlighted}</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              {subtitle}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {description1}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {description2}
            </p>
            <div>
              <button
                onClick={handleScrollToApply}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105 cursor-pointer"
              >
                {cta}
              </button>
            </div>
          </div>

          {/* Right image grid */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
            {/* Tall image on left (hidden on mobile) */}
            <div className="relative hover:scale-105 transition-all duration-300 row-span-2 rounded-lg overflow-hidden shadow-lg hidden md:block">
              <Image
                src={images.img1}
                alt="Teamwork at Hostnin"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            {/* Other two images */}
            <div className="relative rounded-lg hover:scale-105 transition-all duration-300 overflow-hidden shadow-lg">
              <Image
                src={images.img2}
                alt="Growth at Hostnin"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <div className="relative rounded-lg hover:scale-105 transition-all duration-300 overflow-hidden shadow-lg">
              <Image
                src={images.img3}
                alt="Inspiration at Hostnin"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

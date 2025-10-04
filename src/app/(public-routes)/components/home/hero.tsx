"use client";

import { ArrowRight, CircleCheckBig } from "lucide-react";
import Image from "next/image";
import { heroData } from "@/data/hero";

export function HeroSection() {
  // Smooth scroll function
  const handleScrollToPlan = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const section = document.querySelector("#hosting-plans");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="
        md:py-28 pt-28 pb-20 text-white
        bg-[linear-gradient(278deg,rgba(0,40,160,0.9)_16%,rgba(0,20,80,0.9)_98%)]
     dark:bg-[linear-gradient(278deg,rgba(5,5,5,0.5)_16%,rgba(5,5,5,0.5)_98%)]
      "
    >
      <div className=" max-w-7xl mx-auto container px-5 lg:px-10 flex flex-col lg:flex-row items-center justify-between lg:gap-0 gap-8">
        {/* Text Content */}
        <div className="lg:w-1/2 space-y-4 md:space-y-7 text-center lg:text-left">
          <h1 className="text-[29px] sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight">
            Best Web Hosting <br />{" "}
            <span className="relative">
              Company in Bangladesh
              <div className="absolute bottom-0 left-0 w-16 sm:w-20 lg:w-24 h-1 bg-white"></div>
            </span>{" "}
          </h1>

          <p className="text-base md:text-xl opacity-90 max-w-xl leading-relaxed ">
            {heroData.description}
          </p>
          <div className="flex items-center flex-col md:flex-row gap-4 lg:justify-start justify-center">
            <button
              className="
              group w-full sm:w-auto cursor-pointer bg-white/90 text-gray-600 hover:bg-white dark:bg-white/95 font-semibold px-6 sm:px-8 py-3 sm:py-4  rounded-full border border-gray-300 dark:hover:bg-white  transition-transform duration-300 ease-in-out flex items-center gap-2 justify-center text-sm sm:text-base lg:text-[17px] hover:scale-105
            "
              onClick={handleScrollToPlan}
            >
              <span>{heroData.cta}</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <span className="text-base md:text-lg opacity-80 font-semibold">
              {heroData.trusted}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm md:text-lg lg:justify-start justify-center opacity-80 font-semibold">
            <CircleCheckBig className="w-4 h-4 md:w-5 md:h-5 text-gray-100" />
            <span>{heroData.guarantee}</span>
          </div>
        </div>

        {/* Image */}
        <div className=" relative lg:w-1/2 justify-end md:flex hidden">
          <Image
            src={heroData.image.src}
            alt={heroData.image.alt}
            width={400}
            height={200}
            className="max-w-full sm:w-2/3 w-[50%] h-auto mx-auto object-cover"
            priority
          />

          <Image
            src="https://res.cloudinary.com/daspo1tk3/image/upload/v1757528221/hosting.fe7b64ee_bumqja.svg"
            alt="Hostnin Logo"
            width={140}
            height={80}
            quality={90}
            className="md:block hidden absolute md:-bottom-[5.9rem] -bottom-[4rem] left-10 h-[180px] md:h-[280px] w-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}

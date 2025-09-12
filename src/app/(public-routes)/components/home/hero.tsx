"use client";

import { Button } from "@/components/ui/button";
import { CircleCheckBig } from "lucide-react";
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
      className="py-28 text-white dark:bg-blue-950"
      style={{
        background:
          "linear-gradient(278deg, rgba(0, 40, 160, 0.9) 16%, rgba(0, 20, 80, 0.9) 98%)",
      }}
    >
      <div className=" max-w-7xl mx-auto container px-5 lg:px-10 flex flex-col lg:flex-row items-center justify-between lg:gap-0 gap-8">
        {/* Text Content */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-[34px] sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight">
            Best Web Hosting <br />{" "}
            <span className="relative">
              Company in Bangladesh
              <div className="absolute bottom-0 left-0 w-16 sm:w-20 lg:w-24 h-1 bg-white"></div>
            </span>{" "}
          </h1>

          <p className="text-xl opacity-90 max-w-xl leading-relaxed ">
            {heroData.description}
          </p>
          <div className="flex items-center flex-col md:flex-row gap-4 lg:justify-start justify-center">
            <Button
              variant="secondary"
              className="bg-white text-blue-800 hover:scale-105 hover:bg-gray-100 rounded-full px-9 hover:shadow-lg py-7 text-base font-bold hover:cursor-pointer"
              onClick={handleScrollToPlan}
            >
              {heroData.cta}
            </Button>
            <span className="text-lg opacity-80 font-semibold">
              {heroData.trusted}
            </span>
          </div>
          <div className="flex items-center gap-2 text-lg lg:justify-start justify-center opacity-80 font-semibold">
            <CircleCheckBig className="w-5 h-5 text-green-400" />
            <span>{heroData.guarantee}</span>
          </div>
        </div>

        {/* Image */}
        <div className=" relative lg:w-1/2 flex justify-end">
          <Image
            src={heroData.image.src}
            alt={heroData.image.alt}
            width={400}
            height={200}
            className="max-w-full sm:w-2/3 w-4/5 h-auto mx-auto object-cover"
            priority
          />

          <Image
            src="https://res.cloudinary.com/daspo1tk3/image/upload/v1757528221/hosting.fe7b64ee_bumqja.svg"
            alt="Hostnin Logo"
            width={140}
            height={80}
            quality={90}
            className="absolute md:-bottom-[5.9rem] -bottom-[4rem] left-10 h-[200px] md:h-[280px] w-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}

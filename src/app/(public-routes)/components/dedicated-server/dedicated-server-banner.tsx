"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export default function DedicatedServerBanner() {
  const features = ["Performance", "SSD24x7 Support", "Gbit Port Speed"];

  return (
    <section
      className="pt-14 pb-10 px-2 sm:pt-24 sm:pb-10 sm:px-6 lg:pt-20 lg:pb-10 lg:px-10 relative bg-no-repeat"
      style={{
        backgroundImage: `url('/assets/sh-hero-bg.png'), linear-gradient(278deg, rgba(0,40,160,0.9) 16%, rgba(0,20,80,0.9) 98%)`,
        backgroundPosition: "left center, center center",
        backgroundSize: "contain, cover",
      }}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between pt-8 md:pt-0">
        {/* Text Content */}
        <div className="flex-1 text-white lg:pr-12 text-center lg:text-left mb-8 lg:mb-0">
          <p className="font-semibold mb-2 text-base sm:text-xl">
            Plans Starting at <span className="text-yellow-400">৳9999/mo</span>
          </p>
          <h1 className="text-[34px] md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 font-urbanist">
            Managed Dedicated
            <br />
            Server Hosting
          </h1>
          <p className="mb-6 my-5 sm:mb-8 text-base sm:text-lg text-white/90 font-mulish">
            Hostnin specializes in bare-metal technology. You can host your
            website, set up your high-resilience infrastructure, or customize
            your machine with just a few clicks.
          </p>

          {/* Features List */}
          <ul className="flex flex-wrap gap-x-8 gap-y-2 justify-center lg:justify-start mb-6 sm:mb-8">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 font-mulish text-base sm:text-lg"
              >
                <Check className="text-lg sm:text-xl" />
                <span className="font-bold">{feature}</span>
              </li>
            ))}
          </ul>

          {/* Button */}
          <Link
            href={"/contact"}
            className="inline-flex w-full lg:justify-start justify-center"
          >
            <button className="text-white font-semibold px-10 hover:scale-105 hover:cursor-pointer flex gap-2 lg:justify-start justify-center items-center text-base py-4 rounded shadow w-full sm:w-auto mb-6 sm:mb-10 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 transition-all duration-300">
              <span> Custom Quote </span> <ArrowRight />
            </button>
          </Link>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center items-center w-[400px] h-[400px] sm:w-[600px] sm:h-[500px] lg:w-[800px] lg:h-[600px]">
          <Image
            src="/assets/Vps-slider-2.png"
            alt="Server Illustration"
            width={800}
            height={600}
            className="object-contain w-full h-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}

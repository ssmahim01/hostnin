"use client";

import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import SupportedScriptsCarousel from "./supported-scripts-carousel";

export default function SupportSection() {
  return (
    <div className="pb-60 sm:pb-72 bg-[#f8f8f8] dark:bg-neutral-900">
      {/* Top blue section */}
      <section className="bg-[#03206B] pt-6 sm:pt-8 pb-24 sm:pb-32 relative overflow-visible">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-10 mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Text content */}
          <div className="flex-1 text-white lg:pr-8 text-center lg:text-left">
            <h1 className="text-[30px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight mb-3 sm:mb-4 md:mb-6 font-['Urbanist',sans-serif]">
              Have a question?
              <br className="hidden sm:block" />
              We&apos;re here to help!
            </h1>
            <p className="mb-4 sm:mb-6 text-base sm:text-sm md:text-base lg:text-lg text-white/90 leading-relaxed">
              We&apos;re always standing by to help you in any way we can. From
              sales to navigating your service, we&apos;ve got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-8 justify-center lg:justify-start items-center">
              {/* Call button */}
              <Link
                href="tel:+8801325875955"
                className="group relative inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out border md:justify-start justify-center  border-blue-500/30 hover:border-blue-400/50 w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Phone className="text-lg sm:text-xl md:text-2xl relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10 text-sm sm:text-base md:text-lg lg:text-xl">
                  +880 1325 875955
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              </Link>
              {/* WhatsApp button */}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://api.whatsapp.com/send/?phone=%2B8801325875955&text&type=phone_number&app_absent=0"
                className="group relative inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-semibold rounded-lg  md:justify-start justify-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out border border-green-500/30 hover:border-green-400/50 w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <MessageCircle className="text-lg sm:text-xl md:text-2xl relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10 text-sm sm:text-base md:text-lg lg:text-xl">
                  WhatsApp Now
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center items-center w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
            <Image
              alt="Support Banner"
              src="/assets/hostnin-team.jpg"
              width={800}
              height={600}
              className="object-cover rounded-lg w-full h-auto max-h-[400px] sm:max-h-[500px]"
            />
          </div>
        </div>

        {/* Absolute bottom section */}
        <SupportedScriptsCarousel />
      </section>
    </div>
  );
}

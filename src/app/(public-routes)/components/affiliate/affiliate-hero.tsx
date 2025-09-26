"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AffiliateHero() {
  return (
    <section className="relative lg:pr-2 lg:pl-[72px] pt-24 lg:pt-28 pb-6 px-4 sm:px-6">
      {/* blurred circle */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[60rem] h-[60rem] bg-blue-100 dark:bg-blue-950 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Text area */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
              HOSTNIN AFFILIATE PROGRAM
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 dark:text-blue-400 mb-6 leading-snug">
              Join the Highest Paying <br />
              Hosting Affiliate Program
            </h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0">
              Help us spread the word about the next step in the hosting
              evolution and earn up to 15000 BDT per sale! Promote the very best
              in web hosting while enjoying industry-leading commissions.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button
                asChild
                className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-6 px-8 text-base rounded-md shadow-lg transition-all duration-500 transform hover:-translate-y-1"
              >
                <Link href="https://my.hostnin.com/affiliates.php">
                  Apply Now
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-2 border-blue-700 text-blue-700 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 font-semibold py-[22px] px-8 text-base rounded-md transition-all duration-500 transform hover:-translate-y-1"
              >
                <Link href="https://my.hostnin.com/index.php/login">
                  Log In
                </Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg rounded-md h-80 md:h-96 lg:h-[430px] drop-shadow-2xl">
              <Image
                src="/assets/affiliate.jpg"
                alt="ScalaHosting Affiliate Benefits"
                width={800}
                height={750}
                className="object-cover w-full h-full rounded-md"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Step {
  number: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Sign up for free",
    description: "Approval is fast and simple, no hassle.",
  },
  {
    number: 2,
    title: "Promote Bluehost",
    description: "Use our ready-made banners and tools to promote effectively.",
  },
  {
    number: 3,
    title: "Get paid 50% per sale",
    description: "Earn competitive commissions on every qualified sale.",
  },
];

export default function AffiliateSteps() {
  return (
    <section className="bg-[#f8f8f8] dark:bg-gray-900/50 py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden lg:flex">
          {/* Left text / steps */}
          <div className="lg:w-1/2 p-8 sm:p-12 lg:p-12 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-8 leading-tight">
              Become a Hostnin Affiliate in just a few easy steps
            </h1>

            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400 font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className="ml-5">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                      {step.title}
                    </h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Button
                asChild
                className="w-full lg:w-auto px-10 py-6 hover:scale-105 transition-all text-base bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg duration-500"
              >
                <Link href="https://my.hostnin.com/affiliates.php">
                  Join Now
                </Link>
              </Button>
            </div>
          </div>

          {/* Right image */}
          <div className="lg:w-1/2 bg-gradient-to-tr flex items-center justify-center p-8">
            <div className="relative w-full h-80 md:h-96">
              <Image
                src="/assets/man-attending-online-meeting.png"
                alt="Bluehost Affiliate Program"
                width={800}
                height={750}
                className="rounded-xl object-contain w-full h-full"
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

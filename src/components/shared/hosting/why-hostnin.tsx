"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { features } from "@/data/features";
import type { Feature } from "@/types/feature";

export default function WhyHostnin() {
  return (
    <section
      className="
        md:mt-6 md:pt-10 -mb-[0.5px] pb-14 md:pb-20
        bg-cover bg-center bg-[url('/assets/shape.png')] bg-no-repeat 
        dark:bg-none relative
      "
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Person Image + Badge */}
          <div className="md:w-1/2 relative flex justify-center md:justify-end">
            <Image
              src="/assets/mujabhai.png"
              alt="Hostin representative"
              width={1100}
              height={700}
              className="rounded-lg object-cover max-w-full h-auto"
              priority
            />

            {/* Small card joined with the image */}
            <Card
              className="
                absolute -bottom-8 sm:-bottom-10 transform hover:scale-105 
                    transition-transform duration-500 ease-in-out 
                left-1/2 -translate-x-1/2 
                w-[90%] sm:w-4/5
                bg-white dark:bg-gray-800 
                border border-gray-200 dark:border-gray-700
                shadow-xl rounded-xl
              "
            >
              <CardHeader className="flex flex-row items-center gap-3 -mb-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full">
                  {/* choose any icon */}
                  <svg
                    className="w-6 h-6 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
                    />
                  </svg>
                </div>
                <CardTitle className="text-base font-semibold text-gray-900 dark:text-white">
                  Meet Our Expert
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Dedicated to delivering high-performance hosting and support
                  you can trust.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right content */}
          <div className="md:w-1/2 mt-20 md:mt-0">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What makes Hostin different from others?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              Using our unique technology, we will help you improve your
              website&apos;s up-time, loading times, enhance security, and make
              your site faster and more reliable.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature: Feature, index: number) => (
                <Card
                  key={index}
                  className="border hover:scale-105 border-gray-200 dark:border-gray-700 hover:shadow-lg bg-white dark:bg-gray-800 backdrop-blur-sm dark:hover:bg-white/10 transition-all duration-500"
                >
                  <CardHeader className="flex flex-col">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full">
                      <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

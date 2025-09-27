"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { features } from "@/data/features";
import type { Feature } from "@/types/feature";

export default function WhyHostnin() {
  return (
    <section
      className="
    md:mt-6 md:pt-14 -mb-[0.5px]
    bg-cover bg-center bg-[url('/assets/shape.png')] bg-no-repeat 
    dark:bg-none
  "
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Person Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <Image
              src="/assets/mujabhai.png"
              alt="Hostin representative"
              width={1100}
              height={700}
              className="rounded-lg object-cover max-w-full h-auto"
              priority
            />
          </div>

          {/* Content */}
          <div className="md:w-1/2">
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

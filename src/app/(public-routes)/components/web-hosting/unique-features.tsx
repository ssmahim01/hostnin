"use client";

import { Card, CardContent } from "@/components/ui/card";
import { uniqueFeatures } from "@/data/unique-features";
import type { Feature } from "@/types/unique-feature";
import Image from "next/image";

export default function UniqueFeatures() {
  return (
    <section className="py-14">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="">
          {uniqueFeatures.map((feature: Feature, index: number) => (
            <Card
              key={index}
              className="bg-transparent border-0 p-0 shadow-none mb-8"
            >
              <CardContent
                className={` border-none w-full flex items-center flex-col gap-5 sm:gap-4 p-2 sm:p-3 rounded-md
                         ${
                           index % 2 !== 0
                             ? "flex-col md:flex-row-reverse"
                             : "flex-col md:flex-row"
                         } 
                         md:justify-start md:pl-${
                           index % 2 !== 0 ? "0" : "12"
                         } lg:pl-${index % 2 !== 0 ? "0" : "44"}`}
              >
                <div className="flex flex-col gap-3 text-left max-w-sm mx-auto">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm font-medium leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="flex-shrink-0 mx-auto">
                  <Image
                    width={550}
                    height={390}
                    priority
                    src={feature?.image}
                    alt={feature?.title}
                    className="w-full h-28 sm:w-full sm:h-32 md:w-full md:h-44 lg:w-full lg:h-56 object-contain"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

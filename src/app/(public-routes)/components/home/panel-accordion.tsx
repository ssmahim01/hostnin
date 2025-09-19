"use client";

import { ControlPanel, Feature } from "@/types/control-panel";
import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import Image from "next/image";
import { ArrowBigDown, ArrowBigUp } from "lucide-react";

export default function PanelAccordion({ panel }: { panel: ControlPanel }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <TabsContent value={panel.name}>
      <Card className="flex flex-col lg:flex-row items-stretch gap-8">
        {/* Text Content */}
        <CardContent className="lg:w-1/2 space-y-4 h-full">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {panel.title}
          </h3>

          {panel.features.map((feature: Feature, index: number) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="hover:cursor-pointer w-full text-left p-4 flex items-center justify-between"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {feature.title}
                  </h4>

                  {isOpen ? (
                    <ArrowBigDown className="transition-transform duration-300" />
                  ) : (
                    <ArrowBigUp className="transition-transform duration-300" />
                  )}
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "max-h-40 opacity-100 p-4 pt-0"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </CardContent>

        {/* Image */}
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end items-center h-[21.3rem]">
          <div className="relative w-full h-full max-h-[600px] lg:max-h-full">
            <Image
              src={panel.image.src}
              alt={panel.image.alt}
              fill
              className="object-cover w-full h-full rounded-lg"
              priority
            />
          </div>
        </div>
      </Card>
    </TabsContent>
  );
}

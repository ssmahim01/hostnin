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
      <Card className="flex flex-col lg:flex-row items-start justify-between gap-8">
        <CardContent className="lg:w-1/2 space-y-4 lg:px-8 px-4">
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

        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
          <Image
            src={panel.image.src}
            alt={panel.image.alt}
            width={1200}
            height={800}
            className="max-w-full w-auto max-h-full h-auto rounded-lg"
            priority
          />
        </div>
      </Card>
    </TabsContent>
  );
}

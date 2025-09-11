"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { controlPanels } from "@/data/control-panel";
import Image from "next/image";

export function ControlPanelSection() {
  return (
    <section className="py-14 bg-white dark:bg-gray-900">
      <div className="container max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-[#13205A] mb-4 dark:text-blue-300">
          User-Friendly Control Panel
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          Purchase fastest hosting from the best web hosting company in
          Bangladesh
        </p>
        <Tabs defaultValue="cPanel" className="w-full">
          <TabsList className="flex justify-center items-center mx-auto border-b border-gray-200 dark:border-gray-700 mb-12">
            {controlPanels.map((panel) => (
              <TabsTrigger
                key={panel.name}
                value={panel.name}
                className="px-6 py-2 text-gray-600 dark:text-gray-300 data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-b-blue-600 hover:cursor-pointer data-[state=active]:dark:text-blue-400 data-[state=active]:dark:border-blue-400"
              >
                {panel.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {controlPanels.map((panel) => (
            <TabsContent key={panel.name} value={panel.name}>
              <Card className="flex flex-col lg:flex-row items-start justify-between gap-8">
                <CardContent className="lg:w-1/2 space-y-6 lg:px-8 px-4">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {panel.title}
                  </h3>
                  {panel.features.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-sm"
                    >
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  ))}
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
          ))}
        </Tabs>
      </div>
    </section>
  );
}

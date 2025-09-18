"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { controlPanels } from "@/data/control-panel";
import PanelAccordion from "./panel-accordion";

export default function ControlPanelSection() {
  return (
    <section className="py-10">
      <div className="container max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-[#13205A] mb-4 dark:text-blue-300">
          User-Friendly Control Panel
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          Purchase fastest hosting from the best web hosting company in
          Bangladesh
        </p>
        <Tabs defaultValue="cPanel" className="w-full">
          <TabsList className="flex justify-center items-center mx-auto border-b py-6 border-gray-200 dark:border-gray-700 mb-12">
            {controlPanels.map((panel) => (
              <TabsTrigger
                key={panel.name}
                value={panel.name}
                className="py-6 px-8  text-gray-600 dark:text-gray-300 data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-b-blue-600 hover:cursor-pointer data-[state=active]:dark:text-blue-400 data-[state=active]:dark:border-blue-400"
              >
                {panel.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {controlPanels.map((panel) => (
            <PanelAccordion key={panel.name} panel={panel} />
          ))}
        </Tabs>
      </div>
    </section>
  );
}

"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const tabs = [
  {
    value: "control-panel",
    title: "Latest Control Panel",
    description:
      "We use the latest version of the cPanel control panel to provide you with the best and smoothest experience. Enjoy advanced features with our control panel and be ready to take your website to the next level.",
    items: [
      "File & Directory Restoration",
      "Anonymous FTP",
      "Git™ Version Control",
      "Email Deliverability",
      "24-Hours Website Migration",
    ],
  },
  {
    value: "premium-resources",
    title: "Premium Resources",
    description:
      "We provide smooth calling support with advanced tools to help you manage your daily tasks efficiently. Take advantage of the advanced tools and features we offer to streamline your workflow.",
    items: [
      "24/7 What's App Call Support",
      "Advising SEO & Site Issues",
      "360 Degree Security",
      "Malware Detection System",
      "Softaculous App Installer",
    ],
  },
  {
    value: "global-data-centers",
    title: "Global Data Centers",
    description:
      "We use multiple data centers to ensure your website remains fast from anywhere in the world. Here are our core data center locations:",
    items: [
      "Dhaka, Bangladesh",
      "Singapore",
      "East USA",
      "West USA",
      "Germany",
      "Finland",
    ],
    button: "Explore More",
  },
  {
    value: "backup",
    title: "Backup",
    description:
      "To keep your data secure, we use a multi-layered backup system. Each backup is stored in a different location and hosted separately. This ensures maximum protection and redundancy for your data.",
    items: [
      "Hourly Snapshots",
      "Daily Backup",
      "Weekly Cloud Backup",
      "Monthly Local Backup",
    ],
  },
];

export default function AdvancedFeatures() {
  return (
    <section className="pt-14 pb-8 bg-white dark:bg-gray-900">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Illustration Image */}
          <div className="md:w-1/2 flex justify-center md:justify-start">
            <Image
              src="https://res.cloudinary.com/daspo1tk3/image/upload/v1757504885/featureTab.0273689f_vwb9p8.svg"
              alt="Advanced features illustration"
              width={500}
              height={400}
              className="max-w-full h-auto"
              priority
            />
          </div>

          {/* Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white/85 mb-6">
              Advance features for the <br /> advanced user
            </h2>

            <Tabs defaultValue="control-panel" className="w-full">
              <ScrollArea className="w-full lg:max-w-full max-w-sm">
                <TabsList className="flex border-b border-gray-200 dark:border-gray-700 mb-6 w-max">
                  {tabs.map((tab) => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className="px-4 whitespace-nowrap text-gray-600 dark:text-gray-300 
                        data-[state=active]:text-blue-600 data-[state=active]:border-b-2 
                        data-[state=active]:border-b-blue-600 data-[state=active]:dark:text-blue-400 
                        data-[state=active]:dark:border-blue-400"
                    >
                      {tab.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
                <ScrollBar orientation="horizontal" className="h-1" />
              </ScrollArea>

              {tabs.map((tab) => (
                <TabsContent key={tab.value} value={tab.value}>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {tab.description}
                  </p>
                  <ul className="space-y-2">
                    {tab.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-gray-800 dark:text-gray-200"
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {tab.button && (
                    <Button
                      variant={"default"}
                      className="mt-4 hover:cursor-pointer py-4 px-6 bg-blue-600 hover:bg-blue-700 rounded-sm text-white"
                    >
                      {tab.button}
                    </Button>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}

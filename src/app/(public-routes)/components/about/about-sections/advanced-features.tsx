"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const tabs = [
  {
    value: "control-panel",
    title: "Latest Control Panel",
    description:
      "Enjoy the latest cPanel with an intuitive dashboard and powerful tools to elevate your website management experience.",
    items: [
      "File & Directory Restoration",
      "Anonymous FTP",
      "Git™ Version Control",
      "24-Hours Website Migration",
    ],
  },
  {
    value: "premium-resources",
    title: "Premium Resources",
    description:
      "Access premium tools and dedicated support designed to simplify your workflow and accelerate your growth.",
    items: [
      "24/7 WhatsApp Call Support",
      "SEO & Site Issue Guidance",
      "360° Security",
      "Malware Detection System",
    ],
  },

  {
    value: "backup",
    title: "Backup",
    description:
      "A multi-layered backup system with off-site storage keeps your data secure and always recoverable.",
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
    <section className="relative pt-10 pb-16">
      <div className="container max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row-reverse md:items-start gap-12">
          {/* Illustration */}
          <div className="md:w-1/2 flex justify-center md:justify-start">
            <Image
              src="/assets/team-hostnin.jpg"
              alt="Advanced features"
              width={900}
              height={800}
              className="max-w-full w-full md:h-[480px] h-80 rounded-lg object-cover shadow-2xl"
              priority
            />
          </div>

          {/* Content */}
          <div className="md:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 text-gray-900 dark:text-white">
              Advanced Features for the Modern User
            </h2>

            <Tabs defaultValue="control-panel" className="w-full">
              <ScrollArea className="w-full">
                <TabsList className="flex border-b h-12 mx-auto rounded-full border-gray-200 dark:border-gray-700 mb-6 overflow-x-auto gap-3">
                  {tabs.map((tab) => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className="
                        px-8 py-4 rounded-full font-semibold whitespace-nowrap
                        transition-all duration-300 hover:cursor-pointer
                        text-gray-600 dark:text-gray-300
                        hover:text-blue-600 hover:dark:text-blue-400
                        hover:bg-blue-50 dark:hover:bg-blue-900/20
                        data-[state=active]:bg-blue-600 data-[state=active]:dark:bg-blue-500
                        data-[state=active]:text-white data-[state=active]:shadow-md
                      "
                    >
                      {tab.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
                <ScrollBar orientation="horizontal" className="h-1" />
              </ScrollArea>

              {tabs.map((tab) => (
                <TabsContent key={tab.value} value={tab.value}>
                  <div
                    className="
                      rounded-3xl p-8 backdrop-blur-xl 
                      bg-white/60 dark:bg-slate-900/60
                      border border-gray-200/60 dark:border-gray-700/50
                      shadow-md transition-all duration-500
                    "
                  >
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      {tab.description}
                    </p>

                    <ul className="grid sm:grid-cols-2 gap-4">
                      {tab.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="
                            flex items-center gap-3 p-4 rounded-xl
                            backdrop-blur-md bg-white/40 dark:bg-slate-800/40
                            border border-gray-200/50 dark:border-gray-700/50
                            shadow-md transition-all duration-300
                            hover:scale-105 hover:shadow-lg
                            group hover:bg-blue-700
                          "
                        >
                          <svg
                            className="w-5 h-5 text-blue-500 flex-shrink-0 transition-colors duration-300 group-hover:text-white"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-800 dark:text-gray-200 transition-colors text-sm duration-300 group-hover:text-white">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}

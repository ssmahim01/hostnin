"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

type Feature = {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
};

const features: Feature[] = [
  {
    title: "Fully Control Web UI",
    description:
      "With a few clicks and drag-and-drops, you can easily manage your account and do cloud-based tasks using the web-based interface. It has been extremely simple to manage all of your VPS from a single control panel.",
    image: {
      src: "/assets/settings_1.svg",
      alt: "Fully Control Web UI",
    },
  },
  {
    title: "Solid State Drives (SSD)",
    description:
      "With Samsung PM897 processors that are fast and responsive, you can handle intensive workloads and meet your application and project needs in no time. For stable and reliable performance, we use enterprise-grade hardware.",
    image: {
      src: "/assets/ssd-1.svg",
      alt: "Solid State Drives (SSD)",
    },
  },
  {
    title: "The Full Package Included",
    description:
      "Get all the essential features to run a smooth VPS for your business. Make sure that your website has all the resources that it needs. Websites can be designed and hosted with any web hosting software.",
    image: {
      src: "/assets/ssd-1.svg",
      alt: "The Full Package Included",
    },
  },
  {
    title: "Fastest than Ever",
    description:
      "In order to make your hosted website as fast as possible, we optimize the server as it needs to. Feel the connection time pass faster than ever before. Worried? It's always done in a second's time.",
    image: {
      src: "/assets/performance-1.svg",
      alt: "Fastest than Ever",
    },
  },
];

export default function ManagedVPSSection() {
  return (
    <section className="w-full py-5 sm:py-10 flex flex-col items-center relative overflow-x-hidden font-[Mulish,sans-serif]">
      <div className="max-w-7xl w-full mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-8 sm:mb-10 gap-4 md:gap-0">
          <div className="lg:w-[75%]">
            <h2 className="text-[30px] sm:text-3xl lg:text-[40px] font-bold text-black dark:text-white mb-2 leading-tight font-[Urbanist,sans-serif] lg:text-left text-center">
              When You Expect Performance
              <br />
              Get Hostnin Managed VPS
            </h2>
          </div>
          <div className="lg:w-[60%] mt-2 md:mt-0 flex items-center">
            <p className="text-gray-500 dark:text-gray-300 text-base md:text-base font-medium lg:text-right font-[Mulish,sans-serif] text-center">
              Avoid all the hassles of VPS management and focus on your
              business. Our managed hosting guarantees unmatched performance,
              reliability, and an extended team.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white dark:bg-gray-800 rounded-2xl shadow border border-gray-100 dark:border-gray-700 min-h-[140px] sm:min-h-[160px] transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer flex flex-col sm:flex-row md:items-center p-4 sm:p-6 md:p-8">
                <div className="flex-shrink-0 w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex md:items-center md:justify-center mb-3 sm:mb-4 md:mb-0 md:mr-8">
                  <Image
                    src={feature.image.src}
                    alt={feature.image.alt}
                    width={96}
                    height={96}
                    className="object-contain w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24"
                  />
                </div>
                <CardContent className="p-0 flex flex-col items-start justify-center text-left">
                  <span className="font-bold text-xl md:text-lg lg:text-2xl text-black dark:text-white mb-1 sm:mb-2 font-[Urbanist,sans-serif]">
                    {feature.title}
                  </span>
                  <span className="text-gray-500 dark:text-gray-300 text-base sm:text-[18px] font-medium font-[Mulish,sans-serif]">
                    {feature.description}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

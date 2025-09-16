"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { CountdownTimer } from "../../../../components/shared/hosting/countdown-timer";
import FeatureCard from "@/components/shared/hosting/feature-card";

export interface WordPressFeature {
  title: string;
  description: string;
  icon: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface WordPressBanner {
  title: string;
  starterPrice: string;
  features: WordPressFeature[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export const wordpressBanner: WordPressBanner = {
  title: "2X Fast & Secure WordPress Hosting",
  starterPrice: "৳2399/year",
  features: [
    {
      title: "Free SSL Certificates",
      description:
        "Secure your website with free SSL certificates included with every WordPress plan.",
      icon: {
        src: "/assets/wp-rocket.svg",
        alt: "Free SSL Certificates",
        width: 48,
        height: 48,
      },
    },
    {
      title: "Free Daily Backups",
      description:
        "Keep your data safe with free daily backups to protect against data loss.",
      icon: {
        src: "/assets/wp-2.svg",
        alt: "Free Daily Backups",
        width: 48,
        height: 48,
      },
    },
    {
      title: "99.9% Uptime Guarantee",
      description:
        "There is no way a professional website can go down. Stay always online with our web hosting with a 99.9% uptime guarantee.",
      icon: {
        src: "/assets/wp-3.svg",
        alt: "99.9% Uptime Guarantee",
        width: 48,
        height: 48,
      },
    },
  ],
  image: {
    src: "/assets/hero-img-1.png",
    alt: "WordPress Hosting Illustration",
    width: 600,
    height: 400,
  },
};

export function WordPressBanner() {
  // Smooth scroll function
  const handleScrollToPricing = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const section = document.querySelector("#wordpress-pricing");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative py-16">
      {/* Hero Content */}
      <div
        className="text-white pt-20 pb-28 bg-center bg-no-repeat bg-cover bg-[#06249a] dark:bg-blue-950"
        style={{
          backgroundImage: "url('/assets/sh-hero-bg.png')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center justify-center">
            {/* Left Content */}
            <div className="space-y-8 flex flex-col justify-center items-center text-center lg:text-left lg:items-start mx-auto lg:mx-0">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance text-white">
                  <span>{wordpressBanner.title}</span>
                </h1>

                <p className="hidden lg:block font-bold mb-2 text-sm sm:text-base md:text-xl text-white px-2 sm:px-0">
                  WordPress Starter Plan - Starts from only for{" "}
                  <span className="text-yellow-400">৳2399/year</span>
                </p>
              </div>

              {/* Features */}
              <ul className="text-xs sm:text-sm md:text-lg grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-8 px-2 sm:px-0 py-2 space-y-3">
                <li className="flex items-center gap-1.5 sm:gap-2 justify-center lg:justify-start">
                  <span className="text-base sm:text-lg md:text-xl text-white">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
                    </svg>
                  </span>
                  <span className="text-[17px] md:text-lg">
                    Super Fast SSD Storage
                  </span>
                </li>
                <li className="flex items-center gap-1.5 sm:gap-2 justify-center lg:justify-start">
                  <span className="text-base sm:text-lg md:text-xl text-white">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
                    </svg>
                  </span>
                  <span className="text-[17px] md:text-lg">
                    Unlimited Bandwidth
                  </span>
                </li>
                <li className="flex items-center gap-1.5 sm:gap-2 justify-center lg:justify-start">
                  <span className="text-base sm:text-lg md:text-xl text-white">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
                    </svg>
                  </span>
                  <span className="text-[17px] md:text-lg">
                    Advanced Cache Management
                  </span>
                </li>
                <li className="flex items-center gap-1.5 sm:gap-2 justify-center lg:justify-start">
                  <span className="text-base sm:text-lg md:text-xl text-white">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
                    </svg>
                  </span>
                  <span className="text-[17px] md:text-lg">
                    Managed WordPress
                  </span>
                </li>
                <li className="flex items-center gap-1.5 sm:gap-2 justify-center lg:justify-start">
                  <span className="text-base sm:text-lg md:text-xl text-white">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
                    </svg>
                  </span>
                  <span className="text-[17px] md:text-lg">
                    Lifetime Free SSL Certificate
                  </span>
                </li>
                <li className="flex items-center gap-1.5 sm:gap-2 justify-center lg:justify-start">
                  <span className="text-base sm:text-lg md:text-xl text-white">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
                    </svg>
                  </span>
                  <span className="text-[17px] md:text-lg">
                    WordPress Acceleration
                  </span>
                </li>
              </ul>

              <CountdownTimer />

              {/* Button */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Button
                    size="lg"
                    onClick={handleScrollToPricing}
                    className=" bg-blue-500 cursor-pointer text-white px-12 py-7 text-lg font-semibold rounded-lg shadow-lg border-2 border-blue-700 flex items-center gap-3 transition-all duration-300 mx-auto lg:mx-0 ease-in-out hover:scale-105 hover:bg-blue-600 hover:shadow-blue-400/50 active:scale-95"
                  >
                    <Zap /> Claim Offer Now
                  </Button>
                </motion.div>
              </div>
            </div>

            {/* Right Content - Illustration */}
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src={wordpressBanner.image.src}
                  alt={wordpressBanner.image.alt}
                  width={wordpressBanner.image.width}
                  height={wordpressBanner.image.height}
                  className="w-full h-full rounded-md"
                  priority
                />
              </div>
              {/* Floating elements */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className={`absolute w-8 h-8 bg-blue-400/20 rounded-lg ${
                      i % 2 === 0 ? "top-1/4" : "bottom-1/4"
                    } ${i % 3 === 0 ? "left-1/4" : "right-1/4"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="hidden sm:block">
        <div className="absolute left-1/2 lg:-bottom-40 -bottom-64 transform -translate-x-1/2 z-20 w-full max-w-7xl px-4 md:px-0 font-[Mulish,sans-serif]">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-stretch">
            <FeatureCard
              iconSrc="/assets/wp-rocket.svg"
              title="Fastest Loading Speed"
              description="You create your website and we take care of the rest. This is the promise of NVMe SSD of super fast enhanced website performance."
            />
            <FeatureCard
              iconSrc="/assets/wp-2.svg"
              title="24/7 Dedicated Support"
              description="We provide 24/7 LiveChat support for you to help anytime you need. Support is provided through calls, chat, and ticket systems."
            />
            <FeatureCard
              iconSrc="/assets/wp-3.svg"
              title="99.9% Uptime Guarantee"
              description="There is no way a professional website can go down. Stay always online with our web hosting with a 99.9% uptime guarantee."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

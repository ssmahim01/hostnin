"use client";

import { CountdownTimer } from "../../../../components/shared/hosting/countdown-timer";
import { Check, X, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import FeatureCard from "@/components/shared/hosting/feature-card";

export default function WebHostingHero() {
  const [showBanner, setShowBanner] = useState(true);

  const features = [
    "Free CDM Domain on Yearly",
    "Genuine & Latest Control Panel",
    "Free WooCard SSL for Lifetime",
  ];

  // Smooth scroll function
  const handleScrollToPricing = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const section = document.querySelector("#pricing");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative py-16">
      {/* Flash Sale Banner */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-gradient-to-r from-blue-700 to-blue-900 text-white text-center relative"
      >
        <div className="flex items-center justify-between gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col md:flex-row md:items-center items-start gap-2 md:gap-6">
            <p className="flex flex-col items-start gap-y-2 lg:text-lg text-sm font-bold">
              <span>24-Hour Flash Sale!</span>
              <span className="lg:block hidden">
                Get 76% off Hosting plans + free Domain & SSL!
              </span>
            </p>
            <CountdownTimer />
          </div>
          {showBanner && (
            <div className="flex items-center gap-2 text-base lg:text-lg">
              <button
                onClick={handleScrollToPricing}
                className="text-white/90 hover:text-white underline font-semibold cursor-pointer"
              >
                View Details
              </button>
              <button
                onClick={() => setShowBanner(false)}
                className="text-white/90 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </motion.div>

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
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8 flex flex-col justify-center items-center text-center lg:text-left lg:items-start mx-auto lg:mx-0"
            >
              <div className="space-y-4">
                <p className="text-yellow-300 font-bold text-xl leading-tight">
                  Expertly Crafted for Online Businesses
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance text-white">
                  <span>Get Fastest Hosting</span>
                  <br />
                  <span className="">Up to 76% Discount</span>
                </h1>
              </div>

              {/* Features */}
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <Check className="w-5 h-5 text-white/95 flex-shrink-0" />
                    <span className="text-white/90 font-semibold">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Countdown + Button */}
              <div className="space-y-8">
                <CountdownTimer />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <button
                    onClick={handleScrollToPricing}
                    className="relative bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-500 text-base sm:text-lg shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-auto mb-6 sm:mb-10 transform hover:-translate-y-1 border-2 border-blue-400 hover:border-indigo-500 flex items-center justify-center gap-2 cursor-pointer lg:mx-0 mx-auto"
                  >
                    <Zap />{" "}
                    <span className="relative z-10">Claim Offer Now</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-300/20 to-indigo-300/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                  </button>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Content - Server Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <Image
                  width={500}
                  height={400}
                  priority
                  src="/assets/webhero.png"
                  alt="Hosting Infrastructure"
                  className="w-full h-full rounded-md shadow-lg"
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
            </motion.div>
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

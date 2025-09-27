"use client";

import { SupportHero } from "@/types/support-hero";
import {
  IconArrowLeft,
  IconArrowRight,
  IconCopy,
  IconCheck,
} from "@tabler/icons-react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export const AnimatedSupportTeam = ({
  supportHeroes,
  autoplay = false,
}: {
  supportHeroes: SupportHero[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % supportHeroes.length);
  }, [supportHeroes.length]);

  const handlePrev = () => {
    setActive(
      (prev) => (prev - 1 + supportHeroes.length) % supportHeroes.length
    );
  };

  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 4000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  // copy email to clipboard
  const copyEmail = async (email: string) => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const currentHero = supportHeroes[active];

  return (
    <div className="mx-auto max-w-4xl md:px-6 px-4 pt-4 pb-14 font-sans antialiased md:max-w-4xl lg:px-8">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        {/* Left image stack */}
        <div>
          <div className="relative h-96 md:w-11/12 lg:w-full w-4/5 mx-auto">
            <AnimatePresence>
              {supportHeroes.map((hero, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : supportHeroes.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={hero.image.src}
                    alt={hero.image.alt}
                    width={1300}
                    height={1100}
                    priority
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Right info */}
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-white mb-2">
              Meet Our Support Hero
            </h3>
            <h3 className="md:text-4xl text-3xl font-bold text-black dark:text-white mb-2">
              {currentHero.name}
            </h3>
            <p className="text-lg text-blue-600 font-semibold dark:text-neutral-300">
              {currentHero.role}
            </p>

            {/* Email with copy */}
            <div className="flex gap-2 mt-3 items-center">
              <p className="text-gray-700 text-lg font-bold dark:text-neutral-300">
                Contact At:
              </p>

              {currentHero.email && (
                <div className="flex items-center justify-between bg-accent rounded-md gap-2 px-3 py-1">
                  <span className="text-sm md:text-base font-medium text-gray-700 dark:text-neutral-300 truncate">
                    {currentHero.email}
                  </span>
                  <button
                    onClick={() => copyEmail(currentHero?.email ?? "")}
                    className="flex items-center justify-center rounded-md hover:cursor-pointer p-1.5 hover:bg-gray-200 dark:hover:bg-neutral-700 transition"
                    title="Copy email"
                  >
                    {copied ? (
                      <IconCheck className="h-5 w-5 text-green-500" />
                    ) : (
                      <IconCopy className="h-5 w-5 text-gray-700 dark:text-neutral-300" />
                    )}
                  </button>
                </div>
              )}
            </div>

            <motion.p className="mt-4 text-base font-medium leading-relaxed text-gray-500 dark:text-neutral-300">
              {currentHero.description.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

            <div className="flex gap-5 pt-6 md:pt-0 items-center">
          <div className="flex gap-4 ">
              <button
              onClick={handlePrev}
              className="group/button flex h-7 hover:cursor-pointer w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-7 hover:cursor-pointer w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
            </button>
            </div>

            <Link href="/contact">
             <button
            className="px-7 py-2 cursor-pointer bg-white dark:bg-transparent dark:border-gray-100 dark:hover:bg-white/90 dark:hover:text-blue-600 dark:text-white border border-blue-600 text-blue-600 font-bold rounded-lg shadow 
             hover:bg-blue-700 hover:text-white transform hover:scale-105 
             transition-all duration-300 ease-in-out flex gap-2 items-center"
          >
            <p>Explore More</p> <ArrowRight />
          </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

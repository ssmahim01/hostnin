"use client";

import { domains } from "@/data/domains";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function SearchDomain() {
  return (
    <section className="py-16 px-2 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Search & Register Your Domains
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Register your domains at competitive prices, complete with advanced
            features.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {domains.map((domain) => (
            <motion.div
              key={domain.id}
              className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              <div className="absolute top-4 right-4 bg-gradient-to-b from-red-500 to-pink-400 text-white text-xs font-bold px-2 py-1 rounded z-10 shadow-lg">
                {domain.discount}
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 relative mr-3 dark:bg-white/95 dark:p-5 dark:rounded-md">
                    <Image
                      src={domain.image.src}
                      alt={domain.image.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="dark:text-gray-200 text-2xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300 mb-2">
                  {domain.price}
                </div>
                <div className="dark:text-gray-200 text-base text-gray-500 group-hover:text-white group-hover:opacity-80 transition-colors duration-300 mb-4">
                  Instead of {domain.oldPrice}
                </div>
                <div className="mt-auto">
                  <Link
                    href={domain.cta.href}
                    className="inline-flex items-center text-blue-500 group-hover:text-white font-bold transition-colors duration-300"
                  >
                    {domain.cta.label}
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

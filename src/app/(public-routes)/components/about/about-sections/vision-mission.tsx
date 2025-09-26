"use client";

import { Globe2, Target } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="pb-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div
            className="group relative overflow-hidden rounded-2xl border border-blue-200/30 dark:border-blue-700/30 
            bg-white/20 dark:bg-slate-900/30 backdrop-blur-xl 
            p-8 hover:scale-105 duration-500 ease-in-out transition-transform transform 
            shadow-md hover:shadow-xl"
          >
            <div
              className="flex items-center justify-center h-14 w-14 rounded-xl backdrop-blur-lg 
              bg-blue-50/40 dark:bg-blue-900/30 border border-blue-200/50 dark:border-blue-700/50 mb-6"
            >
              <Globe2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
              Our Vision
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To empower businesses, developers and entrepreneurs worldwide with
              high-performance hosting infrastructure, unmatched speed and
              expert support — making online growth seamless and worry-free.
            </p>
          </div>

          {/* Mission Card */}
          <div
            className="group relative overflow-hidden rounded-2xl border border-blue-200/30 dark:border-blue-700/30 
            bg-white/20 dark:bg-slate-900/30 backdrop-blur-xl 
            p-8 hover:scale-105 duration-500 ease-in-out transition-transform transform 
            shadow-md hover:shadow-xl"
          >
            <div
              className="flex items-center justify-center h-14 w-14 rounded-xl backdrop-blur-lg 
              bg-blue-50/40 dark:bg-blue-900/30 border border-blue-200/50 dark:border-blue-700/50 mb-6"
            >
              <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
              Our Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To deliver secure, scalable and affordable hosting solutions with
              24×7 expert support, enabling our customers to focus on their
              goals while we power their online success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

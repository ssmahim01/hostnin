"use client";

import { domainFeatures } from "@/data/domain-features";
import Image from "next/image";

export default function DomainFeatures() {
  return (
    <section className="pt-12 md:pt-20 pb-10 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            Register Your Domain with{" "}
            <span className="text-blue-600 dark:text-blue-500">Hostnin</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            We provide low-cost domains along with premium add-ons you need.
            Transparent pricing, no hidden fees. Register your domain from the
            best domain provider in Bangladesh.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {domainFeatures.map((feature, index) => (
            <div
              key={index}
              className="group rounded-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="relative overflow-hidden rounded-t-xl pt-5">
                <Image
                  src={feature.image.src}
                  alt={feature.image.alt}
                  width={feature.image.width}
                  height={feature.image.height}
                  className="w-full h-56 object-contain group-hover:scale-105 transition-transform duration-300"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-blue-100/20 dark:bg-blue-900/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              </div>
              <div className="flex-1 p-6 flex flex-col">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {feature.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed flex-1 text-justify">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

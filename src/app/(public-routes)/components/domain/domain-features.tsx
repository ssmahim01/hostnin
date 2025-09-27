"use client";

import { domainFeatures } from "@/data/domain-features";
import Image from "next/image";

export default function DomainFeatures() {
  return (
    <section className="md:py-16 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Register Your Domain with Hostnin
          </h1>
          <p className="text-gray-700 dark:text-gray-400 text-base leading-relaxed max-w-4xl mx-auto text-center">
            We provide low-cost domains as well as the premium add-ons you
            require. There are no hidden rules or fees; everything is crystal
            clear. Register your domain from the best domain provider in
            Bangladesh.
          </p>
        </div>
        <div className="space-y-16">
          {domainFeatures.map((feature, index) => {
            const isReverse = index % 2 === 1;

            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-12 ${
                  isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-12 items-center`}
             
              >
                <div className="flex items-center lg:w-1/2">
                  <Image
                    src={feature.image.src}
                    alt={feature.image.alt}
                    width={feature.image.width}
                    height={feature.image.height}
                    className="max-w-full h-auto object-contain"
                    priority={index === 0}
                  />
                </div>
                <div className="lg:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center md:text-left">
                    {feature.title}
                  </h2>
                  <div className="space-y-4 text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                    <p className="text-justify">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

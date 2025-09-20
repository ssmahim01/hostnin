"use client";

import { faqSection } from "@/data/domain-faqs";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function DomainFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pt-6 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {faqSection.title}
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {faqSection.description}
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            {faqSection.faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 shadow-sm overflow-hidden rounded-lg"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-gray-800 dark:text-gray-200 text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`text-gray-500 dark:text-gray-400 flex-shrink-0 ml-4 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    size={20}
                  />
                </button>
                <div
                  className="overflow-hidden transition-height duration-300"
                  style={{
                    height: openIndex === index ? "auto" : "0px",
                  }}
                >
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 dark:text-gray-300 text-[15px] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl">
              <div className="relative z-10">
                <Image
                  src={faqSection.image.src}
                  alt={faqSection.image.alt}
                  width={faqSection.image.width}
                  height={faqSection.image.height}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

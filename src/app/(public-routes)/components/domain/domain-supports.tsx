"use client";

import { Phone, MessageSquare, LucideIcon } from "lucide-react";
import { supportSectionData } from "@/data/domain-supports";
import Image from "next/image";
import Link from "next/link";

export default function DomainSupports() {
  const IconComponent = (icon: LucideIcon) => {
    switch (icon) {
      case Phone:
        return Phone;
      case MessageSquare:
        return MessageSquare;
      default:
        return null;
    }
  };

  return (
    <section
      className="pt-10 pb-0 px-2"
      style={{
        background:
          "linear-gradient(278deg, rgb(0, 29, 172) 16%, rgb(0, 14, 87) 98%);",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-white space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              {supportSectionData.titleParts.map((part, index) => (
                <h2
                  key={index}
                  className="text-3xl lg:text-4xl font-bold leading-tight"
                >
                  {part}
                </h2>
              ))}
            </div>
            <p className="text-base leading-relaxed max-w-xl mx-auto lg:mx-0 text-justify opacity-90">
              {supportSectionData.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              {supportSectionData.buttons.map((button) => {
                const Icon = IconComponent(button?.icon);
                return (
                  <div
                    className="flex flex-col sm:flex-row gap-4 pt-4"
                    key={button?.label}
                  >
                    <Link
                      href={button?.href}
                      target="_blank"
                      className="inline-flex items-center font-bold gap-3 bg-white text-blue-900 px-6 py-3 rounded-lg  hover:bg-gray-100 hover:scale-105 transition-colors duration-300 font-['Urbanist',sans-serif]"
                    >
                      {Icon && <Icon className="w-5 h-5" />}
                      {button?.label}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-xl lg:max-w-3xl">
              <Image
                src={supportSectionData.image.src}
                alt={supportSectionData.image.alt}
                width={700}
                height={560}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LocationsHero() {
  const features = [
    "Premium CDN Edge Server network",
    "Free for all Hostnin customers",
    "Unlimited traffic – no limits or throttling",
    "Fully integrated & easy to use",
  ];

  return (
    <section className="relative container mx-auto px-4 lg:px-8 pt-24 pb-14 max-w-7xl overflow-hidden">
      {/* subtle grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="space-y-5 lg:text-left text-center">
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20 hover:scale-105 transition-transform duration-300"
            >
              FREE CDN
            </Badge>

            <h1 className="text-3xl md:text-4xl lg:text-[44px] font-bold leading-tight">
              Accelerate your website
              <span className="block bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                With Our Global Edge
              </span>
            </h1>

            <div className="space-y-4 ">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex lg:justify-start justify-center lg:text-left items-center gap-3 group hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-lg text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap lg:justify-start justify-center gap-4 lg:pt-6 pt-4">
              <Link href="/pricing">
                <Button
                  size="lg"
                  className="bg-gradient-to-r py-6 hover:cursor-pointer px-8 from-cyan-600 to-blue-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-transform duration-500 hover:scale-105"
                >
                  Plans & Prices
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 py-[22px] px-8 hover:cursor-pointer hover:bg-blue-600 hover:text-white backdrop-blur-sm hover:shadow-xl transition-transform duration-500 hover:scale-105 bg-transparent"
                >
                  Contact With Us
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT - two animated images */}
          <div className="relative">
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative md:w-[700px] md:h-full sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <Image
                  src="/assets/data-center1.jpg"
                  alt="Global Edge Network"
                  width={800}
                  height={700}
                  className="rounded-lg lg:h-[370px] object-cover animate-[float_8s_ease-in-out_infinite]"
                />
              </div>

              <div className="absolute lg:block hidden -bottom-4 -left-8 w-48 h-48 sm:w-60 sm:h-60 lg:w-80 lg:h-[365px]">
                <Image
                  src="/assets/data-center.jpg"
                  alt="Edge Server"
                  fill
                  className="rounded-lg object-cover shadow-xl animate-[float_6s_ease-in-out_infinite]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              rgba(255, 255, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
}

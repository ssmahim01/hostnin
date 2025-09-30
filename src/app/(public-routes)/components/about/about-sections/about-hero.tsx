"use client";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Award, ThumbsUp, Rocket, ShieldCheck, Star, CheckCircle2 } from "lucide-react";

const awards = [
  { icon: Award, label: "High Performer 2025" },
  { icon: ThumbsUp, label: "Most Recommended" },
  { icon: Rocket, label: "Fast Deployment" },
  { icon: ShieldCheck, label: "Best Support" },
  { icon: Star, label: "Tech Excellence 2024" },
];

export default function AboutHero() {
  return (
    <section className="overflow-hidden pt-16 pb-8 max-w-7xl mx-auto px-4 lg:px-8">
      <div className="container pt-8 md:pt-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="pb-8 lg:pb-0 order-last lg:order-first">
            <div className="text-center sm:text-left" id="us-intro">
              <Badge variant="secondary" className="mb-4 text-sm font-medium">
                About Hostnin
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Premium hosting built for speed & reliability
              </h1>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                Hostnin delivers blazing-fast, reliable and secure hosting
                solutions backed by our award-winning support team. Trusted by
                agencies, e-commerce brands and entrepreneurs.
              </p>
            </div>

            {/* Awards Section */}
            <div className="text-center lg:text-left">
              <div className="grid grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
                {awards.map(({ icon: Icon, label }, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center sm:items-start"
                  >
                    <div
                      className="
                      flex items-center justify-center
                      h-12 w-12 sm:h-14 sm:w-14 rounded-xl
                      backdrop-blur-md bg-accent
                      border border-white/20 dark:border-slate-700/40
                      shadow-sm hover:scale-105 duration-500 ease-in-out transition-transform transform
                    "
                    >
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-[10px] mt-2 font-medium text-muted-foreground text-center sm:text-left">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Industry Recognition */}
              <div className="flex items-center justify-center sm:justify-start gap-2 mt-6">
                <CheckCircle2 className="text-green-500 w-6 h-6" />
                <p className="text-sm text-muted-foreground">
                  Trusted & recommended by industry leaders.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Professional Team Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] lg:aspect-[3/2] rounded-2xl overflow-hidden">
              {/* Orange Gradient Background */}
              <div className="absolute inset-0" />

              {/* Professional Team Image */}
              <Image
                src="/assets/hostnin-team.jpg"
                alt="Hostnin Leadership Team"
                className="absolute inset-0 w-full h-full object-cover object-center"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

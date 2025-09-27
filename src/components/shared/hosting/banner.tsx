/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from "next/image";
import {
  Check,
  Earth,
  MessageCircleQuestion,
  Zap,
  Activity,
} from "lucide-react";
import { CountdownTimer } from "@/components/shared/hosting/countdown-timer";
import FeatureCard from "./feature-card";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

export interface BulletItem {
  text: string;
}

interface BannerProps {
  backgroundImage: string;
  gradient?: string;
  tagline: string;
  headline: ReactNode;
  bullets: BulletItem[];
  countdown?: boolean;
  buttonText: string;
  scrollId?: string;
  illustration: string;
}

export const Banner: React.FC<BannerProps> = ({
  backgroundImage,
  gradient = "linear-gradient(278deg, rgba(0, 40, 160, 0.9) 16%, rgba(0, 20, 80, 0.9) 98%)",
  tagline,
  headline,
  bullets,
  countdown,
  buttonText,
  scrollId,
  illustration,
}) => {
  const pathname = usePathname();
  // Smooth scroll function
  const handleScrollToPricing = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const section = document.querySelector(`#${scrollId}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className={`${
        pathname === "/hosting/web-hosting"
          ? "sm:pt-5"
          : "pt-24 sm:pt-16 md:pt-20"
      } md:pb-14 pb-24 px-4 lg:pr-2 lg:pl-[72px] sm:pb-[68px] lg:pb-24 relative`}
      style={{
        backgroundImage: `url(${backgroundImage}), var(--banner-gradient)`,
        backgroundPosition: "left center, center center",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "contain, cover",
      }}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0 pt-5">
        {/* Left Content */}
        <div className="flex-1 text-white lg:pr-12 text-center lg:text-start lg:mb-0 pt-8 md:pt-0">
          <p className="text-yellow-400 font-bold md:mb-2 mb-9 text-lg xs:text-base sm:text-xl">
            {tagline}
          </p>
          <h1
            className="text-4xl xs:text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-10 sm:mb-6 px-4 md:px-0"
            style={{ fontFamily: "var(--font-urbanist)" }}
          >
            {headline}
          </h1>

          {/* Bullets */}
          <ul
            className={`
                grid gap-3 sm:gap-4 
                ${
                  bullets.length > 3
                    ? "grid-cols-1 sm:grid-cols-2"
                    : "grid-cols-1"
                }
                mb-14 my-5 sm:mb-8 text-sm xs:text-[11px] sm:text-lg
            `}
          >
            {bullets.map((b, idx) => (
              <li
                key={idx}
                className="md:flex hidden items-center lg:justify-start justify-center lg:items-start gap-2 sm:gap-3"
              >
                <Check className="text-lg sm:text-xl flex-shrink-0 mt-1" />
                <span className="text-base sm:text-lg">{b.text}</span>
              </li>
            ))}
            {bullets.slice(0, 3).map((b, idx) => (
              <li
                key={idx}
                className="flex md:hidden items-center lg:justify-start justify-center lg:items-start gap-2 sm:gap-3"
              >
                <Check className="text-xl sm:text-lg flex-shrink-0 mt-1" />
                <span className="text-xl sm:text-lg">{b.text}</span>
              </li>
            ))}
          </ul>

          {/* Countdown */}
          {countdown && (
            <div className="mb-14 sm:mb-8">
              <CountdownTimer />
            </div>
          )}

          {/* Button */}
          <div
            className={`px-4 md:px-0 ${
              pathname === "/hosting/web-hosting" ||
              pathname === "/hosting/cloud-hosting"
                ? "lg:mb-10"
                : "lg:-mb-5"
            }`}
          >
            <button
              onClick={handleScrollToPricing}
              className="relative bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold px-6 md:px-8 py-6 md:py-4 rounded-xl transition-all duration-500 sm:text-lg shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-auto mb-2 sm:mb-5 transform hover:-translate-y-1 hover:border-transparent border-2 text-xl border-blue-400 flex items-center justify-center gap-2 cursor-pointer lg:mx-0 mx-auto"
            >
              <Zap /> <span className="relative z-10">{buttonText}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300/20 to-indigo-300/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>

        {/* Right Illustration */}
        <div
          className={`hidden md:flex flex-1 justify-center 
             lg:mt-0 mt-2
            w-full 
            max-w-[17rem] md:mb-4 sm:max-w-sm lg:max-w-xl xl:max-w-2xl 
            h-full
          `}
        >
          <Image
            alt="Server Illustration"
            loading="lazy"
            width={400}
            height={400}
            className="object-cover w-full h-auto shadow-lg rounded-md"
            src={illustration}
            sizes="(max-width: 640px) 100vw,
           (max-width: 768px) 50vw,
           33vw"
          />
        </div>
      </div>

      <div className="hidden sm:block">
        <div className="lg:px-8 px-4 absolute left-1/2 transform -translate-x-1/2 z-20 w-full max-w-7xl font-[Mulish,sans-serif]">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-stretch">
            <FeatureCard
              iconSrc="/assets/wp-rocket.svg"
              decorativeSrc={Earth}
              title="Fastest Loading Speed"
              description="You create your website and we take care of the rest. This is the promise of NVMe SSD of super fast enhanced website performance."
            />
            <FeatureCard
              iconSrc="/assets/wp-2.svg"
              decorativeSrc={MessageCircleQuestion}
              title="24/7 Dedicated Support"
              description="We provide 24/7 LiveChat support for you to help anytime you need. Support is provided through calls, chat, and ticket systems."
            />
            <FeatureCard
              iconSrc="/assets/cloud-icon.svg"
              decorativeSrc={Activity}
              title="99.9% Uptime Guarantee"
              description="There is no way a professional website can go down. Stay always online with our web hosting with a 99.9% uptime guarantee."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

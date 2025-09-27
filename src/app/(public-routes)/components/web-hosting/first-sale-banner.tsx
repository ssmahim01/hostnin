"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function FlashSaleBanner() {
  const [showBanner, setShowBanner] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 2,
    minutes: 20,
    seconds: 40,
  });

  // simple countdown
  useEffect(() => {
    const t = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);

  if (!showBanner) return null;

  return (
    <div className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white px-2 md:px-4 py-2 md:py-6 text-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 overflow-x-auto whitespace-nowrap px-4 lg:px-10">
        {/* left text + countdown */}
        <div className="flex items-center md:gap-8 gap-2 shrink-0">
          <div className="flex flex-col">
            <span className="font-semibold text-xs sm:text-base md:text-xl whitespace-nowrap">
              24-Hour Flash Sale!
            </span>
            <span className="hidden lg:block font-semibold text-sm sm:text-base md:text-lg whitespace-nowrap">
              Get 76% off Hosting plans + free Domain & SSL!
            </span>
          </div>
          {/* countdown boxes */}
          <div className="flex space-x-1">
            <div className="bg-white text-[#1a2340] rounded-md px-1 md:px-4 py-1 flex flex-col items-center min-w-[28px] sm:min-w-[36px]">
              <span className="font-bold text-xs sm:text-sm md:text-lg">
                {String(timeLeft.days).padStart(2, "0")}
              </span>
              <span className="text-[8px] sm:text-[10px]">Day</span>
            </div>
            <div className="bg-white text-[#1a2340] rounded-md px-1 md:px-4 py-1 flex flex-col items-center min-w-[28px] sm:min-w-[36px]">
              <span className="font-bold text-xs sm:text-sm md:text-lg">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
              <span className="text-[8px] sm:text-[10px]">Hour</span>
            </div>
            <div className="bg-white text-[#1a2340] rounded-md px-1 md:px-4 py-1 flex flex-col items-center min-w-[28px] sm:min-w-[36px]">
              <span className="font-bold text-xs sm:text-sm md:text-lg">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
              <span className="text-[8px] sm:text-[10px]">Min</span>
            </div>
            <div className="bg-white text-[#1a2340] rounded-md px-1 md:px-4 py-1 flex flex-col items-center min-w-[28px] sm:min-w-[36px]">
              <span className="font-bold text-xs sm:text-sm md:text-lg">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
              <span className="text-[8px] sm:text-[10px]">Sec</span>
            </div>
          </div>
        </div>

        {/* right buttons */}
        <div className="flex items-center gap-2 shrink-0 ml-auto">
          <button
            onClick={() =>
              document
                .getElementById("pricing")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex items-center text-xs sm:text-lg font-semibold whitespace-nowrap cursor-pointer underline underline-offset-2 decoration-white hover:text-gray-300 transition"
          >
            View Details
            <svg
              className="ml-1 w-3 h-3 sm:w-4 sm:h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <button
            aria-label="Close banner"
            onClick={() => setShowBanner(false)}
            className="text-white text-lg cursor-pointer"
          >
            <X className="w-[17px] h-[17px]" />
          </button>
        </div>
      </div>
    </div>
  );
}

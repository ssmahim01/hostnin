"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Link from "next/link";

export default function FlashSaleBanner({
  setShowBanner,
}: {
  setShowBanner: (value: boolean) => void;
}) {
  const [visible, setVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 17,
    minutes: 15,
    seconds: 40,
  });

  useEffect(() => {
    const t = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) {
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

  if (!visible) return null;

  return (
    <div className="w-full bg-gradient-to-r from-blue-700 to-blue-800 text-white px-2 md:px-4 py-2 text-sm">
      <ScrollArea className="overflow-x-auto w-full">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-8 whitespace-nowrap px-4 lg:px-10">
          <div className="flex items-center md:gap-8 gap-2 shrink-0">
            <div className="flex flex-col">
              <span className="font-bold text-xs sm:text-xl whitespace-nowrap">
                24-Hour Flash Sale!
              </span>
            </div>

            <div className="flex space-x-1">
              {[
                { label: "Day", value: timeLeft.days },
                { label: "Hour", value: timeLeft.hours },
                { label: "Min", value: timeLeft.minutes },
                { label: "Sec", value: timeLeft.seconds },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 text-[#1a2340] dark:text-white rounded-md px-1 md:px-4 py-1 flex flex-col items-center min-w-[28px]"
                >
                  <span className="font-bold text-xs">
                    {String(item.value).padStart(2, "0")}
                  </span>
                  <span className="text-[10px]">{item.label}</span>
                </div>
              ))}
            </div>

            <p>
              <span className="hidden lg:block font-semibold text-sm whitespace-nowrap">
                Get 62% off Hosting plans + Free Domain & SSL!
              </span>
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Link href={"/hosting/web-hosting"}>
              <button className="flex items-center text-xs sm:text-sm font-semibold whitespace-nowrap cursor-pointer underline underline-offset-2 decoration-white hover:text-gray-300 transition">
                View Details
              </button>
            </Link>
            <button
              aria-label="Close banner"
              onClick={() => {
                setVisible(false);
                setShowBanner(false);
              }}
              className="text-white text-lg cursor-pointer"
            >
              <X className="w-[18px] h-[18px]" />
            </button>
          </div>
        </div>
        <ScrollBar orientation="horizontal" className="h-2" />
      </ScrollArea>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CountdownTimerProps {
  targetDate?: Date;
}

export function CountdownTimer({}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 2,
    minutes: 20,
    seconds: 40,
  });

  // simple countdown with days
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

  const timeUnits = [
    { label: "DAYS", value: timeLeft.days.toString().padStart(2, "0") },
    { label: "HOURS", value: timeLeft.hours.toString().padStart(2, "0") },
    { label: "MINS", value: timeLeft.minutes.toString().padStart(2, "0") },
    { label: "SECS", value: timeLeft.seconds.toString().padStart(2, "0") },
  ];

  return (
    <div className="flex gap-3 lg:items-start items-center lg:justify-start justify-center">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-lg p-3 text-center shadow-lg md:min-w-[100px] lg:h-[80px] min-w-[40px] h-full"
        >
          <div className="text-sm md:text-base lg:text-2xl font-bold text-gray-900 dark:text-white">
            {unit.value}
          </div>
          <div className="md:text-sm text-xs text-gray-500 dark:text-gray-400 font-medium">
            {unit.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
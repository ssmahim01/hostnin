"use client";

import React from "react";

interface Feature {
  label: string;
}

const features: Feature[] = [
  { label: "24/7 Expert Support" },
  { label: "Full Root Access" },
  { label: "Unlimited Traffic with 36.47 TBit" },
];

const GradientCheck: React.FC = () => (
  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-blue-700 to-blue-900 text-white shrink-0">
    <svg
      width="18"
      height="18"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="10" fill="url(#blueGradient)" />
      <defs>
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1d4ed8"></stop>
          <stop offset="100%" stopColor="#1e3a8a"></stop>
        </linearGradient>
      </defs>
      <path
        d="M6 10.5L9 13.5L14 7.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  </span>
);

export default function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      {features.map((item) => (
        <div
          key={item.label}
          className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-xl shadow p-4"
        >
          <GradientCheck />
          <span className="text-gray-800 dark:text-gray-100 font-medium text-base font-['Mulish',sans-serif]">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

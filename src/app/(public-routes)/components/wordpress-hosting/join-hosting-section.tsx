"use client";

import { ReactNode } from "react";

interface StatItem {
  icon: ReactNode;
  number: string;
  label: string;
}

const stats: StatItem[] = [
  {
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        viewBox="0 0 640 512"
        className="text-4xl text-white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M322.1 252v-1l-51.2-65.8s-12 1.6-25 15.1c-9 9.3-242.1 239.1-243.4 240.9-7 10 1.6 6.8 15.7 1.7.8 0 114.5-36.6 114.5-36.6.5-.6-.1-.1.6-.6-.4-5.1-.8-26.2-1-27.7-.6-5.2 2.2-6.9 7-8.9l92.6-33.8c.6-.8 88.5-81.7 90.2-83.3zm160.1 120.1c13.3 16.1 20.7 13.3 30.8 9.3 3.2-1.2 115.4-47.6 117.8-48.9 8-4.3-1.7-16.7-7.2-23.4-2.1-2.5-205.1-245.6-207.2-248.3-9.7-12.2-14.3-12.9-38.4-12.8-10.2 0-106.8.5-116.5.6-19.2.1-32.9-.3-19.2 16.9C250 75 476.5 365.2 482.2 372.1zm152.7 1.6c-2.3-.3-24.6-4.7-38-7.2 0 0-115 50.4-117.5 51.6-16 7.3-26.9-3.2-36.7-14.6l-57.1-74c-5.4-.9-60.4-9.6-65.3-9.3-3.1.2-9.6.8-14.4 2.9-4.9 2.1-145.2 52.8-150.2 54.7-5.1 2-11.4 3.6-11.1 7.6.2 2.5 2 2.6 4.6 3.5 2.7.8 300.9 67.6 308 69.1 15.6 3.3 38.5 10.5 53.6 1.7 2.1-1.2 123.8-76.4 125.8-77.8 5.4-4 4.3-6.8-1.7-8.2z" />
      </svg>
    ),
    number: "2,649+",
    label: "Happy Customers & Growing",
  },
  {
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        viewBox="0 0 512 512"
        className="text-4xl text-white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
      </svg>
    ),
    number: "11K+",
    label: "Website Built with us",
  },
  {
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        viewBox="0 0 640 512"
        className="text-4xl text-white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z" />
      </svg>
    ),
    number: "4,100+",
    label: "Active Community Members",
  },
];

export default function JoinHostingSection() {
  return (
    <section className="w-full flex justify-center items-center py-8 px-2">
      <div className="w-full max-w-7xl rounded-2xl shadow-lg bg-gradient-to-br from-blue-800 to-blue-950 px-6 py-12 flex flex-col items-center">
        <h2 className="text-white text-[26px] sm:text-2xl md:text-4xl font-bold text-center mb-10">
          Join a web Hosting Company that Started
          <br />
          Small &amp; Scaled up
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-12 w-full">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center flex-1"
            >
              <div className="flex items-center justify-center mb-4">
                <span className="w-20 h-20 rounded-full bg-blue-300 bg-opacity-20 flex items-center justify-center shadow-lg">
                  <span className="w-14 h-14 rounded-full bg-blue-900 flex items-center justify-center">
                    {item.icon}
                  </span>
                </span>
              </div>
              <div className="text-white text-3xl font-bold mb-1 flex items-center gap-2">
                {item.number}
              </div>
              <div className="text-blue-100 text-base font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import type { CDNRegion } from "@/types/cdn";
import Image from "next/image";

const cdnData: CDNRegion[] = [
  {
    name: "North America",
    locations: [
      {
        id: "chicago",
        name: "Chicago, IL",
        country: "USA",
        region: "North America",
        left: "24%",
        bottom: "58%",
        flag: "🇺🇸",
      },
      {
        id: "dallas",
        name: "Dallas, TX",
        country: "USA",
        region: "North America",
        left: "20%",
        bottom: "52%",
        flag: "🇺🇸",
      },
      {
        id: "newyork",
        name: "New York, NY",
        country: "USA",
        region: "North America",
        left: "28%",
        bottom: "60%",
        flag: "🇺🇸",
      },
      {
        id: "losangeles",
        name: "Los Angeles, CA",
        country: "USA",
        region: "North America",
        left: "15%",
        bottom: "55%",
        flag: "🇺🇸",
      },
      {
        id: "toronto",
        name: "Toronto, ON",
        country: "Canada",
        region: "North America",
        left: "26%",
        bottom: "62%",
        flag: "🇨🇦",
      },
      {
        id: "vancouver",
        name: "Vancouver, BC",
        country: "Canada",
        region: "North America",
        left: "18%",
        bottom: "65%",
        flag: "🇨🇦",
      },
    ],
  },
  {
    name: "Europe",
    locations: [
      {
        id: "london",
        name: "London",
        country: "United Kingdom",
        region: "Europe",
        left: "48%",
        bottom: "68%",
        flag: "🇬🇧",
      },
      {
        id: "frankfurt",
        name: "Frankfurt",
        country: "Germany",
        region: "Europe",
        left: "52%",
        bottom: "70%",
        flag: "🇩🇪",
      },

      {
        id: "amsterdam",
        name: "Amsterdam",
        country: "Netherlands",
        region: "Europe",
        left: "50%",
        bottom: "72%",
        flag: "🇳🇱",
      },
      {
        id: "helsinki",
        name: "Helsinki",
        country: "Finland",
        region: "Europe",
        left: "56%",
        bottom: "80%",
        flag: "🇫🇮",
      },
      {
        id: "paris",
        name: "Paris",
        country: "France",
        region: "Europe",
        left: "49%",
        bottom: "69%",
        flag: "🇫🇷",
      },
      {
        id: "stockholm",
        name: "Stockholm",
        country: "Sweden",
        region: "Europe",
        left: "54%",
        bottom: "78%",
        flag: "🇸🇪",
      },
    ],
  },
  {
    name: "Asia & Oceania",
    locations: [
      {
        id: "dhaka",
        name: "Dhaka",
        country: "Bangladesh",
        region: "Asia & Oceania",
        left: "70%",
        bottom: "52%",
        flag: "🇧🇩",
      },
      {
        id: "singapore",
        name: "Singapore",
        country: "Singapore",
        region: "Asia & Oceania",
        left: "75%",
        bottom: "45%",
        flag: "🇸🇬",
      },
      {
        id: "tokyo",
        name: "Tokyo",
        country: "Japan",
        region: "Asia & Oceania",
        left: "82%",
        bottom: "58%",
        flag: "🇯🇵",
      },
      {
        id: "sydney",
        name: "Sydney",
        country: "Australia",
        region: "Asia & Oceania",
        left: "85%",
        bottom: "25%",
        flag: "🇦🇺",
      },
      {
        id: "mumbai",
        name: "Mumbai",
        country: "India",
        region: "Asia & Oceania",
        left: "68%",
        bottom: "50%",
        flag: "🇮🇳",
      },
      {
        id: "seoul",
        name: "Seoul",
        country: "South Korea",
        region: "Asia & Oceania",
        left: "81%",
        bottom: "60%",
        flag: "🇰🇷",
      },
    ],
  },
  {
    name: "South America",
    locations: [
      {
        id: "saopaulo",
        name: "São Paulo",
        country: "Brazil",
        region: "South America",
        left: "32%",
        bottom: "28%",
        flag: "🇧🇷",
      },
      {
        id: "buenosaires",
        name: "Buenos Aires",
        country: "Argentina",
        region: "South America",
        left: "35%",
        bottom: "22%",
        flag: "🇦🇷",
      },
    ],
  },
  {
    name: "Africa",
    locations: [
      {
        id: "capetown",
        name: "Cape Town",
        country: "South Africa",
        region: "Africa",
        left: "55%",
        bottom: "22%",
        flag: "🇿🇦",
      },
    ],
  },
];

export default function CDNLocations() {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8">
      <div className="container pt-8 pb-14">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Global CDN Locations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our CDN nodes deliver lightning-fast speeds wherever your traffic is
            coming from.
          </p>
        </div>

        <div className="text-center">
          <div
            className="relative inline-block max-w-full"
            style={{ aspectRatio: "237/150" }}
          >
            {/* World Map SVG */}
            <Image
              className="w-96 md:w-[570px] h-auto max-w-6xl"
              src="/assets/map.svg"
              alt="Hostnin CDN world map"
              width={2370}
              height={1500}
              loading="lazy"
              decoding="async"
            />

            {/* CDN Location Pins */}
            {cdnData
              .flatMap((region) => region.locations)
              .map((location) => (
                <div
                  key={location.id}
                  className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-full"
                  style={{ left: location.left, bottom: location.bottom }}
                  onMouseEnter={() => setHoveredLocation(location.id)}
                  onMouseLeave={() => setHoveredLocation(null)}
                >
                  <div className="relative">
                    {/* Pin SVG */}
                    <svg
                      className="w-8 h-10 text-blue-500 hover:scale-110 transition-transform duration-200"
                      viewBox="0 0 32 40"
                      width="32"
                      height="40"
                      fill="currentColor"
                    >
                      <path d="M32,16C32,7.163,24.837,0,16,0S0,7.163,0,16c0,6.655,4.065,12.358,9.847,14.77l6.153,9.23,6.153-9.23c5.781-2.411,9.847-8.115,9.847-14.77Z" />
                    </svg>

                    {/* Flag Icon */}
                    <div className="absolute top-1 left-1 w-7 h-7 flex items-center justify-center text-sm">
                      {location.flag}
                    </div>

                    {/* Tooltip */}
                    {hoveredLocation === location.id && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-popover text-popover-foreground text-sm rounded-lg shadow-lg border whitespace-nowrap z-10">
                        {location.name}, {location.country}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-popover"></div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Location Legend */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-5 gap-8">
          {cdnData.map((region) => (
            <div key={region.name} className="text-center md:text-left">
              <h3 className="font-semibold text-lg mb-3 text-foreground">
                {region.name}
              </h3>
              <ul className="space-y-2">
                {region.locations.map((location) => (
                  <li
                    key={location.id}
                    className="flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    onMouseEnter={() => setHoveredLocation(location.id)}
                    onMouseLeave={() => setHoveredLocation(null)}
                  >
                    <span className="text-base">{location.flag}</span>
                    <span>{location.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

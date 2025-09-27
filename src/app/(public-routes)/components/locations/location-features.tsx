"use client";

import {
  Globe2,
  Layers,
  MapPin,
  ShieldCheck,
  Lock,
  BarChart3,
} from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
}

const features: Feature[] = [
  {
    title: "Global CDN Locations",
    description:
      "Operate from multiple worldwide data centers ensuring your visitors enjoy low latency and lightning-fast delivery wherever they are.",
    icon: Globe2,
  },
  {
    title: "Edge Caching",
    description:
      "Cache content on edge servers close to your users, dramatically reducing load times and improving reliability.",
    icon: Layers,
  },
  {
    title: "Smart Geo Routing",
    description:
      "Automatically connect each visitor to the nearest CDN node for optimal performance and speed.",
    icon: MapPin,
  },
  {
    title: "Security by Region",
    description:
      "Easily block malicious traffic from specific IPs or geographies to keep your website secure without affecting real customers.",
    icon: ShieldCheck,
  },
  {
    title: "Wildcard SSL Support",
    description:
      "Secure your main domain and subdomains using a single certificate. Hostnin’s SSL management is automatic and free.",
    icon: Lock,
  },
  {
    title: "Real-time Analytics",
    description:
      "Get insights into visitor locations, bandwidth usage, and threats in real-time with our intuitive dashboard.",
    icon: BarChart3,
  },
];

export default function LocationFeatures() {
  return (
    <section className="container mx-auto px-4 lg:px-8 pt-6 pb-14 max-w-7xl">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
          Hostnin CDN Global Reach with{" "}
          <span className="text-blue-600">Local Speed</span>
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 font-medium">
          Our worldwide network of CDN nodes delivers your content faster,
          protects your site, and scales seamlessly with your traffic.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div
              key={idx}
              className="group rounded-2xl bg-white dark:bg-slate-900/60 backdrop-blur-lg 
              hover:scale-105  hover:cursor-pointer transition-transform transform duration-500 shadow-sm hover:shadow-lg ease-in-out p-6 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-3">
                <div
                  className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/40 
                group-hover:scale-110 transition-transform"
                >
                  <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

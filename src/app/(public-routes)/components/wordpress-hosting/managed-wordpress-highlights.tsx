"use client";

import Image from "next/image";

interface Highlight {
  icon: string;
  title: string;
  description: string;
}

const highlights: Highlight[] = [
  {
    icon: "/assets/settings-icon.55a24aa9.svg",
    title: "Autoscaling WordPress Hosting",
    description:
      "The power of our WordPress network as a whole, not just one machine. Our patented cloud-based auto-scaling technology will automatically add more resources whenever more space is needed.",
  },
  {
    icon: "/assets/click-icon.ea464c5b.svg",
    title: "WordPress dev tools",
    description:
      "Advanced users can take advantage of features such as one-click installation that give them access to WP-CLI, SSH access, SFTP/FTP, PHP version control, phpMyAdmin, PHP configuration, and scheduled scripts.",
  },
  {
    icon: "/assets/backup-icon.f6a3fa69.svg",
    title: "Built for maximum speed",
    description:
      "The fastest WordPress hosting around. 100% solid-state drive (SSD) storage, HTTP/2, Google-based DNS, NGINX edge cache engine, no LVE limits, proprietary PHP optimization, and more are all features offered by this storage solution.",
  },
  {
    icon: "/assets/cloud-icon.93fad1fc.svg",
    title: "Blazing-fast WordPress Hosting",
    description:
      "When cPanel is in charge, WordPress sites can only be on one server. When you use a cPanel host, if you share a server with a busy site, it will slow down the time it takes for your site to load. This doesn’t occur with managed plans. We’re the best WordPress host because of this.",
  },
  {
    icon: "/assets/protect-icon.03824a82.svg",
    title: "Ultra-secure hosting",
    description:
      "Suspicious theme and plugin code alerts, PCI compliant hosting, malware scanning, 1 Tbps+ DDoS protection, a web application firewall, brute force login protection, an FTP security lock, and 2FA are all included with all of our WordPress Web Hosting plans.",
  },
  {
    icon: "/assets/server-icon.66a437bb.svg",
    title: "24/7 Expert Support",
    description:
      "Our expert support team is passionate about WordPress and is available 24 hours a day, 7 days a week. This shows in our amazing reviews and perfect Trustpilot score. Receive assistance with any WordPress-related issues caused by the server or hosting provider.",
  },
];

export default function ManagedWordPressHighlights() {
  return (
    <section className="w-full pt-8 pb-14">
      <div className="max-w-7xl mx-auto px-4">
        {/* heading */}
        <div className="flex flex-col lg:flex-row items-center lg:justify-between mb-10 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#03206B] dark:text-blue-200 mb-2">
              Managed WordPress Hosting Highlights
            </h2>
          </div>
          <div className="text-gray-500 dark:text-gray-400 max-w-2xl text-base font-normal">
            Keep your attention on running your company, and don&apos;t bother
            yourself with the intricacies of web hosting. Superior speed,
            uptime, and support are the hallmarks of our managed hosting.
          </div>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col min-h-[260px] relative overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
            >
              {/* icon */}
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 text-2xl shadow-sm relative">
                <Image
                  src={item.icon}
                  alt={`${item.title} icon`}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>

              {/* faint background icon */}
              <div className="absolute top-1 right-6 w-28 h-24 opacity-20 pointer-events-none select-none">
                <Image
                  src={item.icon}
                  alt={`${item.title} side icon`}
                  fill
                  className="object-contain"
                />
              </div>

              {/* content */}
              <h3 className="text-2xl md:text-[22px] font-bold text-[#03206B] dark:text-blue-200 mb-2 font-['Urbanist',sans-serif]">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-[15px] md:text-base font-normal font-['Mulish',sans-serif]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

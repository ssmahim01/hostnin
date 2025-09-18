"use client";

import { Card, CardContent } from "@/components/ui/card";
import type { InfrastructurePartner } from "@/types/infrastructure-partner";
import Image from "next/image";

const partners: InfrastructurePartner[] = [
  {
    name: "cPanel",
    logo: "/assets/cpanel.png",
    description: "Web hosting control panel",
  },
  {
    name: "CloudLinux",
    logo: "/assets/cloud-linux.webp",
    description: "Operating system for shared hosting",
  },
  {
    name: "LiteSpeed",
    logo: "/assets/litespeed.png",
    description: "High-performance web server",
  },
  {
    name: "Webuzo",
    logo: "/assets/webuzu.webp",
    description: "Single user control panel",
  },
  {
    name: "Spam Experts",
    logo: "/assets/spam-expert.png",
    description: "Email security solution",
  },
  {
    name: "Cloudflare",
    logo: "/assets/cloudflare.webp",
    description: "CDN and security services",
  },
  {
    name: "MailChannels",
    logo: "/assets/mailchannels.webp",
    description: "Email delivery service",
  },
  {
    name: "Intel",
    logo: "/assets/intel.png",
    description: "Server processors",
  },
  {
    name: "JetBackup",
    logo: "/assets/jetbackup.png",
    description: "Backup solution",
  },
  {
    name: "Imunify360",
    logo: "/assets/imunify360.png",
    description: "Security suite",
  },
];

export function InfrastructurePartners() {
  return (
    <section className="py-16 bg-[#001143]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Web Hosting Infrastructure{" "}
            <span className="text-yellow-400">Partners</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <Card
              key={partner.name}
              className="bg-white/95 hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-xl group cursor-pointer"
            >
              <CardContent className="p-6 flex items-center justify-center h-24">
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    width={140}
                    height={100}
                    priority={index < 5}
                    quality={90}
                    src={`${partner.logo}`}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain filter grayscale-0 group-hover:grayscale transition-all duration-300"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

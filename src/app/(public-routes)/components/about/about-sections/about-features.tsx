"use client";

import { Card } from "@/components/ui/card";
import { Zap, Globe, Shield, Lightbulb, Users, Star } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    subtitle: "Always reliable",
    description:
      "Powered by cutting-edge SSD storage, global CDN, and optimized server configurations. Built for maximum speed and reliability with 99.9% uptime guarantee.",
    color: "text-yellow-500",
  },
  {
    icon: Globe,
    title: "Global Reach",
    subtitle: "Worldwide coverage",
    description:
      "Choose from over 15 data centers around the world and launch your website in minutes. Global infrastructure for local performance.",
    color: "text-blue-500",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    subtitle: "Advanced protection",
    description:
      "Manage all your servers, websites, domains, and security from our intuitive control panel. SSL certificates, DDoS protection, and daily backups included.",
    color: "text-green-500",
  },
  {
    icon: Lightbulb,
    title: "Constant Innovation",
    subtitle: "Latest technology",
    description:
      "Development is all done in-house, so we can create unique solutions like our free migration service and one-click installations. Always access to the latest tech.",
    color: "text-purple-500",
  },
  {
    icon: Users,
    title: "Expert Support",
    subtitle: "24/7 assistance",
    description:
      "Our support team are hosting enthusiasts with years of experience. Get 24/7 help from real people who love what they do, not automated responses.",
    color: "text-orange-500",
  },
  {
    icon: Star,
    title: "Five-Star Service",
    subtitle: "Proven excellence",
    description:
      "Customers give us five-star ratings consistently. Read testimonials from experienced developers, agencies, and businesses who trust Hostnin.",
    color: "text-pink-500",
  },
];

export default function AboutFeatures() {
  return (
    <section className="pt-6 pb-8 relative max-w-7xl mx-auto px-4 lg:px-8">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 container mx-auto">
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            What makes us different
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We&apos;re not just another hosting provider. Here&apos;s what sets
            Hostnin apart from the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="hover:scale-105 duration-500 ease-in-out transition-transform transform p-8 card-glow bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 group"
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-3 rounded-lg bg-background/50 ${feature.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium">
                      {feature.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

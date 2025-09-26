"use client";

import { Card } from "@/components/ui/card";

const stats = [
  {
    number: "99.9%",
    label: "Uptime Guarantee",
    description: "Reliable hosting you can count on",
    company: "HOSTNIN",
  },
  {
    number: "24/7",
    label: "Expert Support",
    description: "Always here when you need us",
    company: "SUPPORT",
  },
  {
    number: "50K+",
    label: "Websites Hosted",
    description: "Trusted by businesses worldwide",
    company: "CLIENTS",
  },
  {
    number: "5+",
    label: "Years Experience",
    description: "Proven track record in hosting",
    company: "EXPERIENCE",
  },
];

export default function AboutStats() {
  return (
    <section className="pt-14 pb-10 max bg-background relative max-w-7xl mx-auto px-4 lg:px-6">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-8 text-center card-glow bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 hover:scale-105 duration-500 ease-in-out transition-transform transform"
            >
              <div className="space-y-4">
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
                <div className="text-xs font-mono text-muted-foreground/60 tracking-wider">
                  {stat.company}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

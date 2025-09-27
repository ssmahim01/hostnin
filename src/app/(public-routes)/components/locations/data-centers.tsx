"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DATA_CENTERS } from "@/data/data-center";
import { Server } from "lucide-react";

export default function DataCentersSection() {
  return (
    <section className="py-14 bg-background">
      <div className="container mx-auto px-4 lg:px-7 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 dark:text-blue-400">
          Explore Our Data Centers
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-center text-muted-foreground">
          We currently operate dedicated servers in 7+ strategic locations
          around the world. Each data center is engineered for speed,
          reliability, and security to keep your websites and applications
          online 24/7.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {DATA_CENTERS.map((dc) => (
            <Card
              key={dc.id}
              className="
                bg-white/80 dark:bg-slate-900/80
                backdrop-blur-xl
                shadow-md hover:shadow-xl
                transition transform hover:scale-105
                border border-blue-100 dark:border-blue-800
              "
            >
              <CardHeader className="flex flex-col items-center space-y-2">
                <div className="w-14 h-14 rounded-full bg-blue-50 dark:bg-blue-950 flex items-center justify-center shadow-inner">
                  <Server className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-center">
                  {dc.title}
                </h3>
                <span className="text-sm text-blue-600 dark:text-blue-400">
                  {dc.location}
                </span>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  {dc.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DATA_CENTERS } from "@/data/data-center";
import Image from "next/image";

export default function DataCentersSection() {
  return (
    <section className="pt-5 pb-14 bg-background">
      <div className="container mx-auto px-4 lg:px-9 max-w-7xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center ">
          Explore Our{" "}
          <span className="text-blue-600 dark:text-blue-500">Data Centers</span>
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-center text-muted-foreground">
          We currently operate dedicated servers in 7+ strategic locations
          around the world. Each data center is engineered for speed,
          reliability, and security to keep your websites and applications
          online 24/7.
        </p>

        <div className="mt-9 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {DATA_CENTERS.map((dc) => (
            <Card
              key={dc.id}
              className="
                bg-white/80 dark:bg-slate-900/80
                backdrop-blur-xl
                shadow-md hover:shadow-xl
                transition-transform transform ease-in-out duration-500 hover:scale-105
                border border-blue-100 dark:border-blue-800
              "
            >
              <CardHeader className="flex flex-col items-center space-y-1">
                <div className="relative w-full h-40 lg:h-56 rounded-lg overflow-hidden">
                  <Image
                    src={dc.image}
                    alt={dc.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw,
                           (max-width: 1200px) 50vw,
                           25vw"
                    priority
                  />
                </div>
                <h3 className="text-xl font-bold text-center mt-2">
                  {dc.title}
                </h3>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
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

"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function MigrationSection() {
  return (
    <section className="my-14 max-w-7xl px-4 mx-auto">
      <Card className="lg:py-4 py-8 lg:px-8 px-6 rounded-lg shadow-md bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 hover:shadow-xl hover:scale-105 transition-transform duration-500 overflow-hidden">
        <CardContent className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 ">
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/assets/lock.webp"
              alt="Migration illustration"
              width={400}
              height={300}
              className="max-w-full h-auto"
              priority
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-3">
              Migrate Your Site Instantly without any single hour downtime
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-5">
              Migrating a website can be daunting, which is why we have a team
              of experts who are always ready to migrate your website smoothly.
            </p>
            <Link href={"/support"}>
              <button
                className="px-6 py-3 cursor-pointer bg-transparent border border-blue-600 dark:text-blue-500 text-blue-600 font-semibold rounded-lg shadow dark:hover:text-white
             hover:bg-blue-700 hover:text-white transform hover:scale-105 
             transition-all duration-300 ease-in-out"
              >
                Request Free Migration
              </button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

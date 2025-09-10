"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function MigrationSection() {
  return (
    <section className="my-20 max-w-7xl px-4 mx-auto">
      <Card className="lg:py-4 py-8 lg:px-8 px-6 rounded-lg shadow-xl bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 hover:shadow-2xl hover:scale-105 transition-transform duration-300 overflow-hidden">
        <CardContent className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 ">
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="https://res.cloudinary.com/daspo1tk3/image/upload/v1757500441/lock_e687j7.webp"
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
            <Button
              variant={"default"}
              className="bg-blue-600 rounded-sm py-4 hover:cursor-pointer hover:bg-blue-700 text-white"
            >
              Request Free Migration
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

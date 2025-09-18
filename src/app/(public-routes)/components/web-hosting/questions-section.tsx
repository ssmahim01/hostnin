"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function QuestionsSection() {
  return (
    <Card className="p-0 dark:my-6 max-w-7xl mx-auto bg-gradient-to-r from-blue-950 to-blue-800 text-white rounded-lg shadow-lg overflow-hidden">
      <CardContent className="container mx-auto p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="md:text-4xl text-3xl font-bold mb-4">
            
            Do You Have Questions?
          </h2>
          <p className="text-gray-200 text-base leading-relaxed font-medium mb-6">
            Feel free to ask anything! Feel free to contact our friendly
            technical advisors at any time. Our team of professionals is
            available 24/7 via live chat, ticket, and WhatsApp to assist you
          </p>
         <Link href={"https://wa.me/8801325875955"} target="_blank">
          <Button
            variant={"default"}
            className="bg-blue-600 hover:cursor-pointer py-6 hover:scale-105 duration-500 transition-all rounded-sm hover:bg-blue-700 text-white"
          >
            Live Chat With Sales
          </Button>
         </Link>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="https://res.cloudinary.com/daspo1tk3/image/upload/v1757500425/man-attending-online-meeting_mll0in.webp"
            alt="Support character"
            width={400}
            height={300}
            className="max-w-full h-auto"
            priority
          />
        </div>
      </CardContent>
    </Card>
  );
}

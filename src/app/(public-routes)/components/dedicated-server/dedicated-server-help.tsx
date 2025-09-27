"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import React from "react";
import Link from "next/link";

export default function DedicatedServerHelp() {
  return (
    <section className="w-full flex justify-center items-center py-12 px-4 bg-transparent">
      <div className="w-full max-w-7xl rounded-lg bg-[#001B8A] flex flex-col lg:flex-row items-center justify-between p-5 lg:px-10 shadow-lg">
        {/* Left */}
        <div className="flex-1 flex flex-col items-center lg:items-start justify-center text-white mb-10 md:mb-0">
          <h2
            className="text-4xl md:text-5xl font-semibold mb-6"
            style={{ fontFamily: "Urbanist, sans-serif" }}
          >
            Need Some Help?
          </h2>
          <p
            className="text-lg md:text-xl mb-8 max-w-xl text-center lg:text-left"
            style={{ fontFamily: "Mulish, sans-serif" }}
          >
            Contact one of our friendly technical advisors now. Our team is
            available 24×7 via live chat and is ready to answer any questions.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* Live Chat */}
            <Link
              href="https://tawk.to/chat/64e3c190cc26a871b0308e91/1h8cqo8b6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size={"lg"}
                className="hover:scale-105 bg-gradient-to-r from-[#009FFF] to-[#0057FF] text-white font-semibold px-8 hover:cursor-pointer rounded-lg shadow-md transition-transform duration-500 py-7 text-base"
                style={{ fontFamily: "Urbanist, sans-serif" }}
              >
                Live Chat With Sales
              </Button>
            </Link>

            {/* Phone */}
            <div className="flex items-center gap-3 mt-4 sm:mt-0 hover:scale-105 transition-transform">
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-[#001B8A] text-2xl shadow-md">
                <Phone className="w-7 h-7" />
              </span>
              <span
                className="text-lg md:text-xl font-bold text-white select-all"
                style={{ fontFamily: "Urbanist, sans-serif" }}
              >
                +880 1325-875955
              </span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 flex justify-center items-center">
          <Image
            alt="Contact Sales Illustration"
            src="/assets/building.png"
            width={350}
            height={350}
            priority
          />
        </div>
      </div>
    </section>
  );
}

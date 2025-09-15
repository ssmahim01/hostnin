"use client";

import Image from "next/image";
import Link from "next/link";

export default function EnterpriseNVMe() {
  return (
    <section className="w-full py-5 bg-gray-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-12 items-center justify-center px-4">
        {/* Left Column */}
        <div className="flex-1 min-w-[320px]">
          <h2
            className="text-4xl md:text-5xl font-semibold mb-6 text-gray-900 dark:text-white"
            style={{ fontFamily: "Urbanist, sans-serif" }}
          >
            Enterprise NVMe vs SSD
          </h2>
          <p
            className="text-lg mb-9 max-w-xl text-gray-600 dark:text-gray-300"
            style={{ fontFamily: "Mulish, sans-serif" }}
          >
            Choose an NVMe-based dedicated server and eradicate IO bottlenecks.
            Your website will load faster, backups will be performed quicker and
            your server will respond more rapidly. With no moving parts, NVMe is
            also more reliable, meaning you are far less likely to suffer
            downtime due to drive failure.
          </p>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 min-w-[160px] rounded-md font-medium transition-transform hover:scale-105 bg-gradient-to-r from-[#009FFF] to-[#0057FF] text-white"
            style={{ fontFamily: "Urbanist, sans-serif" }}
            href="https://tawk.to/chat/64e3c190cc26a871b0308e91/1h8cqo8b6"
          >
            Get In Touch
          </Link>
        </div>

        {/* Right Column */}
        <div className="flex-1 min-w-[320px] flex justify-center">
          <div className="relative w-full max-w-[600px] aspect-[4/3] rounded-xl overflow-hidden shadow dark:shadow-md dark:shadow-blue-900/30">
            <Image
              alt="NVMe vs SSD Comparison"
              src="/assets/enterprise.png"
              fill
              sizes="100vw"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

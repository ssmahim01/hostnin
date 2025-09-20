"use client";

import { Phone } from "lucide-react";
import Link from "next/link";

interface SupportBanner {
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonHref: string;
  phoneNumber: string;
}

const supportBannerData: SupportBanner = {
  title: "Do You Have Questions?",
  subtitle: "About Our Hosting and Domain Service",
  buttonLabel: "Live Chat With Sales",
  buttonHref: "https://tawk.to/chat/64e3c190cc26a871b0308e91/1h8cqo8b6",
  phoneNumber: "01325 875 955",
};

export default function SupportBanner() {
  return (
    <section className="relative w-full my-9 max-w-[76rem] md:rounded-2xl bg-gradient-to-r from-[#00146b] to-[#0026b3] px-8 py-10 lg:py-16 flex flex-col items-center shadow-xl overflow-hidden mx-auto">
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-900/30 rounded-full -translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full translate-x-1/4 translate-y-1/4 pointer-events-none"></div>
      <div className="absolute top-6 right-12 grid grid-cols-4 gap-1 opacity-40 pointer-events-none">
        <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
        <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
        <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
        <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
        <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
        <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
        <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
        <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
        <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
        <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
        <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
        <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
        <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
        <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
        <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
        <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 text-white text-center md:text-left">
        <div className="space-y-1 text-center">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-2 font-['Urbanist',sans-serif]">
            {supportBannerData.title}
          </h2>
          <p className="text-white text-lg md:text-3xl lg:text-4xl font-bold mb-6 font-['Urbanist',sans-serif]">
            {supportBannerData.subtitle}
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <button
            className="px-6 py-3 cursor-pointer bg-transparent text-white/95 border border-blue-600 font-semibold rounded-lg shadow 
             hover:bg-blue-700 hover:text-white transform hover:scale-105 
             transition-all duration-300 ease-in-out"
          >
            <Link href={supportBannerData.buttonHref} target="_blank">
              {supportBannerData.buttonLabel}
            </Link>
          </button>
          <Link
            href={"tel:01325875955"}
            className="flex items-center gap-2 text-lg font-bold"
          >
            <Phone className="w-5 h-5" />
            <span>{supportBannerData.phoneNumber}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

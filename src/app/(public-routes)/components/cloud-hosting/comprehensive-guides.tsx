"use client";

import React from "react";
import Image from "next/image";

interface Guide {
  img: string;
  alt: string;
  tag: string;
  title: string;
  link: string;
}

const guides: Guide[] = [
  {
    img: "/assets/Green-Minimalist-Tips-Gradient-Blog-Banner.png",
    alt: "কিভাবে টেম্পোরারি লিংক থেকে লাইভ করবেন?",
    tag: "● Cloud Hosting Guide",
    title: "কিভাবে টেম্পোরারি লিংক থেকে লাইভ করবেন?",
    link: "https://guides.hostnin.com/update-temporary-link/",
  },
  {
    img: "/assets/Green-Minimalist-Tips-Gradient-Blog-Banner-3.png",
    alt: "কিভাবে ক্লাউড প্যানেলে লগিন করবেন?",
    tag: "● Cloud Hosting Guide",
    title: "কিভাবে ক্লাউড প্যানেলে লগিন করবেন?",
    link: "https://guides.hostnin.com/cloud-panel-login/",
  },
  {
    img: "/assets/Green-Minimalist-Tips-Gradient-Blog-Banner-6.png",
    alt: "কিভাবে এডঅন ডোমেইন সেটআপ করবেন",
    tag: "● Cloud Hosting Guide",
    title: "কিভাবে এডঅন ডোমেইন সেটআপ করবেন",
    link: "https://guides.hostnin.com/addon-setup/",
  },
  {
    img: "/assets/Green-Minimalist-Tips-Gradient-Blog-Banner-1.png",
    alt: "ক্লাউড প্যাকেজে কোটেশন: কিভাবে আপগ্রেড করবেন",
    tag: "● Cloud Hosting Guide",
    title: "ক্লাউড প্যাকেজে কোটেশন: কিভাবে আপগ্রেড করবেন",
    link: "https://guides.hostnin.com/update-cloud-hostname/",
  },
  {
    img: "/assets/outlook-mail-setup.png",
    alt: "ক্লাউড মেইলবক্স Outlook এ কানেক্ট করবেন",
    tag: "● Cloud Hosting Guide",
    title: "ক্লাউড মেইলবক্স Outlook এ কানেক্ট করবেন",
    link: "https://guides.hostnin.com/outlook-connect/",
  },
  {
    img: "/assets/subdomain-create.png",
    alt: "ক্লাউড হোস্টিংয়ে সাবডোমেইন তৈরি করবেন যেভাবে",
    tag: "● Cloud Hosting Guide",
    title: "ক্লাউড হোস্টিংয়ে সাবডোমেইন তৈরি করবেন যেভাবে",
    link: "https://guides.hostnin.com/subdomain-cloud/",
  },
];

export default function ComprehensiveGuides() {
  return (
    <section className="bg-gray-50 dark:bg-slate-950 py-8 sm:py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-center mb-2">
          Comprehensive Guides: a Full Roadmap
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-300 mb-6 sm:mb-8 lg:mb-10 text-[15px] sm:text-base px-3 sm:px-4">
          Our detailed guides are ready with your journey, whenever you need
          them: just search.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 md:p-4">
          {guides.map((guide, idx) => (
            <div
              key={idx}
              className="group bg-accent rounded-xl shadow-md overflow-hidden flex flex-col transform transition-all duration-300 ease-in-out hover:scale-110 hover:-translate-y-3 hover:shadow-2xl cursor-pointer"
            >
              <div className="relative w-full h-40 sm:h-36 lg:h-40">
                <Image
                  src={guide.img}
                  alt={guide.alt}
                  fill
                  className="object-cover object-center rounded-t-xl"
                  sizes="100vw"
                />
              </div>
              <div className="p-5 sm:p-4 lg:p-5 flex flex-col flex-1">
                <span className="text-sm text-orange-500 font-medium mb-2 sm:mb-2">
                  {guide.tag}
                </span>
                <h3 className="text-lg lg:text-lg font-bold mb-2 sm:mb-3 leading-snug">
                  {guide.title}
                </h3>
                <a
                  target="_blank"
                  href={guide.link}
                  rel="noopener noreferrer"
                  className="mt-auto text-base text-gray-700 dark:text-gray-300 font-medium hover:text-orange-500 hover:underline flex items-center gap-1 transition-colors duration-200"
                >
                  বিস্তারিত পড়ুন{" "}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

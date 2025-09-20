"use client";

import Link from "next/link";
import React from "react";

export default function AffiliateCta() {
  return (
    <div className="pb-10">
      <div className="max-w-7xl mx-auto lg:my-10 px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between bg-blue-950 dark:bg-blue-900 text-white rounded-2xl shadow-xl p-8 md:p-16">
          {/* Text */}
          <div className="text-center lg:text-left space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold">
              Sign Up For 50% commission per sale!
            </h2>
          </div>

          {/* Button */}
          <div className="mt-6 lg:mt-0">
            <Link
              href="https://my.hostnin.com/affiliates.php"
              className="bg-yellow-400 hover:bg-yellow-300 hover:scale-105 transition-transform transform text-blue-950 font-semibold px-6 md:px-14 py-5 rounded-xl shadow-lg duration-500 ease-in-out text-xl md:font-bold cursor-pointer inline-block"
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

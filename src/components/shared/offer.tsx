"use client";

import Link from "next/link";

export interface Offer {
  title: string;
  subtitle: string;
  primaryButton: {
    label: string;
    link: string;
  };
  secondaryButton: {
    label: string;
    link: string;
  };
}
const offerData: Offer = {
  title: "Try Hostnin Risk-Free for 30 Days",
  subtitle: "30 Days to Decide. Full Refund Guaranteed.",
  primaryButton: { label: "Get the Offer", link: "/pricing" },
  secondaryButton: {
    label: "Chat with an Expert",
    link: "https://tawk.to/chat/64e3c190cc26a871b0308e91/1h8cqo8b6",
  },
};

export default function Offer() {
  return (
    <section
      className="py-8 bg-cover bg-center bg-no-repeat relative text-center max-w-7xl mx-auto"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/daspo1tk3/image/upload/v1757597595/bg1_kdhj8o.jpg')",
      }}
    >
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
          {offerData.title}
        </h2>
        <p className="text-gray-200 mt-2 text-lg font-semibold leading-relaxed">
          {offerData.subtitle}
        </p>

        <div className="flex flex-col justify-center gap-4 mt-8 items-center">
          <button
            className="px-10 py-3 cursor-pointer bg-transparent border border-gray-200 hover:border-gray-600 text-white/95 font-semibold rounded-lg shadow 
             hover:bg-blue-700 hover:text-white transform hover:scale-105 
             transition-all duration-300 ease-in-out"
          >
            <Link href={offerData.primaryButton.link}>
              {offerData.primaryButton.label}
            </Link>
          </button>

          <Link
            href={offerData.secondaryButton.link}
            target="_blank"
            className="text-yellow-400 hover:text-yellow-600 hover:bg-transparent text-xl font-semibold"
          >
            {offerData.secondaryButton.label}
          </Link>
        </div>
      </div>
    </section>
  );
}

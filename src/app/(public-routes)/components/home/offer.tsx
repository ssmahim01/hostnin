"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const offerData = {
  title: "Try Hostnin Risk-Free for 30 Days",
  subtitle: "30 Days to Decide. Full Refund Guaranteed.",
  primaryButton: { label: "Get the Offer", link: "/pricing" },
  secondaryButton: { label: "Chat with an Expert", link: "#chat" },
};

export default function Offer() {
  return (
    <section
      className="py-16 dark:mt-6 bg-cover bg-center bg-no-repeat relative text-center max-w-7xl mx-auto"
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
          <Button
            variant={"default"}
            asChild
            className="py-6 px-12 bg-blue-600 hover:bg-blue-700 text-lg shadow-lg hover:shadow-2xl text-white rounded-sm"
          >
            <Link href={offerData.primaryButton.link}>
              {offerData.primaryButton.label}
            </Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="text-yellow-500 hover:text-yellow-600 hover:bg-transparent text-xl font-semibold"
          >
            <Link href={offerData.secondaryButton.link}>
              {offerData.secondaryButton.label}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

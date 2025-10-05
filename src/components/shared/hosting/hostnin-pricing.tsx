"use client";

import React from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ServerCog, Layers, Users, ArrowRight, Globe } from "lucide-react";

type Plan = {
  id: string;
  Icon: React.ElementType;
  title: string;
  subtitle?: string;
  description: string;
  priceLabel?: string;
  price: string;
  ctaLabel?: string;
  href: string;
  highlight?: boolean;
};

const PLANS: Plan[] = [
  {
    id: "managed-cloud",
    Icon: ServerCog,
    title: "Managed Cloud Hosting",
    description:
      "Flexible, multi-platform cloud hosting. Easy server & site deployment with managed support.",
    priceLabel: "year",
    price: "৳999",
    ctaLabel: "Managed Cloud Hosting",
    href: "/hosting/cloud-hosting",
  },
  {
    id: "web-hosting",
    Icon: Globe,
    title: "Web Hosting",
    description:
      "Fast, secure and reliable web hosting with Hostnin CDN integrated for top performance worldwide.",
    priceLabel: "year",
    price: "৳1,995",
    ctaLabel: "Web Hosting",
    href: "/hosting/web-hosting",
    highlight: true,
  },
  {
    id: "wordpress",
    Icon: Layers,
    title: "WordPress Hosting",
    description: "Host unlimited WordPress sites on a fast, secure platform.",
    priceLabel: "year",
    price: "৳2,399",
    ctaLabel: "WordPress Hosting",
    href: "/hosting/wordpress-hosting",
  },
  {
    id: "reseller",
    Icon: Users,
    title: "Reseller Hosting",
    description:
      "Sell hosting to your customers with no per-account fees — full rebranding allowed.",
    priceLabel: "month",
    price: "৳4,999",
    ctaLabel: "Reseller Hosting",
    href: "/hosting/reseller-hosting",
  },
];

export default function HostninPricing() {
  return (
    <section className="container mx-auto px-4 lg:px-8 pt-[70px] pb-4 max-w-7xl">
      <div className="text-center max-w-3xl mx-auto mb-7 space-y-4">
        <h2
          id="plans"
          className="text-3xl font-bold text-center text-gray-900 dark:text-white"
        >
          {" "}
          Select Your Perfect Hosting Plan{" "}
        </h2>{" "}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PLANS.map((plan) => (
          <Card
            key={plan.id}
            className={`flex flex-col justify-between rounded-2xl overflow-hidden border ${
              plan.highlight
                ? "border-blue-400 dark:border-blue-800 shadow-lg"
                : "border-gray-200 dark:border-gray-800 shadow"
            } bg-gradient-to-br from-white/60 to-white/30 dark:from-slate-900/60 dark:to-slate-900/40 backdrop-blur-sm transition-transform hover:scale-[1.02] duration-300 p-0`}
          >
            <CardHeader className="px-6 pt-5 pb-2 flex flex-col items-center text-center">
              <div
                aria-hidden
                className={`mb-4 rounded-xl p-3 inline-flex items-center justify-center shadow-sm
                    ${
                      plan.highlight
                        ? "bg-gradient-to-br from-blue-600 to-blue-500 text-white"
                        : "bg-white/60 dark:bg-white/5 text-blue-600 dark:text-blue-300"
                    }
                    backdrop-blur-sm`}
                style={{ minWidth: 64, minHeight: 64 }}
              >
                <plan.Icon className="w-7 h-7" />
              </div>

              <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white">
                {plan.title}
              </CardTitle>
              {plan.subtitle && (
                <CardDescription className="text-xs text-muted-foreground">
                  {plan.subtitle}
                </CardDescription>
              )}
              <p className="text-sm text-muted-foreground px-1">
                {plan.description}
              </p>
            </CardHeader>

            <CardContent className="px-6 p-0 flex flex-col items-center">
              <div className="flex flex-col items-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {plan.price}
                  <span className="text-sm font-medium text-muted-foreground ml-1">
                    /{plan.priceLabel ? ` ${plan.priceLabel}` : ""}
                  </span>
                </div>
              </div>
            </CardContent>

            <CardFooter className="px-6 pb-6 pt-0">
              <Link
                href={plan.href}
                aria-label={`${plan.ctaLabel} - Go`}
                className="w-full"
              >
                <Button
                  className={`w-full rounded-full flex gap-2 items-center py-5 font-semibold ${
                    plan.highlight
                      ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md hover:from-blue-700 hover:to-blue-600"
                      : "bg-white dark:bg-transparent border border-gray-200 dark:border-gray-700 text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-800"
                  } hover:cursor-pointer transition-colors`}
                >
                  <span>{plan.ctaLabel ?? "View"}</span>
                  <ArrowRight />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

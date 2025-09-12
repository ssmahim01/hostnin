"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { PricingPlansData } from "@/types/pricing-plan";
import { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

interface PricingCardProps {
  billingCycle: "monthly" | "yearly";
  plans: PricingPlansData[];
  hostingId?: string;
}

export default function PricingCard({
  billingCycle,
  plans,
  hostingId,
}: PricingCardProps) {
  const [allExpanded, setAllExpanded] = useState(false);

  const toggleAllPlans = () => {
    setAllExpanded((prev) => !prev);
  };

  const gridCols = plans.length === 4 ? "md:grid-cols-4" : "md:grid-cols-3";

  return (
    <div className={`grid ${gridCols} gap-8 max-w-7xl mx-auto pt-4`}>
      {plans.map((plan) => {
        const visibleFeatures = allExpanded
          ? plan.features
          : plan.features.slice(0, 1);

        return (
          <Card
            key={plan.id}
            className={`relative overflow-hidden p-2 ${
              plan.isPopular
                ? "border-2 border-blue-500 shadow-xl"
                : "border border-gray-200 dark:border-gray-700 shadow-lg my-2"
            } bg-white dark:bg-gray-800`}
          >
            {plan.isPopular && (
              <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-center py-2 text-sm font-medium">
                {plan.badge}
              </div>
            )}

            <CardHeader
              className={`text-center ${plan.isPopular ? "pt-12" : "pt-6"}`}
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="flex gap-2 items-center">
                  {plan.image && (
                    <Image
                      src={plan.image || "/placeholder.svg"}
                      alt={plan.name}
                      width={100}
                      height={90}
                      className="w-10 h-10 object-contain"
                      priority
                    />
                  )}
                  <span className="text-lg font-bold">{plan.name}</span>
                </div>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {plan.description}
              </p>

              <div className="mb-4">
                <div className="flex items-center justify-center gap-1">
                  <span className="text-2xl text-gray-500 dark:text-gray-400">
                    ৳
                  </span>
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    {billingCycle === "yearly"
                      ? plan.price.yearly.toLocaleString()
                      : plan.price.monthly.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    /{billingCycle === "yearly" ? "Per Year" : "Per Month"}
                  </span>
                </div>
              </div>

              {hostingId !== "cloud" && (
                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 text-green-700 dark:text-green-400 font-bold text-sm md:text-base mb-6 px-4 py-2 rounded-full border border-green-200 dark:border-green-700 inline-block shadow-sm">
                  {plan?.guarantee}
                </div>
              )}

              <Button
                className={`w-full py-6 text-base hover:cursor-pointer hover:scale-105 transition-colors duration-300 font-medium ${
                  plan.isPopular
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-2 border-blue-500 dark:border-gray-600 hover:bg-blue-500 hover:border-none dark:hover:bg-gray-600 hover:text-white"
                }`}
              >
                {plan.cta}
              </Button>

              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                {plan?.subHeading}
              </p>
            </CardHeader>

            <CardContent className="px-6 pb-4">
              {hostingId !== "cloud" && (
                <div className="mb-6">
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3 relative group">
                    <div className="bg-teal-500 text-white text-xs font-semibold px-2 py-1 rounded-full inline-block mb-2">
                      Special Gift
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer">
                      <span className="text-teal-500 md:text-2xl text-sm">
                        🎁
                      </span>
                      <a
                        target="_blank"
                        className="text-gray-700 dark:text-gray-300 text-sm md:text-[19px] underline decoration-dotted font-medium"
                        href="https://pro.hostnin.com"
                        rel="noreferrer"
                      >
                        Landing page design and Facebook ads mastery course
                      </a>
                    </div>
                    <div className="absolute left-0 top-full mt-2 z-50 w-80 bg-blue-600 text-white text-sm md:text-lg rounded-lg p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      Claim your complimentary Landing Page &amp; Ads
                      Masterclass — designed to help you succeed online. (৳6000
                      Value)
                      <div className="absolute -top-2 left-4 w-3 h-3 bg-blue-600 transform rotate-45"></div>
                    </div>
                  </div>
                </div>
              )}

              <AnimatePresence>
                {visibleFeatures.map((category, categoryIndex) => (
                  <motion.div
                    key={category.category}
                    initial={
                      categoryIndex > 0 ? { opacity: 0, height: 0 } : false
                    }
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-6"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-xs font-medium">
                        {category.category}
                      </Badge>
                    </div>
                    <ul className="space-y-2">
                      {category.items.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-base"
                        >
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </AnimatePresence>

              {!allExpanded ? (
                <Button
                  variant="ghost"
                  onClick={toggleAllPlans}
                  className="w-full hover:cursor-pointer mt-4 border border-blue-400 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                >
                  <>
                    <ChevronDown className="w-4 h-4 mr-1" />
                    Show More Features
                  </>
                </Button>
              ) : (
                <Button
                  variant="ghost"
                  onClick={toggleAllPlans}
                  className="w-full hover:cursor-pointer flex items-center justify-center gap-2 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-lg p-3 transition-all duration-200 border border-orange-200 dark:border-orange-700 my-6 dark:hover:text-orange-300 font-medium"
                >
                  <>
                    <span className="text-orange-600 dark:text-orange-400 font-semibold text-sm hover:text-orange-700 dark:hover:text-orange-300">
                      Show Less Features
                    </span>
                    <ChevronUp className="w-4 h-4 mr-1 text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300" />
                  </>
                </Button>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

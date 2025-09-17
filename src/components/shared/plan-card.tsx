"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { useState } from "react";
import { Check, ChevronDown, Clock } from "lucide-react";
import { PricingPlan } from "@/types/pricing";

interface Props {
  plan: PricingPlan;
  billing: "monthly" | "yearly";
  getPlanLink: (title: string, billing: "monthly" | "yearly") => string;
}

export function PlanCard({ plan, billing, getPlanLink }: Props) {
  const [showExpandedFeatures, setShowExpandedFeatures] = useState(false);

  return (
    <Card
      className={`relative w-full max-w-sm mx-auto rounded-2xl shadow-xl flex flex-col transition-all duration-300 border-2 hover:shadow-2xl ${
        plan.highlight ? "border-blue-500 z-10" : "border-transparent"
      }`}
    >
      {plan.highlight && (
        <div className="w-full bg-blue-600 text-white text-center py-2 px-4 rounded-t-2xl text-xs md:text-lg font-semibold">
          Most Popular
        </div>
      )}

      <CardHeader className="text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-8 relative">
            <Image
              src={plan.iconSrc ?? ""}
              alt={plan.title}
              fill
              className="object-contain"
            />
          </div>
          <CardTitle className="text-xl sm:text-2xl bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            {plan.title}
          </CardTitle>
        </div>
        <CardDescription className="text-sm md:text-base text-gray-600 dark:text-gray-300 font-medium">
          {plan.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="text-center">
        <div className="flex items-baseline justify-center gap-1 mb-3">
          <span className="text-sm md:text-lg text-gray-600 dark:text-gray-300">
            {plan.currency}
          </span>
          <span className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100">
            {plan.price.toLocaleString()}
          </span>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            /Per {billing === "monthly" ? "Month" : "Year"}
          </span>
        </div>
        <Button
          asChild
          size="lg"
          variant={plan.highlight ? "default" : "outline"}
          className={`w-full rounded-xl font-bold text-sm ${
            plan.highlight
              ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600"
              : "border-blue-600 text-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white"
          }`}
        >
          <a
            href={getPlanLink(plan.title, billing)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {plan.buttonText || "Add to Cart"}
          </a>
        </Button>
        <div className="text-xs md:text-base text-gray-500 mt-4 text-center">
          {plan.infoText}
        </div>
      </CardContent>

      <CardFooter className="flex flex-col items-start">
        <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-4 text-xl">
          Features
        </h4>
        <div className="space-y-3 w-full">
          {plan.features.map((feature, i) => (
            <Tooltip key={i}>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="text-xs text-green-600 font-bold" />
                  </div>
                  <span className="text-[15px] md:text-base text-gray-700 dark:text-gray-300 font-medium">
                    {feature.text}
                  </span>
                </div>
              </TooltipTrigger>
              {feature.tooltip && (
                <TooltipContent className="bg-blue-600 text-white max-w-xs">
                  {feature.tooltip}
                </TooltipContent>
              )}
            </Tooltip>
          ))}

          {showExpandedFeatures &&
            plan.expandedFeatures &&
            (["server", "security", "support"] as const).map((category) => (
              <div key={category} className="mt-6">
                <h5 className="font-bold text-gray-800 dark:text-gray-200 mb-3 text-xl capitalize bg-gray-50 dark:bg-neutral-800 px-3 py-2 rounded-lg">
                  {category}
                </h5>
                {plan.expandedFeatures?.[category]?.map((feature, idx) => (
                  <Tooltip key={idx}>
                    <TooltipTrigger asChild>
                      <div className="flex items-center gap-3 mb-2">
                        {feature.included ? (
                          <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                            <Check className="text-xs text-green-600 font-bold" />
                          </div>
                        ) : (
                          <div className="flex-shrink-0 w-5 h-5 bg-red-100 rounded-full flex items-center justify-center">
                            <Clock className="text-xs text-red-600 font-bold" />
                          </div>
                        )}
                        <span className="text-[15px] lg:text-base text-gray-700 dark:text-gray-300 font-medium">
                          {feature.text}
                        </span>
                      </div>
                    </TooltipTrigger>
                    {feature.tooltip && (
                      <TooltipContent className="bg-blue-600 text-white max-w-xs">
                        {feature.tooltip}
                      </TooltipContent>
                    )}
                  </Tooltip>
                ))}
              </div>
            ))}
        </div>
        <div
          className="flex items-center justify-center gap-2 cursor-pointer hover:bg-blue-50 dark:hover:bg-neutral-800 rounded-lg p-3 transition-all duration-200 border mt-4 w-full"
          onClick={() => setShowExpandedFeatures((p) => !p)}
        >
          <span
            className={`${
              showExpandedFeatures ? "text-orange-600" : "text-blue-600"
            } font-semibold text-sm`}
          >
            {showExpandedFeatures ? "Show Less Features" : "See More Features"}
          </span>
          <ChevronDown
            size={18}
            className={`transition-transform duration-200 ${
              showExpandedFeatures
                ? "rotate-180 text-orange-600"
                : "text-blue-600"
            }`}
          />
        </div>
      </CardFooter>
    </Card>
  );
}

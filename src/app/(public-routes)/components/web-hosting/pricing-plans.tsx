"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { PricingPlan } from "@/types/pricing-plan";

const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    description:
      "Ideal for multiple sites with storage, WordPress & Laravel features",
    price: { monthly: 1099, yearly: 3595 },
    originalPrice: { monthly: 1499, yearly: 4995 },
    features: [
      "10 GB NVMe Storage",
      "Increased Website Speed",
      "5 Domain Hosted",
      "Free CDM Domain",
      "Lifetime Free SSL",
      "One Click WordPress Install",
      "Advanced Malware Scanner",
      "Unlimited Bandwidth",
    ],
    cta: "Add to Cart",
    guarantee: "30 Days Money back Guarantee",
    badge: "Save Upto 76% on Yearly Plan",
  },
  {
    id: "pro",
    name: "Pro",
    description: "Best solution for eCommerce & product landing page websites",
    price: { monthly: 1499, yearly: 5495 },
    originalPrice: { monthly: 2499, yearly: 8995 },
    isPopular: true,
    features: [
      "25 GB NVMe Storage",
      "Super Fast Website Speed",
      "10 Domain Hosted",
      "Free CDM Domain",
      "Lifetime Free SSL",
      "One Click WordPress Install",
      "Advanced Malware Scanner",
      "Unlimited Bandwidth",
    ],
    cta: "Add to Cart",
    guarantee: "30 Days Money back Guarantee",
    badge: "Save Upto 76% on Yearly Plan",
  },
  {
    id: "ultimate",
    name: "Ultimate",
    description:
      "Great for businesses with high traffic and focused on advertising",
    price: { monthly: 2499, yearly: 7995 },
    originalPrice: { monthly: 3999, yearly: 12995 },
    features: [
      "50 GB NVMe Storage",
      "Maximum Website Speed",
      "Unlimited Domain Hosted",
      "Free CDM Domain",
      "Lifetime Free SSL",
      "One Click WordPress Install",
      "Advanced Malware Scanner",
      "Unlimited Bandwidth",
    ],
    cta: "Add to Cart",
    guarantee: "30 Days Money back Guarantee",
    badge: "Save Upto 76% on Yearly Plan",
  },
];

export default function PricingPlans() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "yearly"
  );
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="lg:pt-40 pb-20 md:pt-64 pt-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-balance">
            Choose Your Perfect Plan
          </h2>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  billingCycle === "monthly"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  billingCycle === "yearly"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Yearly
              </button>
            </div>
          </div>

          <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">
            Upto 76% Save
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => {
            const isExpanded = expanded[plan.id] ?? false;
            const visibleFeatures = isExpanded
              ? plan.features
              : plan.features.slice(0, 5);

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  plan.isPopular
                    ? "bg-blue-600 text-white shadow-2xl scale-105 border-2 border-blue-500"
                    : "bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700"
                }`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-blue-500 text-white px-4 py-1 text-sm font-medium">
                      Most Popular
                    </Badge>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Star
                      className={`w-5 h-5 ${
                        plan.isPopular ? "text-yellow-300" : "text-yellow-500"
                      }`}
                    />
                    <h3
                      className={`text-xl font-semibold ${
                        plan.isPopular
                          ? "text-white"
                          : "text-gray-900 dark:text-white"
                      }`}
                    >
                      {plan.name}
                    </h3>
                  </div>
                  <p
                    className={`text-sm ${
                      plan.isPopular
                        ? "text-blue-100"
                        : "text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center gap-1">
                    <span
                      className={`text-sm ${
                        plan.isPopular
                          ? "text-blue-100"
                          : "text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      ₹
                    </span>
                    <span
                      className={`text-4xl font-bold ${
                        plan.isPopular
                          ? "text-white"
                          : "text-gray-900 dark:text-white"
                      }`}
                    >
                      {billingCycle === "monthly"
                        ? plan.price.monthly
                        : plan.price.yearly}
                    </span>
                    <span
                      className={`text-sm ${
                        plan.isPopular
                          ? "text-blue-100"
                          : "text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      /{billingCycle === "monthly" ? "Per Month" : "Per Year"}
                    </span>
                  </div>
                  {plan.originalPrice && (
                    <p
                      className={`text-sm line-through ${
                        plan.isPopular ? "text-blue-200" : "text-gray-400"
                      }`}
                    >
                      ₹
                      {billingCycle === "monthly"
                        ? plan.originalPrice.monthly
                        : plan.originalPrice.yearly}
                    </p>
                  )}
                </div>

                {/* Guarantee */}
                <div
                  className={`text-center text-sm font-medium mb-6 ${
                    plan.isPopular
                      ? "text-blue-100"
                      : "text-blue-600 dark:text-blue-400"
                  }`}
                >
                  {plan.guarantee}
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full mb-6 ${
                    plan.isPopular
                      ? "bg-white text-blue-600 hover:bg-gray-100"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  {plan.cta}
                </Button>

                {/* Badge */}
                {plan.badge && (
                  <div
                    className={`text-center text-xs font-medium mb-6 ${
                      plan.isPopular
                        ? "text-blue-100"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {plan.badge}
                  </div>
                )}

                {/* Features */}
                <div className="space-y-3">
                  <h4
                    className={`font-semibold ${
                      plan.isPopular
                        ? "text-white"
                        : "text-gray-900 dark:text-white"
                    }`}
                  >
                    Features
                  </h4>
                  <AnimatePresence>
                    {visibleFeatures.map((feature) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle
                          className={`w-5 h-5 flex-shrink-0 ${
                            plan.isPopular ? "text-green-300" : "text-green-500"
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            plan.isPopular
                              ? "text-blue-100"
                              : "text-gray-600 dark:text-gray-300"
                          }`}
                        >
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* See More / See Less */}
                <div className="mt-6 text-center">
                  <button
                    onClick={() => toggleExpand(plan.id)}
                    className={`flex items-center justify-center gap-1 text-sm font-medium mx-auto ${
                      plan.isPopular
                        ? "text-blue-200 hover:text-white"
                        : "text-blue-600 dark:text-blue-400 hover:text-blue-700"
                    }`}
                  >
                    {isExpanded ? (
                      <>
                        See Less Features <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        See More Features <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import {
  cloudHostingPlans,
  featureCategories,
} from "@/data/cloud-hosting-plan";
import type {
  CloudHostingPlan,
  CloudHostingFeature,
} from "@/types/cloud-hosting-plan";

export default function CloudHostingPlans() {
  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLTableSectionElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !headerRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const headerH = headerRef.current.offsetHeight;
      setHeaderHeight(headerH);

      // navbar height offset
      const navbarHeight = 64;
      const shouldSticky =
        sectionRect.top <= navbarHeight &&
        sectionRect.bottom > headerH + navbarHeight;

      setIsSticky(shouldSticky);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const renderFeatureValue = (feature: CloudHostingFeature) => {
    if (typeof feature.value === "boolean") {
      return feature.value ? (
        <Check className="w-5 h-5 text-green-600 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-red-500 mx-auto" />
      );
    }
    return (
      <span className="text-gray-700 dark:text-gray-300">{feature.value}</span>
    );
  };

  const handleOrderNow = (planId: string) => {
    const orderUrls = {
      basic:
        "https://my.hostnin.com/index.php/store/cloud-hosting/basic?billingcycle=annually",
      starter:
        "https://my.hostnin.com/index.php/store/cloud-hosting/cloud-starter?billingcycle=annually",
      professional:
        "https://my.hostnin.com/index.php/store/cloud-hosting/professional?billingcycle=annually",
      ultimate:
        "https://my.hostnin.com/index.php/store/cloud-hosting/ultimate?billingcycle=annually",
    };
    const url = orderUrls[planId as keyof typeof orderUrls];
    if (url) {
      window.open(url, "_blank");
    }
  };

  const getFeaturesForCategory = (categoryId: string) => {
    const firstPlan = cloudHostingPlans[0];
    switch (categoryId) {
      case "basic":
        return firstPlan.features.basic;
      case "mail":
        return firstPlan.features.mail;
      case "database":
        return firstPlan.features.database;
      case "tech":
        return firstPlan.features.tech;
      case "site":
        return firstPlan.features.site;
      case "support":
        return firstPlan.features.support;
      default:
        return [];
    }
  };

  const getPlanFeaturesForCategory = (
    plan: CloudHostingPlan,
    categoryId: string
  ) => {
    switch (categoryId) {
      case "basic":
        return plan.features.basic;
      case "mail":
        return plan.features.mail;
      case "database":
        return plan.features.database;
      case "tech":
        return plan.features.tech;
      case "site":
        return plan.features.site;
      case "support":
        return plan.features.support;
      default:
        return [];
    }
  };

  return (
    <section
      ref={sectionRef}
      className="bg-gray-50 dark:bg-gray-900 py-8 sm:py-12 lg:py-16 lg:pb-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-[26px] sm:text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Compare Cloud Hosting Plans
          </h1>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl lg:rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            {cloudHostingPlans.map((plan) => (
              <div
                key={plan.id}
                className="border-b border-gray-200 dark:border-gray-700 last:border-b-0"
              >
                <div className="bg-gradient-to-r from-blue-700 to-blue-600 p-4 text-center space-y-3">
                  <div className="font-bold text-xl text-white">
                    {plan.name}
                  </div>
                  <div className="bg-white/15 rounded-lg p-1 backdrop-blur-sm border border-white/25">
                    <div className="text-3xl font-bold text-white">
                      {plan.currency}
                      {plan.price}
                    </div>
                    <div className="text-sm text-blue-200">{plan.period}</div>
                  </div>
                  <Button
                    onClick={() => handleOrderNow(plan.id)}
                    className="w-full bg-white/95 hover:bg-white text-black font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Order Now
                  </Button>
                </div>

                <div className="p-4">
                  {featureCategories.map((category) => {
                    const categoryFeatures = getPlanFeaturesForCategory(
                      plan,
                      category.id
                    );
                    return (
                      <div key={category.id} className="mb-6 last:mb-0">
                        <div className="bg-gradient-to-r from-blue-700 to-blue-600 p-3 mb-4 rounded-lg text-center text-white font-bold">
                          {category.name}
                        </div>
                        <div className="space-y-3">
                          {categoryFeatures.map((feature, index) => (
                            <div
                              key={`${category.id}-${index}`}
                              className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                            >
                              <span className="font-semibold text-gray-700 dark:text-gray-300 text-sm">
                                {feature.name}
                              </span>
                              <span className="font-medium text-gray-700 dark:text-gray-300 text-sm">
                                {renderFeatureValue(feature)}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block relative">
            {/* Fixed clone header */}
            {isSticky && (
              <div
                className="fixed top-16 left-0 right-0 z-40 bg-gradient-to-r from-blue-800 to-blue-600 shadow-lg hidden lg:block"
                style={{
                  width: "100%",
                  maxWidth: "76rem",
                  margin: "0 auto",
                  left: "50%",
                  transform: "translateX(-50%)",
                  pointerEvents: "none",
                }}
              >
                <table className="w-full">
                  <colgroup>
                    <col className="w-1/5" />
                    {cloudHostingPlans.map((_, idx) => (
                      <col key={idx} className="w-1/5" />
                    ))}
                  </colgroup>
                  <thead>
                    <tr>
                      <th className="p-4 text-white font-bold text-lg border-r border-blue-700/50">
                        Features
                      </th>
                      {cloudHostingPlans.map((plan, index) => (
                        <th
                          key={plan.id}
                          className={`p-4 text-white text-center border-r border-blue-700/50 ${
                            index === cloudHostingPlans.length - 1
                              ? "border-r-0"
                              : ""
                          }`}
                        >
                          <div className="space-y-3">
                            <div className="font-bold text-xl">{plan.name}</div>
                            <div className="bg-white/15 rounded-lg p-2 backdrop-blur-sm border border-white/25">
                              <div className="text-[26px] font-bold text-white">
                                {plan.currency}
                                {plan.price}
                              </div>
                              <div className="text-sm text-blue-200">
                                {plan.period}
                              </div>
                            </div>
                            <Button
                              onClick={() => handleOrderNow(plan.id)}
                              className="w-full bg-white/95 hover:bg-white text-black font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                            >
                              Order Now
                            </Button>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                </table>
              </div>
            )}

            <table className="w-full table-fixed">
              <colgroup>
                <col className="w-1/5" />
                <col className="w-1/5" />
                <col className="w-1/5" />
                <col className="w-1/5" />
                <col className="w-1/5" />
              </colgroup>

              {/* Spacer when sticky header shown */}
              {isSticky && (
                <tbody>
                  <tr>
                    <td colSpan={5} style={{ height: headerHeight }}></td>
                  </tr>
                </tbody>
              )}

              <thead
                ref={headerRef}
                className="bg-gradient-to-r from-blue-800 to-blue-600"
              >
                <tr>
                  <th className="p-4 text-white font-bold text-lg border-r border-blue-700/50">
                    Features
                  </th>
                  {cloudHostingPlans.map((plan, index) => (
                    <th
                      key={plan.id}
                      className={`p-4 text-white text-center border-r border-blue-700/50 ${
                        index === cloudHostingPlans.length - 1
                          ? "border-r-0"
                          : ""
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="font-bold text-xl">{plan.name}</div>
                        <div className="bg-white/15 rounded-lg p-2 backdrop-blur-sm border border-white/25">
                          <div className="text-[26px] font-bold text-white">
                            {plan.currency}
                            {plan.price}
                          </div>
                          <div className="text-sm text-blue-200">
                            {plan.period}
                          </div>
                        </div>
                        <Button
                          onClick={() => handleOrderNow(plan.id)}
                          className="w-full bg-white/95 hover:bg-white text-black font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                        >
                          Order Now
                        </Button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {featureCategories.map((category, categoryIndex) => {
                  const categoryFeatures = getFeaturesForCategory(category.id);
                  return (
                    <React.Fragment key={category.id}>
                      {categoryIndex > 0 && (
                        <tr className="bg-gradient-to-r from-blue-800 to-blue-600">
                          <th
                            colSpan={5}
                            className="p-6 text-center text-white font-bold text-2xl"
                          >
                            {category.name}
                          </th>
                        </tr>
                      )}
                      {categoryFeatures.map((feature, featureIndex) => (
                        <tr
                          key={`${category.id}-${featureIndex}`}
                          className={`hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-colors duration-200 ${
                            featureIndex % 2 === 0
                              ? "bg-gray-50/50 dark:bg-gray-800/50"
                              : "bg-white dark:bg-gray-800"
                          }`}
                        >
                          <td className="p-6 font-semibold text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">
                            {feature.name}
                          </td>
                          {cloudHostingPlans.map((plan, planIndex) => {
                            const planFeatures = getPlanFeaturesForCategory(
                              plan,
                              category.id
                            );
                            return (
                              <td
                                key={`${plan.id}-${category.id}-${featureIndex}`}
                                className={`p-6 text-center border-r border-gray-200 dark:border-gray-700 ${
                                  planIndex === cloudHostingPlans.length - 1
                                    ? "border-r-0"
                                    : ""
                                }`}
                              >
                                {renderFeatureValue(planFeatures[featureIndex])}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

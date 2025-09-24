"use client";
import { useState } from "react";
import { Check, ChevronDown, X } from "lucide-react";
import Link from "next/link";
import { cloudHostingData } from "@/data/cloud-pricing";
import { IconMap } from "@/components/shared/icon-map";
import { usePathname } from "next/navigation";
import { useIsMobile } from "@/hooks/useIsMobile";

const tabClass = (active: boolean) =>
  `px-3 sm:px-4 md:px-7 py-1.5 font-semibold cursor-pointer text-sm md:text-base focus:outline-none transition-colors duration-200 rounded-full ${
    active ? "bg-[#0070f3] text-white" : "bg-transparent text-white"
  }`;

const planLinks = {
  yearly: {
    basic: "https://my.hostnin.com/index.php/store/cloud-hosting/basic",
    starter:
      "https://my.hostnin.com/index.php/store/cloud-hosting/cloud-starter",
    pro: "https://my.hostnin.com/index.php/store/cloud-hosting/professional",
    ultimate: "https://my.hostnin.com/index.php/store/cloud-hosting/ultimate",
  },
  "3-years": {
    basic:
      "https://my.hostnin.com/index.php/store/cloud-hosting/basic?billingcycle=annually",
    starter:
      "https://my.hostnin.com/index.php/store/cloud-hosting/cloud-starter?billingcycle=annually",
    pro: "https://my.hostnin.com/index.php/store/cloud-hosting/professional?billingcycle=annually",
    ultimate:
      "https://my.hostnin.com/index.php/store/cloud-hosting/ultimate?billingcycle=annually",
  },
};

const getPlanLink = (planTitle: string, billing: "yearly" | "3-years") => {
  const planKey = planTitle.toLowerCase() as keyof typeof planLinks.yearly;
  return planLinks[billing][planKey] || "#";
};

const icons = IconMap({
  basic: "/assets/svgexport-39-1.svg",
  starter: "/assets/starter-42.svg",
  pro: "/assets/pro.svg",
  ultimate: "/assets/ultimate.svg",
});

export default function CloudHostingPrice() {
  const [billing, setBilling] = useState<"yearly" | "3-years">("yearly");
  const [showExpandedFeatures, setShowExpandedFeatures] = useState<
    Record<string, boolean>
  >({});
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const isMobile = useIsMobile();

  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);
  const pathname = usePathname();

  const handleTooltipClick = (i: number) => {
    setActiveTooltip(i);
    setTimeout(() => setActiveTooltip(null), 3000);
  };

  const plans = cloudHostingData.filter(
    (plan) => plan.billingPeriod === billing
  );

  return (
    <section
      className={`w-full flex flex-col items-center justify-center ${
        pathname === "/pricing"
          ? "pt-6 pb-7 sm:pt-8 sm:pb-9 md:pt-14 md:pb-16"
          : "lg:pt-36 pb-16 md:pb-20 md:pt-36 "
      } px-3 sm:px-6`}
      style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
    >
      <div id="pricing" className={`${pathname === "/pricing" ? "" : "pt-24"}`}>
        {pathname !== "/pricing" && (
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-balance">
            Choose Your Perfect Plan
          </h2>
        )}
      </div>
      <div id="plans-container" className="w-full max-w-7xl">
        <div className="flex flex-row items-center gap-4  justify-center">
          <div className="flex bg-[#2a3553] rounded-full p-1">
            <button
              className={tabClass(billing === "yearly")}
              onClick={() => setBilling("yearly")}
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              Yearly
            </button>
            <button
              className={tabClass(billing === "3-years")}
              onClick={() => setBilling("3-years")}
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              3 Years
            </button>
          </div>

          <div
            className="relative flex items-center -ml-3 mt-3 sm:mt-0"
            style={{ minWidth: 120 }}
          >
            <svg
              width="90"
              height="40"
              viewBox="0 0 90 40"
              fill="none"
              className="absolute -top-6 left-0 sm:-top-6 lg:-top-8 lg:left-0"
              style={{ pointerEvents: "none" }}
            >
              <path
                d="M10 30 C40 0, 70 0, 80 20"
                stroke="#2563eb"
                strokeWidth="2"
                strokeDasharray="4,4"
                fill="none"
                markerEnd="url(#arrowhead)"
              />
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="8"
                  markerHeight="8"
                  refX="4"
                  refY="4"
                  orient="auto"
                >
                  <path d="M0,0 L8,4 L0,8 L2,4 Z" fill="#2563eb" />
                </marker>
              </defs>
            </svg>
            <span
              className="text-blue-500 font-medium text-base inline ml-10"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              {billing === "yearly" ? "Upto 90% save" : "Free .com domain"}
            </span>
          </div>
        </div>

        <div className="w-full mt-2 md:mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-10 justify-center items-start">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`relative w-full max-w-sm mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-lg flex flex-col transition-all duration-300 border-2 hover:shadow-xl ${
                plan.highlight
                  ? "border-blue-500 translate-y-4 z-10 shadow-2xl max-w-md"
                  : plan.title === "Basic" || plan.title === "Starter"
                  ? "translate-y-14 border-blue-100 dark:hover:border-blue-400 dark:border-transparent hover:border-blue-200"
                  : plan.title === "Ultimate"
                  ? "md:translate-y-14 border-blue-100 dark:hover:border-blue-400 dark:border-transparent"
                  : "translate-y-14 border-blue-100 dark:hover:border-blue-400 dark:border-transparent"
              } ${plan.title === "Pro" ? "mt-6 sm:mt-0" : ""}`}
              style={{
                // minHeight: "820px",
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              {plan.highlight && (
                <div
                  className="w-full bg-blue-600 text-white text-center py-2 px-4 rounded-t-2xl"
                  style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                >
                  <div className="text-xs md:text-lg font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="flex flex-col justify-between px-6 py-6 w-full h-full">
                <div className="text-center mb-3">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    {icons[plan.icon as keyof typeof icons]}
                    <h3
                      className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-400 dark:to-gray-200 bg-clip-text text-transparent"
                      style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                    >
                      {plan.title}
                    </h3>
                  </div>
                  <p
                    className="text-sm text-gray-600 dark:text-gray-300 font-medium"
                    style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                  >
                    {plan.description}
                  </p>
                </div>

                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center gap-1 mb-3">
                    <span
                      className="text-sm md:text-lg text-gray-600 dark:text-gray-300"
                      style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                    >
                      {plan.currency}
                    </span>
                    <span
                      className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200 bg-gradient-to-r "
                      style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                    >
                      {plan.price.toLocaleString()}
                    </span>
                    <span
                      className="text-sm text-gray-600 dark:text-gray-300"
                      style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                    >
                      {billing === "yearly" ? "/Per Year" : "/Triennially"}
                    </span>
                  </div>

                  <Link
                    href={getPlanLink(plan.title, billing)}
                    rel="noopener noreferrer"
                    className={`block w-full py-4 px-6 rounded-xl font-bold text-sm transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                      plan.highlight
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600 shadow-lg hover:shadow-xl"
                        : "bg-white text-blue-600 border-2 dark:border-transparent border-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white hover:border-transparent shadow-md hover:shadow-lg"
                    }`}
                  >
                    {plan.buttonText || "Add to Cart"}
                  </Link>

                  <div
                    className="text-xs md:text-sm text-gray-500 dark:text-gray-300 mt-4 text-center"
                    style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                  >
                    {plan.infoText}
                  </div>
                </div>

                <div className="w-full mb-8">
                  <h4
                    className="font-bold text-gray-800 dark:text-gray-200 mb-4 text-xl"
                    style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                  >
                    Features
                  </h4>
                  <div className="space-y-3">
                    {plan.features.map((feature, i: number) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 group relative"
                        onClick={() => handleTooltipClick(i)}
                      >
                        <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="text-xs text-green-600 font-bold" />
                        </div>
                        <span className="text-[15px] md:text-base text-gray-700 dark:text-gray-300 cursor-help font-medium">
                          {feature.text}
                        </span>

                        {feature.tooltip && (
                          <div
                            className={`absolute left-0 top-full z-50 w-60 bg-blue-600 text-white text-sm md:text-lg rounded-lg p-3 shadow-lg
                ${
                  activeTooltip === i
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }
                md:group-hover:opacity-100 md:group-hover:visible
                transition-opacity duration-300 pointer-events-auto`}
                          >
                            {feature.tooltip}
                            <div className="absolute -top-2 left-4 w-3 h-3 bg-blue-600 transform rotate-45"></div>
                          </div>
                        )}
                      </div>
                    ))}

                    {/* Show More */}
                    {((!isMobile && showAllFeatures) ||
                      (isMobile && showExpandedFeatures[plan.title])) &&
                      plan.expandedFeatures && (
                        <>
                          {(["server", "security", "support"] as const).map(
                            (category) => (
                              <div key={category} className="mt-6">
                                <h5
                                  className="font-bold text-gray-800 dark:text-gray-200 mb-3 text-xl capitalize bg-accent px-3 py-2 rounded-lg"
                                  style={{
                                    fontFamily:
                                      '"Plus Jakarta Sans", sans-serif',
                                  }}
                                >
                                  {category}
                                </h5>
                                {plan.expandedFeatures &&
                                  plan.expandedFeatures[category] &&
                                  plan.expandedFeatures[category].map(
                                    (
                                      feature: {
                                        text: string;
                                        included?: boolean;
                                        tooltip?: string;
                                      },
                                      i: number
                                    ) => (
                                      <div
                                        key={`${category}-${i}`}
                                        className="flex items-center gap-3 group relative space-y-2"
                                      >
                                        {feature.included ? (
                                          <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                                            <Check className="text-xs text-green-600 font-bold" />
                                          </div>
                                        ) : (
                                          <div className="flex-shrink-0 w-5 h-5 bg-red-100 rounded-full flex items-center justify-center">
                                            <X className="text-xs text-red-600 font-bold" />
                                          </div>
                                        )}
                                        <span
                                          className="text-[15px] lg:text-base text-gray-700 dark:text-gray-300 cursor-help font-medium"
                                          style={{
                                            fontFamily:
                                              '"Plus Jakarta Sans", sans-serif',
                                          }}
                                        >
                                          {feature.text}
                                        </span>
                                        {feature.tooltip && (
                                          <div
                                            className="absolute left-0 top-full mt-2 z-50 w-80 bg-blue-600 text-white text-sm md:text-lg rounded-lg p-3 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 pointer-events-auto"
                                            style={{
                                              fontFamily:
                                                '"Plus Jakarta Sans", sans-serif',
                                            }}
                                          >
                                            {feature.tooltip}
                                            <div className="absolute -top-2 left-4 w-3 h-3 bg-blue-600 transform rotate-45"></div>
                                          </div>
                                        )}
                                      </div>
                                    )
                                  )}
                              </div>
                            )
                          )}
                        </>
                      )}
                  </div>
                </div>

                {/* Mobile: each card toggle */}
                {isMobile ? (
                  !showExpandedFeatures[plan.title] ? (
                    <div
                      className={`flex items-center justify-center gap-2 cursor-pointer hover:bg-blue-50 rounded-lg p-3 transition-all duration-200 border border-blue-200 ${
                        plan.highlight ? "mt-4 mb-6" : "mt-4"
                      }`}
                      onClick={() =>
                        setShowExpandedFeatures((prev) => ({
                          ...prev,
                          [plan.title]: true,
                        }))
                      }
                    >
                      <span className="text-blue-600 font-semibold text-sm hover:text-blue-700">
                        See More Features
                      </span>
                      <ChevronDown
                        size={18}
                        className="text-blue-600 hover:text-blue-700 transition-transform duration-200"
                      />
                    </div>
                  ) : (
                    <div
                      className={`flex items-center justify-center gap-2 cursor-pointer hover:bg-orange-50 rounded-lg p-3 transition-all duration-200 border border-orange-200`}
                      onClick={() =>
                        setShowExpandedFeatures((prev) => ({
                          ...prev,
                          [plan.title]: false,
                        }))
                      }
                    >
                      <span className="text-orange-600 font-semibold text-sm hover:text-orange-700">
                        Show Less Features
                      </span>
                      <span className="text-orange-600 text-sm hover:text-orange-700 transform rotate-180 transition-transform duration-200">
                        ^
                      </span>
                    </div>
                  )
                ) : null}

                {/* Desktop: one toggle controls all */}
                {!isMobile &&
                  (!showAllFeatures ? (
                    <div
                      className="flex items-center justify-center gap-2 cursor-pointer hover:bg-blue-50 rounded-lg p-3 transition-all duration-200 border border-blue-200"
                      onClick={() => setShowAllFeatures(true)}
                    >
                      <span className="text-blue-600 font-semibold text-sm hover:text-blue-700">
                        See All Features
                      </span>
                      <ChevronDown
                        size={18}
                        className="text-blue-600 hover:text-blue-700 transition-transform duration-200"
                      />
                    </div>
                  ) : (
                    <div
                      className="flex items-center justify-center gap-2 cursor-pointer hover:bg-orange-50 rounded-lg p-3 transition-all duration-200 border border-orange-200"
                      onClick={() => {
                        setShowAllFeatures(false);

                        const el = document.getElementById("plans-container");
                        if (el) {
                          el.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }
                      }}
                    >
                      <span className="text-orange-600 font-semibold text-sm hover:text-orange-700">
                        Hide All Features
                      </span>
                      <span className="text-orange-600 text-sm hover:text-orange-700 transform rotate-180 transition-transform duration-200">
                        ^
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

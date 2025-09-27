"use client";

import {
  ArrowRight,
  Cloud,
  Server,
  Database,
  Globe,
  Layers,
  Zap,
} from "lucide-react";
import { plans } from "@/data/hosting-plan";
import { Plan } from "@/types/hosting-plan";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";

export default function HostingPlan() {
  const router = useRouter();

  const handleChoosePlan = (plan: Plan) => {
    const route =
      plan.title === "Web Hosting"
        ? "/hosting/web-hosting"
        : plan.title === "Cloud Hosting"
        ? "/hosting/cloud-hosting"
        : plan.title === "Bdix Hosting"
        ? "/hosting/bdix-hosting"
        : plan.title === "WordPress Hosting"
        ? "/hosting/wordpress-hosting"
        : plan.title === "Turbo Hosting"
        ? "/hosting/turbo-hosting"
        : "/hosting/reseller-hosting";
    router.push(route);
  };

  // Map plan title to Lucide icon
  const getIcon = (title: string) => {
    switch (title) {
      case "Cloud Hosting":
        return (
          <Cloud className="w-14 h-14 text-blue-600 dark:text-white group-hover:text-white" />
        );
      case "Web Hosting":
        return (
          <Server className="w-14 h-14 text-blue-600 dark:text-white group-hover:text-white" />
        );
      case "BDIX Hosting":
        return (
          <Database className="w-14 h-14 text-blue-600 dark:text-white group-hover:text-white" />
        );
      case "WordPress Hosting":
        return (
          <Layers className="w-14 h-14 text-blue-600 dark:text-white group-hover:text-white" />
        );
      case "Turbo Hosting":
        return (
          <Zap className="w-14 h-14 text-blue-600 dark:text-white group-hover:text-white" />
        );
      default:
        return (
          <Globe className="w-14 h-14 text-blue-600 dark:text-white group-hover:text-white" />
        );
    }
  };

  return (
    <section id="hosting-plans" className="pt-[70px] pb-10">
      {" "}
      <div className="container max-w-7xl mx-auto px-4">
        {" "}
        <h2
          id="plans"
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          {" "}
          Select Your Perfect Hosting Plan{" "}
        </h2>{" "}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {" "}
          {plans?.map((plan) => (
            <Card
              key={plan.id}
              className="relative border group border-gray-200 dark:border-gray-700 rounded-xl p-8 text-gray-900 dark:text-white transition-all duration-300 ease-in-out hover:bg-blue-700 hover:text-white/95 dark:hover:text-gray-100 mx-2"
            >
              {/* Badge */}
              {plan.giftBadge && (
                <div className="absolute animate-bounce top-3 left-3 group-hover:bg-white group-hover:text-blue-700 bg-blue-600 text-white font-semibold px-4 py-1 rounded-full shadow-lg text-sm">
                  🎁 Free Gift
                </div>
              )}

              <div className="flex flex-col items-center justify-center text-center gap-3">
                <div>{getIcon(plan.title)}</div>
                <h3 className="text-2xl font-bold">{plan?.title}</h3>{" "}
                <h3 className="text-base">{plan?.description}</h3>{" "}
                <p className="text-xl font-bold mb-4">{plan.price}</p>
                <button
                  className="w-full py-2 cursor-pointer bg-white border dark:border-none border-blue-600 text-blue-600 font-semibold rounded-lg shadow justify-center flex gap-2 items-center group-hover:bg-blue-50 dark:group-hover:bg-white/90 hover:text-blue-600 hover:scale-105 dark:group-hover:text-blue-500 transform mb-1 transition-all duration-300 ease-in-out"
                  onClick={(e) => {
                    e.preventDefault();
                    handleChoosePlan(plan);
                    const section = document.querySelector("#plans");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {" "}
                  <span>See Plans</span> <ArrowRight className="w-4 h-4" />{" "}
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

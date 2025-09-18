"use client";

import { ArrowRight } from "lucide-react";
import { plans } from "@/data/hosting-plan";
import Image from "next/image";
import { Plan } from "@/types/hosting-plan";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";

export default function HostingPlan() {
  const router = useRouter();

  const handleChoosePlan = (plan: Plan) => {
    // compute the route
    const route =
      plan.title === "Cloud Hosting"
        ? "/hosting/cloud-hosting"
        : plan.title === "Web Hosting"
        ? "/hosting/web-hosting"
        : "/hosting/turbo-hosting";

    router.push(route);
  };

  return (
    <section className="pt-14 pb-10">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Select Your Perfect Hosting Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className="relative border group border-gray-200 dark:border-gray-700 rounded-lg p-8 bg-accent text-gray-900 dark:text-gray-100 transition-all duration-300 ease-in-out hover:bg-blue-700 hover:text-white/95 dark:hover:text-blue-200 mx-2"
            >
              {plan.giftBadge && (
                <div className="absolute top-0 right-0 bg-yellow-400 text-gray-800 text-xs font-bold px-3 py-1 rounded-bl-lg">
                  Free Gift
                </div>
              )}
              <div className="flex flex-col items-center justify-center text-center gap-4">
                <figure>
                  <Image
                    width={140}
                    height={90}
                    quality={90}
                    priority
                    src={plan?.image || ""}
                    alt={plan?.title || "Hosting Plan"}
                    className="w-16 h-16 object-contain"
                  />
                </figure>
                <h3 className="text-xl font-bold mb-4">{plan?.title}</h3>
                <h3 className="text-xl font-medium mb-4">
                  {plan?.description}
                </h3>
                <p className="text-2xl font-bold mb-6">{plan.price}</p>

                <button
                  className="w-full py-2 cursor-pointer bg-white dark:bg-transparent border border-blue-600 text-blue-600 font-semibold rounded-lg shadow justify-center flex gap-2 items-center
             hover:bg-blue-50 hover:text-blue-600 hover:scale-105 dark:group-hover:text-white/95 transform mb-1
             transition-all duration-300 ease-in-out"
                  onClick={() => handleChoosePlan(plan)}
                >
                  <span>See Plans</span> <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { ArrowRight } from "lucide-react";
import { plans } from "@/data/hosting-plan";
import Image from "next/image";
import { Plan } from "@/types/hosting-plan";
import { useRouter, usePathname } from "next/navigation";
import { Card } from "@/components/ui/card";

export default function HostingPlan() {
  const router = useRouter();
  const pathname = usePathname();

  const handleChoosePlan = (plan: Plan) => {
    const route =
      plan.title === "Cloud Hosting"
        ? "/hosting/cloud-hosting"
        : plan.title === "Web Hosting"
        ? "/hosting/web-hosting"
        : plan.title === "Bdix Hosting"
        ? "/hosting/bdix-hosting"
        : plan.title === "WordPress Hosting"
        ? "/hosting/wordpress-hosting"
        : plan.title === "Turbo Hosting"
        ? "/hosting/turbo-hosting"
        : "/hosting/reseller-hosting";

    router.push(route);
  };

  // Show only first 3 plans on home page
  const visiblePlans = pathname === "/pricing" ? plans : plans.slice(0, 3);

  return (
    <section id="hosting-plans" className="pt-[70px] pb-10">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 id="plans" className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Select Your Perfect Hosting Plan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visiblePlans.map((plan) => (
            <Card
              key={plan.id}
              className="relative border group border-gray-200 dark:border-gray-700 rounded-xl p-8 bg-accent text-gray-900 dark:text-white transition-all duration-300 ease-in-out hover:bg-blue-700 hover:text-white/95 dark:hover:text-gray-100 mx-2"
            >
              {plan.giftBadge && (
                <div className="absolute top-0 right-0 bg-yellow-400 text-gray-100 text-xs font-semibold px-3 py-1 rounded-bl-lg">
                  Free Gift
                </div>
              )}
              <div className="flex flex-col items-center justify-center text-center gap-3">
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
                <h3 className="text-2xl font-bold">{plan?.title}</h3>
                <h3 className="text-base">{plan?.description}</h3>
                <p className="text-xl font-bold mb-4">{plan.price}</p>

                <button
                  className="w-full py-2 cursor-pointer bg-white border dark:border-none border-blue-600 text-blue-600 font-semibold rounded-lg shadow justify-center flex gap-2 items-center
             group-hover:bg-blue-50 dark:group-hover:bg-white/90 hover:text-blue-600 hover:scale-105 dark:group-hover:text-blue-500 transform mb-1
             transition-all duration-300 ease-in-out"
                  onClick={(e) => {
                    e.preventDefault();
                    handleChoosePlan(plan);
                    const section = document.querySelector(`#plans`);
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <span>See Plans</span> <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </Card>
          ))}
        </div>

        {pathname === "/" && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => router.push("/pricing?scrollTo=plans")}
              className="flex items-center gap-3 bg-transparent border border-blue-500 hover:bg-blue-700 text-blue-500 dark:bg-transparent dark:text-white hover:cursor-pointer dark:hover:bg-blue-600 dark:hover:text-white hover:text-white font-semibold py-3 px-6 dark:border-gray-400 dark:hover:border-transparent rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              See More Plans <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { plans } from "@/data/hosting-plan";
import Image from "next/image";

export default function HostingPlan() {
  const handleChoosePlan = (planTitle: string) => {
    toast("Success!", {
      description: `You have selected the ${planTitle}. Redirecting to checkout...`,
      duration: 2000,
      className: "bg-green-500 text-white",
    });
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Select Your Perfect Hosting Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="border group border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-accent text-gray-900 dark:text-gray-100 transition-all duration-300 ease-in-out hover:bg-blue-700 hover:text-white/95 dark:hover:text-blue-200"
            >
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

                <Button
                  variant="outline"
                  className="w-full flex gap-2 items-center bg-transparent border-gray-300 dark:border-gray-600 text-blue-600 dark:text-white group-hover:text-gray-800 group-hover:bg-white/90 group transition-colors duration-300 hover:cursor-pointer font-bold"
                  onClick={() => handleChoosePlan(plan?.title)}
                >
                  <span>See Plans</span> <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

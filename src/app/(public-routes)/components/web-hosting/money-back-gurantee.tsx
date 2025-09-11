"use client";

import { ArrowUpDown, Bell, Clock } from "lucide-react";

export function MoneyBackGuarantee() {
  return (
    <section className="py-14 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden max-w-7xl mx-auto">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-44 h-44 bg-blue-100 dark:bg-blue-900/20 rounded-full -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-pink-100 dark:bg-pink-900/20 rounded-full translate-x-20 translate-y-20"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            30 day Money-back Guarantee
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            There is no risk with our 30-day money back guarantee. Stay safe
            with assurance of refund.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-4xl mx-auto">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <ArrowUpDown className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">
              Easily Upgrade or Downgrade
            </h3>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Bell className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">
              Get Notified before suspension
            </h3>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">
              Refund process within an hour
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { z } from "zod";
import type { DomainExtension } from "@/types/domain-extension";

const domainSearchSchema = z.object({
  domain: z
    .string()
    .min(1, "Domain name is required")
    .max(63, "Domain name too long"),
});

const domainExtensions: DomainExtension[] = [
  { extension: ".com", price: "৳1650", color: "text-blue-500" },
  { extension: ".net", price: "৳1650", color: "text-red-500" },
  { extension: ".org", price: "৳1650", color: "text-green-500" },
  { extension: ".xyz", price: "৳599", color: "text-yellow-500" },
];

export function DomainSearchSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = domainSearchSchema.parse({ domain: searchTerm });
      setErrors([]);
      window.open(
        `https://my.hostnin.com/cart.php?a=add&domain=register&query=${result.domain}`,
        "_blank"
      );
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessages = error.issues.map((err) => err.message);
        setErrors(errorMessages);
        // toast.error(errorMessages[0]);
      }
    }
  };

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto container px-4 md:px-7 lg:px-10">
        <Card className="shadow-md p-0">
          <CardContent className="md:p-12 p-5">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Left side */}
              <div className="flex-1 w-full">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center md:text-left">
                  Search your Domain Name
                </h2>

                {/* form submits directly to the action */}
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3 md:gap-0 mb-6 max-w-xl mx-auto md:mx-0"
                >
                  <div className="flex-1 relative">
                    <Input
                      type="text"
                      placeholder="yourdomain.com"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="h-14 text-lg rounded-lg md:rounded-l-lg md:rounded-r-none border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400"
                    />
                    {/* <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" /> */}
                  </div>
                  <button
                    type="submit"
                    className="h-14 px-7 rounded-lg md:rounded-r-lg md:rounded-l-none bg-gradient-to-r from-[#0A8AFF] to-[#3B82F6] text-white font-medium flex gap-2 justify-center text-lg items-center hover:opacity-90 transition hover:cursor-pointer"
                  >
                    <Search className="w-5 h-5" />
                    Search
                  </button>
                </form>

                {errors.length > 0 && (
                  <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    {errors.map((error, index) => (
                      <p
                        key={index}
                        className="text-red-600 dark:text-red-400 text-sm"
                      >
                        {error}
                      </p>
                    ))}
                  </div>
                )}

                <div className="flex md:gap-6 gap-4 flex-wrap mx-auto md:mx-0">
                  {domainExtensions.map((domain) => (
                    <div
                      key={domain.extension}
                      className="text-start md:min-w-[80px] min-w-[50px]"
                    >
                      <span
                        className={`font-bold text-xl sm:text-2xl ${domain.color}`}
                      >
                        {domain.extension}
                      </span>
                      <br />
                      <span className="text-gray-600 font-medium text-xs md:text-base">
                        {domain.price}/Year
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side badges */}
              <div className="flex flex-row flex-wrap gap-10 md:gap-16 justify-between items-center">
                {/* .com limited offer */}
                <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-5 md:p-8 rounded-2xl border border-blue-200 dark:border-blue-800 flex-1">
                  <Badge className="absolute -top-3 -right-3 bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-1 text-sm font-medium transform">
                    Limited Time Offer
                  </Badge>

                  <div className="text-center">
                    <div className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-2">
                      Sale
                    </div>
                    <div className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
                      .com
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-lg font-bold">
                        30% off
                      </div>
                    </div>
                    <div className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                      1650tk/year
                    </div>
                  </div>

                  <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div className="absolute -top-1 -left-1 w-2 h-2 bg-pink-500 rounded-full"></div>
                </div>

                {/* .org special deal */}
                <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-5 md:p-8 rounded-2xl border border-blue-200 dark:border-blue-800 flex-1">
                  <Badge className="absolute -top-3 -left-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-1 text-sm font-medium transform">
                    Special Offer
                  </Badge>

                  <div className="text-center">
                    <div className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-2">
                      Deal
                    </div>
                    <div className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
                      .org
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className="bg-green-600 text-white px-4 py-2 rounded-full text-lg font-bold">
                        35% off
                      </div>
                    </div>
                    <div className="text-xl font-semibold text-green-600 dark:text-green-400">
                      1650tk/year
                    </div>
                  </div>

                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-green-500 rounded-full"></div>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

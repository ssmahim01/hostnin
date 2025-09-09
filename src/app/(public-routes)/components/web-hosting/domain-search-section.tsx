"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { z } from "zod";
import { toast } from "sonner";
import type { DomainExtension } from "@/types/domain-extension";

const domainSearchSchema = z.object({
  domain: z
    .string()
    .min(1, "Domain name is required")
    .regex(
      /^[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*$/,
      "Invalid domain name format"
    )
    .max(63, "Domain name too long"),
});

const domainExtensions: DomainExtension[] = [
  {
    extension: ".com",
    price: "₹1650",
    originalPrice: "₹2000",
    isPopular: true,
    color: "text-blue-500",
  },
  {
    extension: ".net",
    price: "₹1650",
    originalPrice: "₹2000",
    color: "text-red-500",
  },
  {
    extension: ".org",
    price: "₹1650",
    originalPrice: "₹2000",
    color: "text-green-500",
  },
  {
    extension: ".xyz",
    price: "₹599",
    originalPrice: "₹1200",
    color: "text-yellow-500",
  },
];

export function DomainSearchSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  const handleSearch = () => {
    try {
      const result = domainSearchSchema.parse({ domain: searchTerm });
      setErrors([]);
      toast.success(`Searching for ${result.domain}...`);
      // Backend integration point
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessages = error?.issues?.map((err) => err.message);
        setErrors(errorMessages);
        toast.error(errorMessages[0]);
      }
    }
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <Card className="max-w-6xl mx-auto bg-white dark:bg-gray-800 shadow-lg">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Left side - Search form */}
              <div className="flex-1 w-full">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Search your Domain Name
                </h2>

                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <div className="flex-1 relative">
                    <Input
                      type="text"
                      placeholder="yourdomain.com"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                      className="h-12 text-lg border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400"
                    />
                    <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                  <Button
                    size="lg"
                    onClick={handleSearch}
                    className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white font-medium"
                  >
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </Button>
                </div>

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

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {domainExtensions.map((domain) => (
                    <div
                      key={domain.extension}
                      className="text-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-300 dark:hover:border-blue-600 transition-colors cursor-pointer bg-gray-50 dark:bg-gray-700/50"
                    >
                      <div className={`text-xl font-bold mb-1 ${domain.color}`}>
                        {domain.extension}
                      </div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {domain.price}/Year
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side - Promotional badge */}
              <div className="relative">
                <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-800">
                  <Badge className="absolute -top-3 -right-3 bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-1 text-sm font-medium transform rotate-12">
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

                  {/* Decorative elements */}
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div className="absolute -top-1 -left-1 w-2 h-2 bg-pink-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

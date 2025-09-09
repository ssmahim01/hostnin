"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import type { DomainExtension } from "@/types/domain-extension";

const domainExtensions: DomainExtension[] = [
  {
    extension: ".com",
    price: "$9.99",
    originalPrice: "$14.99",
    isPopular: true,
  },
  { extension: ".net", price: "$12.99", originalPrice: "$17.99" },
  { extension: ".org", price: "$11.99", originalPrice: "$16.99" },
  { extension: ".xyz", price: "$1.99", originalPrice: "$9.99" },
];

export function DomainSearchSection() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section className="bg-white dark:bg-gray-950 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Search your Domain Name
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-2xl mx-auto">
            <div className="flex-1 relative">
              <Input
                type="text"
                placeholder="yourdomain.com"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-4 pr-12 h-12 text-lg border-gray-300 dark:border-gray-600"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
            <Button
              size="lg"
              className="h-12 px-8 bg-blue-600 hover:bg-blue-700"
            >
              Search
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {domainExtensions.map((domain) => (
              <div
                key={domain.extension}
                className="flex flex-col items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-300 dark:hover:border-blue-600 transition-colors cursor-pointer"
              >
                <div className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {domain.extension}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 line-through">
                  {domain.originalPrice}
                </div>
                <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                  {domain.price}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  /first year
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="relative">
              <Badge className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 text-sm font-medium">
                Limited Time Offer
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-4xl font-bold text-gray-900 dark:text-white">
                .com
              </div>
              <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                $9.99
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import z from "zod";

const domainSchema = z
  .string()
  .min(1, "Please enter a domain name")
  .regex(/^[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*$/, "Invalid domain name format")
  .max(63, "Domain name too long");

// Suggested domain TLDs
const domainTlds = [".COM", ".ORG", ".NET", ".XYZ"];

type DomainResult = {
  domain: string;
  available: boolean;
};

export default function DomainBanner() {
  const [domain, setDomain] = useState("");
  const [results, setResults] = useState<DomainResult[]>([]);
  const [loading, setLoading] = useState(false);

  // Mock API function for checking domain availability
  const checkDomainAvailability = async (domainName: string) => {
    return domainTlds.map((tld) => ({
      domain: `${domainName}${tld}`,
      available: true,
    }));
  };

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const validatedDomain = domainSchema.parse(domain.trim());
      setLoading(true);
      const availability = await checkDomainAvailability(validatedDomain);
      setResults(availability);
      setLoading(false);
    } catch (err) {
      if (err instanceof z.ZodError) {
        toast.error(err.issues[0].message);
      } else {
        toast.error("Something went wrong!");
      }
      setResults([]);
      setLoading(false);
    }
  };

  return (
    <section
      className="pt-16 pb-20 md:pt-20 px-2 sm:px-7 lg:pt-28 lg:pb-16 lg:px-10 relative bg-gradient-to-r from-blue-900/90 to-blue-950/90 bg-no-repeat bg-contain md:bg-cover bg-center dark:from-blue-950/90 dark:to-blue-900/90"
      style={{
        backgroundImage:
          "url('/assets/sh-hero-bg.png'), linear-gradient(278deg, rgba(0, 40, 160, 0.9) 16%, rgba(0, 20, 80, 0.9) 98%)",
      }}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between pt-8 md:pt-0">
        <div className="flex-1 text-white lg:pr-12 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
            Search & Register Domain For Your Website
          </h1>
          <p className="text-base md:text-lg mb-8 sm:mb-12 opacity-90">
            Cheap domains with advanced features; get top-level domains only at
            1650TK/year.
          </p>
          <form
            className="flex flex-row mb-6 max-w-xs md:max-w-md lg:max-w-xl mx-auto lg:mx-0"
            onSubmit={handleSearch}
          >
            <Input
              type="text"
              name="query"
              className="rounded-l-lg rounded-r-none py-8 flex-1 border-none dark:text-white text-gray-700 font-medium"
              placeholder="Enter your domain name..."
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
            />
            <Button
              type="submit"
              className="rounded-r-lg hover:cursor-pointer rounded-l-none text-lg font-bold flex gap-2 items-center bg-blue-600 hover:bg-blue-700 text-white py-8"
            >
              <Search className="w-7 h-7 font-bold" />
              <span>Check</span>
            </Button>
          </form>

          {/* Results */}
          {loading && <p className="text-white">Checking...</p>}
          {results.length > 0 && (
            <div className="space-y-2 mt-4">
              {results.map((res) => (
                <div
                  key={res.domain}
                  className="flex items-center justify-between bg-green-50 dark:bg-green-900/20 p-3 rounded-lg"
                >
                  <span className="text-gray-900 dark:text-white font-medium">
                    {res.domain} is available!
                  </span>
                  <a
                    href={`https://my.hostnin.com/cart.php?a=add&domain=register&query=${res.domain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="hover:cursor-pointer hover:scale-105 transition-all duration-500 bg-blue-600 hover:bg-blue-700 text-white py-1 px-3">
                      Purchase
                    </Button>
                  </a>
                </div>
              ))}
            </div>
          )}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-8">
            {[
              { tld: ".COM", price: "৳1650/Year" },
              { tld: ".NET", price: "৳1650/Year" },
              { tld: ".ORG", price: "৳1650/Year" },
              { tld: ".INFO", price: "৳599/Year" },
              { tld: ".XYZ", price: "৳599/Year" },
            ].map((domain, index) => (
              <div key={index} className="text-center">
                <div className="text-xl font-bold mb-1">{domain.tld}</div>
                <div className="text-sm opacity-90">{domain.price}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex justify-center mt-4 sm:mt-8 lg:mt-0 w-full max-w-xs sm:max-w-md lg:max-w-xl xl:max-w-2xl h-full">
          <Image
            src="/assets/dm-hero.png"
            alt="Domain Registration Illustration"
            width={400}
            height={400}
            className="object-contain w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}

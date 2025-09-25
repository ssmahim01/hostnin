"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { z } from "zod";

const domainSearchSchema = z.object({
  domain: z
    .string()
    .min(1, "Domain name is required")
    .max(63, "Domain name too long"),
});

function normalizeDomain(input: string) {
  return input
    .trim()
    .toLowerCase()
    .replace(/^www\./, "")
    .replace(/\/.*/, "");
}

export default function DomainBanner() {
  const [domain, setDomain] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);
    try {
      const input = normalizeDomain(domain);

      // Validate input
      domainSearchSchema.parse({ domain: input });

      if (!input) {
        setErrors(["Please enter a domain name"]);
        return;
      }

      // Redirect to WHMCS register page
      const url = `https://my.hostnin.com/cart.php?a=add&domain=register&query=${encodeURIComponent(
        input
      )}`;
      window.open(url, "_blank");
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Collect all error messages
        const validationErrors = error.issues.map((issue) => issue.message);
        setErrors(validationErrors);
      } else {
        setErrors(["Something went wrong. Please try again!"]);
      }
    }
  };

  return (
    <section className="relative pt-28 pb-24 md:pt-20 lg:pt-28 lg:pb-24 px-4">
      {/* Overlay gradient */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(278deg, rgba(0, 40, 160, 0.9) 16%, rgba(0, 20, 80, 0.9) 98%)
          `,
        }}
      />
      {/* Dark mode overlay */}
      <div className="absolute inset-0 w-full h-full dark:bg-slate-900"></div>

      {/* Background image */}
      <div
        className="absolute inset-0 w-full md:bg-[url('/assets/sh-hero-bg.png')] h-full bg-no-repeat bg-contain md:bg-cover bg-center"
        style={{
          backgroundPosition: "left center, center center",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundSize: "contain, cover",
        }}
      />

      {/* Content */}
      <div className="relative w-full max-w-full md:max-w-4xl mx-auto text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
          Search & Register Domain For Your Website
        </h1>
        <p className="text-lg text-white/90 mb-10 sm:mb-12 max-w-2xl mx-auto">
          Cheap domains with advanced features; get top-level domains only at 1650TK/year.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 sm:gap-0 mb-6 max-w-4xl mx-auto mt-6 lg:mt-12"
        >
          <Input
            type="text"
            name="query"
            className="sm:rounded-l-lg sm:rounded-r-none py-6 sm:py-8 bg-white/90 dark:text-white flex-1 border-none text-gray-700 font-medium"
            placeholder="Enter your domain name..."
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
          />
          <button
            type="submit"
            className="sm:rounded-r-lg sm:rounded-l-none md:mt-0 mt-8 md:mb-0 mb-4 text-lg font-bold flex gap-2 items-center bg-blue-600 hover:bg-blue-700 text-white rounded-md py-4 md:py-2 px-10 hover:cursor-pointer w-full sm:w-auto justify-center"
          >
            <Search className="w-6 h-6" />
            <span>Check</span>
          </button>
        </form>

        {errors.length > 0 && (
          <div className="mb-4 p-3 bg-red-50 max-w-4xl mx-auto dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-left">
            {errors.map((error, index) => (
              <p key={index} className="text-red-600 dark:text-red-400 text-sm">
                {error}
              </p>
            ))}
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 lg:mt-14 mt-8 justify-center">
          {[
            { tld: ".COM", price: "৳1650/Year" },
            { tld: ".NET", price: "৳1650/Year" },
            { tld: ".ORG", price: "৳1650/Year" },
            { tld: ".INFO", price: "৳599/Year" },
            { tld: ".XYZ", price: "৳599/Year" },
          ].map((domain, index) => (
            <div
              key={index}
              className={`text-center rounded-xl p-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors ${
                index > 3 ? "hidden md:block" : ""
              }`}
            >
              <div className="text-2xl font-bold mb-1 text-white">
                {domain.tld}
              </div>
              <div className="text-sm text-white/90">{domain.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

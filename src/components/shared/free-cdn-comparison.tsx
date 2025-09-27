"use client";

import { CheckCircle2, XCircle } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface FeatureRow {
  feature: string;
  ours: boolean | string;
  competitor: boolean | string;
}

const rows: FeatureRow[] = [
  { feature: "Global content delivery network", ours: true, competitor: true },
  { feature: "DDoS protection", ours: true, competitor: true },
  { feature: "Free dedicated SSL certs", ours: true, competitor: false },
  { feature: "Web application firewall (WAF)", ours: true, competitor: true },
  { feature: "OCSP stapling", ours: true, competitor: true },
  { feature: "Images & mobile optimisation", ours: true, competitor: true },
  { feature: "HTTP/2", ours: true, competitor: true },
  { feature: "Unlimited usage", ours: true, competitor: false },
  { feature: "Load balancing", ours: true, competitor: "No (extra fee)" },
  { feature: "Activation time", ours: "Instant", competitor: "Instant" },
  { feature: "Unlimited blocking by country", ours: true, competitor: false },
  { feature: "PCI compliance", ours: true, competitor: false },
  { feature: "Origin web hosting", ours: "From free", competitor: false },
];

export default function FreeCdnComparison() {
  return (
    <section className="container mx-auto md:px-4 lg:px-8 pt-6 pb-12 max-w-7xl">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          The best free CDN
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Other companies offer ‘CDN hosting’ but only give you a free plan. Our
          network includes premium features at no cost, saving you hundreds per
          year.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm md:text-base min-w-full border-separate border-spacing-x-4 border-spacing-y-3">
          <thead>
            <tr>
              {/* Feature heading cell */}
              <th
                className="bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-100 
            rounded-xl shadow-sm p-4 mr-4 text-left font-semibold
            transition-transform duration-300 hover:shadow-md"
              >
                Features
              </th>

              {/* Hostnin heading cell */}
              <th
                className="bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-100 
            rounded-xl shadow-sm p-4 text-center font-semibold
            transition-transform duration-300 hover:scale-105 hover:shadow-md"
              >
                <Image
                  src="/assets/hostnin-logo.jpg"
                  alt="Hostnin Logo"
                  width={80}
                  height={80}
                  className="mx-auto mb-2 w-16 h-16 object-cover rounded-md"
                />
                <span className="md:block hidden">Hostnin CDN</span>
              </th>

              {/* Competitor heading cell */}
              <th
                className="bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-100 
            rounded-xl shadow-sm p-4 text-center font-semibold
            transition-transform duration-300 hover:scale-105 hover:shadow-md"
              >
                <Image
                  src="/assets/cloudflare.svg"
                  alt="Cloudflare Logo"
                  width={80}
                  height={80}
                  className="mx-auto mb-2 w-16 h-16 object-contain rounded-md"
                />
                <span className="md:block hidden">Cloudflare Pro</span>
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-200 dark:border-gray-700 last:border-0"
              >
                <th
                  scope="row"
                  className="text-left font-medium py-3 px-2 md:px-4 text-gray-800 dark:text-gray-200"
                >
                  {row.feature}
                </th>

                {/* Our CDN */}
                <td className="py-3 px-2 md:px-4 text-center">
                  <Cell value={row.ours} highlight />
                </td>

                {/* Competitor */}
                <td className="py-3 px-2 md:px-4 text-center">
                  <Cell value={row.competitor} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

// Small helper to render cell with icon or text
function Cell({
  value,
  highlight = false,
}: {
  value: boolean | string;
  highlight?: boolean;
}) {
  const yes = value === true;
  const no = value === false;

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-lg px-3 py-2 backdrop-blur-md transition-transform duration-300 hover:scale-105",
        highlight
          ? "bg-white/50 dark:bg-slate-800/40 border border-gray-200/40 dark:border-gray-700/40 shadow-sm"
          : ""
      )}
    >
      {yes && <CheckCircle2 className="text-green-500 h-5 w-5" />}
      {no && <XCircle className="text-red-500 h-5 w-5" />}
      {!yes && !no && (
        <span className="text-gray-700 dark:text-gray-300 text-sm">
          {value}
        </span>
      )}
    </div>
  );
}

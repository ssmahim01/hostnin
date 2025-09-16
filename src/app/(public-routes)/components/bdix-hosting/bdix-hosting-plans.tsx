"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { groups, plans } from "@/data/bdix-hosting-plans";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import Link from "next/link";

export default function BdixHostingPlans() {
  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLTableElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !tableRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const tableRect = tableRef.current.getBoundingClientRect();

      const shouldBeSticky =
        sectionRect.top <= 64 &&
        sectionRect.bottom > 100 &&
        tableRect.top <= 64;

      setIsSticky(shouldBeSticky);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-[#f8f8f8] dark:bg-gray-900 py-8 sm:py-12 lg:py-16 lg:pb-28"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-[26px] sm:text-3xl lg:text-5xl font-bold text-black dark:text-white mb-3 sm:mb-4">
            Compare BDIX Hosting Plans
          </h1>
        </div>

        {/* Mobile / stacked cards (visible on small screens) */}
        <div className="lg:hidden">
          {plans.map((plan, pi) => (
            <div
              key={plan.id}
              className="mb-6 last:mb-0 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              <div className="border-b border-gray-200 dark:border-gray-700">
                <div className="bg-gradient-to-r from-blue-700 to-blue-600 p-4">
                  <div className="text-center space-y-3">
                    <div className="font-bold text-xl text-white">
                      {plan.title}
                    </div>
                    <div className="bg-white/15 rounded-lg p-3 backdrop-blur-sm border border-white/25 inline-block">
                      <div className="text-3xl font-bold text-white">
                        {plan.price}
                      </div>
                      <div className="text-sm text-blue-200">{plan.period}</div>
                    </div>
                    <div className="mt-2">
                      <Button
                        asChild
                        className="w-full block bg-white/95 transition-all duration-300 text-black font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                      >
                        <a
                          href={plan.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Order Now
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  {/* Render feature groups sequentially for mobile */}
                  {groups.map((g) => (
                    <div key={g.key} className="mb-6 last:mb-0">
                      {g.title && (
                        <div className="bg-gradient-to-r from-blue-700 to-blue-600 p-3 mb-4 rounded-lg">
                          <div className="flex items-center justify-center">
                            <span className="text-lg font-bold text-white">
                              {g.title}
                            </span>
                          </div>
                        </div>
                      )}

                      <div className="space-y-3">
                        {g.rows.map((r) => (
                          <div
                            key={r.key}
                            className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                          >
                            <div className="flex-1">
                              <span className="font-semibold text-gray-700 dark:text-gray-300 text-sm">
                                {r.label}
                              </span>
                            </div>
                            <div className="ml-4">
                              <span className="font-medium text-gray-700 dark:text-gray-300 text-sm">
                                {r.values[pi]}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop table (visible on lg and up) */}
        <div className="hidden lg:block overflow-x-auto">
          <div className="relative">
            <Table
              ref={tableRef}
              className="w-full min-w-[800px] border-separate border-spacing-0"
            >
              {/* TableHeader */}
              <TableHeader
                className={`${
                  isSticky
                    ? "fixed top-[64px] left-0 right-0 z-50 shadow-lg max-w-7xl mx-auto"
                    : "relative"
                } bg-gradient-to-r w-full from-blue-800 to-blue-600 transition-all duration-200 `}
                style={
                  isSticky
                    ? {
                        width: tableRef.current?.offsetWidth,
                        maxWidth: "80rem",
                        pointerEvents: "none",
                        display: "flex",
                        justifyContent: "center"
                      }
                    : undefined
                }
              >
                <TableRow className="hover:bg-blue-600">
                  <TableHead className="p-6 text-white font-bold text-2xl border-r border-blue-700/50">
                    Features
                  </TableHead>
                  {plans.map((plan) => (
                    <TableHead
                      key={plan.id}
                      className="p-3 text-white text-center border-r border-blue-700/50"
                    >
                      <div className="space-y-3">
                        <div className="font-bold text-xl">{plan.title}</div>

                        <div className="bg-white/15 rounded-lg p-3 backdrop-blur-sm border border-white/25 inline-block">
                          <div className="text-3xl font-bold text-white">
                            {plan.price}
                          </div>
                          <div className="text-sm text-blue-200">
                            {plan.period}
                          </div>
                        </div>

                        <div className="mt-3">
                          <Button
                            asChild
                            className="w-full bg-white/95 transition-all duration-300 text-black font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 text-center hover:bg-white"
                          >
                            <Link
                              href={plan.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Order Now
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>

              <TableBody>
                {isSticky && (
                  <TableRow>
                    <TableCell colSpan={4} className="p-0 h-[200px]" />
                  </TableRow>
                )}

                {groups.map((g) => (
                  <React.Fragment key={g.key}>
                    {g.title && (
                      <TableRow className="bg-gradient-to-r from-blue-800 to-blue-600">
                        <TableCell colSpan={4} className="p-6 text-center">
                          <span className="text-2xl font-bold text-white">
                            {g.title}
                          </span>
                        </TableCell>
                      </TableRow>
                    )}

                    {g.rows.map((r, ri) => (
                      <TableRow
                        key={r.key}
                        className={`${
                          ri % 2 === 0
                            ? "hover:bg-blue-50/50 bg-gray-50/50 dark:bg-gray-800/50 dark:hover:bg-gray-700/50"
                            : "hover:bg-blue-50/50 bg-white dark:bg-gray-900 dark:hover:bg-gray-700/50"
                        } transition-colors duration-200`}
                      >
                        <TableCell className="p-6 font-semibold text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">
                          {r.label}
                        </TableCell>
                        {r.values.map((val, idx) => (
                          <TableCell
                            key={idx}
                            className={`p-6 text-center border-r border-gray-200 dark:border-gray-700 ${
                              idx === r.values.length - 1 ? "border-r-0" : ""
                            }`}
                          >
                            <span className="font-medium text-gray-700 dark:text-gray-300">
                              {val}
                            </span>
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

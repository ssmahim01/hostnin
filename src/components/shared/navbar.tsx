/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { NavItem } from "@/types/nav";
import Link from "next/link";

const navItems: NavItem[] = [
  { label: "Pricing", href: "/pricing" },
  { label: "Hosting", href: "/hosting", hasDropdown: true },
  { label: "Domain", href: "/domain" },
  { label: "Server", href: "/server", hasDropdown: true },
  { label: "About", href: "/about", hasDropdown: true },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-blue-600">HOSTNIN</span>
          </div>

          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex gap-2 items-baseline">
                {navItems.map((item) => (
                  <div key={item.label} className="relative group">
                    <Link
                      href={item.href}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-1"
                    >
                      {item.label}
                      {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                variant={"default"}
                className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white p-5 rounded-lg font-medium"
              >
                Dashboard
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 p-2"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 pb-2">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Dashboard
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

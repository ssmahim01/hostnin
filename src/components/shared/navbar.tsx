/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { NavItem } from "@/types/nav";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";

const navItems: NavItem[] = [
  { label: "Pricing", href: "/pricing" },
  {
    label: "Hosting",
    href: "/hosting",
    hasDropdown: true,
    dropdownItems: [
      { label: "Web Hosting", href: "/hosting/web-hosting" },
      { label: "VPS Hosting", href: "/hosting/vps-hosting" },
      { label: "Cloud Hosting", href: "/hosting/cloud-hosting" },
      { label: "Dedicated Hosting", href: "/hosting/dedicated-hosting" },
      { label: "Reseller Hosting", href: "/hosting/reseller-hosting" },
      { label: "Managed Hosting", href: "/hosting/managed-hosting" },
    ],
  },
  { label: "Domain", href: "/domain" },
  {
    label: "Server",
    href: "/server",
    hasDropdown: true,
    dropdownItems: [
      { label: "Dedicated Servers", href: "/server/dedicated-servers" },
      { label: "Cloud Servers", href: "/server/cloud-servers" },
    ],
  },
  {
    label: "About",
    href: "/about",
    hasDropdown: true,
    dropdownItems: [
      { label: "Company", href: "/about/company" },
      { label: "Careers", href: "/about/careers" },
      { label: "Blog", href: "/about/blog" },
      { label: "Contact", href: "/about/contact" },
    ],
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

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
        bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="https://res.cloudinary.com/daspo1tk3/image/upload/v1757498973/logo11_nfcmpq.webp"
                alt="Travel Agency Logo"
                width={140}
                height={80}
                quality={90}
                className="h-10 w-full object-contain"
                priority
              />
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="flex gap-2 items-baseline">
                {navItems?.map((item) => (
                  <div key={item.label} className="relative group">
                    <Link
                      href={item.href || "#"}
                      className="flex items-center gap-1 px-4 py-3 text-gray-700 dark:text-gray-300  hover:text-blue-600 hover:bg-accent rounded-lg transition-all font-semibold"
                    >
                      {item.label}
                      {item.hasDropdown && (
                        <ChevronDown className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:rotate-180" />
                      )}
                    </Link>

                    {item.hasDropdown && item.dropdownItems && (
                      <AnimatePresence>
                        <motion.ul
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-1 w-48 bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden z-50 hidden group-hover:block"
                        >
                          {item.dropdownItems.map((sub) => (
                            <li key={sub.label}>
                              <Link
                                href={sub.href}
                                className="block px-4 py-2 text-gray-700 dark:text-gray-300 text-sm font-semibold hover:bg-blue-50 hover:text-blue-600 transition"
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <Button
                variant={"ghost"}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded hover:bg-gray-200 cursor-pointer dark:hover:bg-gray-700 transition-colors"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </Button>

              {/* CTA Button */}
              <div className="hidden lg:block">
                <Button
                  variant={"default"}
                  className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white p-5 rounded-lg font-medium"
                >
                  Dashboard
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
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
                <div key={item.label} className="relative">
                  <Link
                    href={item.href}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>

                  {/* Dropdown Menu for Mobile */}
                  {item.hasDropdown && (
                    <div className="absolute left-0 hidden mt-2 space-y-2 bg-white dark:bg-gray-800 shadow-lg group-hover:block">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                          onClick={() => setIsOpen(false)}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

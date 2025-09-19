/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sun,
  Moon,
  Menu,
  X,
  ChevronDown,
  Server,
  Cloud,
  Compass as Wordpress,
  Database,
  Zap,
  Building2,
  Shield,
  Phone,
  FileText,
  Briefcase,
  HardDrive,
  Monitor,
  LogIn,
  FilePen,
  Wrench,
  BadgePlus,
  LayoutDashboard,
  Star,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { NavItem } from "@/types/nav";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import Dropdown from "../ui/menu-dropdown";
import { AuthModal } from "../auth/auth-modal";

const navItems: NavItem[] = [
  { label: "Pricing", href: "/pricing" },
  {
    label: "Hosting",
    href: "/hosting",
    hasDropdown: true,
    dropdownItems: [
      {
        label: "Web Hosting",
        href: "/hosting/web-hosting",
        icon: Server,
        description: "NVMe SSD server",
      },
      {
        label: "Cloud Hosting",
        href: "/hosting/cloud-hosting",
        icon: Cloud,
        description: "Fast autoscaling server",
      },
      {
        label: "WordPress Hosting",
        href: "/hosting/wordpress-hosting",
        icon: Wordpress,
        description: "Fully Managed WordPress",
      },
      {
        label: "Reseller Hosting",
        href: "/hosting/reseller-hosting",
        icon: Building2,
        description: "Start your Business",
      },
      {
        label: "BDIX Hosting",
        href: "/hosting/bdix-hosting",
        icon: Database,
        description: "Lowest Network Latency",
      },
      {
        label: "Turbo Hosting",
        href: "/hosting/turbo-hosting",
        icon: Zap,
        description: "Fast Speed Guaranteed",
      },
    ],
  },
  { label: "Domain", href: "/domain" },
  {
    label: "Server",
    href: "/server",
    hasDropdown: true,
    dropdownItems: [
      {
        label: "VPS",
        href: "/hosting/vps-hosting",
        icon: HardDrive,
        // description: "Virtual Private Server",
      },
      {
        label: "Dedicated",
        href: "/hosting/dedicated-server",
        icon: Monitor,
        // description: "Dedicated Server Solutions",
      },
    ],
  },
  {
    label: "About",
    href: "/about",
    hasDropdown: true,
    dropdownItems: [
      {
        label: "Privacy Policy",
        href: "/privacy-policy",
        icon: Shield,
      },
      {
        label: "Terms & Condition",
        href: "/terms-conditions",
        icon: FileText,
      },
      {
        label: "Testimonials",
        href: "/reviews",
        icon: Star,
      },
      {
        label: "Careers",
        href: "/careers",
        icon: Briefcase,
        badge: "(Hiring)",
      },
      {
        label: "Contact",
        href: "/contact",
        icon: Phone,
      },
    ],
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label]
    );
  };

  const { theme, setTheme } = useTheme();
  const defaultLogo =
    "/assets/logo11.png";

  const whiteLogo =
    "/assets/footer-logo.webp";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        bg-background backdrop-blur-md shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src={theme === "dark" ? whiteLogo : defaultLogo}
                alt="Hostnin Logo"
                width={140}
                height={80}
                quality={90}
                className="h-10 w-full object-contain"
                priority
              />
            </Link>
          </div>

          <div className="flex items-center gap-2">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.hasDropdown && item.dropdownItems ? (
                    <button
                      type="button"
                      className="text-gray-700 dark:text-gray-300 text-base hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 font-medium transition-colors duration-200 flex items-center gap-1"
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-base font-medium transition-colors duration-200 flex items-center gap-1"
                    >
                      {item.label}
                    </Link>
                  )}

                  {item.hasDropdown && item.dropdownItems && (
                    <div
                      className={`absolute  ${item.label === "Hosting" ? "  -left-50" : "-left-10"} mt-2 bg-accent dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0
                    ${item.label === "Hosting" ? "w-[550px]" : "w-52"}`}
                    >
                      {/* Dropdown items remain links */}
                      <div
                        className={`grid gap-2 ${
                          item.label === "Hosting"
                            ? "grid-cols-1 sm:grid-cols-1 md:grid-cols-2"
                            : "grid-cols-1"
                        } p-2`}
                      >
                        {item.dropdownItems.map((dropdownItem) => {
                          const IconComponent = dropdownItem.icon;
                          return (
                            <Link
                              key={dropdownItem.label}
                              href={dropdownItem.href}
                              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group/item"
                            >
                              {IconComponent && (
                                <div className={`flex-shrink-0  ${item.label === "Hosting" ? "w-8 h-8" : "w-6 h-6"} rounded-lg flex items-center justify-center`}>
                                  <IconComponent className="w-full h-full text-gray-900 dark:text-gray-200" />
                                </div>
                              )}
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <span className="font-medium text-gray-900 text-sm dark:text-gray-100 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400">
                                    {dropdownItem.label}
                                  </span>
                                  {dropdownItem.badge && (
                                    <span className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-2 py-1 rounded-full font-medium">
                                      {dropdownItem.badge}
                                    </span>
                                  )}
                                </div>
                                {dropdownItem.description && (
                                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                    {dropdownItem.description}
                                  </p>
                                )}
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ))}
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
                <Dropdown />
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
      {isOpen && (
        <div className="flex flex-col h-full min-h-screen bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 relative">
          {/* Scroll area for nav items */}
          <ScrollArea className="flex-1 overflow-y-auto py-4 max-h-[80vh]">
            <div className="flex flex-col space-y-3 px-4">
              {navItems.map((item) =>
                item.hasDropdown ? (
                  <div key={item.label} className="flex flex-col">
                    <Button
                      variant={"ghost"}
                      className="w-full flex justify-between items-center px-3 py-3 text-2xl text-gray-800 dark:text-gray-200 font-semibold hover:text-blue-600 dark:hover:text-blue-400"
                      onClick={() => toggleExpand(item.label)}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-7 h-7 transition-transform ${
                          expandedItems.includes(item.label) ? "rotate-180" : ""
                        }`}
                      />
                    </Button>
                    {expandedItems.includes(item.label) && (
                      <div className="flex flex-col pl-6">
                        {item.dropdownItems?.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href || "#"}
                            className="flex items-center gap-2 py-2 text-lg text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                            onClick={() => setIsOpen(false)}
                          >
                            {sub.icon && <sub.icon className="w-7 h-7" />}
                            <span>{sub.label}</span>
                            {sub.badge && (
                              <span className="text-sm bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-1.5 py-0.5 rounded">
                                {sub.badge}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href || "#"}
                    className="block px-3 py-3 text-2xl text-gray-800 dark:text-gray-200 font-semibold hover:text-blue-600 dark:hover:text-blue-400"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
            <ScrollBar orientation="vertical" />
          </ScrollArea>

          {/* Dashboard Button always at bottom */}
          <div className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-4 sticky bottom-0 z-10">
            <Button
              variant={"default"}
              onClick={() => setDashboardOpen((prev) => !prev)}
              className="w-full flex justify-center gap-3 items-center px-4 py-7 text-lg hover:text-white/90 hover:border-2 hover:border-blue-600 rounded-md font-bold hover:bg-blue-700 bg-blue-600 text-white transition-colors"
            >
              Dashboard
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  dashboardOpen ? "rotate-180" : ""
                }`}
              />
            </Button>

            {dashboardOpen && (
              <div className="flex flex-col mt-2 space-y-1">
                <Link
                  href="https://my.hostnin.com"
                  target="_blank"
                  className="flex items-center gap-2 p-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md text-base"
                >
                  <LayoutDashboard className="w-5 h-5" />
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    setAuthMode("login");
                    setAuthOpen(true);
                  }}
                  className="flex items-center gap-2 p-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md text-base"
                >
                  <LogIn className="w-5 h-5" /> Login
                </button>
                <button
                  onClick={() => {
                    setAuthMode("register");
                    setAuthOpen(true);
                  }}
                  className="flex items-center gap-2 p-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md text-base"
                >
                  <FilePen className="w-5 h-5" /> Register
                </button>
                <Link
                  href="https://my.hostnin.com/index.php/store/marketgoo"
                  target="_blank"
                  className="flex items-center gap-2 p-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md text-base"
                >
                  <Wrench className="w-5 h-5" /> SEO Tools
                </Link>
                <Link
                  href="https://my.hostnin.com/cart.php?a=add&domain=register"
                  target="_blank"
                  className="flex items-center gap-2 p-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md text-base"
                >
                  <BadgePlus className="w-5 h-5" /> Register Domain
                </Link>
              </div>
            )}
          </div>

          <AuthModal
            open={authOpen}
            mode={authMode}
            onOpenChange={setAuthOpen}
            onModeChange={setAuthMode}
          />
        </div>
      )}
    </nav>
  );
}

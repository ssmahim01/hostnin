/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect, useRef } from "react";
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
  HelpCircle,
  Globe,
} from "lucide-react";
import type { NavItem } from "@/types/nav";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";
import Dropdown from "../ui/menu-dropdown";
import { AuthModal } from "../auth/auth-modal";
import { AnimatePresence, motion } from "framer-motion";

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
        icon: Globe,
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
        description: "How we protect your data",
      },
      {
        label: "Terms & Condition",
        href: "/terms-conditions",
        icon: FileText,
        description: "Understand our service policies",
      },
      {
        label: "Testimonials",
        href: "/reviews",
        icon: Star,
        description: "See what our clients say",
      },
      {
        label: "Support Ticket",
        href: "/support",
        icon: HelpCircle,
        description: "Get help from our support team",
      },
      {
        label: "Careers",
        href: "/careers",
        icon: Briefcase,
        badge: "(Hiring)",
        description: "Join our growing team",
      },
      {
        label: "Contact",
        href: "/contact",
        icon: Phone,
        description: "Reach out to us",
      },
    ],
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const navbarRef = useRef<HTMLDivElement>(null);
  const closeDropdown = () => {
    // force mouseleave so group-hover stops
    if (navbarRef.current) {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    }
  };

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label]
    );
  };

  const { theme, setTheme } = useTheme();
  const defaultLogo = "/assets/logo11.png";

  const whiteLogo = "/assets/footer-logo.webp";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        bg-white dark:bg-slate-900 backdrop-blur-md shadow-sm"
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
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
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
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                      className={`absolute mt-2 bg-white dark:bg-gray-900 rounded-b-lg shadow-xl border-b border-gray-200 dark:border-gray-700 transition-all duration-300 transform
                      ${
                        openDropdown === item.label
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible translate-y-2"
                      }
                      ${
                        item.label === "Hosting"
                          ? "-left-40 w-[435px]"
                          : item.label === "About"
                          ? "-left-[11.4rem] w-[460px]"
                          : "-left-10 w-36"
                      }
                    `}
                    >
                      {/* Dropdown items remain links */}
                      <div
                        className={`grid gap-2 ${
                          item.label === "Hosting" || item.label === "About"
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
                              onClick={() => setOpenDropdown(null)}
                              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group/item"
                            >
                              {IconComponent && (
                                <div
                                  className={`flex-shrink-0  ${
                                    item.label === "Hosting" ||
                                    item.label === "About"
                                      ? "w-8 h-8"
                                      : "w-6 h-6"
                                  } rounded-lg flex items-center justify-center`}
                                >
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
                                  <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35 }}
            className="fixed inset-0 h-screen w-screen bg-white dark:bg-gray-900 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-700">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <Image
                  src={theme === "dark" ? whiteLogo : defaultLogo}
                  alt="Logo"
                  width={170}
                  height={100}
                  className="object-contain"
                />
              </Link>
              <div className="flex gap-2 items-center">
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
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 p-2"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Scrollable area */}
            <div className="flex-1 p-4 overflow-y-auto">
              <ul className="flex flex-col gap-0 text-base font-medium text-gray-700 dark:text-gray-300">
                {navItems.map((item) => (
                  <li
                    key={item.label}
                    className="border-b border-gray-100 dark:border-gray-800"
                  >
                    {item.hasDropdown ? (
                      <div>
                        <button
                          className="w-full flex justify-between items-center py-4 text-left hover:text-blue-600 transition-colors duration-200 cursor-pointer text-base font-medium"
                          onClick={() => toggleExpand(item.label)}
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            className={`transition-transform duration-300 ease-in-out ${
                              expandedItems.includes(item.label)
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            expandedItems.includes(item.label)
                              ? "max-h-96 opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="pl-4 pb-4 flex flex-col">
                            {item.dropdownItems?.map((sub) => (
                              <Link
                                key={sub.label}
                                href={sub.href || "#"}
                                className="group flex items-center gap-3 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:translate-x-1 text-base font-medium"
                                onClick={() => setIsOpen(false)}
                              >
                                <span className="flex items-center justify-center w-10 h-10 rounded-lg text-xl text-black dark:text-gray-200 group-hover:text-blue-500 transition-colors">
                                  {sub.icon && <sub.icon className="w-5 h-5" />}
                                </span>
                                <div className="flex flex-col">
                                  <span className="text-sm font-medium">
                                    {sub.badge ? (
                                      <>
                                        {sub.label}{" "}
                                        <span className="text-yellow-500">
                                          {sub.badge}
                                        </span>
                                      </>
                                    ) : (
                                      sub.label
                                    )}
                                  </span>
                                  {sub.description && (
                                    <span className="text-xs text-gray-500 dark:text-gray-400">
                                      {sub.description}
                                    </span>
                                  )}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href || "#"}
                        className="block py-4 hover:text-blue-600 transition-all duration-200 hover:translate-x-1 text-base font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Dashboard button */}
            <div className="bg-white dark:bg-gray-900 px-4 pb-4 sticky bottom-0 z-10">
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
                  <Link
                    href="https://my.hostnin.com/index.php/login"
                    target="_blank"
                    className="flex items-center gap-2 p-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md text-base"
                  >
                    <LogIn className="w-5 h-5" /> Login
                  </Link>
                  <Link
                    href={"https://my.hostnin.com/register.php"}
                    target="_blank"
                    className="flex items-center gap-2 p-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md text-base"
                  >
                    <FilePen className="w-5 h-5" /> Register
                  </Link>
                  <Link
                    href="/support"
                    className="flex items-center gap-2 p-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md text-base"
                  >
                    <Wrench className="w-5 h-5" /> Open Ticket
                  </Link>
                  <Link
                    href="/domain"
                    className="flex items-center gap-2 p-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md text-base"
                  >
                    <BadgePlus className="w-5 h-5" /> Register A New Domain
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
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

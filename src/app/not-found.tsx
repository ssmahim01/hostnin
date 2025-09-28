"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Home,
  ArrowLeft,
  RefreshCw,
  Search,
  Mail,
  Server,
  AlertTriangle,
  Info,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NotFound() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const floatingElements = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    delay: i * 0.2,
    duration: 3 + i * 0.5,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  return (
    <div className="max-w-7xl pt-24 pb-16 px-4 lg:px-8 mx-auto bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Floating Background Elements */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute w-2 h-2 bg-primary/20 rounded-full"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: element.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: element.delay,
          }}
        />
      ))}

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* 404 Number with Glitch Effect */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="relative"
            >
              <div className="text-[12rem] md:text-[16rem] font-bold text-primary/20 leading-none select-none">
                404
              </div>
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="absolute inset-0 text-[12rem] md:text-[16rem] font-bold text-primary/40 leading-none select-none"
                style={{ filter: "blur(2px)" }}
              >
                404
              </motion.div>
            </motion.div>

            {/* Error Icon */}
            <motion.div
              initial={{ rotate: -10, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex justify-center"
            >
              <div
                className="relative transition-transform transform hover:scale-105 
                    duration-500 ease-in-out"
              >
                <div className="w-24 h-24 bg-card border border-border rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Server className="w-12 h-12 text-primary" />
                </div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute -top-2 -right-2 w-8 h-8 bg-destructive rounded-full flex items-center justify-center"
                >
                  <AlertTriangle className="w-4 h-4 text-white" />
                </motion.div>
              </div>
            </motion.div>

            {/* Heading and Description */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold gradient-text"
              >
                Page Not Found
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              >
                Oops! The page you&apos;re looking for seems to have wandered
                off into the digital void. Don&apos;t worry, our servers are
                still running perfectly!
              </motion.p>
            </div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="max-w-md mx-auto"
            >
              <form onSubmit={handleSearch} className="relative">
                <div className="relative group">
                  <Input
                    type="text"
                    placeholder="Search for what you need..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 pr-4 py-5 text-lg bg-card/50 backdrop-blur-sm border-blue-400/50 focus:border-blue-500/50 focus:ring-cyan-600/20 rounded-lg transition-all duration-500 group-hover:bg-card/70"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </form>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center items-center"
            >
              <Link href="/">
                <Button
                  variant={"default"}
                  className=" cursor-pointer bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:text-white dark:text-white border dark:border-transparent border-blue-600 text-white/95 font-bold rounded-lg shadow 
                    hover:bg-blue-700 hover:text-white transform hover:scale-105 
                    transition-all duration-500 ease-in-out flex gap-2 items-center px-12 py-5"
                >
                  <Home className="w-5 h-5" />
                  Go Home
                </Button>
              </Link>

              <Button
                variant="outline"
                size="lg"
                onClick={() => router.back()}
                className="px-7 py-3  cursor-pointer bg-white dark:hover:border-transparent dark:bg-transparent dark:border-gray-100 dark:hover:bg-blue-700 dark:hover:text-white dark:text-white border border-blue-600 text-blue-600 font-bold rounded-lg shadow 
                    hover:bg-blue-700 hover:text-white transform hover:scale-105 
                    transition-all duration-500 ease-in-out flex gap-2 items-center"
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="px-7 py-3  cursor-pointer bg-white dark:hover:border-transparent dark:bg-transparent dark:border-gray-100 dark:hover:bg-blue-700 dark:hover:text-white dark:text-white border border-blue-600 text-blue-600 font-bold rounded-lg shadow 
                    hover:bg-blue-700 hover:text-white transform hover:scale-105 
                    transition-all duration-500 ease-in-out flex gap-2 items-center"
              >
                <RefreshCw
                  className={`w-5 h-5 mr-2 ${
                    isRefreshing ? "animate-spin" : ""
                  }`}
                />
                {isRefreshing ? "Refreshing..." : "Refresh"}
              </Button>
            </motion.div>

            {/* Help Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="pt-5"
            >
              <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6 max-w-2xl mx-auto">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                    <HelpCircle className="w-6 h-6 text-blue-500" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3">Need Help?</h3>
                <p className="text-muted-foreground mb-4">
                  Our support team is here to help you find what you&apos;re
                  looking for.
                </p>

                <div className="flex flex-wrap gap-3 justify-center">
                  <Link href="/support">
                    <button
                      className="px-7 py-3 cursor-pointer bg-white dark:hover:border-transparent dark:bg-transparent dark:border-gray-100 dark:hover:bg-blue-700 dark:hover:text-white dark:text-white border border-blue-600 text-blue-600 font-bold rounded-lg shadow 
                    hover:bg-blue-700 hover:text-white transform hover:scale-105 
                    transition-all duration-500 ease-in-out flex gap-2 items-center"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Support Center
                    </button>
                  </Link>

                  <Link href={"/complain"}>
                    <button
                      className="px-7 py-3 cursor-pointer bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:text-white dark:text-white border dark:border-transparent border-blue-600 text-white/95 font-bold rounded-lg shadow 
                    hover:bg-blue-700 hover:text-white transform hover:scale-105 
                    transition-all duration-500 ease-in-out flex gap-2 items-center"
                    >
                      <Info />
                      <p>Complain</p>
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Popular Pages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <p className="text-sm text-muted-foreground mb-4">
                Popular pages you might be looking for:
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {[
                  { href: "/hosting/web-hosting", label: "Web Hosting" },
                  { href: "/domain", label: "Domain" },
                  { href: "/about", label: "About Us" },
                  { href: "/locations", label: "Data Centers" },
                ].map((link) => (
                  <Button
                    key={link.href}
                    asChild
                    variant="ghost"
                    size="sm"
                    className="text-xs hover:bg-primary/10 hover:text-primary transition-all duration-500 rounded-lg"
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </Button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

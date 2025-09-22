"use client";

import { motion } from "framer-motion";
import { AlertTriangleIcon, ShieldCheckIcon, ClockIcon } from "lucide-react";

export default function ComplainHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center space-y-6"
    >
      {/* Main Heading */}
      <div className="space-y-4">
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 text-white shadow-lg"
        >
          <AlertTriangleIcon className="h-8 w-8" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-teal-500 to-blue-500 dark:from-blue-400 dark:via-teal-400 dark:to-blue-400 bg-clip-text text-transparent"
        >
          File a Complaint
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          We take your concerns seriously. Submit your complaint and our
          dedicated team will investigate and respond promptly.
        </motion.p>
      </div>

      {/* Trust Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex flex-wrap justify-center gap-6 md:gap-8"
      >
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <ShieldCheckIcon className="h-5 w-5 text-green-500" />
          <span>Confidential Process</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <ClockIcon className="h-5 w-5 text-blue-500" />
          <span>48-Hour Response</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <AlertTriangleIcon className="h-5 w-5 text-orange-500" />
          <span>Fair Resolution</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

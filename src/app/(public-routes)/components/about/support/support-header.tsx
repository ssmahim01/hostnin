"use client"

import { motion } from "framer-motion"
import { HeadphonesIcon, ClockIcon, ShieldCheckIcon } from "lucide-react"

export function SupportHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="md:text-4xl text-2xl font-bold text-primary mb-2">Support Ticket</h1>
            <p className="text-sm text-muted-foreground">Bangladesh&apos;s Top Hosting Platform</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <ClockIcon className="h-4 w-4 text-primary" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheckIcon className="h-4 w-4 text-primary" />
              <span>Secure & Reliable</span>
            </div>
            <div className="flex items-center gap-2">
              <HeadphonesIcon className="h-4 w-4 text-primary" />
              <span>Expert Help</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}

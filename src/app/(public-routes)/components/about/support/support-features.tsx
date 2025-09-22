"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ClockIcon,
  ShieldCheckIcon,
  HeadphonesIcon,
  ZapIcon,
  UsersIcon,
  CheckCircleIcon,
} from "lucide-react";

const features = [
  {
    icon: ClockIcon,
    title: "24/7 Support",
    description: "Round-the-clock assistance from our expert team",
    badge: "Always Available",
  },
  {
    icon: ZapIcon,
    title: "Fast Response",
    description: "Average response time under 30 minutes",
    badge: "< 30 min",
  },
  {
    icon: ShieldCheckIcon,
    title: "Secure & Reliable",
    description: "Enterprise-grade security and 99.9% uptime",
    badge: "99.9% Uptime",
  },
];

const supportStats = [
  { label: "Tickets Resolved", value: "5K+", icon: CheckCircleIcon },
  { label: "Happy Customers", value: "7K+", icon: UsersIcon },
  { label: "Expert Technicians", value: "15+", icon: HeadphonesIcon },
];

export function SupportFeatures() {
  return (
    <div className="space-y-6">
      {/* Support Features */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">
              Why Choose Hostnin Support?
            </CardTitle>
            <CardDescription>
              Experience world-class support from Bangladesh&apos;s leading
              hosting provider
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                className="flex items-start gap-3 p-3 rounded-lg bg-muted/50"
              >
                <div className="flex-shrink-0 p-2 bg-accent rounded-lg">
                  <feature.icon className="h-12 w-9 text-blue-500" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-sm">{feature.title}</h4>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </motion.div>

      {/* Support Stats */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Our Track Record</CardTitle>
            <CardDescription>
              Trusted by thousands of businesses across Bangladesh
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {supportStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg border bg-card/50"
                >
                  <div className="flex-shrink-0 p-2 bg-accent rounded-lg">
                    <stat.icon className="h-8 w-8 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

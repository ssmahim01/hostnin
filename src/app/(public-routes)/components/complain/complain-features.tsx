"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShieldCheckIcon,
  ClockIcon,
  AlertTriangleIcon,
  UserCheckIcon,
  FileTextIcon,
  PhoneIcon,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheckIcon,
    title: "Confidential Process",
    description:
      "Your complaint is handled with complete confidentiality and privacy.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: ClockIcon,
    title: "48-Hour Response",
    description: "We guarantee acknowledgment within 48 hours of submission.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: AlertTriangleIcon,
    title: "Fair Investigation",
    description:
      "Every complaint receives thorough and impartial investigation.",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: UserCheckIcon,
    title: "Dedicated Team",
    description: "Specialized complaint resolution team handles your case.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
];

const contactInfo = [
  {
    icon: FileTextIcon,
    label: "Complaint ID",
    value: "Generated after submission",
    color: "text-blue-500",
  },
  {
    icon: PhoneIcon,
    label: "Hotline",
    value: "+880 1325 875 955",
    color: "text-green-500",
  },
];

export default function ComplainFeatures() {
  return (
    <div className="space-y-6">
      {/* Process Features */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Card className="shadow-md border-0 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80">
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
              <AlertTriangleIcon className="h-5 w-5 text-red-500" />
              Complaint Process
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className={`p-2 rounded-full ${feature.bgColor}`}>
                  <feature.icon className={`h-4 w-4 ${feature.color}`} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium text-sm">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </motion.div>

      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Card className="shadow-md border-0 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80">
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
              <PhoneIcon className="h-5 w-5 text-blue-500" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="flex items-center justify-between p-3 rounded-lg bg-muted/30"
              >
                <div className="flex items-center gap-2">
                  <info.icon className={`h-4 w-4 ${info.color}`} />
                  <span className="text-sm font-medium">{info.label}</span>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {info.value}
                </Badge>
              </motion.div>
            ))}

            <div className="pt-2 border-t border-muted-foreground/10">
              <p className="text-xs text-muted-foreground text-center">
                Email:{" "}
                <span className="font-medium text-blue-600">
                  complain@hostnin.com
                </span>
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Resolution Timeline */}
      {/* <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <Card className="shadow-md border-0 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80">
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
              <ClockIcon className="h-5 w-5 text-orange-500" />
              Resolution Timeline
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <div className="text-sm">
                  <span className="font-medium">0-48 hours:</span>
                  <span className="text-muted-foreground ml-1">
                    Acknowledgment
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <div className="text-sm">
                  <span className="font-medium">3-7 days:</span>
                  <span className="text-muted-foreground ml-1">
                    Investigation
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                <div className="text-sm">
                  <span className="font-medium">7-14 days:</span>
                  <span className="text-muted-foreground ml-1">Resolution</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div> */}
    </div>
  );
}

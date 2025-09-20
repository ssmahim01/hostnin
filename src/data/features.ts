import { Cpu, Zap, Lock, Download } from "lucide-react";
import type { Feature } from "@/types/feature";

export const features: Feature[] = [
  {
    title: "Fastest NVMe SSD Server",
    description:
      "We use enterprise-grade servers located across multiple locations worldwide with us and take it to the next level.",
    icon: Cpu,
  },
  {
    title: "Daily Multi-layer Backup",
    description:
      "We use a 3-layer backup system to keep your data secure. By taking snapshots each month, we ensure no element is missed.",
    icon: Download,
  },
  {
    title: "LightSpeed Web Server",
    description:
      "Lightspeed performance is achieved by combining the LiteSpeed web server with the fastest web server efficiency.",
    icon: Zap,
  },
  {
    title: "Lifetime FREE SSL",
    description:
      "Your website will have a lifetime free SSL with an easy-to-install, auto-renewing Let's Encrypt SSL, ensuring your site is protected.",
    icon: Lock,
  },
];

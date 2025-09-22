import { PricingPlan } from "@/types/pricing";
import { TurboCreateFeatures } from "./plan-features/turbo-create-features";

export const turboHostingData: PricingPlan[] = [
  {
    title: "Basic",
    price: 699,
    currency: "৳",
    billingPeriod: "monthly",
    features: TurboCreateFeatures("5 GB", "2", "2", "2", "15", "20"),
    savingsText: "30 Days Money back Guarantee",
    buttonText: "Add to Cart",
    infoText: "Save Upto 50% on Yearly Plan",
    icon: "basic",
    description: "Perfect for a simple site or blog",
  },
  {
    title: "Starter",
    price: 1999,
    currency: "৳",
    billingPeriod: "monthly",
    features: TurboCreateFeatures("80 GB", "100", "7", "7", "70", "150"),
    expandedFeatures: {
      general: [
        {
          text: "Free Website Transfer",
          included: true,
          tooltip: "Free migration of your existing website to our hosting",
        },
        {
          text: "Free 380+ CMS Installer",
          included: true,
          tooltip: "One-click installer for 380+ content management systems",
        },
        {
          text: "FREE WildCard SSL",
          included: true,
          tooltip: "Free SSL certificate for all subdomains",
        },
        {
          text: "Free Malware Protection",
          included: true,
          tooltip: "Advanced malware scanning and protection",
        },
      ],
      server: [
        {
          text: "LiteSpeed Web Server & LSCache",
          included: true,
          tooltip: "High-performance web server with built-in caching",
        },
        {
          text: "CloudLinux Operating System",
          included: true,
          tooltip: "Advanced Linux distribution optimized for shared hosting",
        },
        {
          text: "High Performance NVMe SSD Servers",
          included: true,
          tooltip: "Ultra-fast NVMe SSD storage for maximum performance",
        },
        {
          text: "Python & Node.js Version Selector",
          included: true,
          tooltip: "Choose and manage different versions of Python and Node.js",
        },
        {
          text: "SSH Access Available",
          included: true,
          tooltip: "Secure Shell access for command-line operations",
        },
        {
          text: "Advanced malware scanner",
          included: true,
          tooltip: "Comprehensive malware scanning and protection",
        },
        {
          text: "cURL, GD2, and ImageMagick",
          included: true,
          tooltip: "Essential PHP extensions for web development",
        },
      ],
      security: [
        {
          text: "24/7 Monitoring By Experts",
          included: true,
          tooltip: "Round-the-clock monitoring by security experts",
        },
        {
          text: "Daily Virus & Malware Scan",
          included: true,
          tooltip: "Daily automated scanning for viruses and malware",
        },
        {
          text: "Integrated Server Firewall",
          included: true,
          tooltip: "Built-in firewall protection for your server",
        },
        {
          text: "Two-Factor Authentication",
          included: true,
          tooltip: "Enhanced security with two-factor authentication",
        },
        {
          text: "3 Step DDos Mitigation",
          included: true,
          tooltip: "Our 3-Step DDoS Mitigation ensures maximum uptime detecting attacks early, filtering malicious traffic instantly, and restoring full performance with stronger defenses",
        },
        {
          text: "Included Premium KernelCare",
          included: true,
          tooltip: "Premium kernel security and updates",
        },
        {
          text: "Realtime Malware Detection",
          included: true,
          tooltip: "Real-time detection and blocking of malware",
        },
      ],
      support: [
        {
          text: "24/7 What'sApp Support",
          included: true,
          tooltip: "24/7 support via WhatsApp messaging",
        },
        {
          text: "24/7 LiveChat Support",
          included: true,
          tooltip: "24/7 live chat support for immediate assistance",
        },
        {
          text: "30 Minute or Less Ticket Reply",
          included: true,
          tooltip: "Guaranteed response time of 30 minutes or less",
        },
        {
          text: "24/7 LiveCall Support",
          included: true,
          tooltip: "24/7 phone support for urgent issues",
        },
        {
          text: "Advanced Ticket Support",
          included: true,
          tooltip: "Advanced ticket system for technical support",
        },
        {
          text: "Priority Website Support",
          included: false,
          tooltip: "Priority support queue for faster response times",
        },
      ],
    },
    savingsText: "30 Days Money back Guarantee",
    buttonText: "Add to Cart",
    infoText: "Save Upto 50% on Yearly Plan",
    icon: "starter",
    description: "Perfect for Mid-Level Websites",
  },
  {
    title: "Pro",
    price: 2999,
    currency: "৳",
    billingPeriod: "monthly",
    features: TurboCreateFeatures("120 GB", "200", "8", "8", "80", "200"),
    expandedFeatures: {
      general: [
        {
          text: "Free Website Transfer",
          included: true,
          tooltip: "Free migration of your existing website to our hosting",
        },
        {
          text: "Free 380+ CMS Installer",
          included: true,
          tooltip: "One-click installer for 380+ content management systems",
        },
        {
          text: "FREE WildCard SSL",
          included: true,
          tooltip: "Free SSL certificate for all subdomains",
        },
        {
          text: "Free Malware Protection",
          included: true,
          tooltip: "Advanced malware scanning and protection",
        },
      ],
      server: [
        {
          text: "LiteSpeed Web Server & LSCache",
          included: true,
          tooltip: "High-performance web server with built-in caching",
        },
        {
          text: "CloudLinux Operating System",
          included: true,
          tooltip: "Advanced Linux distribution optimized for shared hosting",
        },
        {
          text: "High Performance NVMe SSD Servers",
          included: true,
          tooltip: "Ultra-fast NVMe SSD storage for maximum performance",
        },
        {
          text: "Python & Node.js Version Selector",
          included: true,
          tooltip: "Choose and manage different versions of Python and Node.js",
        },
        {
          text: "SSH Access Available",
          included: true,
          tooltip: "Secure Shell access for command-line operations",
        },
        {
          text: "Advanced malware scanner",
          included: true,
          tooltip: "Comprehensive malware scanning and protection",
        },
        {
          text: "cURL, GD2, and ImageMagick",
          included: true,
          tooltip: "Essential PHP extensions for web development",
        },
      ],
      security: [
        {
          text: "24/7 Monitoring By Experts",
          included: true,
          tooltip: "Round-the-clock monitoring by security experts",
        },
        {
          text: "Daily Virus & Malware Scan",
          included: true,
          tooltip: "Daily automated scanning for viruses and malware",
        },
        {
          text: "Integrated Server Firewall",
          included: true,
          tooltip: "Built-in firewall protection for your server",
        },
        {
          text: "Two-Factor Authentication",
          included: true,
          tooltip: "Enhanced security with two-factor authentication",
        },
        {
          text: "3 Step DDos Mitigation",
          included: true,
          tooltip: "Our 3-Step DDoS Mitigation ensures maximum uptime detecting attacks early, filtering malicious traffic instantly, and restoring full performance with stronger defenses",
        },
        {
          text: "Included Premium KernelCare",
          included: true,
          tooltip: "Premium kernel security and updates",
        },
        {
          text: "Realtime Malware Detection",
          included: true,
          tooltip: "Real-time detection and blocking of malware",
        },
      ],
      support: [
        {
          text: "24/7 What'sApp Support",
          included: true,
          tooltip: "24/7 support via WhatsApp messaging",
        },
        {
          text: "24/7 LiveChat Support",
          included: true,
          tooltip: "24/7 live chat support for immediate assistance",
        },
        {
          text: "30 Minute or Less Ticket Reply",
          included: true,
          tooltip: "Guaranteed response time of 30 minutes or less",
        },
        {
          text: "24/7 LiveCall Support",
          included: true,
          tooltip: "24/7 phone support for urgent issues",
        },
        {
          text: "Advanced Ticket Support",
          included: true,
          tooltip: "Advanced ticket system for technical support",
        },
        {
          text: "Priority Website Support",
          included: false,
          tooltip: "Priority support queue for faster response times",
        },
      ],
    },
    badge: "Most Popular",
    savingsText: "30 Days Money back Guarantee",
    buttonText: "Add to Cart",
    infoText: "Save Upto 50% on Yearly Plan",
    highlight: true,
    icon: "pro",
    description: "Best for Professional Websites",
  },
  {
    title: "Ultimate",
    price: 4999,
    currency: "৳",
    billingPeriod: "monthly",
    features: TurboCreateFeatures(
      "200 GB",
      "Unlimited",
      "10",
      "10",
      "100",
      "250"
    ),
    expandedFeatures: {
      general: [
        {
          text: "Free Website Transfer",
          included: true,
          tooltip: "Free migration of your existing website to our hosting",
        },
        {
          text: "Free 380+ CMS Installer",
          included: true,
          tooltip: "One-click installer for 380+ content management systems",
        },
        {
          text: "FREE WildCard SSL",
          included: true,
          tooltip: "Free SSL certificate for all subdomains",
        },
        {
          text: "Free Malware Protection",
          included: true,
          tooltip: "Advanced malware scanning and protection",
        },
      ],
      server: [
        {
          text: "LiteSpeed Web Server & LSCache",
          included: true,
          tooltip: "High-performance web server with built-in caching",
        },
        {
          text: "CloudLinux Operating System",
          included: true,
          tooltip: "Advanced Linux distribution optimized for shared hosting",
        },
        {
          text: "High Performance NVMe SSD Servers",
          included: true,
          tooltip: "Ultra-fast NVMe SSD storage for maximum performance",
        },
        {
          text: "Python & Node.js Version Selector",
          included: true,
          tooltip: "Choose and manage different versions of Python and Node.js",
        },
        {
          text: "SSH Access Available",
          included: true,
          tooltip: "Secure Shell access for command-line operations",
        },
        {
          text: "Advanced malware scanner",
          included: true,
          tooltip: "Comprehensive malware scanning and protection",
        },
        {
          text: "cURL, GD2, and ImageMagick",
          included: true,
          tooltip: "Essential PHP extensions for web development",
        },
      ],
      security: [
        {
          text: "24/7 Monitoring By Experts",
          included: true,
          tooltip: "Round-the-clock monitoring by security experts",
        },
        {
          text: "Daily Virus & Malware Scan",
          included: true,
          tooltip: "Daily automated scanning for viruses and malware",
        },
        {
          text: "Integrated Server Firewall",
          included: true,
          tooltip: "Built-in firewall protection for your server",
        },
        {
          text: "Two-Factor Authentication",
          included: true,
          tooltip: "Enhanced security with two-factor authentication",
        },
        {
          text: "3 Step DDos Mitigation",
          included: true,
          tooltip: "Our 3-Step DDoS Mitigation ensures maximum uptime detecting attacks early, filtering malicious traffic instantly, and restoring full performance with stronger defenses",
        },
        {
          text: "Included Premium KernelCare",
          included: true,
          tooltip: "Premium kernel security and updates",
        },
        {
          text: "Realtime Malware Detection",
          included: true,
          tooltip: "Real-time detection and blocking of malware",
        },
      ],
      support: [
        {
          text: "24/7 What'sApp Support",
          included: true,
          tooltip: "24/7 support via WhatsApp messaging",
        },
        {
          text: "24/7 LiveChat Support",
          included: true,
          tooltip: "24/7 live chat support for immediate assistance",
        },
        {
          text: "30 Minute or Less Ticket Reply",
          included: true,
          tooltip: "Guaranteed response time of 30 minutes or less",
        },
        {
          text: "24/7 LiveCall Support",
          included: true,
          tooltip: "24/7 phone support for urgent issues",
        },
        {
          text: "Advanced Ticket Support",
          included: true,
          tooltip: "Advanced ticket system for technical support",
        },
        {
          text: "Priority Website Support",
          included: true,
          tooltip: "Priority support queue for faster response times",
        },
      ],
    },
    savingsText: "30 Days Money back Guarantee",
    buttonText: "Add to Cart",
    infoText: "Save Upto 50% on Yearly Plan",
    icon: "ultimate",
    description: "Best for Large-Scale Websites",
  },

  {
    title: "Basic",
    price: 1995,
    currency: "৳",
    billingPeriod: "yearly",
    features: TurboCreateFeatures("5 GB", "2", "2", "2", "15", "20"),
    savingsText: "30 Days Money back Guarantee",
    buttonText: "Add to Cart",
    infoText: "Renew at Same Price, Every year.",
    icon: "basic",
    description: "Perfect for a simple site or blog",
  },
  {
    title: "Starter",
    price: 11999,
    currency: "৳",
    billingPeriod: "yearly",
    features: TurboCreateFeatures("80 GB", "100", "7", "7", "70", "150"),
    expandedFeatures: {
      general: [
        {
          text: "Free Website Transfer",
          included: true,
          tooltip: "Free migration of your existing website to our hosting",
        },
        {
          text: "Free 380+ CMS Installer",
          included: true,
          tooltip: "One-click installer for 380+ content management systems",
        },
        {
          text: "FREE WildCard SSL",
          included: true,
          tooltip: "Free SSL certificate for all subdomains",
        },
        {
          text: "Free Malware Protection",
          included: true,
          tooltip: "Advanced malware scanning and protection",
        },
      ],
      server: [
        {
          text: "LiteSpeed Web Server & LSCache",
          included: true,
          tooltip: "High-performance web server with built-in caching",
        },
        {
          text: "CloudLinux Operating System",
          included: true,
          tooltip: "Advanced Linux distribution optimized for shared hosting",
        },
        {
          text: "High Performance NVMe SSD Servers",
          included: true,
          tooltip: "Ultra-fast NVMe SSD storage for maximum performance",
        },
        {
          text: "Python & Node.js Version Selector",
          included: true,
          tooltip: "Choose and manage different versions of Python and Node.js",
        },
        {
          text: "SSH Access Available",
          included: true,
          tooltip: "Secure Shell access for command-line operations",
        },
        {
          text: "Advanced malware scanner",
          included: true,
          tooltip: "Comprehensive malware scanning and protection",
        },
        {
          text: "cURL, GD2, and ImageMagick",
          included: true,
          tooltip: "Essential PHP extensions for web development",
        },
      ],
      security: [
        {
          text: "24/7 Monitoring By Experts",
          included: true,
          tooltip: "Round-the-clock monitoring by security experts",
        },
        {
          text: "Daily Virus & Malware Scan",
          included: true,
          tooltip: "Daily automated scanning for viruses and malware",
        },
        {
          text: "Integrated Server Firewall",
          included: true,
          tooltip: "Built-in firewall protection for your server",
        },
        {
          text: "Two-Factor Authentication",
          included: true,
          tooltip: "Enhanced security with two-factor authentication",
        },
        {
          text: "3 Step DDos Mitigation",
          included: true,
          tooltip: "Our 3-Step DDoS Mitigation ensures maximum uptime detecting attacks early, filtering malicious traffic instantly, and restoring full performance with stronger defenses",
        },
        {
          text: "Included Premium KernelCare",
          included: true,
          tooltip: "Premium kernel security and updates",
        },
        {
          text: "Realtime Malware Detection",
          included: true,
          tooltip: "Real-time detection and blocking of malware",
        },
      ],
      support: [
        {
          text: "24/7 What'sApp Support",
          included: true,
          tooltip: "24/7 support via WhatsApp messaging",
        },
        {
          text: "24/7 LiveChat Support",
          included: true,
          tooltip: "24/7 live chat support for immediate assistance",
        },
        {
          text: "30 Minute or Less Ticket Reply",
          included: true,
          tooltip: "Guaranteed response time of 30 minutes or less",
        },
        {
          text: "24/7 LiveCall Support",
          included: true,
          tooltip: "24/7 phone support for urgent issues",
        },
        {
          text: "Advanced Ticket Support",
          included: true,
          tooltip: "Advanced ticket system for technical support",
        },
        {
          text: "Priority Website Support",
          included: false,
          tooltip: "Priority support queue for faster response times",
        },
      ],
    },
    savingsText: "30 Days Money back Guarantee",
    buttonText: "Add to Cart",
    infoText: "৳12999/year when you renew",
    icon: "starter",
    description: "Perfect for Mid-Level Websites",
  },
  {
    title: "Pro",
    price: 17999,
    currency: "৳",
    billingPeriod: "yearly",
    features: TurboCreateFeatures("100 GB", "200", "8", "8", "80", "200"),
    expandedFeatures: {
      general: [
        {
          text: "Free Website Transfer",
          included: true,
          tooltip: "Free migration of your existing website to our hosting",
        },
        {
          text: "Free 380+ CMS Installer",
          included: true,
          tooltip: "One-click installer for 380+ content management systems",
        },
        {
          text: "FREE WildCard SSL",
          included: true,
          tooltip: "Free SSL certificate for all subdomains",
        },
        {
          text: "Free Malware Protection",
          included: true,
          tooltip: "Advanced malware scanning and protection",
        },
      ],
      server: [
        {
          text: "LiteSpeed Web Server & LSCache",
          included: true,
          tooltip: "High-performance web server with built-in caching",
        },
        {
          text: "CloudLinux Operating System",
          included: true,
          tooltip: "Advanced Linux distribution optimized for shared hosting",
        },
        {
          text: "High Performance NVMe SSD Servers",
          included: true,
          tooltip: "Ultra-fast NVMe SSD storage for maximum performance",
        },
        {
          text: "Python & Node.js Version Selector",
          included: true,
          tooltip: "Choose and manage different versions of Python and Node.js",
        },
        {
          text: "SSH Access Available",
          included: true,
          tooltip: "Secure Shell access for command-line operations",
        },
        {
          text: "Advanced malware scanner",
          included: true,
          tooltip: "Comprehensive malware scanning and protection",
        },
        {
          text: "cURL, GD2, and ImageMagick",
          included: true,
          tooltip: "Essential PHP extensions for web development",
        },
      ],
      security: [
        {
          text: "24/7 Monitoring By Experts",
          included: true,
          tooltip: "Round-the-clock monitoring by security experts",
        },
        {
          text: "Daily Virus & Malware Scan",
          included: true,
          tooltip: "Daily automated scanning for viruses and malware",
        },
        {
          text: "Integrated Server Firewall",
          included: true,
          tooltip: "Built-in firewall protection for your server",
        },
        {
          text: "Two-Factor Authentication",
          included: true,
          tooltip: "Enhanced security with two-factor authentication",
        },
        {
          text: "3 Step DDos Mitigation",
          included: true,
          tooltip: "Our 3-Step DDoS Mitigation ensures maximum uptime detecting attacks early, filtering malicious traffic instantly, and restoring full performance with stronger defenses",
        },
        {
          text: "Included Premium KernelCare",
          included: true,
          tooltip: "Premium kernel security and updates",
        },
        {
          text: "Realtime Malware Detection",
          included: true,
          tooltip: "Real-time detection and blocking of malware",
        },
      ],
      support: [
        {
          text: "24/7 What'sApp Support",
          included: true,
          tooltip: "24/7 support via WhatsApp messaging",
        },
        {
          text: "24/7 LiveChat Support",
          included: true,
          tooltip: "24/7 live chat support for immediate assistance",
        },
        {
          text: "30 Minute or Less Ticket Reply",
          included: true,
          tooltip: "Guaranteed response time of 30 minutes or less",
        },
        {
          text: "24/7 LiveCall Support",
          included: true,
          tooltip: "24/7 phone support for urgent issues",
        },
        {
          text: "Advanced Ticket Support",
          included: true,
          tooltip: "Advanced ticket system for technical support",
        },
        {
          text: "Priority Website Support",
          included: false,
          tooltip: "Priority support queue for faster response times",
        },
      ],
    },
    badge: "Most Popular",
    savingsText: "30 Days Money back Guarantee",
    buttonText: "Add to Cart",
    infoText: "৳21999/year when you renew",
    highlight: true,
    icon: "pro",
    description: "Best for Professional Websites",
  },
  {
    title: "Ultimate",
    price: 29999,
    currency: "৳",
    billingPeriod: "yearly",
    features: TurboCreateFeatures(
      "200 GB",
      "Unlimited",
      "10",
      "10",
      "100",
      "250"
    ),
    expandedFeatures: {
      general: [
        {
          text: "Free Website Transfer",
          included: true,
          tooltip: "Free migration of your existing website to our hosting",
        },
        {
          text: "Free 380+ CMS Installer",
          included: true,
          tooltip: "One-click installer for 380+ content management systems",
        },
        {
          text: "FREE WildCard SSL",
          included: true,
          tooltip: "Free SSL certificate for all subdomains",
        },
        {
          text: "Free Malware Protection",
          included: true,
          tooltip: "Advanced malware scanning and protection",
        },
      ],
      server: [
        {
          text: "LiteSpeed Web Server & LSCache",
          included: true,
          tooltip: "High-performance web server with built-in caching",
        },
        {
          text: "CloudLinux Operating System",
          included: true,
          tooltip: "Advanced Linux distribution optimized for shared hosting",
        },
        {
          text: "High Performance NVMe SSD Servers",
          included: true,
          tooltip: "Ultra-fast NVMe SSD storage for maximum performance",
        },
        {
          text: "Python & Node.js Version Selector",
          included: true,
          tooltip: "Choose and manage different versions of Python and Node.js",
        },
        {
          text: "SSH Access Available",
          included: true,
          tooltip: "Secure Shell access for command-line operations",
        },
        {
          text: "Advanced malware scanner",
          included: true,
          tooltip: "Comprehensive malware scanning and protection",
        },
        {
          text: "cURL, GD2, and ImageMagick",
          included: true,
          tooltip: "Essential PHP extensions for web development",
        },
      ],
      security: [
        {
          text: "24/7 Monitoring By Experts",
          included: true,
          tooltip: "Round-the-clock monitoring by security experts",
        },
        {
          text: "Daily Virus & Malware Scan",
          included: true,
          tooltip: "Daily automated scanning for viruses and malware",
        },
        {
          text: "Integrated Server Firewall",
          included: true,
          tooltip: "Built-in firewall protection for your server",
        },
        {
          text: "Two-Factor Authentication",
          included: true,
          tooltip: "Enhanced security with two-factor authentication",
        },
        {
          text: "3 Step DDos Mitigation",
          included: true,
          tooltip: "Our 3-Step DDoS Mitigation ensures maximum uptime detecting attacks early, filtering malicious traffic instantly, and restoring full performance with stronger defenses",
        },
        {
          text: "Included Premium KernelCare",
          included: true,
          tooltip: "Premium kernel security and updates",
        },
        {
          text: "Realtime Malware Detection",
          included: true,
          tooltip: "Real-time detection and blocking of malware",
        },
      ],
      support: [
        {
          text: "24/7 What'sApp Support",
          included: true,
          tooltip: "24/7 support via WhatsApp messaging",
        },
        {
          text: "24/7 LiveChat Support",
          included: true,
          tooltip: "24/7 live chat support for immediate assistance",
        },
        {
          text: "30 Minute or Less Ticket Reply",
          included: true,
          tooltip: "Guaranteed response time of 30 minutes or less",
        },
        {
          text: "24/7 LiveCall Support",
          included: true,
          tooltip: "24/7 phone support for urgent issues",
        },
        {
          text: "Advanced Ticket Support",
          included: true,
          tooltip: "Advanced ticket system for technical support",
        },
        {
          text: "Priority Website Support",
          included: true,
          tooltip: "Priority support queue for faster response times",
        },
      ],
    },
    savingsText: "30 Days Money back Guarantee",
    buttonText: "Add to Cart",
    infoText: "৳35999/year when you renew",
    icon: "ultimate",
    description: "Best for Large-Scale Websites",
  },
];

import { PricingPlan } from "@/types/pricing";
import { BDIXCreateFeatures } from "./plan-features/bdix-create-features";

export const bdixHostingData: PricingPlan[] = [
  {
    title: "Basic",
    price: 699,
    currency: "৳",
    billingPeriod: "monthly",
    features: BDIXCreateFeatures("5 GB", "Standard Website Speed", "2"),
    savingsText: "30 Days Money back Guarantee",
    buttonText: "Add to Cart",
    infoText: "Save Upto 76% on Yearly Plan",
    icon: "basic",
    description: "Perfect for a simple site or blog",
  },
  {
    title: "Starter",
    price: 1199,
    currency: "৳",
    billingPeriod: "monthly",
    features: BDIXCreateFeatures("10 GB", "Increased Website Speed", "5"),
    expandedFeatures: {
      general: [
        {
          text: "AI Website Builder",
          included: false,
          tooltip:
            "AI-powered website builder for creating sites without coding",
        },
        {
          text: "Node Js and Python",
          included: false,
          tooltip: "Support for Node.js and Python applications",
        },
        {
          text: "Fastest WordPress Site (AccelerateWP)",
          included: false,
          tooltip: "Advanced WordPress optimization for maximum speed",
        },
        {
          text: "Premium Website Optimization",
          included: false,
          tooltip: "Professional website optimization services",
        },
        {
          text: "Content Optimization (CDN)",
          included: false,
          tooltip: "Content Delivery Network for global content distribution",
        },
      ],
      server: [
        {
          text: "99.99% Uptime Guarantee",
          included: true,
          tooltip: "Guaranteed server uptime of 99.99%",
        },
        {
          text: "2 Core Hosting CPU",
          included: true,
          tooltip: "Dedicated CPU cores for your hosting account",
        },
        {
          text: "2 GB Hosting RAM",
          included: true,
          tooltip: "Allocated RAM for your hosting environment",
        },
        {
          text: "15 MBPS I/O Speed",
          included: true,
          tooltip: "Input/Output speed for data transfer",
        },
        {
          text: "20 EP (Entry Process)",
          included: true,
          tooltip: "Entry processes for handling concurrent requests",
        },
        {
          text: "PhpMyAdmin Tool",
          included: true,
          tooltip: "Web-based MySQL database management tool",
        },
        {
          text: "MySQL Database",
          included: true,
          tooltip: "MySQL database support for your applications",
        },
        {
          text: "Imunify 365 Security",
          included: true,
          tooltip: "Advanced security suite for malware protection",
        },
        {
          text: "Daily Cloud Backup",
          included: true,
          tooltip: "Daily automated backups stored in the cloud",
        },
        {
          text: "Multiple Hosting Locations",
          included: true,
          tooltip: "Choice of multiple server locations worldwide",
        },
        {
          text: "Host PHP & Laravel Script",
          included: true,
          tooltip: "Support for PHP and Laravel framework applications",
        },
        {
          text: "E-Commerce Optimised Server",
          included: false,
          tooltip: "Server optimized specifically for e-commerce applications",
        },
        {
          text: "SSH/Terminal Access",
          included: false,
          tooltip: "Secure Shell access for command-line operations",
        },
        {
          text: "Shell Access (Jailed)",
          included: false,
          tooltip: "Restricted shell access for security",
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
          text: "CXS, OSM, MSFE Addon",
          included: true,
          tooltip: "Additional security addons for comprehensive protection",
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
          text: "24/7 Instant Chat Support",
          included: true,
          tooltip: "24/7 live chat support for immediate assistance",
        },
        {
          text: "30 Minute or Less Ticket Reply",
          included: true,
          tooltip: "Guaranteed response time of 30 minutes or less",
        },
        {
          text: "24/7 Live Call Support",
          included: true,
          tooltip: "24/7 phone support for urgent issues",
        },
        {
          text: "24/7 What'sApp Support",
          included: true,
          tooltip: "24/7 support via WhatsApp messaging",
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
    infoText: "Save Upto 76% on Yearly Plan",
    icon: "starter",
    description: "Perfect for Mid-Level Websites",
  },
  {
    title: "Pro",
    price: 1499,
    currency: "৳",
    billingPeriod: "monthly",
    features: BDIXCreateFeatures("15 GB", "Super Fast Website Speed", "10"),
    expandedFeatures: {
      general: [
        {
          text: "AI Website Builder",
          included: true,
          tooltip:
            "AI-powered website builder for creating sites without coding",
        },
        {
          text: "Node Js and Python",
          included: true,
          tooltip: "Support for Node.js and Python applications",
        },
        {
          text: "Fastest WordPress Site (AccelerateWP)",
          included: true,
          tooltip: "Advanced WordPress optimization for maximum speed",
        },
        {
          text: "Premium Website Optimization",
          included: true,
          tooltip: "Professional website optimization services",
        },
        {
          text: "Content Optimization (CDN)",
          included: true,
          tooltip: "Content Delivery Network for global content distribution",
        },
      ],
      server: [
        {
          text: "99.99% Uptime Guarantee",
          included: true,
          tooltip: "Guaranteed server uptime of 99.99%",
        },
        {
          text: "3 Core Hosting CPU",
          included: true,
          tooltip: "Dedicated CPU cores for your hosting account",
        },
        {
          text: "3 GB Hosting RAM",
          included: true,
          tooltip: "Allocated RAM for your hosting environment",
        },
        {
          text: "25 MBPS I/O Speed",
          included: true,
          tooltip: "Input/Output speed for data transfer",
        },
        {
          text: "50 EP (Entry Process)",
          included: true,
          tooltip: "Entry processes for handling concurrent requests",
        },
        {
          text: "PhpMyAdmin Tool",
          included: true,
          tooltip: "Web-based MySQL database management tool",
        },
        {
          text: "MySQL Database",
          included: true,
          tooltip: "MySQL database support for your applications",
        },
        {
          text: "Imunify 365 Security",
          included: true,
          tooltip: "Advanced security suite for malware protection",
        },
        {
          text: "Daily Cloud Backup",
          included: true,
          tooltip: "Daily automated backups stored in the cloud",
        },
        {
          text: "Multiple Hosting Locations",
          included: true,
          tooltip: "Choice of multiple server locations worldwide",
        },
        {
          text: "Host PHP & Laravel Script",
          included: true,
          tooltip: "Support for PHP and Laravel framework applications",
        },
        {
          text: "E-Commerce Optimised Server",
          included: true,
          tooltip: "Server optimized specifically for e-commerce applications",
        },
        {
          text: "SSH/Terminal Access",
          included: true,
          tooltip: "Secure Shell access for command-line operations",
        },
        {
          text: "Shell Access (Jailed)",
          included: true,
          tooltip: "Restricted shell access for security",
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
          text: "CXS, OSM, MSFE Addon",
          included: true,
          tooltip: "Additional security addons for comprehensive protection",
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
          text: "24/7 Instant Chat Support",
          included: true,
          tooltip: "24/7 live chat support for immediate assistance",
        },
        {
          text: "30 Minute or Less Ticket Reply",
          included: true,
          tooltip: "Guaranteed response time of 30 minutes or less",
        },
        {
          text: "24/7 Live Call Support",
          included: true,
          tooltip: "24/7 phone support for urgent issues",
        },
        {
          text: "24/7 What'sApp Support",
          included: true,
          tooltip: "24/7 support via WhatsApp messaging",
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
    infoText: "Save Upto 76% on Yearly Plan",
    highlight: true,
    icon: "pro",
    description: "Perfect for E-Commerce Websites",
  },
  {
    title: "Ultimate",
    price: 1999,
    currency: "৳",
    billingPeriod: "monthly",
    features: BDIXCreateFeatures(
      "25 GB",
      "Maximize Website Speed",
      "Unlimited"
    ),
    expandedFeatures: {
      general: [
        {
          text: "AI Website Builder",
          included: true,
          tooltip:
            "AI-powered website builder for creating sites without coding",
        },
        {
          text: "Node Js and Python",
          included: true,
          tooltip: "Support for Node.js and Python applications",
        },
        {
          text: "Fastest WordPress Site (AccelerateWP)",
          included: true,
          tooltip: "Advanced WordPress optimization for maximum speed",
        },
        {
          text: "Premium Website Optimization",
          included: true,
          tooltip: "Professional website optimization services",
        },
        {
          text: "Content Optimization (CDN)",
          included: true,
          tooltip: "Content Delivery Network for global content distribution",
        },
      ],
      server: [
        {
          text: "99.99% Uptime Guarantee",
          included: true,
          tooltip: "Guaranteed server uptime of 99.99%",
        },
        {
          text: "4 Core Hosting CPU",
          included: true,
          tooltip: "Dedicated CPU cores for your hosting account",
        },
        {
          text: "4 GB Hosting RAM",
          included: true,
          tooltip: "Allocated RAM for your hosting environment",
        },
        {
          text: "50 MBPS I/O Speed",
          included: true,
          tooltip: "Input/Output speed for data transfer",
        },
        {
          text: "80 EP (Entry Process)",
          included: true,
          tooltip: "Entry processes for handling concurrent requests",
        },
        {
          text: "PhpMyAdmin Tool",
          included: true,
          tooltip: "Web-based MySQL database management tool",
        },
        {
          text: "MySQL Database",
          included: true,
          tooltip: "MySQL database support for your applications",
        },
        {
          text: "Imunify 365 Security",
          included: true,
          tooltip: "Advanced security suite for malware protection",
        },
        {
          text: "Daily Cloud Backup",
          included: true,
          tooltip: "Daily automated backups stored in the cloud",
        },
        {
          text: "Multiple Hosting Locations",
          included: true,
          tooltip: "Choice of multiple server locations worldwide",
        },
        {
          text: "Host PHP & Laravel Script",
          included: true,
          tooltip: "Support for PHP and Laravel framework applications",
        },
        {
          text: "E-Commerce Optimised Server",
          included: true,
          tooltip: "Server optimized specifically for e-commerce applications",
        },
        {
          text: "SSH/Terminal Access",
          included: true,
          tooltip: "Secure Shell access for command-line operations",
        },
        {
          text: "Shell Access (Jailed)",
          included: true,
          tooltip: "Restricted shell access for security",
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
          text: "CXS, OSM, MSFE Addon",
          included: true,
          tooltip: "Additional security addons for comprehensive protection",
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
          text: "24/7 Instant Chat Support",
          included: true,
          tooltip: "24/7 live chat support for immediate assistance",
        },
        {
          text: "30 Minute or Less Ticket Reply",
          included: true,
          tooltip: "Guaranteed response time of 30 minutes or less",
        },
        {
          text: "24/7 Live Call Support",
          included: true,
          tooltip: "24/7 phone support for urgent issues",
        },
        {
          text: "24/7 What'sApp Support",
          included: true,
          tooltip: "24/7 support via WhatsApp messaging",
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
    infoText: "Save Upto 76% on Yearly Plan",
    icon: "ultimate",
    description: "Best for Large-Scale Websites",
  },

  {
    title: "Basic",
    price: 1995,
    currency: "৳",
    billingPeriod: "yearly",
    features: BDIXCreateFeatures("5 GB", "Standard Website Speed", "2"),
    savingsText: "30 Days Money back Guarantee",
    buttonText: "Add to Cart",
    infoText: "Renew at Same Price, Every year.",
    icon: "basic",
    description: "Perfect for a simple site or blog",
  },
  {
    title: "Starter",
    price: 4295,
    currency: "৳",
    billingPeriod: "yearly",
    features: BDIXCreateFeatures("10 GB", "Increased Website Speed", "5"),
    expandedFeatures: {
      general: [
        {
          text: "AI Website Builder",
          included: false,
          tooltip:
            "AI-powered website builder for creating sites without coding",
        },
        {
          text: "Node Js and Python",
          included: false,
          tooltip: "Support for Node.js and Python applications",
        },
        {
          text: "Fastest WordPress Site (AccelerateWP)",
          included: false,
          tooltip: "Advanced WordPress optimization for maximum speed",
        },
        {
          text: "Premium Website Optimization",
          included: false,
          tooltip: "Professional website optimization services",
        },
        {
          text: "Content Optimization (CDN)",
          included: false,
          tooltip: "Content Delivery Network for global content distribution",
        },
      ],
      server: [
        {
          text: "99.99% Uptime Guarantee",
          included: true,
          tooltip: "Guaranteed server uptime of 99.99%",
        },
        {
          text: "2 Core Hosting CPU",
          included: true,
          tooltip: "Dedicated CPU cores for your hosting account",
        },
        {
          text: "2 GB Hosting RAM",
          included: true,
          tooltip: "Allocated RAM for your hosting environment",
        },
        {
          text: "15 MBPS I/O Speed",
          included: true,
          tooltip: "Input/Output speed for data transfer",
        },
        {
          text: "20 EP (Entry Process)",
          included: true,
          tooltip: "Entry processes for handling concurrent requests",
        },
        {
          text: "PhpMyAdmin Tool",
          included: true,
          tooltip: "Web-based MySQL database management tool",
        },
        {
          text: "MySQL Database",
          included: true,
          tooltip: "MySQL database support for your applications",
        },
        {
          text: "Imunify 365 Security",
          included: true,
          tooltip: "Advanced security suite for malware protection",
        },
        {
          text: "Daily Cloud Backup",
          included: true,
          tooltip: "Daily automated backups stored in the cloud",
        },
        {
          text: "Multiple Hosting Locations",
          included: true,
          tooltip: "Choice of multiple server locations worldwide",
        },
        {
          text: "Host PHP & Laravel Script",
          included: true,
          tooltip: "Support for PHP and Laravel framework applications",
        },
        {
          text: "E-Commerce Optimised Server",
          included: false,
          tooltip: "Server optimized specifically for e-commerce applications",
        },
        {
          text: "SSH/Terminal Access",
          included: false,
          tooltip: "Secure Shell access for command-line operations",
        },
        {
          text: "Shell Access (Jailed)",
          included: false,
          tooltip: "Restricted shell access for security",
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
          text: "CXS, OSM, MSFE Addon",
          included: true,
          tooltip: "Additional security addons for comprehensive protection",
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
          text: "24/7 Instant Chat Support",
          included: true,
          tooltip: "24/7 live chat support for immediate assistance",
        },
        {
          text: "30 Minute or Less Ticket Reply",
          included: true,
          tooltip: "Guaranteed response time of 30 minutes or less",
        },
        {
          text: "24/7 Live Call Support",
          included: true,
          tooltip: "24/7 phone support for urgent issues",
        },
        {
          text: "24/7 What'sApp Support",
          included: true,
          tooltip: "24/7 support via WhatsApp messaging",
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
    infoText: "৳4995/year when you renew",
    icon: "starter",
    description: "Perfect for Mid-Level Websites",
  },
  {
    title: "Pro",
    price: 5395,
    currency: "৳",
    billingPeriod: "yearly",
    features: BDIXCreateFeatures("15 GB", "Super Fast Website Speed", "10"),
    expandedFeatures: {
      general: [
        {
          text: "AI Website Builder",
          included: true,
          tooltip:
            "AI-powered website builder for creating sites without coding",
        },
        {
          text: "Node Js and Python",
          included: true,
          tooltip: "Support for Node.js and Python applications",
        },
        {
          text: "Fastest WordPress Site (AccelerateWP)",
          included: true,
          tooltip: "Advanced WordPress optimization for maximum speed",
        },
        {
          text: "Premium Website Optimization",
          included: true,
          tooltip: "Professional website optimization services",
        },
        {
          text: "Content Optimization (CDN)",
          included: true,
          tooltip: "Content Delivery Network for global content distribution",
        },
      ],
      server: [
        {
          text: "99.99% Uptime Guarantee",
          included: true,
          tooltip: "Guaranteed server uptime of 99.99%",
        },
        {
          text: "3 Core Hosting CPU",
          included: true,
          tooltip: "Dedicated CPU cores for your hosting account",
        },
        {
          text: "3 GB Hosting RAM",
          included: true,
          tooltip: "Allocated RAM for your hosting environment",
        },
        {
          text: "25 MBPS I/O Speed",
          included: true,
          tooltip: "Input/Output speed for data transfer",
        },
        {
          text: "50 EP (Entry Process)",
          included: true,
          tooltip: "Entry processes for handling concurrent requests",
        },
        {
          text: "PhpMyAdmin Tool",
          included: true,
          tooltip: "Web-based MySQL database management tool",
        },
        {
          text: "MySQL Database",
          included: true,
          tooltip: "MySQL database support for your applications",
        },
        {
          text: "Imunify 365 Security",
          included: true,
          tooltip: "Advanced security suite for malware protection",
        },
        {
          text: "Daily Cloud Backup",
          included: true,
          tooltip: "Daily automated backups stored in the cloud",
        },
        {
          text: "Multiple Hosting Locations",
          included: true,
          tooltip: "Choice of multiple server locations worldwide",
        },
        {
          text: "Host PHP & Laravel Script",
          included: true,
          tooltip: "Support for PHP and Laravel framework applications",
        },
        {
          text: "E-Commerce Optimised Server",
          included: true,
          tooltip: "Server optimized specifically for e-commerce applications",
        },
        {
          text: "SSH/Terminal Access",
          included: true,
          tooltip: "Secure Shell access for command-line operations",
        },
        {
          text: "Shell Access (Jailed)",
          included: true,
          tooltip: "Restricted shell access for security",
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
          text: "CXS, OSM, MSFE Addon",
          included: true,
          tooltip: "Additional security addons for comprehensive protection",
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
          text: "24/7 Instant Chat Support",
          included: true,
          tooltip: "24/7 live chat support for immediate assistance",
        },
        {
          text: "30 Minute or Less Ticket Reply",
          included: true,
          tooltip: "Guaranteed response time of 30 minutes or less",
        },
        {
          text: "24/7 Live Call Support",
          included: true,
          tooltip: "24/7 phone support for urgent issues",
        },
        {
          text: "24/7 What'sApp Support",
          included: true,
          tooltip: "24/7 support via WhatsApp messaging",
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
    infoText: "৳5995/year when you renew",
    highlight: true,
    icon: "pro",
    description: "Perfect for E-Commerce Websites",
  },
  {
    title: "Ultimate",
    price: 7195,
    currency: "৳",
    billingPeriod: "yearly",
    features: BDIXCreateFeatures(
      "25 GB",
      "Maximize Website Speed",
      "Unlimited"
    ),
    expandedFeatures: {
      general: [
        {
          text: "AI Website Builder",
          included: true,
          tooltip:
            "AI-powered website builder for creating sites without coding",
        },
        {
          text: "Node Js and Python",
          included: true,
          tooltip: "Support for Node.js and Python applications",
        },
        {
          text: "Fastest WordPress Site (AccelerateWP)",
          included: true,
          tooltip: "Advanced WordPress optimization for maximum speed",
        },
        {
          text: "Premium Website Optimization",
          included: true,
          tooltip: "Professional website optimization services",
        },
        {
          text: "Content Optimization (CDN)",
          included: true,
          tooltip: "Content Delivery Network for global content distribution",
        },
      ],
      server: [
        {
          text: "99.99% Uptime Guarantee",
          included: true,
          tooltip: "Guaranteed server uptime of 99.99%",
        },
        {
          text: "4 Core Hosting CPU",
          included: true,
          tooltip: "Dedicated CPU cores for your hosting account",
        },
        {
          text: "4 GB Hosting RAM",
          included: true,
          tooltip: "Allocated RAM for your hosting environment",
        },
        {
          text: "50 MBPS I/O Speed",
          included: true,
          tooltip: "Input/Output speed for data transfer",
        },
        {
          text: "80 EP (Entry Process)",
          included: true,
          tooltip: "Entry processes for handling concurrent requests",
        },
        {
          text: "PhpMyAdmin Tool",
          included: true,
          tooltip: "Web-based MySQL database management tool",
        },
        {
          text: "MySQL Database",
          included: true,
          tooltip: "MySQL database support for your applications",
        },
        {
          text: "Imunify 365 Security",
          included: true,
          tooltip: "Advanced security suite for malware protection",
        },
        {
          text: "Daily Cloud Backup",
          included: true,
          tooltip: "Daily automated backups stored in the cloud",
        },
        {
          text: "Multiple Hosting Locations",
          included: true,
          tooltip: "Choice of multiple server locations worldwide",
        },
        {
          text: "Host PHP & Laravel Script",
          included: true,
          tooltip: "Support for PHP and Laravel framework applications",
        },
        {
          text: "E-Commerce Optimised Server",
          included: true,
          tooltip: "Server optimized specifically for e-commerce applications",
        },
        {
          text: "SSH/Terminal Access",
          included: true,
          tooltip: "Secure Shell access for command-line operations",
        },
        {
          text: "Shell Access (Jailed)",
          included: true,
          tooltip: "Restricted shell access for security",
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
          text: "CXS, OSM, MSFE Addon",
          included: true,
          tooltip: "Additional security addons for comprehensive protection",
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
          text: "24/7 Instant Chat Support",
          included: true,
          tooltip: "24/7 live chat support for immediate assistance",
        },
        {
          text: "30 Minute or Less Ticket Reply",
          included: true,
          tooltip: "Guaranteed response time of 30 minutes or less",
        },
        {
          text: "24/7 Live Call Support",
          included: true,
          tooltip: "24/7 phone support for urgent issues",
        },
        {
          text: "24/7 What'sApp Support",
          included: true,
          tooltip: "24/7 support via WhatsApp messaging",
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
    infoText: "৳7995/year when you renew",
    icon: "ultimate",
    description: "Best for Large-Scale Websites",
  },
];

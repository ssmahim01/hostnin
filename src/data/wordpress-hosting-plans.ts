import { PricingPlan } from "@/types/pricing";
import { WordpressCreateFeatures } from "./plan-features/wordpress-create-features";

export const wordPressPricingData: PricingPlan[] = [
  // yearly pricing plans
  {
    title: "Basic",
    price: 1995,
    currency: "৳",
    billingPeriod: "yearly",
    features: WordpressCreateFeatures("5 GB", "Standard Website Speed", "2"),
    savingsText: "30 Days Money back Guarantee",
    buttonText: "Add to Cart",
    infoText: "Renew at Same Price, Every year.",
    icon: "basic",
    description: "Perfect for a simple site or blog",
  },
  {
    title: "WP Starter",
    price: 2399,
    currency: "৳",
    billingPeriod: "yearly",
    features: [
      {
        text: "50 GB Fastest SSD Storage",
        tooltip:
          "Supercharge your website with NVMe storage, delivering ultra-fast data access and superior performance.",
      },
      {
        text: "Fully Managed Cloud Platform",
        tooltip:
          "Complete cloud hosting platform with managed services for optimal performance.",
      },
      {
        text: "Expert WordPress Support 24 x 7",
        tooltip: "Round-the-clock WordPress expert support for all your needs.",
      },
      {
        text: "Automatic Core Updates",
        tooltip:
          "Automatic WordPress core updates to keep your site secure and up-to-date.",
      },
      {
        text: "One-click WordPress Staging",
        tooltip: "Create staging environments with one click for safe testing.",
      },
      {
        text: "Global Content Delivery Network",
        tooltip: "Global CDN for faster content delivery worldwide.",
      },
      {
        text: "Built for WordPress, Fast for WordPress",
        tooltip: "Optimized specifically for WordPress performance.",
      },
      {
        text: "Hands-free WordPress",
        tooltip:
          "Fully managed WordPress hosting with minimal maintenance required.",
      },
    ],
    expandedFeatures: {
      general: [
        {
          text: "Cache® Optimisation",
          included: true,
          tooltip: "Advanced caching optimization for faster website loading",
        },
        {
          text: "Auto Core Updates",
          included: true,
          tooltip: "Automatic WordPress core updates",
        },
        {
          text: "WordPress Staging",
          included: true,
          tooltip: "One-click WordPress staging environment",
        },
        {
          text: "WordPress Cloning",
          included: true,
          tooltip: "Clone WordPress sites easily",
        },
        {
          text: "WordPress Manager",
          included: true,
          tooltip: "Advanced WordPress management tools",
        },
        {
          text: "WordPress Checksum Report",
          included: true,
          tooltip: "Security checksum verification for WordPress files",
        },
        {
          text: "WP-CLI",
          included: true,
          tooltip: "Command-line interface for WordPress",
        },
      ],
      server: [
        {
          text: "Brute Force Login Protection",
          included: true,
          tooltip: "Protection against brute force login attacks",
        },
        {
          text: "Hotlink Protection",
          included: true,
          tooltip: "Protect your images and content from being hotlinked",
        },
        {
          text: "FTP Security Lock",
          included: true,
          tooltip: "Enhanced FTP security with locking mechanisms",
        },
        {
          text: "One Click Google Workspace Setup",
          included: true,
          tooltip: "Easy Google Workspace integration",
        },
        {
          text: "Block Visitors by IP or Country",
          included: true,
          tooltip: "Advanced visitor blocking capabilities",
        },
        {
          text: "FREE Manual Backups 24/7",
          included: true,
          tooltip: "Free manual backup services available 24/7",
        },
        {
          text: "Unlimited MySQL Databases",
          included: true,
          tooltip: "Unlimited MySQL database creation",
        },
        {
          text: "FREE SSL Certificates",
          included: true,
          tooltip: "Free SSL certificates for all domains",
        },
        {
          text: "Advanced DDoS Protection",
          included: true,
          tooltip: "Advanced DDoS attack protection",
        },
        {
          text: "Optimised PHP-FPM",
          included: true,
          tooltip: "Optimized PHP-FPM for better performance",
        },
        {
          text: "Full DNS Management",
          included: true,
          tooltip: "Complete DNS management capabilities",
        },
        {
          text: "Integrated Git Version Control",
          included: true,
          tooltip: "Built-in Git version control system",
        },
        {
          text: "Unlimited FTP/SFTP Accounts",
          included: true,
          tooltip: "Unlimited FTP and SFTP account creation",
        },
        {
          text: "Sitemap Generator",
          included: false,
          tooltip: "Automatic sitemap generation",
        },
        {
          text: "1Tbps+ DDoS Protection",
          included: false,
          tooltip: "Ultra-high DDoS protection",
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
          tooltip: "Advanced ticket support system",
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
    infoText: "৳2999/year when you renew",
    icon: "starter",
    description: "Perfect for Mid-Level Websites",
  },
  {
    title: "WP Pro",
    price: 3599,
    currency: "৳",
    billingPeriod: "yearly",
    features: [
      {
        text: "100 GB Fastest SSD Storage",
        tooltip:
          "Supercharge your website with NVMe storage, delivering ultra-fast data access and superior performance.",
      },
      {
        text: "Fully Managed Cloud Platform",
        tooltip:
          "Complete cloud hosting platform with managed services for optimal performance.",
      },
      {
        text: "Expert WordPress Support 24x7",
        tooltip: "Round-the-clock WordPress expert support for all your needs.",
      },
      {
        text: "Automatic Core Updates",
        tooltip:
          "Automatic WordPress core updates to keep your site secure and up-to-date.",
      },
      {
        text: "One-click WordPress Staging",
        tooltip: "Create staging environments with one click for safe testing.",
      },
      {
        text: "Global Content Delivery Network",
        tooltip: "Global CDN for faster content delivery worldwide.",
      },
      {
        text: "Built for WordPress, Fast for WordPress",
        tooltip: "Optimized specifically for WordPress performance.",
      },
      {
        text: "Hands-free WordPress",
        tooltip:
          "Fully managed WordPress hosting with minimal maintenance required.",
      },
    ],
    expandedFeatures: {
      general: [
        {
          text: "Cache® Optimisation",
          included: true,
          tooltip: "Advanced caching optimization for faster website loading",
        },
        {
          text: "Auto Core Updates",
          included: true,
          tooltip: "Automatic WordPress core updates",
        },
        {
          text: "WordPress Staging",
          included: true,
          tooltip: "One-click WordPress staging environment",
        },
        {
          text: "WordPress Cloning",
          included: true,
          tooltip: "Clone WordPress sites easily",
        },
        {
          text: "WordPress Manager",
          included: true,
          tooltip: "Advanced WordPress management tools",
        },
        {
          text: "WordPress Checksum Report",
          included: true,
          tooltip: "Security checksum verification for WordPress files",
        },
        {
          text: "WP-CLI",
          included: true,
          tooltip: "Command-line interface for WordPress",
        },
      ],
      server: [
        {
          text: "Brute Force Login Protection",
          included: true,
          tooltip: "Protection against brute force login attacks",
        },
        {
          text: "Hotlink Protection",
          included: true,
          tooltip: "Protect your images and content from being hotlinked",
        },
        {
          text: "FTP Security Lock",
          included: true,
          tooltip: "Enhanced FTP security with locking mechanisms",
        },
        {
          text: "One Click Google Workspace Setup",
          included: true,
          tooltip: "Easy Google Workspace integration",
        },
        {
          text: "Block Visitors by IP or Country",
          included: true,
          tooltip: "Advanced visitor blocking capabilities",
        },
        {
          text: "FREE Manual Backups 24/7",
          included: true,
          tooltip: "Free manual backup services available 24/7",
        },
        {
          text: "Unlimited MySQL Databases",
          included: true,
          tooltip: "Unlimited MySQL database creation",
        },
        {
          text: "FREE SSL Certificates",
          included: true,
          tooltip: "Free SSL certificates for all domains",
        },
        {
          text: "Advanced DDoS Protection",
          included: true,
          tooltip: "Advanced DDoS attack protection",
        },
        {
          text: "Optimised PHP-FPM",
          included: true,
          tooltip: "Optimized PHP-FPM for better performance",
        },
        {
          text: "Full DNS Management",
          included: true,
          tooltip: "Complete DNS management capabilities",
        },
        {
          text: "Integrated Git Version Control",
          included: true,
          tooltip: "Built-in Git version control system",
        },
        {
          text: "Unlimited FTP/SFTP Accounts",
          included: true,
          tooltip: "Unlimited FTP and SFTP account creation",
        },
        {
          text: "Sitemap Generator",
          included: true,
          tooltip: "Automatic sitemap generation",
        },
        {
          text: "1 Tbps+ DDoS Protection",
          included: true,
          tooltip: "Ultra-high DDoS protection",
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
          tooltip: "Advanced ticket support system",
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
    infoText: "৳3999/year when you renew",
    highlight: true,
    icon: "pro",
    description: "Perfect for E-Commerce Websites",
  },
  {
    title: "WP Ultimate",
    price: 7199,
    currency: "৳",
    billingPeriod: "yearly",
    features: [
      {
        text: "Unlimited Fastest SSD Storage",
        tooltip:
          "Unlimited NVMe storage for maximum performance and scalability.",
      },
      {
        text: "Fully Managed Cloud Platform",
        tooltip:
          "Complete cloud hosting platform with managed services for optimal performance.",
      },
      {
        text: "Expert WordPress Support 24 x 7",
        tooltip: "Round-the-clock WordPress expert support for all your needs.",
      },
      {
        text: "Automatic Core Updates",
        tooltip:
          "Automatic WordPress core updates to keep your site secure and up-to-date.",
      },
      {
        text: "One-click WordPress Staging",
        tooltip: "Create staging environments with one click for safe testing.",
      },
      {
        text: "Global Content Delivery Network",
        tooltip: "Global CDN for faster content delivery worldwide.",
      },
      {
        text: "Built for WordPress, Fast for WordPress",
        tooltip: "Optimized specifically for WordPress performance.",
      },
      {
        text: "Hands-free WordPress",
        tooltip:
          "Fully managed WordPress hosting with minimal maintenance required.",
      },
    ],
    expandedFeatures: {
      general: [
        {
          text: "Cache® Optimisation",
          included: true,
          tooltip: "Advanced caching optimization for faster website loading",
        },
        {
          text: "Auto Core Updates",
          included: true,
          tooltip: "Automatic WordPress core updates",
        },
        {
          text: "WordPress Staging",
          included: true,
          tooltip: "One-click WordPress staging environment",
        },
        {
          text: "WordPress Cloning",
          included: true,
          tooltip: "Clone WordPress sites easily",
        },
        {
          text: "WordPress Manager",
          included: true,
          tooltip: "Advanced WordPress management tools",
        },
        {
          text: "WordPress Checksum Report",
          included: true,
          tooltip: "Security checksum verification for WordPress files",
        },
        {
          text: "WP-CLI",
          included: true,
          tooltip: "Command-line interface for WordPress",
        },
      ],
      server: [
        {
          text: "Brute Force Login Protection",
          included: true,
          tooltip: "Protection against brute force login attacks",
        },
        {
          text: "Hotlink Protection",
          included: true,
          tooltip: "Protect your images and content from being hotlinked",
        },
        {
          text: "FTP Security Lock",
          included: true,
          tooltip: "Enhanced FTP security with locking mechanisms",
        },
        {
          text: "One Click Google Workspace Setup",
          included: true,
          tooltip: "Easy Google Workspace integration",
        },
        {
          text: "Block Visitors by IP or Country",
          included: true,
          tooltip: "Advanced visitor blocking capabilities",
        },
        {
          text: "FREE Manual Backups 24/7",
          included: true,
          tooltip: "Free manual backup services available 24/7",
        },
        {
          text: "Unlimited MySQL Databases",
          included: true,
          tooltip: "Unlimited MySQL database creation",
        },
        {
          text: "FREE SSL Certificates",
          included: true,
          tooltip: "Free SSL certificates for all domains",
        },
        {
          text: "Advanced DDoS Protection",
          included: true,
          tooltip: "Advanced DDoS attack protection",
        },
        {
          text: "Optimised PHP-FPM",
          included: true,
          tooltip: "Optimized PHP-FPM for better performance",
        },
        {
          text: "Full DNS Management",
          included: true,
          tooltip: "Complete DNS management capabilities",
        },
        {
          text: "Integrated Git Version Control",
          included: true,
          tooltip: "Built-in Git version control system",
        },
        {
          text: "Unlimited FTP/SFTP Accounts",
          included: true,
          tooltip: "Unlimited FTP and SFTP account creation",
        },
        {
          text: "Sitemap Generator",
          included: true,
          tooltip: "Automatic sitemap generation",
        },
        {
          text: "1 Tbps+ DDoS Protection",
          included: true,
          tooltip: "Ultra-high DDoS protection",
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
          tooltip: "Advanced ticket support system",
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
    infoText: "৳7999/year when you renew",
    icon: "ultimate",
    description: "Best for Large-Scale Websites",
  },
  // three years pricing plans
  {
    title: "Basic",
    price: 5985,
    currency: "৳",
    billingPeriod: "3-years",
    features: WordpressCreateFeatures("5 GB", "Standard Website Speed", "2"),
    savingsText: "30 Days Money back Guarantee",
    buttonText: "Add to Cart",
    infoText: "Renew at Same Price, Every 3 years.",
    icon: "basic",
    description: "Perfect for a simple site or blog",
  },
  {
    title: "WP Starter",
    price: 7197,
    currency: "৳",
    billingPeriod: "3-years",
    features: [
      {
        text: "50 GB Fastest SSD Storage",
        tooltip:
          "Supercharge your website with NVMe storage, delivering ultra-fast data access and superior performance.",
      },
      {
        text: "Fully Managed Cloud Platform",
        tooltip:
          "Complete cloud hosting platform with managed services for optimal performance.",
      },
      {
        text: "Expert WordPress Support 24 x 7",
        tooltip: "Round-the-clock WordPress expert support for all your needs.",
      },
      {
        text: "Automatic Core Updates",
        tooltip:
          "Automatic WordPress core updates to keep your site secure and up-to-date.",
      },
      {
        text: "One-click WordPress Staging",
        tooltip: "Create staging environments with one click for safe testing.",
      },
      {
        text: "Global Content Delivery Network",
        tooltip: "Global CDN for faster content delivery worldwide.",
      },
      {
        text: "Built for WordPress, Fast for WordPress",
        tooltip: "Optimized specifically for WordPress performance.",
      },
      {
        text: "Hands-free WordPress",
        tooltip:
          "Fully managed WordPress hosting with minimal maintenance required.",
      },
    ],
    expandedFeatures: {
      general: [
        {
          text: "Cache® Optimisation",
          included: true,
          tooltip: "Advanced caching optimization for faster website loading",
        },
        {
          text: "Auto Core Updates",
          included: true,
          tooltip: "Automatic WordPress core updates",
        },
        {
          text: "WordPress Staging",
          included: true,
          tooltip: "One-click WordPress staging environment",
        },
        {
          text: "WordPress Cloning",
          included: true,
          tooltip: "Clone WordPress sites easily",
        },
        {
          text: "WordPress Manager",
          included: true,
          tooltip: "Advanced WordPress management tools",
        },
        {
          text: "WordPress Checksum Report",
          included: true,
          tooltip: "Security checksum verification for WordPress files",
        },
        {
          text: "WP-CLI",
          included: true,
          tooltip: "Command-line interface for WordPress",
        },
      ],
      server: [
        {
          text: "Brute Force Login Protection",
          included: true,
          tooltip: "Protection against brute force login attacks",
        },
        {
          text: "Hotlink Protection",
          included: true,
          tooltip: "Protect your images and content from being hotlinked",
        },
        {
          text: "FTP Security Lock",
          included: true,
          tooltip: "Enhanced FTP security with locking mechanisms",
        },
        {
          text: "One Click Google Workspace Setup",
          included: true,
          tooltip: "Easy Google Workspace integration",
        },
        {
          text: "Block Visitors by IP or Country",
          included: true,
          tooltip: "Advanced visitor blocking capabilities",
        },
        {
          text: "FREE Manual Backups 24/7",
          included: true,
          tooltip: "Free manual backup services available 24/7",
        },
        {
          text: "Unlimited MySQL Databases",
          included: true,
          tooltip: "Unlimited MySQL database creation",
        },
        {
          text: "FREE SSL Certificates",
          included: true,
          tooltip: "Free SSL certificates for all domains",
        },
        {
          text: "Advanced DDoS Protection",
          included: true,
          tooltip: "Advanced DDoS attack protection",
        },
        {
          text: "Optimised PHP-FPM",
          included: true,
          tooltip: "Optimized PHP-FPM for better performance",
        },
        {
          text: "Full DNS Management",
          included: true,
          tooltip: "Complete DNS management capabilities",
        },
        {
          text: "Integrated Git Version Control",
          included: true,
          tooltip: "Built-in Git version control system",
        },
        {
          text: "Unlimited FTP/SFTP Accounts",
          included: true,
          tooltip: "Unlimited FTP and SFTP account creation",
        },
        {
          text: "Sitemap Generator",
          included: false,
          tooltip: "Automatic sitemap generation",
        },
        {
          text: "1Tbps+ DDoS Protection",
          included: false,
          tooltip: "Ultra-high DDoS protection",
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
          tooltip: "Advanced ticket support system",
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
    infoText: "৳8997/triennially when you renew",
    icon: "starter",
    description: "Perfect for Mid-Level Websites",
  },
  {
    title: "WP Pro",
    price: 10797,
    currency: "৳",
    billingPeriod: "3-years",
    features: [
      {
        text: "100 GB Fastest SSD Storage",
        tooltip:
          "Supercharge your website with NVMe storage, delivering ultra-fast data access and superior performance.",
      },
      {
        text: "Fully Managed Cloud Platform",
        tooltip:
          "Complete cloud hosting platform with managed services for optimal performance.",
      },
      {
        text: "Expert WordPress Support 24x7",
        tooltip: "Round-the-clock WordPress expert support for all your needs.",
      },
      {
        text: "Automatic Core Updates",
        tooltip:
          "Automatic WordPress core updates to keep your site secure and up-to-date.",
      },
      {
        text: "One-click WordPress Staging",
        tooltip: "Create staging environments with one click for safe testing.",
      },
      {
        text: "Global Content Delivery Network",
        tooltip: "Global CDN for faster content delivery worldwide.",
      },
      {
        text: "Built for WordPress, Fast for WordPress",
        tooltip: "Optimized specifically for WordPress performance.",
      },
      {
        text: "Hands-free WordPress",
        tooltip:
          "Fully managed WordPress hosting with minimal maintenance required.",
      },
    ],
    expandedFeatures: {
      general: [
        {
          text: "Cache® Optimisation",
          included: true,
          tooltip: "Advanced caching optimization for faster website loading",
        },
        {
          text: "Auto Core Updates",
          included: true,
          tooltip: "Automatic WordPress core updates",
        },
        {
          text: "WordPress Staging",
          included: true,
          tooltip: "One-click WordPress staging environment",
        },
        {
          text: "WordPress Cloning",
          included: true,
          tooltip: "Clone WordPress sites easily",
        },
        {
          text: "WordPress Manager",
          included: true,
          tooltip: "Advanced WordPress management tools",
        },
        {
          text: "WordPress Checksum Report",
          included: true,
          tooltip: "Security checksum verification for WordPress files",
        },
        {
          text: "WP-CLI",
          included: true,
          tooltip: "Command-line interface for WordPress",
        },
      ],
      server: [
        {
          text: "Brute Force Login Protection",
          included: true,
          tooltip: "Protection against brute force login attacks",
        },
        {
          text: "Hotlink Protection",
          included: true,
          tooltip: "Protect your images and content from being hotlinked",
        },
        {
          text: "FTP Security Lock",
          included: true,
          tooltip: "Enhanced FTP security with locking mechanisms",
        },
        {
          text: "One Click Google Workspace Setup",
          included: true,
          tooltip: "Easy Google Workspace integration",
        },
        {
          text: "Block Visitors by IP or Country",
          included: true,
          tooltip: "Advanced visitor blocking capabilities",
        },
        {
          text: "FREE Manual Backups 24/7",
          included: true,
          tooltip: "Free manual backup services available 24/7",
        },
        {
          text: "Unlimited MySQL Databases",
          included: true,
          tooltip: "Unlimited MySQL database creation",
        },
        {
          text: "FREE SSL Certificates",
          included: true,
          tooltip: "Free SSL certificates for all domains",
        },
        {
          text: "Advanced DDoS Protection",
          included: true,
          tooltip: "Advanced DDoS attack protection",
        },
        {
          text: "Optimised PHP-FPM",
          included: true,
          tooltip: "Optimized PHP-FPM for better performance",
        },
        {
          text: "Full DNS Management",
          included: true,
          tooltip: "Complete DNS management capabilities",
        },
        {
          text: "Integrated Git Version Control",
          included: true,
          tooltip: "Built-in Git version control system",
        },
        {
          text: "Unlimited FTP/SFTP Accounts",
          included: true,
          tooltip: "Unlimited FTP and SFTP account creation",
        },
        {
          text: "Sitemap Generator",
          included: true,
          tooltip: "Automatic sitemap generation",
        },
        {
          text: "1 Tbps+ DDoS Protection",
          included: true,
          tooltip: "Ultra-high DDoS protection",
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
          tooltip: "Advanced ticket support system",
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
    infoText: "৳11997/triennially when you renew",
    highlight: true,
    icon: "pro",
    description: "Perfect for E-Commerce Websites",
  },
  {
    title: "WP Ultimate",
    price: 21597,
    currency: "৳",
    billingPeriod: "3-years",
    features: [
      {
        text: "Unlimited Fastest SSD Storage",
        tooltip:
          "Unlimited NVMe storage for maximum performance and scalability.",
      },
      {
        text: "Fully Managed Cloud Platform",
        tooltip:
          "Complete cloud hosting platform with managed services for optimal performance.",
      },
      {
        text: "Expert WordPress Support 24 x 7",
        tooltip: "Round-the-clock WordPress expert support for all your needs.",
      },
      {
        text: "Automatic Core Updates",
        tooltip:
          "Automatic WordPress core updates to keep your site secure and up-to-date.",
      },
      {
        text: "One-click WordPress Staging",
        tooltip: "Create staging environments with one click for safe testing.",
      },
      {
        text: "Global Content Delivery Network",
        tooltip: "Global CDN for faster content delivery worldwide.",
      },
      {
        text: "Built for WordPress, Fast for WordPress",
        tooltip: "Optimized specifically for WordPress performance.",
      },
      {
        text: "Hands-free WordPress",
        tooltip:
          "Fully managed WordPress hosting with minimal maintenance required.",
      },
    ],
    expandedFeatures: {
      general: [
        {
          text: "Cache® Optimisation",
          included: true,
          tooltip: "Advanced caching optimization for faster website loading",
        },
        {
          text: "Auto Core Updates",
          included: true,
          tooltip: "Automatic WordPress core updates",
        },
        {
          text: "WordPress Staging",
          included: true,
          tooltip: "One-click WordPress staging environment",
        },
        {
          text: "WordPress Cloning",
          included: true,
          tooltip: "Clone WordPress sites easily",
        },
        {
          text: "WordPress Manager",
          included: true,
          tooltip: "Advanced WordPress management tools",
        },
        {
          text: "WordPress Checksum Report",
          included: true,
          tooltip: "Security checksum verification for WordPress files",
        },
        {
          text: "WP-CLI",
          included: true,
          tooltip: "Command-line interface for WordPress",
        },
      ],
      server: [
        {
          text: "Brute Force Login Protection",
          included: true,
          tooltip: "Protection against brute force login attacks",
        },
        {
          text: "Hotlink Protection",
          included: true,
          tooltip: "Protect your images and content from being hotlinked",
        },
        {
          text: "FTP Security Lock",
          included: true,
          tooltip: "Enhanced FTP security with locking mechanisms",
        },
        {
          text: "One Click Google Workspace Setup",
          included: true,
          tooltip: "Easy Google Workspace integration",
        },
        {
          text: "Block Visitors by IP or Country",
          included: true,
          tooltip: "Advanced visitor blocking capabilities",
        },
        {
          text: "FREE Manual Backups 24/7",
          included: true,
          tooltip: "Free manual backup services available 24/7",
        },
        {
          text: "Unlimited MySQL Databases",
          included: true,
          tooltip: "Unlimited MySQL database creation",
        },
        {
          text: "FREE SSL Certificates",
          included: true,
          tooltip: "Free SSL certificates for all domains",
        },
        {
          text: "Advanced DDoS Protection",
          included: true,
          tooltip: "Advanced DDoS attack protection",
        },
        {
          text: "Optimised PHP-FPM",
          included: true,
          tooltip: "Optimized PHP-FPM for better performance",
        },
        {
          text: "Full DNS Management",
          included: true,
          tooltip: "Complete DNS management capabilities",
        },
        {
          text: "Integrated Git Version Control",
          included: true,
          tooltip: "Built-in Git version control system",
        },
        {
          text: "Unlimited FTP/SFTP Accounts",
          included: true,
          tooltip: "Unlimited FTP and SFTP account creation",
        },
        {
          text: "Sitemap Generator",
          included: true,
          tooltip: "Automatic sitemap generation",
        },
        {
          text: "1 Tbps+ DDoS Protection",
          included: true,
          tooltip: "Ultra-high DDoS protection",
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
          tooltip: "Advanced ticket support system",
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
    infoText: "৳23997/triennially when you renew",
    icon: "ultimate",
    description: "Best for Large-Scale Websites",
  },
];

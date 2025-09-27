import { PricingPlan } from "@/types/pricing";

export const cloudHostingData: PricingPlan[] = [
  // Yearly Plans
  {
    title: "Basic",
    price: 999,
    currency: "৳",
    billingPeriod: "yearly",
    features: [
      {
        text: "10 GB Pure SSD Storage",
        tooltip:
          "High performance SSD storage for fast access and reliability.",
      },
      {
        text: "Standard Website Speed",
        tooltip:
          "Optimized for websites with moderate traffic and good load times.",
      },
      {
        text: "2 Domain Hosted",
        tooltip: "Host up to two separate domains under this plan.",
      },
      {
        text: "Free Domain (Triennially)",
        tooltip: "Get a free domain every three years.",
      },
      {
        text: "Lifetime Free SSL",
        tooltip: "Secure your website with SSL for lifetime.",
      },
      {
        text: "One Click WordPress Install",
        tooltip: "Easy WordPress setup with just one click.",
      },
      {
        text: "Advanced Malware Scanner",
        tooltip: "Automatic scanning for malware threats.",
      },
      {
        text: "Unlimited Bandwidth",
        tooltip: "No limits on website traffic bandwidth.",
      },
      {
        text: "Unlimited Subdomains",
        tooltip: "Create unlimited subdomains for your site.",
      },
      {
        text: "Fast, Autoscaling Hosting",
        tooltip: "Hosting that scales automatically with your traffic.",
      },
      {
        text: "Unlimited Databases",
        tooltip: "No limit on number of databases.",
      },
      {
        text: "Advanced Cache Management",
        tooltip: "Optimized caching for faster website performance.",
      },
    ],
    expandedFeatures: {
      server: [
        {
          text: "99.99% Uptime Guarantee",
          tooltip:
            "Our servers are guaranteed to be up and running 99.99% of the time.",
          included: true,
        },
        {
          text: "1 Core Hosting CPU",
          tooltip: "Dedicated CPU core for your hosting needs.",
          included: true,
        },
        {
          text: "512 MB Hosting RAM",
          tooltip: "512MB of RAM allocated for your hosting environment.",
          included: true,
        },
        {
          text: "1 MBPS I/O Speed",
          tooltip: "Input/Output speed of 1MB per second for disk operations.",
          included: true,
        },
        {
          text: "5 EP (Entry Process)",
          tooltip: "5 concurrent entry processes allowed for your website.",
          included: true,
        },
        {
          text: "PhpMyAdmin Tool",
          tooltip: "Access to PhpMyAdmin for easy database management.",
          included: true,
        },
        {
          text: "MySQL Database",
          tooltip: "MySQL database support included.",
          included: true,
        },
        {
          text: "Woocommerce Optimization",
          tooltip: "Special optimizations for Woocommerce stores.",
          included: false,
        },
        {
          text: "Multiple Hosting Locations",
          tooltip: "Choose from multiple server locations worldwide.",
          included: false,
        },
        {
          text: "Host PHP & Laravel Script",
          tooltip: "Support for PHP and Laravel applications.",
          included: false,
        },
        {
          text: "Integrated GIT Version Control",
          tooltip: "Built-in GIT version control system.",
          included: false,
        },
      ],
      security: [
        {
          text: "24/7 Monitoring By Experts",
          tooltip: "Our experts monitor your site 24/7 for any issues.",
          included: true,
        },
        {
          text: "Daily Virus Scanning",
          tooltip: "Automatic daily scans for viruses and malware.",
          included: true,
        },
        {
          text: "Integrated Web Application Firewall",
          tooltip: "Built-in firewall to protect your web applications.",
          included: true,
        },
        {
          text: "Two-Factor Authentication",
          tooltip: "Extra layer of security with 2FA for your hosting account.",
          included: true,
        },
        {
          text: "Block Visitors by IP or Country Specific",
          tooltip: "Ability to block visitors from specific IPs or countries.",
          included: false,
        },
        {
          text: "Hotlink & Brute-Force Login Protection",
          tooltip:
            "Protection against hotlinking and brute-force login attempts.",
          included: false,
        },
      ],
      support: [
        {
          text: "24/7/365 Instant Chat Support",
          tooltip: "Instant chat support available 24/7 throughout the year.",
          included: true,
        },
        {
          text: "30 Minute or Less Ticket Reply",
          tooltip: "Guaranteed response to support tickets within 30 minutes.",
          included: true,
        },
        {
          text: "24/7 Live Call Support",
          tooltip: "Phone support available at any time.",
          included: true,
        },
        {
          text: "24/7 What'sApp Support",
          tooltip: "Support via WhatsApp available around the clock.",
          included: true,
        },
        {
          text: "Priority Website Support",
          tooltip: "Your support requests get priority handling.",
          included: false,
        },
      ],
    },
    icon: "basic",
    description: "Ideal for Entry Level Website",
    buttonText: "Add to Cart",
    infoText: "৳2150/year when you renew",
    savingsText: "24/7 WhatsApp & Call Support",
  },
  {
    title: "Starter",
    price: 2150,
    currency: "৳",
    billingPeriod: "yearly",
    features: [
      {
        text: "50 GB Pure SSD Storage",
        tooltip: "More SSD storage space for growing websites.",
      },
      {
        text: "Increased Website Speed",
        tooltip: "Faster loading times with better server resources.",
      },
      {
        text: "5 Domain Hosted",
        tooltip: "Host up to five domains under this plan.",
      },
      {
        text: "Free Domain (Triennially)",
        tooltip: "Get a free domain every three years.",
      },
      {
        text: "Lifetime Free SSL",
        tooltip: "Secure your website with SSL for lifetime.",
      },
      {
        text: "One Click WordPress Install",
        tooltip: "Easy WordPress setup with just one click.",
      },
      {
        text: "Advanced Malware Scanner",
        tooltip: "Automatic scanning for malware threats.",
      },
      {
        text: "Unlimited Bandwidth",
        tooltip: "No limits on website traffic bandwidth.",
      },
      {
        text: "Unlimited Subdomains",
        tooltip: "Create unlimited subdomains for your site.",
      },
      {
        text: "Fast, Autoscaling Hosting",
        tooltip: "Hosting that scales automatically with your traffic.",
      },
      {
        text: "Unlimited Databases",
        tooltip: "No limit on number of databases.",
      },
      {
        text: "Advanced Cache Management",
        tooltip: "Optimized caching for faster website performance.",
      },
    ],
    expandedFeatures: {
      server: [
        {
          text: "99.99% Uptime Guarantee",
          tooltip:
            "Our servers are guaranteed to be up and running 99.99% of the time.",
          included: true,
        },
        {
          text: "2 Core Hosting CPU",
          tooltip: "Two dedicated CPU cores for your hosting needs.",
          included: true,
        },
        {
          text: "2 GB Hosting RAM",
          tooltip: "2GB of RAM allocated for your hosting environment.",
          included: true,
        },
        {
          text: "10 MBPS I/O Speed",
          tooltip: "Input/Output speed of 10MB per second for disk operations.",
          included: true,
        },
        {
          text: "15 EP (Entry Process)",
          tooltip: "15 concurrent entry processes allowed for your website.",
          included: true,
        },
        {
          text: "PhpMyAdmin Tool",
          tooltip: "Access to PhpMyAdmin for easy database management.",
          included: true,
        },
        {
          text: "MySQL Database",
          tooltip: "MySQL database support included.",
          included: true,
        },
        {
          text: "Woocommerce Optimization",
          tooltip: "Special optimizations for Woocommerce stores.",
          included: true,
        },
        {
          text: "Multiple Hosting Locations",
          tooltip: "Choose from multiple server locations worldwide.",
          included: true,
        },
        {
          text: "Host PHP & Laravel Script",
          tooltip: "Support for PHP and Laravel applications.",
          included: true,
        },
        {
          text: "Integrated GIT Version Control",
          tooltip: "Built-in GIT version control system.",
          included: false,
        },
      ],
      security: [
        {
          text: "24/7 Monitoring By Experts",
          tooltip: "Our experts monitor your site 24/7 for any issues.",
          included: true,
        },
        {
          text: "Daily Virus Scanning",
          tooltip: "Automatic daily scans for viruses and malware.",
          included: true,
        },
        {
          text: "Integrated Web Application Firewall",
          tooltip: "Built-in firewall to protect your web applications.",
          included: true,
        },
        {
          text: "Two-Factor Authentication",
          tooltip: "Extra layer of security with 2FA for your hosting account.",
          included: true,
        },
        {
          text: "Block Visitors by IP or Country Specific",
          tooltip: "Ability to block visitors from specific IPs or countries.",
          included: false,
        },
        {
          text: "Hotlink & Brute-Force Login Protection",
          tooltip:
            "Protection against hotlinking and brute-force login attempts.",
          included: false,
        },
      ],
      support: [
        {
          text: "24/7/365 Instant Chat Support",
          tooltip: "Instant chat support available 24/7 throughout the year.",
          included: true,
        },
        {
          text: "30 Minute or Less Ticket Reply",
          tooltip: "Guaranteed response to support tickets within 30 minutes.",
          included: true,
        },
        {
          text: "24/7 Live Call Support",
          tooltip: "Phone support available at any time.",
          included: true,
        },
        {
          text: "24/7 What'sApp Support",
          tooltip: "Support via WhatsApp available around the clock.",
          included: true,
        },
        {
          text: "Priority Website Support",
          tooltip: "Your support requests get priority handling.",
          included: false,
        },
      ],
    },
    icon: "starter",
    description: "Ideal for Mid-level Websites",
    buttonText: "Add to Cart",
    infoText: "৳2999/year when you renew",
    savingsText: "24/7 WhatsApp & Call Support",
  },
  {
    title: "Pro",
    price: 2999,
    currency: "৳",
    billingPeriod: "yearly",
    features: [
      {
        text: "100 GB Pure SSD Storage",
        tooltip: "Large SSD storage for heavy traffic websites.",
      },
      {
        text: "Super Fast Website Speed",
        tooltip: "Optimized servers for high-speed loading.",
      },
      { text: "10 Domain Hosted", tooltip: "Host up to ten domains." },
      {
        text: "Free Domain (Triennially)",
        tooltip: "Get a free domain every three years.",
      },
      {
        text: "Lifetime Free SSL",
        tooltip: "Secure your website with SSL for lifetime.",
      },
      {
        text: "One Click WordPress Install",
        tooltip: "Easy WordPress setup with just one click.",
      },
      {
        text: "Advanced Malware Scanner",
        tooltip: "Automatic scanning for malware threats.",
      },
      {
        text: "Unlimited Bandwidth",
        tooltip: "No limits on website traffic bandwidth.",
      },
      {
        text: "Unlimited Subdomains",
        tooltip: "Create unlimited subdomains for your site.",
      },
      {
        text: "Fast, Autoscaling Hosting",
        tooltip: "Hosting that scales automatically with your traffic.",
      },
      {
        text: "Unlimited Databases",
        tooltip: "No limit on number of databases.",
      },
      {
        text: "Advanced Cache Management",
        tooltip: "Optimized caching for faster website performance.",
      },
    ],
    expandedFeatures: {
      server: [
        {
          text: "99.99% Uptime Guarantee",
          tooltip:
            "Our servers are guaranteed to be up and running 99.99% of the time.",
          included: true,
        },
        {
          text: "3 Core Hosting CPU",
          tooltip: "Three dedicated CPU cores for your hosting needs.",
          included: true,
        },
        {
          text: "3 GB Hosting RAM",
          tooltip: "3GB of RAM allocated for your hosting environment.",
          included: true,
        },
        {
          text: "20 MBPS I/O Speed",
          tooltip: "Input/Output speed of 20MB per second for disk operations.",
          included: true,
        },
        {
          text: "30 EP (Entry Process)",
          tooltip: "30 concurrent entry processes allowed for your website.",
          included: true,
        },
        {
          text: "PhpMyAdmin Tool",
          tooltip: "Access to PhpMyAdmin for easy database management.",
          included: true,
        },
        {
          text: "MySQL Database",
          tooltip: "MySQL database support included.",
          included: true,
        },
        {
          text: "Woocommerce Optimization",
          tooltip: "Special optimizations for Woocommerce stores.",
          included: true,
        },
        {
          text: "Multiple Hosting Locations",
          tooltip: "Choose from multiple server locations worldwide.",
          included: true,
        },
        {
          text: "Host PHP & Laravel Script",
          tooltip: "Support for PHP and Laravel applications.",
          included: true,
        },
        {
          text: "Integrated GIT Version Control",
          tooltip: "Built-in GIT version control system.",
          included: true,
        },
      ],
      security: [
        {
          text: "24/7 Monitoring By Experts",
          tooltip: "Our experts monitor your site 24/7 for any issues.",
          included: true,
        },
        {
          text: "Daily Virus Scanning",
          tooltip: "Automatic daily scans for viruses and malware.",
          included: true,
        },
        {
          text: "Integrated Web Application Firewall",
          tooltip: "Built-in firewall to protect your web applications.",
          included: true,
        },
        {
          text: "Two-Factor Authentication",
          tooltip: "Extra layer of security with 2FA for your hosting account.",
          included: true,
        },
        {
          text: "Block Visitors by IP or Country Specific",
          tooltip: "Ability to block visitors from specific IPs or countries.",
          included: true,
        },
        {
          text: "Hotlink & Brute-Force Login Protection",
          tooltip:
            "Protection against hotlinking and brute-force login attempts.",
          included: true,
        },
      ],
      support: [
        {
          text: "24/7/365 Instant Chat Support",
          tooltip: "Instant chat support available 24/7 throughout the year.",
          included: true,
        },
        {
          text: "30 Minute or Less Ticket Reply",
          tooltip: "Guaranteed response to support tickets within 30 minutes.",
          included: true,
        },
        {
          text: "24/7 Live Call Support",
          tooltip: "Phone support available at any time.",
          included: true,
        },
        {
          text: "24/7 What'sApp Support",
          tooltip: "Support via WhatsApp available around the clock.",
          included: true,
        },
        {
          text: "Priority Website Support",
          tooltip: "Your support requests get priority handling.",
          included: false,
        },
      ],
    },
    icon: "pro",
    description: "Perfect for Professional Websites",
    buttonText: "Add to Cart",
    infoText: "৳4999/year when you renew",
    savingsText: "24/7 WhatsApp & Call Support",
    highlight: true,
    badge: "Most Popular",
  },
  {
    title: "Ultimate",
    price: 4999,
    currency: "৳",
    billingPeriod: "yearly",
    features: [
      {
        text: "Unlimited Pure SSD Storage",
        tooltip: "Unlimited storage with pure SSD for best performance.",
      },
      {
        text: "Maximize Website Speed",
        tooltip: "Highest speed servers for max performance.",
      },
      {
        text: "Unlimited Domain Hosted",
        tooltip: "Host unlimited domains without restriction.",
      },
      {
        text: "Free Domain (Triennially)",
        tooltip: "Get a free domain every three years.",
      },
      {
        text: "Lifetime Free SSL",
        tooltip: "Secure your website with SSL for lifetime.",
      },
      {
        text: "One Click WordPress Install",
        tooltip: "Easy WordPress setup with just one click.",
      },
      {
        text: "Advanced Malware Scanner",
        tooltip: "Automatic scanning for malware threats.",
      },
      {
        text: "Unlimited Bandwidth",
        tooltip: "No limits on website traffic bandwidth.",
      },
      {
        text: "Unlimited Subdomains",
        tooltip: "Create unlimited subdomains for your site.",
      },
      {
        text: "Fast, Autoscaling Hosting",
        tooltip: "Hosting that scales automatically with your traffic.",
      },
      {
        text: "Unlimited Databases",
        tooltip: "No limit on number of databases.",
      },
      {
        text: "Advanced Cache Management",
        tooltip: "Optimized caching for faster website performance.",
      },
    ],
    expandedFeatures: {
      server: [
        {
          text: "99.99% Uptime Guarantee",
          tooltip:
            "Our servers are guaranteed to be up and running 99.99% of the time.",
          included: true,
        },
        {
          text: "4 Core of Hosting CPU",
          tooltip: "Four dedicated CPU cores for your hosting needs.",
          included: true,
        },
        {
          text: "4 GB Hosting RAM",
          tooltip: "4GB of RAM allocated for your hosting environment.",
          included: true,
        },
        {
          text: "40 MBPS I/O Speed",
          tooltip: "Input/Output speed of 40MB per second for disk operations.",
          included: true,
        },
        {
          text: "50 EP (Entry Process)",
          tooltip: "50 concurrent entry processes allowed for your website.",
          included: true,
        },
        {
          text: "PhpMyAdmin Tool",
          tooltip: "Access to PhpMyAdmin for easy database management.",
          included: true,
        },
        {
          text: "MySQL Database",
          tooltip: "MySQL database support included.",
          included: true,
        },
        {
          text: "Woocommerce Optimization",
          tooltip: "Special optimizations for Woocommerce stores.",
          included: true,
        },
        {
          text: "Multiple Hosting Locations",
          tooltip: "Choose from multiple server locations worldwide.",
          included: true,
        },
        {
          text: "Host PHP & Laravel Script",
          tooltip: "Support for PHP and Laravel applications.",
          included: true,
        },
        {
          text: "Integrated GIT Version Control",
          tooltip: "Built-in GIT version control system.",
          included: true,
        },
      ],
      security: [
        {
          text: "24/7 Monitoring By Experts",
          tooltip: "Our experts monitor your site 24/7 for any issues.",
          included: true,
        },
        {
          text: "Daily Virus Scanning",
          tooltip: "Automatic daily scans for viruses and malware.",
          included: true,
        },
        {
          text: "Integrated Web Application Firewall",
          tooltip: "Built-in firewall to protect your web applications.",
          included: true,
        },
        {
          text: "Two-Factor Authentication",
          tooltip: "Extra layer of security with 2FA for your hosting account.",
          included: true,
        },
        {
          text: "Block Visitors by IP or Country Specific",
          tooltip: "Ability to block visitors from specific IPs or countries.",
          included: true,
        },
        {
          text: "Hotlink & Brute-Force Login Protection",
          tooltip:
            "Protection against hotlinking and brute-force login attempts.",
          included: true,
        },
      ],
      support: [
        {
          text: "24/7/365 Instant Chat Support",
          tooltip: "Instant chat support available 24/7 throughout the year.",
          included: true,
        },
        {
          text: "30 Minute or Less Ticket Reply",
          tooltip: "Guaranteed response to support tickets within 30 minutes.",
          included: true,
        },
        {
          text: "24/7 Live Call Support",
          tooltip: "Phone support available at any time.",
          included: true,
        },
        {
          text: "24/7 What'sApp Support",
          tooltip: "Support via WhatsApp available around the clock.",
          included: true,
        },
        {
          text: "Priority Website Support",
          tooltip: "Your support requests get priority handling.",
          included: true,
        },
      ],
    },
    icon: "ultimate",
    description: "Best for Huge Resources",
    buttonText: "Add to Cart",
    infoText: "৳6999/year when you renew",
    savingsText: "24/7 WhatsApp & Call Support",
  },
  // Three years plans
  {
    title: "Basic ",
    price: 2997,
    currency: "৳",
    billingPeriod: "3-years",
    features: [
      {
        text: "10 GB Pure SSD Storage",
        tooltip:
          "High performance SSD storage for fast access and reliability.",
      },
      {
        text: "Standard Website Speed",
        tooltip:
          "Optimized for websites with moderate traffic and good load times.",
      },
      {
        text: "2 Domain Hosted",
        tooltip: "Host up to two separate domains under this plan.",
      },
      {
        text: "Free Domain (Triennially)",
        tooltip: "Get a free domain every three years.",
      },
      {
        text: "Lifetime Free SSL",
        tooltip: "Secure your website with SSL for lifetime.",
      },
      {
        text: "One Click WordPress Install",
        tooltip: "Easy WordPress setup with just one click.",
      },
      {
        text: "Advanced Malware Scanner",
        tooltip: "Automatic scanning for malware threats.",
      },
      {
        text: "Unlimited Bandwidth",
        tooltip: "No limits on website traffic bandwidth.",
      },
      {
        text: "Unlimited Subdomains",
        tooltip: "Create unlimited subdomains for your site.",
      },
      {
        text: "Fast, Autoscaling Hosting",
        tooltip: "Hosting that scales automatically with your traffic.",
      },
      {
        text: "Unlimited Databases",
        tooltip: "No limit on number of databases.",
      },
      {
        text: "Advanced Cache Management",
        tooltip: "Optimized caching for faster website performance.",
      },
    ],
    expandedFeatures: {
      server: [
        {
          text: "99.99% Uptime Guarantee",
          tooltip:
            "Our servers are guaranteed to be up and running 99.99% of the time.",
          included: true,
        },
        {
          text: "1 Core Hosting CPU",
          tooltip: "Dedicated CPU core for your hosting needs.",
          included: true,
        },
        {
          text: "512 MB Hosting RAM",
          tooltip: "512MB of RAM allocated for your hosting environment.",
          included: true,
        },
        {
          text: "1 MBPS I/O Speed",
          tooltip: "Input/Output speed of 1MB per second for disk operations.",
          included: true,
        },
        {
          text: "5 EP (Entry Process)",
          tooltip: "5 concurrent entry processes allowed for your website.",
          included: true,
        },
        {
          text: "PhpMyAdmin Tool",
          tooltip: "Access to PhpMyAdmin for easy database management.",
          included: true,
        },
        {
          text: "MySQL Database",
          tooltip: "MySQL database support included.",
          included: true,
        },
        {
          text: "Woocommerce Optimization",
          tooltip: "Special optimizations for Woocommerce stores.",
          included: false,
        },
        {
          text: "Multiple Hosting Locations",
          tooltip: "Choose from multiple server locations worldwide.",
          included: false,
        },
        {
          text: "Host PHP & Laravel Script",
          tooltip: "Support for PHP and Laravel applications.",
          included: false,
        },
        {
          text: "Integrated GIT Version Control",
          tooltip: "Built-in GIT version control system.",
          included: false,
        },
      ],
      security: [
        {
          text: "24/7 Monitoring By Experts",
          tooltip: "Our experts monitor your site 24/7 for any issues.",
          included: true,
        },
        {
          text: "Daily Virus Scanning",
          tooltip: "Automatic daily scans for viruses and malware.",
          included: true,
        },
        {
          text: "Integrated Web Application Firewall",
          tooltip: "Built-in firewall to protect your web applications.",
          included: true,
        },
        {
          text: "Two-Factor Authentication",
          tooltip: "Extra layer of security with 2FA for your hosting account.",
          included: true,
        },
        {
          text: "Block Visitors by IP or Country Specific",
          tooltip: "Ability to block visitors from specific IPs or countries.",
          included: false,
        },
        {
          text: "Hotlink & Brute-Force Login Protection",
          tooltip:
            "Protection against hotlinking and brute-force login attempts.",
          included: false,
        },
      ],
      support: [
        {
          text: "24/7/365 Instant Chat Support",
          tooltip: "Instant chat support available 24/7 throughout the year.",
          included: true,
        },
        {
          text: "30 Minute or Less Ticket Reply",
          tooltip: "Guaranteed response to support tickets within 30 minutes.",
          included: true,
        },
        {
          text: "24/7 Live Call Support",
          tooltip: "Phone support available at any time.",
          included: true,
        },
        {
          text: "24/7 What'sApp Support",
          tooltip: "Support via WhatsApp available around the clock.",
          included: true,
        },
        {
          text: "Priority Website Support",
          tooltip: "Your support requests get priority handling.",
          included: false,
        },
      ],
    },
    icon: "basic",
    description: "Ideal for Entry Level Website",
    buttonText: "Add to Cart",
    infoText: "৳6450/triennially when you renew",
    savingsText: "24/7 WhatsApp & Call Support",
  },
  {
    title: "Starter ",
    price: 6450,
    currency: "৳",
    billingPeriod: "3-years",
    features: [
      {
        text: "50 GB Pure SSD Storage",
        tooltip: "More SSD storage space for growing websites.",
      },
      {
        text: "Increased Website Speed",
        tooltip: "Faster loading times with better server resources.",
      },
      {
        text: "5 Domain Hosted",
        tooltip: "Host up to five domains under this plan.",
      },
      {
        text: "Free Domain (Triennially)",
        tooltip: "Get a free domain every three years.",
      },
      {
        text: "Lifetime Free SSL",
        tooltip: "Secure your website with SSL for lifetime.",
      },
      {
        text: "One Click WordPress Install",
        tooltip: "Easy WordPress setup with just one click.",
      },
      {
        text: "Advanced Malware Scanner",
        tooltip: "Automatic scanning for malware threats.",
      },
      {
        text: "Unlimited Bandwidth",
        tooltip: "No limits on website traffic bandwidth.",
      },
      {
        text: "Unlimited Subdomains",
        tooltip: "Create unlimited subdomains for your site.",
      },
      {
        text: "Fast, Autoscaling Hosting",
        tooltip: "Hosting that scales automatically with your traffic.",
      },
      {
        text: "Unlimited Databases",
        tooltip: "No limit on number of databases.",
      },
      {
        text: "Advanced Cache Management",
        tooltip: "Optimized caching for faster website performance.",
      },
    ],
    expandedFeatures: {
      server: [
        {
          text: "99.99% Uptime Guarantee",
          tooltip:
            "Our servers are guaranteed to be up and running 99.99% of the time.",
          included: true,
        },
        {
          text: "2 Core Hosting CPU",
          tooltip: "Two dedicated CPU cores for your hosting needs.",
          included: true,
        },
        {
          text: "2 GB Hosting RAM",
          tooltip: "2GB of RAM allocated for your hosting environment.",
          included: true,
        },
        {
          text: "10 MBPS I/O Speed",
          tooltip: "Input/Output speed of 10MB per second for disk operations.",
          included: true,
        },
        {
          text: "15 EP (Entry Process)",
          tooltip: "15 concurrent entry processes allowed for your website.",
          included: true,
        },
        {
          text: "PhpMyAdmin Tool",
          tooltip: "Access to PhpMyAdmin for easy database management.",
          included: true,
        },
        {
          text: "MySQL Database",
          tooltip: "MySQL database support included.",
          included: true,
        },
        {
          text: "Woocommerce Optimization",
          tooltip: "Special optimizations for Woocommerce stores.",
          included: true,
        },
        {
          text: "Multiple Hosting Locations",
          tooltip: "Choose from multiple server locations worldwide.",
          included: true,
        },
        {
          text: "Host PHP & Laravel Script",
          tooltip: "Support for PHP and Laravel applications.",
          included: true,
        },
        {
          text: "Integrated GIT Version Control",
          tooltip: "Built-in GIT version control system.",
          included: false,
        },
      ],
      security: [
        {
          text: "24/7 Monitoring By Experts",
          tooltip: "Our experts monitor your site 24/7 for any issues.",
          included: true,
        },
        {
          text: "Daily Virus Scanning",
          tooltip: "Automatic daily scans for viruses and malware.",
          included: true,
        },
        {
          text: "Integrated Web Application Firewall",
          tooltip: "Built-in firewall to protect your web applications.",
          included: true,
        },
        {
          text: "Two-Factor Authentication",
          tooltip: "Extra layer of security with 2FA for your hosting account.",
          included: true,
        },
        {
          text: "Block Visitors by IP or Country Specific",
          tooltip: "Ability to block visitors from specific IPs or countries.",
          included: false,
        },
        {
          text: "Hotlink & Brute-Force Login Protection",
          tooltip:
            "Protection against hotlinking and brute-force login attempts.",
          included: false,
        },
      ],
      support: [
        {
          text: "24/7/365 Instant Chat Support",
          tooltip: "Instant chat support available 24/7 throughout the year.",
          included: true,
        },
        {
          text: "30 Minute or Less Ticket Reply",
          tooltip: "Guaranteed response to support tickets within 30 minutes.",
          included: true,
        },
        {
          text: "24/7 Live Call Support",
          tooltip: "Phone support available at any time.",
          included: true,
        },
        {
          text: "24/7 What'sApp Support",
          tooltip: "Support via WhatsApp available around the clock.",
          included: true,
        },
        {
          text: "Priority Website Support",
          tooltip: "Your support requests get priority handling.",
          included: false,
        },
      ],
    },
    icon: "starter",
    description: "Ideal for Mid-level Websites",
    buttonText: "Add to Cart",
    infoText: "৳9999/triennially when you renew",
    savingsText: "24/7 WhatsApp & Call Support",
  },
  {
    title: "Pro ",
    price: 8997,
    currency: "৳",
    billingPeriod: "3-years",
    features: [
      {
        text: "100 GB Pure SSD Storage",
        tooltip: "Large SSD storage for heavy traffic websites.",
      },
      {
        text: "Super Fast Website Speed",
        tooltip: "Optimized servers for high-speed loading.",
      },
      { text: "10 Domain Hosted", tooltip: "Host up to ten domains." },
      {
        text: "Free Domain (Triennially)",
        tooltip: "Get a free domain every three years.",
      },
      {
        text: "Lifetime Free SSL",
        tooltip: "Secure your website with SSL for lifetime.",
      },
      {
        text: "One Click WordPress Install",
        tooltip: "Easy WordPress setup with just one click.",
      },
      {
        text: "Advanced Malware Scanner",
        tooltip: "Automatic scanning for malware threats.",
      },
      {
        text: "Unlimited Bandwidth",
        tooltip: "No limits on website traffic bandwidth.",
      },
      {
        text: "Unlimited Subdomains",
        tooltip: "Create unlimited subdomains for your site.",
      },
      {
        text: "Fast, Autoscaling Hosting",
        tooltip: "Hosting that scales automatically with your traffic.",
      },
      {
        text: "Unlimited Databases",
        tooltip: "No limit on number of databases.",
      },
      {
        text: "Advanced Cache Management",
        tooltip: "Optimized caching for faster website performance.",
      },
    ],
    expandedFeatures: {
      server: [
        {
          text: "99.99% Uptime Guarantee",
          tooltip:
            "Our servers are guaranteed to be up and running 99.99% of the time.",
          included: true,
        },
        {
          text: "3 Core Hosting CPU",
          tooltip: "Three dedicated CPU cores for your hosting needs.",
          included: true,
        },
        {
          text: "3 GB Hosting RAM",
          tooltip: "3GB of RAM allocated for your hosting environment.",
          included: true,
        },
        {
          text: "20 MBPS I/O Speed",
          tooltip: "Input/Output speed of 20MB per second for disk operations.",
          included: true,
        },
        {
          text: "30 EP (Entry Process)",
          tooltip: "30 concurrent entry processes allowed for your website.",
          included: true,
        },
        {
          text: "PhpMyAdmin Tool",
          tooltip: "Access to PhpMyAdmin for easy database management.",
          included: true,
        },
        {
          text: "MySQL Database",
          tooltip: "MySQL database support included.",
          included: true,
        },
        {
          text: "Woocommerce Optimization",
          tooltip: "Special optimizations for Woocommerce stores.",
          included: true,
        },
        {
          text: "Multiple Hosting Locations",
          tooltip: "Choose from multiple server locations worldwide.",
          included: true,
        },
        {
          text: "Host PHP & Laravel Script",
          tooltip: "Support for PHP and Laravel applications.",
          included: true,
        },
        {
          text: "Integrated GIT Version Control",
          tooltip: "Built-in GIT version control system.",
          included: true,
        },
      ],
      security: [
        {
          text: "24/7 Monitoring By Experts",
          tooltip: "Our experts monitor your site 24/7 for any issues.",
          included: true,
        },
        {
          text: "Daily Virus Scanning",
          tooltip: "Automatic daily scans for viruses and malware.",
          included: true,
        },
        {
          text: "Integrated Web Application Firewall",
          tooltip: "Built-in firewall to protect your web applications.",
          included: true,
        },
        {
          text: "Two-Factor Authentication",
          tooltip: "Extra layer of security with 2FA for your hosting account.",
          included: true,
        },
        {
          text: "Block Visitors by IP or Country Specific",
          tooltip: "Ability to block visitors from specific IPs or countries.",
          included: true,
        },
        {
          text: "Hotlink & Brute-Force Login Protection",
          tooltip:
            "Protection against hotlinking and brute-force login attempts.",
          included: true,
        },
      ],
      support: [
        {
          text: "24/7/365 Instant Chat Support",
          tooltip: "Instant chat support available 24/7 throughout the year.",
          included: true,
        },
        {
          text: "30 Minute or Less Ticket Reply",
          tooltip: "Guaranteed response to support tickets within 30 minutes.",
          included: true,
        },
        {
          text: "24/7 Live Call Support",
          tooltip: "Phone support available at any time.",
          included: true,
        },
        {
          text: "24/7 What'sApp Support",
          tooltip: "Support via WhatsApp available around the clock.",
          included: true,
        },
        {
          text: "Priority Website Support",
          tooltip: "Your support requests get priority handling.",
          included: false,
        },
      ],
    },
    icon: "pro",
    description: "Perfect for Professional Websites",
    buttonText: "Add to Cart",
    infoText: "৳12999/triennially when you renew",
    savingsText: "24/7 WhatsApp & Call Support",
    highlight: true,
    badge: "Most Popular",
  },
  {
    title: "Ultimate ",
    price: 14997,
    currency: "৳",
    billingPeriod: "3-years",
    features: [
      {
        text: "Unlimited Pure SSD Storage",
        tooltip: "Unlimited storage with pure SSD for best performance.",
      },
      {
        text: "Maximize Website Speed",
        tooltip: "Highest speed servers for max performance.",
      },
      {
        text: "Unlimited Domain Hosted",
        tooltip: "Host unlimited domains without restriction.",
      },
      {
        text: "Free Domain (Triennially)",
        tooltip: "Get a free domain every three years.",
      },
      {
        text: "Lifetime Free SSL",
        tooltip: "Secure your website with SSL for lifetime.",
      },
      {
        text: "One Click WordPress Install",
        tooltip: "Easy WordPress setup with just one click.",
      },
      {
        text: "Advanced Malware Scanner",
        tooltip: "Automatic scanning for malware threats.",
      },
      {
        text: "Unlimited Bandwidth",
        tooltip: "No limits on website traffic bandwidth.",
      },
      {
        text: "Unlimited Subdomains",
        tooltip: "Create unlimited subdomains for your site.",
      },
      {
        text: "Fast, Autoscaling Hosting",
        tooltip: "Hosting that scales automatically with your traffic.",
      },
      {
        text: "Unlimited Databases",
        tooltip: "No limit on number of databases.",
      },
      {
        text: "Advanced Cache Management",
        tooltip: "Optimized caching for faster website performance.",
      },
    ],
    expandedFeatures: {
      server: [
        {
          text: "99.99% Uptime Guarantee",
          tooltip:
            "Our servers are guaranteed to be up and running 99.99% of the time.",
          included: true,
        },
        {
          text: "4 Core of Hosting CPU",
          tooltip: "Four dedicated CPU cores for your hosting needs.",
          included: true,
        },
        {
          text: "4 GB Hosting RAM",
          tooltip: "4GB of RAM allocated for your hosting environment.",
          included: true,
        },
        {
          text: "40 MBPS I/O Speed",
          tooltip: "Input/Output speed of 40MB per second for disk operations.",
          included: true,
        },
        {
          text: "50 EP (Entry Process)",
          tooltip: "50 concurrent entry processes allowed for your website.",
          included: true,
        },
        {
          text: "PhpMyAdmin Tool",
          tooltip: "Access to PhpMyAdmin for easy database management.",
          included: true,
        },
        {
          text: "MySQL Database",
          tooltip: "MySQL database support included.",
          included: true,
        },
        {
          text: "Woocommerce Optimization",
          tooltip: "Special optimizations for Woocommerce stores.",
          included: true,
        },
        {
          text: "Multiple Hosting Locations",
          tooltip: "Choose from multiple server locations worldwide.",
          included: true,
        },
        {
          text: "Host PHP & Laravel Script",
          tooltip: "Support for PHP and Laravel applications.",
          included: true,
        },
        {
          text: "Integrated GIT Version Control",
          tooltip: "Built-in GIT version control system.",
          included: true,
        },
      ],
      security: [
        {
          text: "24/7 Monitoring By Experts",
          tooltip: "Our experts monitor your site 24/7 for any issues.",
          included: true,
        },
        {
          text: "Daily Virus Scanning",
          tooltip: "Automatic daily scans for viruses and malware.",
          included: true,
        },
        {
          text: "Integrated Web Application Firewall",
          tooltip: "Built-in firewall to protect your web applications.",
          included: true,
        },
        {
          text: "Two-Factor Authentication",
          tooltip: "Extra layer of security with 2FA for your hosting account.",
          included: true,
        },
        {
          text: "Block Visitors by IP or Country Specific",
          tooltip: "Ability to block visitors from specific IPs or countries.",
          included: true,
        },
        {
          text: "Hotlink & Brute-Force Login Protection",
          tooltip:
            "Protection against hotlinking and brute-force login attempts.",
          included: true,
        },
      ],
      support: [
        {
          text: "24/7/365 Instant Chat Support",
          tooltip: "Instant chat support available 24/7 throughout the year.",
          included: true,
        },
        {
          text: "30 Minute or Less Ticket Reply",
          tooltip: "Guaranteed response to support tickets within 30 minutes.",
          included: true,
        },
        {
          text: "24/7 Live Call Support",
          tooltip: "Phone support available at any time.",
          included: true,
        },
        {
          text: "24/7 What'sApp Support",
          tooltip: "Support via WhatsApp available around the clock.",
          included: true,
        },
        {
          text: "Priority Website Support",
          tooltip: "Your support requests get priority handling.",
          included: true,
        },
      ],
    },
    icon: "ultimate",
    description: "Best for Huge Resources",
    buttonText: "Add to Cart",
    infoText: "৳19999/triennially when you renew",
    savingsText: "24/7 WhatsApp & Call Support",
  },
];

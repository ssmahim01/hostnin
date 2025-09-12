import type { WordPressPricing } from "@/types/wordpress-pricing";

export const wordpressPricing: WordPressPricing = {
  title: "Choose Your Perfect Plan",
  plans: [
    {
    
      title: "WordPress Starter",
      priceMonthly: "৳2399/mo",
      priceYearly: "৳2399/yr",
      discount: "Save 0%",
      features: [
        "1 Website",
        "10 GB SSD Storage",
        "100 GB Bandwidth",
        "Free SSL Certificate",
        "Free Domain for 1 Year",
        "24/7 Support",
        "WordPress Auto Updates",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      title: "WordPress Plus",
      priceMonthly: "৳3599/mo",
      priceYearly: "৳3599/yr",
      discount: "Save 0%",
      features: [
        "5 Websites",
        "20 GB SSD Storage",
        "200 GB Bandwidth",
        "Free SSL Certificate",
        "Free Domain for 1 Year",
        "24/7 Support",
        "WordPress Auto Updates",
        "Daily Backups",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      title: "WordPress Pro",
      priceMonthly: "৳4799/mo",
      priceYearly: "৳4799/yr",
      discount: "Save 0%",
      features: [
        "Unlimited Websites",
        "50 GB SSD Storage",
        "Unlimited Bandwidth",
        "Free SSL Certificate",
        "Free Domain for 1 Year",
        "24/7 Support",
        "WordPress Auto Updates",
        "Daily Backups",
        "Priority Support",
      ],
      cta: "Get Started",
      popular: false,
    },
  ],
};

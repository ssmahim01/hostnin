export interface PricingPlan {
  title: string;
  priceMonthly: string;
  priceYearly: string;
  discount: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface WordPressPricing {
  title: string;
  plans: PricingPlan[];
}
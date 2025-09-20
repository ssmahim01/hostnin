export interface PricingPlan {
  title: string;
  price: number;
  currency: string;
  billingPeriod: "yearly" | "3-years";
  features: Array<{
    text: string;
    tooltip?: string;
  }>;
  expandedFeatures?: {
    general?: Array<{
      text: string;
      included: boolean;
      tooltip?: string;
    }>;
    primary?: Array<{
      text: string;
      included: boolean;
      tooltip?: string;
    }>;
    server: Array<{
      text: string;
      included: boolean;
      tooltip?: string;
    }>;
    security: Array<{
      text: string;
      included: boolean;
      tooltip?: string;
    }>;
    support: Array<{
      text: string;
      included: boolean;
      tooltip?: string;
    }>;
  };
  badge?: string;
  highlight?: boolean;
  savingsText?: string;
  buttonText?: string;
  infoText?: string;
  icon?: React.ReactNode;
  iconSrc?: string;
  description?: string;
}

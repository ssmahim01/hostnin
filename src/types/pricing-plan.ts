export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
  originalPrice?: {
    monthly: number;
    yearly: number;
  };
  isPopular?: boolean;
  features: string[];
  cta: string;
  guarantee: string;
  badge?: string;
}

export interface PricingFeature {
  category: string;
  items: string[];
}

export interface PricingPlansData {
  id: string;
  name: string;
  image?: string;
  description: string;
  price: {
    monthly: string;
    yearly: string;
  };
  originalPrice?: {
    monthly: number;
    yearly: number;
  };
  isPopular?: boolean;
  features: PricingFeature[];
  subHeading?: string;
  cta: string;
  guarantee: string;
  badge?: string;
}

export interface PricingFeature {
  category: string;
  items: string[];
}

export interface HostingTypeData {
  id: string;
  label: string;
  plans: PricingPlansData[];
}

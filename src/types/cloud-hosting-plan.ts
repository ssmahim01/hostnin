export interface CloudHostingPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  period: string;
  features: {
    basic: CloudHostingFeature[];
    mail: CloudHostingFeature[];
    database: CloudHostingFeature[];
    tech: CloudHostingFeature[];
    site: CloudHostingFeature[];
    support: CloudHostingFeature[];
  };
}

export interface CloudHostingFeature {
  name: string;
  value: string | boolean;
  highlight?: boolean;
}

export interface CloudHostingCategory {
  id: string;
  name: string;
  features: string[];
}

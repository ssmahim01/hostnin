export interface PlanItem {
  name: string;
  price: number;
  priceUnit: string;
  orderLink: string;
}

export interface Feature {
  label: string;
  values: string[];
}

export interface Section {
  title: string;
  features: Feature[];
}

export interface BdixHostingPlans {
  plans: PlanItem[];
  sections: Section[];
}

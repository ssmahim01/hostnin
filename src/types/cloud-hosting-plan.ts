export interface Plan {
  name: string;
  price: number;
  priceUnit: string;
  orderLink: string;
  currency?: string;
}

export interface Feature {
  label: string;
  values: (string | number)[];
}

export interface Section {
  title: string;
  features: Feature[];
}

export interface CloudHostingPlan {
  plans: Plan[];
  sections: Section[];
}

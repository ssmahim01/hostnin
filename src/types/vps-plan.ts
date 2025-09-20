export type VPSPlan = {
  name: string;
  price: number;
  priceUnit: string;
  orderLink: string;
};

export type VPSFeature = {
  label: string;
  values: (string | boolean)[];
};

export type VPSSection = {
  features: VPSFeature[];
};

export type VPSPlanData = {
  plans: VPSPlan[];
  sections: VPSSection[];
};

export interface VpsCloudFeature {
  icon: string;
  title: string;
  value: string;
}

export interface VPSPlanPackages {
  name: string;
  price: number;
  features: VpsCloudFeature[];
  link: string; 
}
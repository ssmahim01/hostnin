export interface Plan {
  id: string;
  title: string;
  price: string;
  period?: string;
  link: string;
}

export interface FeatureRow {
  key: string;
  label: string;
  values: [string, string, string];
}

export interface FeatureGroup {
  key: string;
  title?: string;
  rows: FeatureRow[];
}

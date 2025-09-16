import { LucideIcon } from "lucide-react";

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface HostingFeaturesProps {
  heading: string;
  subheading?: string;
}

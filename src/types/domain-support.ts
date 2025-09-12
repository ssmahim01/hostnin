import { LucideIcon } from "lucide-react";

export interface SupportSection {
  titleParts: string[];
  description: string;
  buttons: Button[];
  image: {
    src: string;
    alt: string;
  };
}

export interface Button {
  label: string;
  href: string;
  icon: LucideIcon;
}

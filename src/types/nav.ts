import { LucideIcon } from "lucide-react";

export interface SubLinkItem {
  label: string;
  href: string;
  icon?: LucideIcon;
  description?: string;
  badge?: string;
}

export type SubLinkItems = SubLinkItem[];

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: SubLinkItems;
}

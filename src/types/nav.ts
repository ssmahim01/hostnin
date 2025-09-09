export interface SubLinkItem {
  label: string;
  href: string;
}

export type SubLinkItems = SubLinkItem[];

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: SubLinkItems;
}

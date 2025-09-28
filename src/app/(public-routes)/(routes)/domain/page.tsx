import { Metadata } from "next";
import DomainBanner from "../../components/domain/domain-banner";
import SearchDomain from "../../components/domain/search-domain";
import DomainSupports from "../../components/domain/domain-supports";
import DomainFeatures from "../../components/domain/domain-features";
import DomainFAQs from "../../components/domain/domain-faqs";
import Offer from "../../../../components/shared/offer";

export const metadata: Metadata = {
  title: "Domain | Hostnin - Search & Register Your Domain",
  description:
    "Search and register your perfect domain name with Hostnin. Get affordable top-level domains starting from 599 TK/year with advanced features and easy management.",
  keywords: [
    "domain registration Bangladesh",
    "cheap domains",
    "buy domain",
    "domain search",
    "top-level domains",
    "Hostnin domains",
    ".com domain",
    ".net domain",
    ".org domain",
    ".info domain",
    ".xyz domain",
  ],
  openGraph: {
    title: "Domain | Hostnin",
    description:
      "Search and register your perfect domain name with Hostnin. Get affordable top-level domains starting from 599 TK/year with advanced features and easy management.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Domain | Hostnin",
    description:
      "Search and register your perfect domain name with Hostnin. Get affordable top-level domains starting from 599 TK/year with advanced features and easy management.",
  },
};

export default function Domain() {
  return (
    <>
      <DomainBanner />
      <SearchDomain />
      <DomainSupports />
      <DomainFeatures />
      <DomainFAQs />
      <Offer />
    </>
  );
}

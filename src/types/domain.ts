export interface Domain {
  id: string;
  tld: string;
  price: string;
  oldPrice: string;
  discount: string;
  image: {
    src: string;
    alt: string;
  };
  cta: {
    label: string;
    href: string;
  };
}

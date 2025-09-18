export interface SupportHero {
  name: string;
  role: string;
  email?: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
}

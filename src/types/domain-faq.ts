export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSection {
  title: string;
  description: string;
  faqs: FAQItem[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

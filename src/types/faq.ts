/* eslint-disable @typescript-eslint/no-explicit-any */

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  name: string;
  icon: any;
  questions: FAQItem[];
}

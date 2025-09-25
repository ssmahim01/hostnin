import type { Metadata } from "next";
import Reviews from "@/components/shared/reviews/reviews";
import { reviewsData } from "@/data/reviews";

export const metadata: Metadata = {
  title: "Customer Reviews | Hostnin - Web Hosting Reviews",
  description:
    "Read authentic customer reviews and testimonials about Hostnin's web hosting, cloud hosting, VPS, and dedicated server services. See why thousands of customers trust us.",
  keywords:
    "hostnin reviews, web hosting reviews, customer testimonials, hosting feedback, cloud hosting reviews, VPS reviews, dedicated server reviews",
  openGraph: {
    title: "Customer Reviews | Hostnin - Web Hosting Reviews",
    description:
      "Read authentic customer reviews and testimonials about Hostnin's web hosting, cloud hosting, VPS, and dedicated server services.",
    type: "website",
    url: "https://hostnin.com/reviews",
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Reviews | Hostnin - Web Hosting Reviews",
    description:
      "Read authentic customer reviews and testimonials about Hostnin's web hosting services.",
  },
  alternates: {
    canonical: "https://hostnin.com/reviews",
  },
};

export default function ReviewsPage() {
  return <Reviews reviews={reviewsData} />;
}
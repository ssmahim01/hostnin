import type { Metadata } from "next";
import VideoReviews from "../../../../components/shared/video-reviews/video-reviews";

export const metadata: Metadata = {
  title: "Customer Video Reviews | Hostnin",
  description:
    "Watch authentic customer success stories and see how Hostnin helps businesses grow with fast, reliable hosting solutions.",
  openGraph: {
    title: "Customer Video Reviews | Hostnin",
    description:
      "Watch authentic customer success stories and see how Hostnin helps businesses grow with fast, reliable hosting solutions.",
    url: "/video-reviews",
    siteName: "Hostnin",
    images: [
      {
        url: "/assets/professional-business-customer-testimonial.jpg",
        width: 1200,
        height: 630,
        alt: "Customer Success Stories at Hostnin",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Video Reviews | Hostnin",
    description:
      "Watch authentic customer success stories and see how Hostnin helps businesses grow with fast, reliable hosting solutions.",
    images: ["/assets/professional-business-customer-testimonial.jpg"],
  },
};

export default function VideoReviewsPage() {
  return (
    <div className="bg-background">
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />

      <div className="relative">
        <VideoReviews show={true} featuresShow={true} />
      </div>
    </div>
  );
}

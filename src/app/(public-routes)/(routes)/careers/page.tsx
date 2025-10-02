import type { Metadata } from "next";
import CareersBanner from "../../components/about/careers/careers-banner";
import JobApply from "../../components/about/careers/apply-job";
import JobOpenings from "../../components/about/careers/job-listings";

export const metadata: Metadata = {
  title: "Careers | Hostnin",
  description:
    "Explore exciting job opportunities at Hostnin. Join our team and help us make online success possible for everyone.",
  keywords: ["Hostnin careers", "Hostnin jobs", "work at Hostnin"],
   openGraph: {
    title: "Careers | Hostnin",
    description:
      "Explore exciting job opportunities at Hostnin. Join our team and help us make online success possible for everyone.",
    url: "https://hostnin.com/careers",
    type: "website",
    images: [
      {
        url: "https://hostnin.com/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hostnin Hosting Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | Hostnin",
    description:
      "Explore exciting job opportunities at Hostnin. Join our team and help us make online success possible for everyone.",
    images: ["https://hostnin.com/assets/og-image.jpg"],
  },
};

export default function CareersPage() {
  return (
    <>
      <CareersBanner />
      <div id="job-apply">
        <JobApply />
      </div>
      <div id="job-listings">
        <JobOpenings />
      </div>
    </>
  );
}

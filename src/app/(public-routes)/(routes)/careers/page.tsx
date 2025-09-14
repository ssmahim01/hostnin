import type { Metadata } from "next";
import CareersBanner from "../../components/about/careers/careers-banner";
import JobApply from "../../components/about/careers/apply-job";
import JobOpenings from "../../components/about/careers/job-listings";

export const metadata: Metadata = {
  title: "Careers | Hostnin",
  description:
    "Explore exciting job opportunities at Hostnin. Join our team and help us make online success possible for everyone.",
  keywords: ["Hostnin careers", "Hostnin jobs", "work at Hostnin"],
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

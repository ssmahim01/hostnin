"use client";

import Link from "next/link";
import JobCard from "./job-card";
import { jobs } from "@/data/job-listings";

export default function JobOpenings() {
  const genericGmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    "careers@hostnin.com"
  )}&su=${encodeURIComponent(
    "Application for a position at Hostnin"
  )}&body=${encodeURIComponent(
    `Hello,\n\nI am interested in joining Hostnin.\n\nMy details:\n\n[Write your cover letter here]\n\nThank you.`
  )}`;

  return (
    <section className="md:pt-10 pb-14">
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1
            id="job-section"
            className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4"
          >
            Current Openings
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Join our team and help us deliver exceptional service to our clients
          </p>
        </div>

        <div className="space-y-8">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        <div className="mt-12 text-center justify-center flex md:flex-row flex-col gap-2 items-center text-gray-500 dark:text-gray-400 text-sm">
          <p>Can&apos;t find a suitable position? Send your resume to </p>
          <Link
            href={genericGmailLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
            aria-label="Send your resume to careers@hostnin.com"
          >
            careers@hostnin.com
          </Link>
        </div>
      </div>
    </section>
  );
}

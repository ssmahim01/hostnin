"use client";

import type { JobListing } from "@/types/job-listing";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, CalendarDays } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";

type JobCardProps = {
  job: JobListing;
};

export default function JobCard({ job }: JobCardProps) {
  const gmailLink = useMemo(() => {
    const to = encodeURIComponent(job.applyEmail);
    const subject = encodeURIComponent(`Application for ${job.title} position`);
    const body = encodeURIComponent(
      `Hello,\n\nI am interested in applying for the ${job.title} role at Hostnin.\n\nMy details:\n\n[Write your cover letter here]\n\nThank you.`
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
  }, [job]);

  return (
    <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <CardContent className="p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
          <div className="flex-1">
            <div className="flex justify-between items-center gap-3 mb-2">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
                {job.title}
              </h3>

              <span className="flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs md:text-[15px] font-medium rounded-full uppercase tracking-wide">
                <MapPin className="h-4 w-4 mr-1" />
                {job.locationLabel}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 md:mt-5">
              <p className="text-gray-600 dark:text-gray-300 font-medium text-lg flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-gray-400 dark:text-gray-400" />
                {job.schedule}
              </p>

              <div className="flex flex-wrap gap-2">
                {job.tags.map((t) => (
                  <Badge
                    key={t}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          {job.description}
        </p>

        <div className="border-t border-gray-100 dark:border-gray-700 pt-6">
          <Link
            href={gmailLink}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Apply for ${job.title}`}
          >
            Apply Now
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

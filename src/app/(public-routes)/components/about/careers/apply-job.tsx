"use client";

import { ApplyJobData } from "@/data/apply-job";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function JobApply() {
  const { left, right } = ApplyJobData;

  // Smooth scroll function
  const handleScrollToJobListings = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const section = document.querySelector("#job-listings");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const genericGmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    "careers@hostnin.com"
  )}&su=${encodeURIComponent(
    "Application for a position at Hostnin"
  )}&body=${encodeURIComponent(
    `Hello,\n\nI am interested in joining Hostnin.\n\nMy details:\n\n[Write your cover letter here]\n\nThank you.`
  )}`;

  return (
    <section className="bg-muted dark:bg-gray-900 pb-10 px-4">
      <Card
        id="job-apply"
        className="max-w-7xl mx-auto overflow-hidden rounded-2xl shadow-lg bg-background p-0"
      >
        <div className="md:flex">
          {/* Left gradient column */}
          <div className="md:w-1/2 bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">{left.title}</h2>
            <p className="mb-6 text-blue-100">{left.description}</p>

            <div className="space-y-4">
              {left.perks.map((perk, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="bg-white/20 p-2 rounded-full mr-3">
                    <Check className="h-5 w-5" />
                  </div>
                  <span>{perk}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right form column */}
          <div className="md:w-1/2 p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              {right.title}
            </h3>
            <p className="text-muted-foreground mb-6">{right.description}</p>

            <Card className="mb-6 bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800">
              <CardContent className="py-0 px-5 font-semibold flex gap-2 md:flex-row flex-col items-center">
                <p className="text-foreground">
                  Send your CV to{" "}
                  </p>
                  <Link
                    href={genericGmailLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                    aria-label="Send your resume to careers@hostnin.com"
                  >
                    careers@hostnin.com
                  </Link>
              </CardContent>
            </Card>

            <div className="my-8">
              <Separator />
              <div className="relative flex justify-center">
                <span className="bg-background px-3 text-sm text-muted-foreground -mt-3">
                  or
                </span>
              </div>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                onClick={handleScrollToJobListings}
                className="inline-flex cursor-pointer hover:scale-105 items-center gap-2 bg-blue-600 hover:bg-blue-700 py-6 text-white"
              >
                {right.buttonText}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}

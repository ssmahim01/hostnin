"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { ReactNode } from "react";

interface Review {
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

interface RatingSource {
  icon: ReactNode;
  label: string;
  score: string;
  link: string;
}

const reviews: Review[] = [
  {
    name: "Mostafizur Rahman Santo",
    role: "Businessman",
    avatar: "/assets/r-1.png",
    content:
      "One of the best hosting services I've ever used, super-fast hosting at a reasonable price. fast customer service, and the service agents are very professional. I'm fully satisfied with their service. I wish hostnin best of luck!",
    rating: 5,
  },
  {
    name: "Al Amin Robin",
    role: "Web Developer",
    avatar: "/assets/r-2.png",
    content:
      "Hostnin is an awesome hosting company and service provider. They are always there when I need them. They helped me a lot of times, and I love their support. I am a user of their premium hosting, and the server is too fast.",
    rating: 5,
  },
  {
    name: "Aqib Javed",
    role: "Freelancer",
    avatar: "/assets/r-7.webp",
    content:
      "Their Quality, affordability, and responsiveness dependable, high-quality maintenance services and assistance Highly Recommended. In Hostnin, i never gets any slower support which is very much appriciated.",
    rating: 5,
  },
];

const ratingSources: RatingSource[] = [
  {
    icon: (
      <svg
        viewBox="0 0 488 512"
        fill="#4285F4"
        className="w-14 h-14 md:w-16 md:h-16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
      </svg>
    ),
    label: "Hostnin is rated “Excellent” with 5/5 on",
    score: "Google Business Review",
    link: "https://www.google.com/search?q=hostnin",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="#1E3A8A"
        className="w-14 h-14 md:w-16 md:h-16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="none" d="M0 0h24v24H0V0z" />
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm7.48 7.16-5.01-.43-2-4.71c3.21.19 5.91 2.27 7.01 5.14zm-5.07 6.26L12 13.98l-2.39 1.44.63-2.72-2.11-1.83 2.78-.24L12 8.06l1.09 2.56 2.78.24-2.11 1.83.64 2.73zm-2.86-11.4-2 4.72-5.02.43c1.1-2.88 3.8-4.97 7.02-5.15zM4 12c0-.64.08-1.26.23-1.86l3.79 3.28-1.11 4.75A7.982 7.982 0 0 1 4 12zm3.84 6.82L12 16.31l4.16 2.5A7.924 7.924 0 0 1 11.99 20c-1.52 0-2.94-.44-4.15-1.18zm9.25-.65-1.11-4.75 3.79-3.28c.14.59.23 1.22.23 1.86 0 2.48-1.14 4.7-2.91 6.17z" />
      </svg>
    ),
    label: "Hostnin is rated “Excellent” with 4.9/5 on",
    score: "View in Trustpilot",
    link: "https://www.trustpilot.com/review/hostnin.com",
  },
];

export default function BDIXReviews() {
  return (
    <section className="relative pt-10 lg:pt-28 pb-10 my-10 sm:pb-20 px-2 sm:px-6 lg:px-8 overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-center bg-cover"
        style={{ backgroundImage: 'url("/assets/bg-shape.svg")' }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-5xl font-bold text-white mb-2 sm:mb-4">
            Read our customer reviews
          </h2>
          <p className="text-gray-300 text-[15px] sm:text-[17px] max-w-3xl mx-auto">
            We are consistently rated 5 stars by our customers. With over 100
            reviews on Trustpilot and Facebook, see for yourself why you can
            trust us to power your website.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {reviews.map((review, idx) => (
            <Card key={idx} className="bg-white dark:bg-gray-800 shadow-lg p-4">
              <CardHeader className="flex items-center gap-4">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={80}
                    height={80}
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg text-gray-900 dark:text-white">
                    {review.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                    {review.role}
                  </p>
                </div>
              </CardHeader>
              {/* Stars */}
              <CardContent className="ml-2 px-4">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
                <p className="text-gray-700 dark:text-gray-200 text-base md:text-[17px] leading-relaxed">
                  {review.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Ratings Sources */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {ratingSources.map((source, idx) => (
            <Card key={idx} className="flex items-center gap-4 p-0">
              <CardContent className="flex gap-2 items-center py-7">
                <div>{source.icon}</div>
                <div>
                  <p className="text-base sm:text-base text-gray-600 dark:text-gray-300">
                    {source.label}
                  </p>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={source.link}
                    className="text-blue-500 font-bold text-base md:text-sm"
                  >
                    {source.score}
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

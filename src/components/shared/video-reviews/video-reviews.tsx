/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Play,
  Volume2,
  Maximize,
  ArrowRight,
  Star,
  ChevronRight,
} from "lucide-react";
import { VideoReview } from "@/types/reviews/video-reviews";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { testimonials } from "@/data/testimonials";

const videoReviews: VideoReview[] = [
  {
    id: "1",
    title: "The Rosepit Story | Fast & Reliable Hosting by Hostnin",
    customerName: "Customer Success Stories",
    customerRole: "Hostnin",
    customerAvatar: "/assets/hostnin-logo.jpg",
    company: "Rosepit",
    embedUrl: "https://www.youtube.com/embed/cvGdfX41vsg?si=6u_SHPo5uXUBvR1x",
    thumbnail: "/assets/professional-business-customer-testimonial.jpg",
    duration: "1:21",
    category: "Business Growth",
  },
];

export default function VideoReviews({
  show,
  featuresShow,
}: {
  show?: boolean;
  featuresShow?: boolean;
}) {
  const [selectedVideo, setSelectedVideo] = useState<VideoReview>(
    videoReviews[0]
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const pathname = usePathname();

  return (
    <section
      className={`${
        pathname === "/video-reviews" ? "pt-24 pb-16" : "pt-5 pb-1"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {pathname !== "/reviews" && (
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-2">
              Watch Customer Success Stories
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              See how Hostnin has helped businesses like yours achieve their
              goals with reliable hosting solutions.
            </p>
          </div>
        )}

        {/* Main Video Player */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 p-0">
              <div className="aspect-video relative bg-black rounded overflow-hidden">
                <iframe
                  src={selectedVideo.embedUrl}
                  title={selectedVideo.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Video Info */}
              <div className="pt-0 pb-4 px-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {selectedVideo.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                        {selectedVideo.category}
                      </span>
                      <span>•</span>
                      <span>{selectedVideo.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Customer Info */}
                <div className="flex items-center gap-4 p-2 bg-accent rounded-lg">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Image
                      src={selectedVideo?.customerAvatar || ""}
                      alt={selectedVideo?.customerName}
                      width={70}
                      height={70}
                      className="object-cover w-full h-full rounded-full border-4 border-blue-500"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {selectedVideo.customerName}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {selectedVideo.customerRole}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div>
            {/* Video Playlist & Info */}
            {show && (
              <div className="space-y-6">
                {/* Customer Avatars */}
                <div className="bg-card/50 backdrop-blur-sm border-border/50 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-3">
                      {testimonials.slice(0, 4).map((testimonial, i) => (
                        <Avatar
                          key={i}
                          className="w-12 h-12 border-3 border-white dark:border-slate-800 ring-2 ring-blue-100 dark:ring-blue-900/30"
                        >
                          <AvatarImage
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="object-cover"
                          />
                          <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white text-sm font-medium">
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                      <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 rounded-full flex items-center justify-center border-3 border-white dark:border-slate-800 ring-2 ring-blue-100 dark:ring-blue-900/30">
                        <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                          +22
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">
                        Happy Customers
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Join thousands of satisfied users
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/reviews"
                    className="mt-2 inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm transition-colors"
                  >
                    View all reviews
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Trust Indicators */}
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                  <h4 className="font-bold text-foreground text-lg -mb-1">
                    Why Customers Choose Hostnin
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-sm text-gray-700 dark:text-gray-200">
                        Lightning-fast loading speeds
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-sm text-gray-700 dark:text-gray-200">
                        99.9% uptime guarantee
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-sm text-gray-700 dark:text-gray-200">
                        Advanced security features
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-sm text-gray-700 dark:text-gray-200">
                        Scalable hosting solutions
                      </span>
                    </div>
                  </div>
                </Card>

                {/* Video Stats */}
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                  <h4 className="font-bold text-foreground text-lg -mb-1">
                    Customer Satisfaction
                  </h4>
                  <div className="space-y-5">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-900 dark:text-gray-100 font-semibold">
                          Performance
                        </span>
                        <span className="text-foreground">99%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-blue-500 dark:bg-blue-400 h-2 rounded-full"
                          style={{ width: "99%" }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-900 dark:text-gray-100 font-semibold">
                          Support Quality
                        </span>
                        <span className="text-foreground">98%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-blue-500 dark:bg-blue-400 h-2 rounded-full"
                          style={{ width: "98%" }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-900 dark:text-gray-100 font-semibold">
                          Value for Money
                        </span>
                        <span className="text-foreground">100%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-blue-500 dark:bg-blue-400 h-2 rounded-full"
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            )}
          </div>
        </div>

        {/* Additional Features */}
        {featuresShow && (
          <div className="grid md:grid-cols-3 gap-5">
            <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 hover:scale-105 ease-in-out transition-transform transform duration-500">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto">
                <Play className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-foreground">
                Authentic Reviews
              </h3>
              <p className="text-sm text-muted-foreground">
                Real customers sharing their genuine experiences with Hostnin
                hosting services.
              </p>
            </Card>

            <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 hover:scale-105 ease-in-out transition-transform transform duration-500">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto">
                <Volume2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-foreground ">
                Success Stories
              </h3>
              <p className="text-sm text-muted-foreground">
                Discover how businesses have grown and succeeded with our
                hosting platform.
              </p>
            </Card>

            <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 hover:scale-105 ease-in-out transition-transform transform duration-500">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto">
                <Maximize className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-foreground ">Full Control</h3>
              <p className="text-sm text-muted-foreground">
                Watch videos with full playback controls and high-quality
                streaming experience.
              </p>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}

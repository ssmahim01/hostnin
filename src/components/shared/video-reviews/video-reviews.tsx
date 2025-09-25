/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Play, Volume2, Maximize, ArrowRight } from "lucide-react";
import { VideoReview } from "@/types/reviews/video-reviews";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const videoReviews: VideoReview[] = [
  {
    id: "1",
    title: "The Rosepit Story | Fast & Reliable Hosting by Hostnin",
    customerName: "Md. Ariful Islam",
    customerRole: "Founder",
    customerAvatar: "/assets/ariful-islam.jpg",
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
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-2">
            Watch Customer Success Stories
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            See how Hostnin has helped businesses like yours achieve their goals
            with reliable hosting solutions.
          </p>
        </div>

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
                <div className="flex items-center gap-4 dark:p-2 dark:bg-muted/30 rounded-lg">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Image
                      src={selectedVideo?.customerAvatar || ""}
                      alt={selectedVideo?.customerName}
                      width={70}
                      height={70}
                      className="object-cover w-full h-full rounded-full border-4 border-blue-400"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {selectedVideo.customerName}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {selectedVideo.customerRole} at {selectedVideo.company}
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
                {/* Trust Indicators */}
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                  <h4 className="font-bold text-foreground text-lg">
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
                        24/7 expert support
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
                  <h4 className="font-bold text-foreground text-lg">
                    Customer Satisfaction
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-900 dark:text-gray-100 font-semibold">
                          Performance
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
                          Support Quality
                        </span>
                        <span className="text-foreground">96%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-blue-500 dark:bg-blue-400 h-2 rounded-full"
                          style={{ width: "96%" }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-900 dark:text-gray-100 font-semibold">
                          Value for Money
                        </span>
                        <span className="text-foreground">94%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-blue-500 dark:bg-blue-400 h-2 rounded-full"
                          style={{ width: "94%" }}
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* View All Stories Button */}
            {pathname === "/" && (
              <Link href="/video-reviews" className="block w-full mt-6">
                <button
                  className="w-full bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg 
                hover:cursor-pointer transition-transform flex gap-2 items-center justify-center ease-in-out duration-500 transform hover:scale-105"
                >
                  <span>View All Stories</span> <ArrowRight />
                </button>
              </Link>
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

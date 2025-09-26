"use client";

import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  const pathname = usePathname();

  return (
    <section className={`${pathname === "/" ? "pt-8 pb-16" : "pt-4 pb-10"}`}>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-500 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-current" />
            96% Customer Satisfaction!
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 text-balance">
            <span className="text-blue-600 dark:text-blue-400">Trusted</span> by
            5,400+ Happy Customers
          </h2>

          <p className="text-sm md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-pretty">
            Don&apos;t just take our word for it. Here&apos;s what our customers
            have to say about their hosting experience with Hostnin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Stats & Trust Indicators */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex md:flex-row lg:flex-col flex-col gap-5 justify-between items-center">
              {/* Google Reviews */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:w-auto w-full shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-20 h-12 bg-accent px-3 rounded-lg flex items-center justify-center">
                    <Image
                      width={64}
                      height={64}
                      src="/assets/google-logo.svg"
                      alt="Google"
                      className="w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      Google Reviews
                    </h3>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => {
                        const rating = 4.8;
                        const full = i + 1 <= Math.floor(rating);
                        const half =
                          !full &&
                          i + 1 === Math.ceil(rating) &&
                          rating % 1 !== 0;

                        if (full) {
                          return (
                            <Star
                              key={i}
                              className="w-4 h-4 text-yellow-400 fill-yellow-400"
                            />
                          );
                        }

                        if (half) {
                          return (
                            <span
                              key={i}
                              className="relative w-4 h-4 inline-block"
                            >
                              {/* yellow left half */}
                              <Star
                                className="absolute w-4 h-4 text-yellow-400 fill-yellow-400"
                                style={{ clipPath: "inset(0 50% 0 0)" }}
                              />
                              {/* grey right half */}
                              <Star className="absolute w-4 h-4 text-slate-300 dark:text-slate-600" />
                            </span>
                          );
                        }

                        return (
                          <Star
                            key={i}
                            className="w-4 h-4 text-slate-300 dark:text-slate-600"
                          />
                        );
                      })}
                      <span className="text-sm text-slate-600 dark:text-slate-400 ml-2">
                        4.8/5
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Based on 147+ verified reviews from our customers
                </p>
              </div>

              {/* Customer Avatars */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-200 dark:border-slate-700">
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
                        +2
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
            </div>
          </div>

          {/* Testimonials Carousel */}
          <div className="lg:col-span-8 relative">
            <Swiper
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 32,
                },
              }}
              navigation={{
                prevEl: ".testimonials-prev",
                nextEl: ".testimonials-next",
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              modules={[Navigation, Pagination, Autoplay]}
              loop={true}
              className="testimonials-swiper pb-12"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl p-0">
                    <div className="p-6 h-full flex flex-col">
                      {/* Quote Icon */}
                      <div className="mb-5">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <Quote className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      {/* Review Text */}
                      <blockquote className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6 text-base flex-grow">
                        &quot;{testimonial.review.slice(0, 120)}...&quot;
                      </blockquote>

                      {/* Customer Info */}
                      <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-700">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-12 h-12">
                            <AvatarImage
                              src={testimonial.avatar || "/placeholder.svg"}
                              alt={testimonial.name}
                              className="object-cover"
                            />
                            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white font-medium">
                              {testimonial.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-slate-900 dark:text-white">
                              {testimonial.name}
                            </p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                              Verified Customer
                            </p>
                          </div>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, i) => {
                            const full =
                              i + 1 <= Math.floor(testimonial.rating);
                            const half =
                              !full &&
                              i + 1 === Math.ceil(testimonial.rating) &&
                              testimonial.rating % 1 !== 0;

                            return (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  full
                                    ? "fill-yellow-400 text-yellow-400"
                                    : half
                                    ? "fill-yellow-400 text-yellow-400 opacity-50"
                                    : "text-slate-300 dark:text-slate-600"
                                }`}
                              />
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button className="testimonials-prev hover:cursor-pointer hover:scale-105 transition-transform transform ease-in-out duration-500 w-12 h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full shadow-sm hover:shadow-md hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center justify-center group">
                <ChevronLeft className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
              </button>
              <button className="testimonials-next hover:cursor-pointer hover:scale-105 transition-transform transform ease-in-out duration-500 w-12 h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full shadow-sm hover:shadow-md hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center justify-center group">
                <ChevronRight className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .testimonials-swiper .swiper-pagination {
          bottom: 0 !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          width: auto !important;
        }

        .testimonials-bullet {
          width: 8px !important;
          height: 8px !important;
          background: rgb(148 163 184) !important;
          opacity: 1 !important;
          margin: 0 4px !important;
          border-radius: 50% !important;
          transition: all 0.3s ease !important;
        }

        .testimonials-bullet-active {
          background: rgb(59 130 246) !important;
          transform: scale(1.25) !important;
        }

        .dark .testimonials-bullet {
          background: rgb(71 85 105) !important;
        }

        .dark .testimonials-bullet-active {
          background: rgb(96 165 250) !important;
        }
      `}</style>
    </section>
  );
}

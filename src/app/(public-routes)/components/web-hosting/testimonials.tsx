"use client";

import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Testimonial } from "@/types/testimonial";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Monayem Hossain",
    avatar:
      "https://res.cloudinary.com/daspo1tk3/image/upload/v1757453008/r-5_ntxuhe.webp",
    rating: 5,
    review:
      "I think that it's the best hosting site. Their service is very good. I am using the Premium Professional pack. It loads extremely quickly. They are very friendly. My love for them remained. The customer support team is exceptional and always responds promptly to any queries. The hosting performance exceeds my expectations.",
    platform: "Google",
  },
  {
    id: "2",
    name: "Abidur Rahman",
    avatar:
      "https://res.cloudinary.com/daspo1tk3/image/upload/v1757453008/r-6_mdggkh.webp",
    rating: 5,
    review:
      "Outstanding hosting service! The uptime is incredible and the speed is amazing. Customer support is available 24/7 and they really know what they're doing. I've been using their services for over 2 years now and never had any major issues.",
    platform: "Google",
  },
  {
    id: "3",
    name: "Ahmed Rahman",
    avatar:
      "https://res.cloudinary.com/daspo1tk3/image/upload/v1757453007/r-3_rxebww.webp",
    rating: 5,
    review:
      "Excellent value for money. The hosting plans are very affordable and packed with features. Migration was seamless and the team helped me throughout the process. Highly recommend for small businesses.",
    platform: "Google",
  },
  {
    id: "4",
    name: "Mitchel Johnson",
    avatar:
      "https://res.cloudinary.com/daspo1tk3/image/upload/v1757453007/r-1_kfam9t.webp",
    rating: 5,
    review:
      "Best hosting provider I've ever used. The control panel is user-friendly and the performance is top-notch. Their backup system saved my website once and I'm forever grateful. Professional service all around.",
    platform: "Google",
  },
  {
    id: "5",
    name: "David Wilson",
    avatar:
      "https://res.cloudinary.com/daspo1tk3/image/upload/v1757453007/r-2_pjkj95.webp",
    rating: 5,
    review:
      "Fantastic hosting experience! The loading speed is incredible and the security features give me peace of mind. The technical support team is knowledgeable and responds quickly to any concerns.",
    platform: "Google",
  },
  {
    id: "6",
    name: "Saad Ahmed",
    avatar:
      "https://res.cloudinary.com/daspo1tk3/image/upload/v1757453007/r-4_1_bi7f2r.webp",
    rating: 5,
    review:
      "I've tried many hosting providers but this one stands out. The reliability is unmatched and the pricing is very competitive. The one-click WordPress installation made setup a breeze. Couldn't be happier!",
    platform: "Google",
  },
];

export function TestimonialsSection() {
  return (
    <section className="lg:py-16 py-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 items-center">
            {/* Left side content */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Image
                  width={100}
                  height={60}
                  quality={90}
                  priority
                  src="https://res.cloudinary.com/daspo1tk3/image/upload/v1757452795/google_kpi3cz.webp"
                  alt="Google"
                  className="w-20 h-8 object-contain"
                />
              </div>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6">
                4.8 out of 5 based on 147+ reviews.
              </p>

              <div className="mb-6">
                <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-2">
                  Hear from our
                </h2>
                <h3 className="text-3xl font-bold text-blue-900 dark:text-blue-100">
                  happy customers
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed max-w-lg">
                  Getting positive reviews from hundreds of clients means a lot
                  to us. We care about every feedback and adjust our services
                  accordingly.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <Avatar
                      key={i}
                      className="w-11 h-11 border-2 border-white dark:border-gray-800"
                    >
                      <AvatarImage
                        src={`${testimonials[i]?.avatar}`}
                        alt={`Customer ${i + 1}`}
                      />
                      <AvatarFallback>C{i + 1}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <span className="text-blue-600 dark:text-blue-400 font-medium hover:underline cursor-pointer">
                  📄 More Review
                </span>
              </div>
            </div>

            {/* Right side carousel */}
            <div className="w-full  relative">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={{
                  nextEl: ".swiper-button-next-custom",
                  prevEl: ".swiper-button-prev-custom",
                }}
                pagination={{
                  clickable: true,
                  bulletClass: "swiper-pagination-bullet-custom",
                  bulletActiveClass: "swiper-pagination-bullet-active-custom",
                }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                className="testimonials-swiper"
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <Card className="border-0 shadow-lg bg-white dark:bg-gray-800 p-0">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                          <Avatar className="w-16 h-16 flex-shrink-0">
                            <AvatarImage
                              src={testimonial.avatar || "/placeholder.svg"}
                              alt={testimonial.name}
                            />
                            <AvatarFallback className="text-lg">
                              {testimonial.name[0]}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-3">
                              <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                                {testimonial.name}
                              </h4>
                            </div>
                            <div className="flex items-center gap-1 mb-4">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                />
                              ))}
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                              {testimonial.review}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom navigation buttons */}
              {/* <div className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white dark:bg-gray-700 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                <svg
                  className="w-5 h-5 text-gray-600 dark:text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
              <div className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white dark:bg-gray-700 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                <svg
                  className="w-5 h-5 text-gray-600 dark:text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles for Swiper */}
      <style jsx global>{`
        .testimonials-swiper .swiper-pagination {
          bottom: -40px !important;
        }
        .swiper-pagination-bullet-custom {
          width: 8px;
          height: 8px;
          background: #cbd5e1;
          opacity: 1;
          margin: 0 4px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active-custom {
          background: #3b82f6;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
}

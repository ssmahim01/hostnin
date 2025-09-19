"use client";

import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import type { Testimonial } from "@/types/testimonial";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

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
  const { theme } = useTheme();
  const arrowImage =
    theme === "light" ? "/assets/arrow-dark.webp" : "/assets/right-arrow.png";

  return (
    <section className="pt-10 pb-16">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 items-center">
            {/* Left side content */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  width={100}
                  height={60}
                  quality={90}
                  priority
                  src="/assets/google-logo.svg"
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
                <Link
                  href={
                    "/reviews"
                  }
                  target="_blank"
                >
                  <div className="flex gap-2 items-center">
                    <Image
                      src={arrowImage}
                      alt="Right Arrow"
                      width={120}
                      height={90}
                      className={`${
                        theme === "light" ? "w-11 h-6" : "w-12 h-12"
                      }`}
                      priority
                    />
                    <Link href={"/reviews"}>
                      <span className="text-blue-600 dark:text-blue-400 font-medium hover:cursor-pointer">
                        More Review
                      </span>
                    </Link>
                  </div>
                </Link>
              </div>
            </div>

            <div className="flex-1 relative">
              <Swiper
                spaceBetween={30}
                navigation={{
                  prevEl: ".swiper-button-prev-custom",
                  nextEl: ".swiper-button-next-custom",
                }}
                pagination={{
                  clickable: true,
                  bulletClass: "swiper-pagination-bullet-custom",
                  bulletActiveClass: "swiper-pagination-bullet-active-custom",
                }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                loop={true}
                effect={"fade"}
                className="mySwiper testimonials-swiper rounded-xl w-full"
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id} className="rounded-xl">
                    <Card
                      className="
                        bg-white dark:bg-gray-800 
                        rounded-xl shadow-lg 
                        max-w-full 
                       md:h-[345px] h-[440px] 
                        flex flex-col
                        justify-between
                        py-4 sm:py-6 px-4 overflow-hidden 
                      "
                    >
                      <div className="flex items-center mb-4 px-5">
                        <Avatar className="w-20 h-20 rounded-full flex-shrink-0">
                          <AvatarImage
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="object-cover"
                          />
                          <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="ml-4 flex flex-col">
                          <span className="font-bold sm:font-extrabold text-lg sm:text-xl text-blue-900 dark:text-blue-100 leading-tight">
                            {testimonial.name}
                          </span>
                          <div className="flex items-center mt-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex-1 flex flex-col justify-between">
                        <p className="text-gray-600 dark:text-gray-300 text-base sm:text-base leading-relaxed max-w-full lg:px-3 px-7 mb-4">
                          {testimonial.review}
                        </p>
                        <div className="px-5 mt-auto">
                          <Image
                            src="/assets/quote-icon.svg"
                            alt="Quote"
                            width={50}
                            height={50}
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </Card>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom navigation buttons */}
              <div className="swiper-button-prev-custom absolute lg:-left-5 left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white dark:bg-gray-700 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
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
              <div className="swiper-button-next-custom absolute lg:-right-5 right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white dark:bg-gray-700 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
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
              </div>
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

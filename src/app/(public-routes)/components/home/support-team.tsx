"use client";

import { supportHeroes } from "@/data/support-heroes";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function SupportTeam() {
  return (
    <section className="py-14 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-6">
          Expert Support by an Outstanding Team
        </h2>
        <p className="text-center text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-14 max-w-2xl mx-auto">
          Our smart AI Assistant helps you fix issues quickly, but if you ever
          need extra care, our human experts are just a message away.
        </p>

        <div className="relative max-w-6xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              clickable: true,
            }}
            className="w-full"
          >
            {supportHeroes.map((hero) => (
              <SwiperSlide key={hero.name}>
                <Card className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg mx-auto max-w-5xl">
                  <CardContent className="flex flex-col md:flex-row items-center gap-8 p-10">
                    {/* Image Wrapper with outside border */}
                    <figure className="relative md:w-1/2 flex justify-center hover:scale-105 transition-transform duration-300">
                      <div className="relative w-64 h-64 rounded-full overflow-hidden">
                        <div className="absolute inset-0 rounded-full border-[6px] border-blue-600 -m-2" />
                        <Image
                          src={hero.image.src}
                          alt={hero.image.alt}
                          fill
                          className="object-cover"
                          priority
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 opacity-20" />
                      </div>
                    </figure>

                    {/* Text Content */}
                    <div className="md:w-1/2 text-center md:text-left">
                      <h3 className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-2">
                        Meet Our Support Hero
                      </h3>
                      <h4 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        {hero.name}
                      </h4>
                      <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
                        {hero.role}
                      </p>
                      <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
                        {hero.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}

            {/* Navigation Arrows */}
            <div className="swiper-button-prev absolute -left-16 top-1/2 -translate-y-1/2 text-blue-600 bg-white dark:bg-gray-800 rounded-full p-4 shadow-md cursor-pointer">
              <ArrowLeft className="w-6 h-6" />
            </div>
            <div className="swiper-button-next absolute -right-16 top-1/2 -translate-y-1/2 text-blue-600 bg-white dark:bg-gray-800 rounded-full p-4 shadow-md cursor-pointer">
              <ArrowRight className="w-6 h-6" />
            </div>
          </Swiper>

          {/* Pagination Dots outside card */}
          <div className="swiper-pagination !relative mt-8 flex justify-center gap-2" />
        </div>
      </div>
    </section>
  );
}

"use client";
import { supportedScripts } from "@/data/supported-scripts";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function SupportedScriptsCarousel() {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-7xl -bottom-60 sm:-bottom-68 z-20 px-4 sm:px-6 lg:px-10">
      <section className="bg-[#f8f8f8] dark:bg-neutral-900 px-2 sm:px-4 rounded-xl sm:rounded-2xl">
        <div
          className="
                max-w-7xl mx-auto 
                bg-no-repeat bg-center rounded-xl sm:rounded-2xl 
                bg-[url('/assets/rs-award-bg.png')] 
                dark:bg-none
                "
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 text-center text-black dark:text-white pt-6 sm:pt-8 md:pt-10 px-3">
            Our Supported Scripts
          </h2>
          <p className="text-gray-700 dark:text-gray-300 font-medium mb-4 sm:mb-6 max-w-2xl mx-auto text-center text-[15px] sm:text-sm md:text-base px-3 sm:px-4">
            Our platform allows you to run almost any script you need to run,
            except for cryptocurrency mining scripts.
          </p>

          <div className="relative max-w-4xl mx-auto pb-8 sm:pb-12 md:pb-16 px-2 sm:px-4">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                prevEl: ".prev-btn",
                nextEl: ".next-btn",
              }}
              spaceBetween={20}
              slidesPerView={2}
              loop={true}
              autoplay
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {supportedScripts.map((script, idx) => (
                <SwiperSlide key={idx}>
                  <div className="flex-1 bg-white dark:bg-neutral-800 rounded-lg sm:rounded-xl py-4 sm:py-6 md:py-10 px-2 sm:px-4 md:px-8 lg:px-40 flex flex-col items-center justify-center border border-gray-200 dark:border-neutral-700 min-w-[140px] sm:min-w-[200px] md:min-w-[300px]">
                    <div
                      className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full mb-2 sm:mb-3 md:mb-4"
                      style={{ background: "rgb(241, 246, 255)" }}
                    >
                      <Image
                        alt={script.name}
                        src={script.logo}
                        width={48}
                        height={48}
                        className="object-contain w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
                      />
                    </div>
                    <div className="font-bold text-sm sm:text-base md:text-lg text-black dark:text-white mt-1 sm:mt-2 text-center">
                      {script.name}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Buttons outside for manual navigation */}
            <div className="absolute -left-4 sm:-left-6 md:-left-10 top-[40%] -translate-y-1/2 z-10">
              <Button
                aria-label="Previous"
                className="prev-btn w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 cursor-pointer flex items-center justify-center rounded-full bg-[#06125a] text-white text-sm sm:text-lg md:text-xl focus:outline-none hover:bg-[#0d47a1] transition-colors duration-300"
              >
                <ArrowLeft />
              </Button>
            </div>
            <div className="absolute -right-4 sm:-right-6 md:-right-10 top-[40%] -translate-y-1/2 z-10">
              <Button
                aria-label="Next"
                className="next-btn w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 cursor-pointer flex items-center justify-center rounded-full bg-[#06125a] text-white text-sm sm:text-lg md:text-xl focus:outline-none hover:bg-[#0d47a1] transition-colors duration-300"
              >
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

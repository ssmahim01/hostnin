"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Mostafizur Rahman Santo",
    avatar: "/assets/r-1.png",
    text: "One of the best hosting service I've ever used. Super fast hosting at a reasonable price. fast customer service and the service agents are very professional. I'm fully satisfied with their service. I wish hostnin best of luck.",
  },
  {
    name: "Al Amin Robin",
    avatar: "/assets/r-2.png",
    text: "Hostnin is an awesome hosting company and service provider. They are always there when I need them. They helped me a lot of times, and I love their support. I am a user of their premium hosting, and the server is too fast.",
  },
  {
    name: "Saad Ahmed",
    avatar: "/assets/r-3.png",
    text: "One of the best Domain & Hosting provider I have ever seen. The best part about them what I liked most is their support. All of the time whenever I needed help about anything I they stayed always by my side. Really a great service provider.",
  },
  {
    name: "Monayem Hossain",
    avatar: "/assets/r-4.png",
    text: "I think that it's the best hosting site. Their service is very good. I am using the Premium Professional pack. It loads extremely quickly. They are very friendly. My love for them remained.",
  },
  {
    name: "Tiyaan",
    avatar: "/assets/r-5.png",
    text: "I am very pleased with the customer service. the assistant called Riyad was really helpful and resolved the problem very fast. They answer very quickly to all my questions. I rarely have issues with my hosting of websites. However, in each and every case this team never disappoints! They are extremely helpful, fast and detail oriented. I can say, best web hosting in bangladesh.",
  },
  {
    name: "Md. Mazharul Islam",
    avatar: "/assets/r-6.png",
    text: "I am Really Happy about their honesty performance. Alhamdulillah they are very honest, active & sincere. I am using there hosting. I think they provide the best hosting @ best price. Their Customer service is awesome. i really love you subahost. I hope you will always with us with best service and best support. May Allah always with you",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#f8f8f9] md:pt-32 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-10">
          <div>
            <h2 className="font-bold text-[28px] sm:text-3xl md:text-4xl text-black mb-2 leading-tight">
              What&apos;s Our Clients Say&apos;s
            </h2>
            <p className="text-gray-500 mb-4 max-w-xl text-base">
              Our migration service is free and quick. In most cases, we can
              have websites. Then click below to speak to our team.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-5 flex flex-col items-center min-w-[220px] border border-gray-100">
            <Image
              src="/assets/google-logo.svg"
              alt="Google"
              width={80}
              height={40}
            />
            <div className="flex items-center mb-1 mt-2 text-green-500 text-xl">
              ★★★★★
            </div>
            <div className="text-gray-700 text-sm font-medium">
              4.9 Excellent 250 Review
            </div>
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col justify-between h-[400px]">
                <div className="flex items-center mb-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden mr-4 border-4 border-white shadow flex-shrink-0">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={72}
                      height={72}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#1a2343]">
                      {t.name}
                    </h3>
                    <div className="flex mt-1">
                      <Image
                        src="/assets/green-star.svg"
                        alt="Star"
                        width={100}
                        height={50}
                      />
                    </div>
                  </div>
                </div>
                <p className="text-[#6b6b6b] text-[15px] md:text-base hover:overflow-y-auto flex-1 font-['Mulish',sans-serif]">
                  {t.text}
                </p>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="text-4xl text-[#f3f3f3] mt-4"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                </svg>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { usePathname } from "next/navigation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
    text: "I am very pleased with the customer service. the assistant called Riyad was really helpful and resolved the problem very fast. They answer very quickly to all my questions. I rarely have issues with my hosting of websites.",
  },
  {
    name: "Md. Mazharul Islam",
    avatar: "/assets/r-6.png",
    text: "I am Really Happy about their honesty performance. Alhamdulillah they are very honest, active & sincere. I am using there hosting. I think they provide the best hosting @ best price. Their Customer service is awesome.",
  },
];

export default function Testimonials() {
  const pathname = usePathname();

  return (
    <section
      className={`${
        pathname === "/hosting/dedicated-server" ||
        pathname === "/hosting/reseller-hosting"
          ? "pt-10 pb-16"
          : "md:pt-20 pt-10 pb-12"
      }`}
    >
      <div className="max-w-7xl mx-auto  px-4 md:px-6 lg:px-8">
        <div
          className={`${
            pathname === "/hosting/dedicated-server" ||
            pathname === "/hosting/reseller-hosting"
              ? "hidden"
              : "flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-10"
          }`}
        >
          <div>
            <h2 className="font-bold text-[28px] sm:text-3xl md:text-4xl text-gray-900 dark:text-white mb-2 leading-tight">
              What&apos;s Our Clients Say&apos;s
            </h2>
            <p className="text-gray-500 dark:text-neutral-400 mb-3 max-w-xl text-base">
              Our migration service is free and quick. In most cases, we can
              have websites. Then click below to speak to our team.
            </p>

            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:underline hover:text-blue-700 dark:hover:text-blue-500 ease-in-out transition-colors duration-500"
            >
              <span>View More Reviews</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="bg-accent rounded-lg shadow p-5 flex flex-col items-center min-w-[220px] border border-gray-100 dark:border-neutral-700">
            <Image
              src="/assets/google-logo.svg"
              alt="Google"
              width={80}
              height={40}
            />
            <div
              className={`flex items-center mb-1 mt-2 ${
                pathname === "/hosting/dedicated-server" ||
                pathname === "/hosting/reseller-hosting"
                  ? "text-amber-500"
                  : "text-green-500"
              } text-xl`}
            >
              ★★★★★
            </div>
            <div className="text-gray-700 dark:text-neutral-300 text-sm font-medium">
              4.9 Excellent 250 Review
            </div>
          </div>
        </div>

        <div
          className={`${
            pathname === "/hosting/dedicated-server" ||
            pathname === "/hosting/reseller-hosting"
              ? "flex flex-col justify-center items-center mb-8"
              : "hidden"
          }`}
        >
          <h2 className="font-bold text-[28px] sm:text-3xl md:text-4xl text-gray-900 dark:text-white mb-2 leading-tight">
            What&apos;s Our Clients Say&apos;s
          </h2>
          <p className="text-gray-500 dark:text-neutral-400 mb-2 text-center max-w-xl text-base">
            Our migration service is free and quick. In most cases, we can have
            websites. Then click below to speak to our team.
          </p>

          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:underline hover:text-blue-700 dark:hover:text-blue-500 ease-in-out transition-colors duration-500"
          >
            <span>View More Reviews</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={20}
          loop
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <Card className="bg-white dark:bg-slate-900 hover:scale-105 transition-transform transform duration-500 rounded-lg shadow-sm lg:h-[350px] md:h-[290px] h-[340px] flex flex-col justify-between">
                <CardHeader className="flex flex-row items-center gap-4 pb-0">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white dark:border-neutral-700 shadow flex-shrink-0">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={72}
                      height={72}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                      {t.name}
                    </h3>
                    <div className="flex mt-1">
                      {pathname === "/hosting/dedicated-server" ||
                      pathname === "/hosting/reseller-hosting" ? (
                        <span className="text-amber-400 text-xl"> ★★★★★</span>
                      ) : (
                        <Image
                          src="/assets/green-star.svg"
                          alt="Star"
                          width={100}
                          height={50}
                        />
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 pt-4 flex flex-col justify-between">
                  <p className="text-gray-700 dark:text-neutral-300 text-[15px] md:text-base font-['Mulish',sans-serif]">
                    {t.text}
                  </p>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    className="text-4xl text-gray-100 dark:text-neutral-700 mt-4"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                  </svg>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

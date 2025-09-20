"use client";

import { supportHeroes } from "@/data/support-heroes";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { AnimatedSupportTeam } from "@/components/ui/animated-heroes";

export default function SupportTeam() {
  return (
    <section className="pb-4 md:pb-10">
      <div className="container mx-auto px-4">
        <h2 className="lg:text-5xl text-4xl font-bold lg:font-extrabold text-center text-gray-900 dark:text-white mb-6">
          Expert Support by an Outstanding Team
        </h2>
        <p className="text-center text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-14 max-w-2xl mx-auto">
          Our smart AI Assistant helps you fix issues quickly, but if you ever
          need extra care, our human experts are just a message away.
        </p>

        <AnimatedSupportTeam supportHeroes={supportHeroes} autoplay={true} />
      </div>
    </section>
  );
}

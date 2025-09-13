"use client";

import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    src: "/assets/team/img1.webp",
    alt: "Team member 1",
    span: "row-span-2",
    height: "h-96",
  },
  {
    id: 2,
    src: "/assets/team/img2.png",
    alt: "Team member 2",
    span: "row-span-1",
    height: "h-48",
  },
  {
    id: 3,
    src: "/assets/team/img3.jpg",
    alt: "Team member 3",
    span: "row-span-2",
    height: "h-96",
  },
  {
    id: 4,
    src: "/assets/team/img4.webp",
    alt: "Team member 4",
    span: "row-span-1",
    height: "h-48",
  },
  {
    id: 5,
    src: "/assets/team/img6.jpg",
    alt: "Team member 5",
    span: "row-span-2",
    height: "h-96",
  },
  {
    id: 6,
    src: "/assets/team/img-7.jpg",
    alt: "Team member 6",
    span: "row-span-1",
    height: "h-48",
  },
  {
    id: 7,
    src: "/assets/team/img-8.jpg",
    alt: "Team member 7",
    span: "row-span-2",
    height: "h-96",
  },
  {
    id: 8,
    src: "/assets/team/img9.jpg",
    alt: "Team member 8",
    span: "row-span-1",
    height: "h-48",
  },
];

export default function OurTeam() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-0 pt-28 lg:pt-32">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">
        Our Team
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8 text-base md:text-lg">
        Meet the amazing people who make everything possible.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className={`overflow-hidden rounded-lg relative w-full ${member.span} ${member.height} shadow-lg dark:shadow-gray-800 bg-white dark:bg-gray-900`}
          >
            <Image
              src={member.src}
              alt={member.alt}
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

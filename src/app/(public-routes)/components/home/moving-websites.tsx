"use client";

import Image from "next/image";
import Link from "next/link";

const movingWebsiteData = {
  tag: "Moving Websites",
  title: "Moving From Another Host?",
  highlight: "We'll Migrate your site for",
  description:
    "Migrating one hosting to another is daunting this is why we have dedicated team for migration of your websites. Let's sit relax and look how your website migrate in a moment. We process this migration in 3 steps: Backup, transfer and restore.",
  button: {
    label: "View Pricing Plan",
  },
  gif: "/assets/gif-assets/2nd-motion.gif",
};

export default function MovingWebsites() {
  // Smooth scroll function
  // const handleScrollToPlan = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   const section = document.querySelector("#hosting-plans");
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <section className="pt-10 pb-5">
      <div className="container max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center md:gap-10">
        {/* Left GIF */}
        <div className="md:w-1/2 h-full flex justify-center">
          <Image
            src={movingWebsiteData.gif}
            alt={movingWebsiteData.title}
            width={1200}
            height={900}
            unoptimized 
            className="max-w-full w-full h-full object-cover rounded-lg"
            priority
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <div className="text-blue-600 font-semibold mb-2 flex items-center justify-center md:justify-start gap-2">
            <span>Moving Websites</span>
            <span className="w-6 h-0.5 bg-blue-600 inline-block align-middle"></span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
            {movingWebsiteData.title}
          </h2>
          <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            {movingWebsiteData.highlight}{" "}
            <span className="text-blue-500 font-medium">FREE!</span>
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {movingWebsiteData.description}
          </p>
          <Link href={"/pricing"}>
            <button
              className="px-7 py-3 cursor-pointer bg-white dark:bg-transparent dark:border-gray-100 dark:hover:bg-white/90 dark:hover:text-blue-600 dark:text-white border border-blue-600 text-blue-600 font-bold rounded-lg shadow 
             hover:bg-blue-700 hover:text-white transform hover:scale-105 
             transition-all duration-300 ease-in-out"
            >
              <p>{movingWebsiteData.button.label}</p>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

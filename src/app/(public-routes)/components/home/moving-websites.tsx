"use client";

import Image from "next/image";

const movingWebsiteData = {
  tag: "Moving Websites",
  title: "Moving From Another Host?",
  highlight: "We'll Migrate your site for",
  description:
    "Migrating one hosting to another is daunting this is why we have dedicated team for migration of your websites. Let's sit relax and look how your website migrate in a moment. We process this migration in 3 steps: Backup, transfer and restore.",
  button: {
    label: "View Pricing Plan",
  },
  image:
    "https://res.cloudinary.com/daspo1tk3/image/upload/v1757535103/features_ck3pps.webp",
};

export default function MovingWebsites() {
  // Smooth scroll function
  const handleScrollToPlan = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const section = document.querySelector("#hosting-plans");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src={movingWebsiteData.image}
            alt={movingWebsiteData.title}
            width={500}
            height={500}
            className="max-w-full h-auto object-contain"
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
          <button
            onClick={handleScrollToPlan}
            className="px-7 py-3 cursor-pointer bg-white border border-blue-600 text-blue-600 font-semibold rounded-lg shadow 
             hover:bg-blue-700 hover:text-white transform hover:scale-105 
             transition-all duration-300 ease-in-out"
          >
            <p>{movingWebsiteData.button.label}</p>
          </button>
        </div>
      </div>
    </section>
  );
}

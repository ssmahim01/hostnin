"use client";

import Image from "next/image";

export default function ContactHero() {
  return (
    <section
      className="pt-8 pb-12 px-2 sm:pt-12 lg:pr-2 lg:pl-[72px] sm:pb-20 sm:px-6 lg:pt-28 lg:pb-24 lg:px-10 relative bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url('/assets/sh-hero-bg.png'), linear-gradient(278deg, rgba(0, 40, 160, 0.9) 16%, rgba(0, 20, 80, 0.9) 98%)`,
      }}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between pt-12 lg:pt-0">
        {/* Text Content */}
        <div className="flex-1 text-white lg:pr-12 text-center lg:text-left mb-8 lg:mb-0">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6"
            style={{ fontFamily: "Urbanist, sans-serif" }}
          >
            Get in touch,
            <br />
            Feel free to contact
          </h1>
          <p
            className="text-base text-justify px-4 md:px-0"
            style={{ fontFamily: "Mulish, sans-serif" }}
          >
            We provide 24/7 Support through Messenger, webchat and also
            WhatsApp. If you need any additional features or request management
            support, please contact using the details.
          </p>
          <div className="mt-5 px-5 md:px-0">
            <a
              href="https://tawk.to/chat/64e3c190cc26a871b0308e91/1h8cqo8b6"
              className="bg-blue-700 hover:bg-blue-500 hover:text-white text-white font-semibold px-4 md:px-8 lg:px-6 py-2 md:py-3 rounded-full transition text-base sm:text-lg shadow w-full sm:w-auto flex items-center justify-center gap-2"
              style={{ fontFamily: "Urbanist, sans-serif" }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M431 320.6c0-4.4 1.2-8.6 3.3-12.2.6-1.1 1.4-2.1 2.1-3.1 17.4-26 27.6-57.1 27.6-90.3.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9-2.4 11.1-3.7 22.4-3.7 34.2 0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7 11.3-3.1 22.5-7.2 25.4-8.3 2.9-1.1 6.1-1.7 9.3-1.7 3.6 0 7 .7 10.1 2l56.7 20.1s2.4 1 3.9 1c4.4 0 8-3.5 8-8 0-1-.5-2.7-.5-2.7L431 320.6z"></path>
                <path d="M318.5 392.5c-3.6 1-8.2 2.1-13.2 3.2-10.5 2.2-23.9 4.5-34 4.5-96.2 0-171-76.8-171-169.1 0-6.6.7-15 1.5-21.4.6-4.3 1.3-8.6 2.3-12.8 1-4.5 2.2-9 3.5-13.4l-8 7.1C66.8 219.2 48 260 48 302.5c0 29.3 8.5 57.5 24.8 82 2.3 3.5 3.6 6.2 3.2 8-.4 1.8-11.9 62-11.9 62-.6 2.9.5 5.8 2.7 7.7 1.5 1.2 3.3 1.8 5.1 1.8 1 0 2-.2 2.9-.6l56.1-22.1c1.8-.7 3.7-1.1 5.7-1.1 0 0 2.4-.2 6.3 1.3 18.9 7.4 39.8 12 60.7 12 46.6 0 90.4-20.1 120.1-55.1 0 0 3.2-4.4 6.9-9.6-3.7 1.3-7.9 2.6-12.1 3.7z"></path>
              </svg>
              live chat
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 flex justify-center mt-4 sm:mt-8 lg:mt-0 w-full max-w-xs sm:max-w-md lg:max-w-xl xl:max-w-2xl h-full">
          <Image
            src="/assets/feature-image.png"
            alt="Server Illustration"
            width={400}
            height={400}
            className="object-contain w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* Contact Cards */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-20 w-full max-w-7xl mt-10">
        <div className="flex flex-col sm:flex-row gap-10 md:gap-6 sm:gap-10 justify-center items-stretch">
          {/* Hotline */}
          <ContactCard
            icon={
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
              </svg>
            }
            title="Hotline"
            description={["+880 1325 875 955", "(24/7 WhatsApp Support)"]}
          />

          {/* Email */}
          <ContactCard
            icon={
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M21 10V4c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2L1 16c0 1.1.9 2 2 2h11v-5c0-1.66 1.34-3 3-3h4zm-10 1L3 6V4l8 5 8-5v2l-8 5z"></path>
                <path d="M21 14v4c0 1.1-.9 2-2 2s-2-.9-2-2v-4.5c0-.28.22-.5.5-.5s.5.22.5.5V18h2v-4.5a2.5 2.5 0 0 0-5 0V18c0 2.21 1.79 4 4 4s4-1.79 4-4v-4h-2z"></path>
              </svg>
            }
            title="Email Us"
            description={[
              "info@hostnin.com (Management)",
              "Trade License ID: TRAD/CHTG/005863/2023",
            ]}
          />

          {/* Address */}
          <ContactCard
            icon={
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 576 512"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
              </svg>
            }
            title="Address"
            description={[
              "2nd Floor, Beside Proshanti Residential Area,",
              "Colonelhat, Chattogram",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

// Reusable Contact Card Component
function ContactCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string[];
}) {
  return (
    <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl pt-12 sm:pt-10 pb-6 sm:pb-8 min-w-0 flex flex-col justify-between items-start overflow-visible px-3 sm:px-6 lg:px-8 flex-1 transition-colors">
      <span className="absolute left-6 sm:left-10 -top-7 sm:-top-8 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-600 shadow-[0_0_30px_8px_rgba(37,99,235,0.4)] flex items-center p-3 justify-center text-white text-2xl sm:text-3xl z-20">
        {icon}
      </span>
      <span
        className="font-bold text-lg sm:text-xl text-[#03206B] dark:text-[#195aff] mb-2 text-start"
        style={{ fontFamily: "Urbanist, sans-serif" }}
      >
        {title}
      </span>
      <p
        className="text-gray-600 dark:text-gray-300 text-sm sm:text-base relative z-10 text-start leading-tight"
        style={{ fontFamily: "Mulish, sans-serif" }}
      >
        {description.map((line, idx) => (
          <span key={idx}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
}

"use client";

import { usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useState } from "react";

const categories = [
  {
    title: "General Questions",
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        viewBox="0 0 512 512"
        className="text-xl text-[#2250F4]"
        height="1em"
        width="1em"
      >
        <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"></path>
      </svg>
    ),
    faqs: [
      {
        question: "What is Web Hosting?",
        answer:
          "Web hosting is the service of storing data that keeps websites up and running for users. Every website online has a host server, and almost all use a web host to manage that storage. However, not all web hosts provide the same level of quality. Uptime, data speed, and transfer quantity are the most reliable measures of a host's success. You can often pay more to get data transferred in higher quantities and at faster speeds. Most web hosts offer unlimited bandwidth and disk space at a speed suitable for small-to-moderate-sized businesses or individuals. Companies with large websites may need to seek out a more advanced web host to meet their needs.",
      },
      {
        question: "What is shared web hosting?",
        answer:
          "Shared web hosting is a type of web hosting service where the server's capabilities are divided among multiple domains hosted on the same server. This means the server's resources, such as CPU, memory, and disk space, are shared among all the domains on the server.",
      },
      {
        question: "What is a domain name?",
        answer:
          "A domain name is a unique address used to access a website on the internet. It typically consists of a name followed by an extension, such as `.com`, `.org`, or `.net`. For example, in the domain name `www.example.com`, 'example' is the name and '.com' is the extension. Domain names provide an easy-to-remember address for users to access websites, replacing the need to remember numerical IP addresses.",
      },
      {
        question: "How can I trust you?",
        answer:
          "There are many reasons to trust us, and most of them are simply undeniable. We have hundreds of online reviews, with 99.9% of them being positive. In Bangladesh, we are the only company that truly offers 24/7 service, not just as a promise, but as a reality.",
      },
      {
        question: "What's hostnin history?",
        answer:
          "In November of 2022, we started our journey, and in a very short period of time, we got a tremendous response from the clients. As a sister company to Spotlight Creative Web Agency, we have over 4 years of experience providing the best to our clients.",
      },
    ],
  },
  {
    title: "Ordering & Billing",
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        viewBox="0 0 576 512"
        className="text-xl text-[#2250F4]"
        height="1em"
        width="1em"
      >
        <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path>
      </svg>
    ),
    faqs: [
      {
        question: "How can I order a plan?",
        answer:
          "To order a plan from hostnin, you have to select the plan you want to book and click on the 'Order Now' button on that plan. After that, you'll be redirected to the further process, such as your billing details and payment information.",
      },
      {
        question: "How to I Pay?",
        answer:
          "After providing the billing information, you'll be given the options for payment methods. You can continue and complete the payment by choosing the payment method. You will immediately receive the confirmation email in your inbox following the completion of your payment.",
      },
      {
        question: "Which payment method you accept?",
        answer:
          "Currently, you have three payment options: direct banking, credit or debit cards, and mobile banking. There is a way to use PayPal to pay if you reside abroad. For Mobile Banking, We receive the payment through Bkash, Rocket, Nagad, and Ucash are all supported.",
      },
      {
        question: "What billing cycles do you offer?",
        answer:
          "We provide monthly, quarterly, half-annually, annually, biennially, and triennially billing cycles that you can select. In addition to booking hosting for a custom number of years through our support chat, you can also book hosting for a custom number of months.",
      },
      {
        question: "What is the refund policy?",
        answer:
          "If you're unhappy with our hosting service, we have a 30-day refund policy. There are many options available for choosing a refund. For instance, a slow server, a problem with the hosting account, or a support issue. You'll find all the policies listed in detail on the service policy page.",
      },
    ],
  },
  {
    title: "Hosting Server",
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        viewBox="0 0 512 512"
        className="text-xl text-[#2250F4]"
        height="1em"
        width="1em"
      >
        <path d="M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z"></path>
      </svg>
    ),
    faqs: [
      {
        question: "What is disk space and how much do i need?",
        answer:
          "Disk space is an empty space that you can arrange however you like, just like when you pack your suitcase for a trip or furnish your home. For most websites with text and images, 3-5 GB should be plenty. If users will be downloading large multimedia files or there will be more than 500 visitors per day, you should think about getting a plan with more transfer bandwidth.",
      },
      {
        question: "Is disk space matter for website speed?",
        answer:
          "Your disk space will only slow down the speed at which your website loads, and usually not by much, if all of the following are true: There are no caches (for example, the server just restarted), and the server is actually using a HDD (and not, for example, an SSD).",
      },
      {
        question: "What is SSL security?",
        answer:
          "Transport Layer Security is a set of rules for using encryption to keep computer network communications safe. The protocol is used in many applications, like email, instant messaging, and voice over IP, but its most well-known use is to protect HTTPS.",
      },
      {
        question: "How can I activate the SSL?",
        answer:
          "You can activate an SSL certificate right from your control panel. You can find the option by searching for 'SSL' at the top of the bar.",
      },
      {
        question: "What is bandwidth and how much do you need?",
        answer:
          "Bandwidth is the maximum amount of data that can be transmitted over an Internet connection, measured in megabits per second (Mbps). Speed: the rate at which data can be downloaded (or uploaded) to a given device using that Internet connection; also measured in megabits per second. You'll need the bandwidth based on how many people visit your website.",
      },
    ],
  },
  {
    title: "Control Panel",
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        viewBox="0 0 512 512"
        className="text-xl text-[#2250F4]"
        height="1em"
        width="1em"
      >
        <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V192h416v234z"></path>
      </svg>
    ),
    faqs: [
      {
        question: "What control panel do you offer?",
        answer:
          "Depending on the packages you purchase from us, we provide a variety of control panels. Cpanel, PokoPanel, Direct Admin, and Plesk are all options.",
      },
      {
        question: "Is the control panel latest?",
        answer:
          "Absolutely! All of our control panels are in the latest mode, and we don't provide any backdated system interfaces.",
      },
      {
        question: "Can I get any demo of control panel?",
        answer:
          "Yes, you can check out the demo of our control panels by clicking the button above.",
      },
      {
        question: "Can I change the control panel by my own?",
        answer:
          "You can alter the interface system, such as the design, or something associated with it, but you must either migrate to a different system or upgrade to a different plan if you want to alter the entire control panel.",
      },
    ],
  },
  {
    title: "Support System",
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        viewBox="0 0 512 512"
        className="text-xl text-[#2250F4]"
        height="1em"
        width="1em"
      >
        <path d="M160 288h-16c-35.35 0-64 28.7-64 64.12v63.76c0 35.41 28.65 64.12 64 64.12h16c17.67 0 32-14.36 32-32.06V320.06c0-17.71-14.33-32.06-32-32.06zm208 0h-16c-17.67 0-32 14.35-32 32.06v127.88c0 17.7 14.33 32.06 32 32.06h16c35.35 0 64-28.71 64-64.12v-63.76c0-35.41-28.65-64.12-64-64.12zM256 32C112.91 32 4.57 151.13 0 288v112c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16V288c0-114.67 93.33-207.8 208-207.82 114.67.02 208 93.15 208 207.82v112c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16V288C507.43 151.13 399.09 32 256 32z"></path>
      </svg>
    ),
    faqs: [
      {
        question: "What is the support method?",
        answer:
          "We provide assistance via our Messenger chatbox. Whatsapp for chat and phone calls, as well as the hotline number. In the most technical cases, you can create a ticket through our portal.",
      },
      {
        question: "When I will get the support?",
        answer:
          "We offer sales and technical support 24 hours a day, seven days a week, with immediate response. We have a team of support executives for each shift, so you'll always be able to get help. No matter it's government holiday or weekend.",
      },
      {
        question: "How much I need to pay for the support?",
        answer:
          "We offer some of the best support available, with 24-hour availability. Thankfully, it has always been and will continue to be offered at zero cost.",
      },
      {
        question:
          "Do you have a team of executives behind you or are you just one man?",
        answer:
          "We have a team of expert support executives who have been able to provide appropriate assistance. As so many businesses now have a single owner who manages the business, it's been hard to provide on-time support for them, and ultimately the users of the company get a bad experience.",
      },
    ],
  },
];

export default function HostingFAQs() {
  const [activeTab, setActiveTab] = useState<string>(categories[0].title);
  const pathname = usePathname();

  return (
    <section className="w-full pb-10 md:pb-20 flex flex-col items-center bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 transition-colors duration-300">
      <div className="pb-8 text-center">
        <h2 className="text-[28px] sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
          FAQs: Your questions, our answers
        </h2>
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
          Here you will find answers to the most frequently asked questions. If
          you still need assistance, feel free to contact our live support team.
        </p>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className={`flex flex-col ${
          pathname === "/hosting/dedicated-server" ||
          pathname === "/hosting/turbo-hosting" ||
          pathname === "/hosting/bdix-hosting"
            ? "flex-col"
            : "md:flex-row"
        } gap-6 sm:gap-10 w-full max-w-7xl justify-center items-start`}
      >
        {/* Left side: tab triggers */}
        <TabsList
          className={`flex ${
            pathname === "/hosting/dedicated-server" ||
            pathname === "/hosting/turbo-hosting" ||
            pathname === "/hosting/bdix-hosting"
              ? "flex-row overflow-x-auto h-full"
              : "flex-col md:w-[280px] h-full overflow-x-auto"
          } gap-4 w-full bg-transparent`}
        >
          {categories.map((cat) => (
            <TabsTrigger
              key={cat.title}
              value={cat.title}
              className={`flex items-center cursor-pointer gap-3 sm:gap-4 px-4 sm:px-6 py-5 text-sm sm:text-base font-semibold transition-all duration-200 rounded-md shadow-sm w-full
              bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700
              data-[state=active]:bg-[#2250F4] 
              data-[state=active]:text-white
              dark:data-[state=active]:bg-[#1a40c9]
            `}
            >
              <span
                className="flex items-center justify-center w-10 h-10 rounded-full transition-duration-300
                bg-[#e6edff] dark:bg-gray-700
                data-[state=active]:bg-white dark:data-[state=active]:bg-gray-300
              "
              >
                {cat.icon}
              </span>
              <span
                className="text-base font-bold"
                style={{ fontFamily: "Urbanist, sans-serif" }}
              >
                {cat.title}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Right side: tab content */}
        {categories.map((cat) => (
          <TabsContent
            key={cat.title}
            value={cat.title}
            className="flex-1 w-full"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 sm:p-6 min-h-[470px] w-full transition-colors duration-300">
              <Accordion
                type="single"
                collapsible
                defaultValue={`item-0`}
                className="w-full"
              >
                {cat.faqs.map((faq, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`item-${idx}`}
                    className="border-b border-gray-200 dark:border-gray-700 last:border-b-0 transition-colors duration-300"
                  >
                    <AccordionTrigger
                      className="flex justify-between py-4 text-left text-[17px] sm:text-base font-bold text-gray-900 dark:text-white transition-colors duration-300"
                      style={{ fontFamily: "Urbanist, sans-serif" }}
                    >
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent
                      className="pb-4 text-gray-600 dark:text-gray-300 text-[15px] sm:text-base leading-relaxed whitespace-pre-line transition-colors duration-300"
                      style={{ fontFamily: "Mulish, sans-serif" }}
                    >
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}

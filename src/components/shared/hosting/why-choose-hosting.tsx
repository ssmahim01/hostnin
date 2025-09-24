"use client";

import {
  Shield,
  Zap,
  Cloud,
  Terminal,
  Lock,
  HardDrive,
  Code,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 640 512"
        height="3em"
        width="3em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M210.3 220.2c-5.6-24.8-26.9-41.2-51-41.2h-37c-7.1 0-12.5 4.5-14.3 10.9L73.1 320l24.7-.1c6.8 0 12.3-4.5 14.2-10.7l25.8-95.7h19.8c8.4 0 16.2 5.6 18.3 14.8 2.5 10.9-5.9 22.6-18.3 22.6h-10.3c-7 0-12.5 4.6-14.3 10.8l-6.4 23.8h32c37.2 0 58.3-36.2 51.7-65.3zm-156.5 28h18.6c6.9 0 12.4-4.4 14.3-10.9l6.2-23.6h-40C30 213.7 9 227.8 1.7 254.8-7 288.6 18.5 320 52 320h12.4l7.1-26.1c1.2-4.4-2.2-8.3-6.4-8.3H53.8c-24.7 0-24.9-37.4 0-37.4zm247.5-34.8h-77.9l-3.5 13.4c-2.4 9.6 4.5 18.5 14.2 18.5h57.5c4 0 2.4 4.3 2.1 5.3l-8.6 31.8c-.4 1.4-.9 5.3-5.5 5.3h-34.9c-5.3 0-5.3-7.9 0-7.9h21.6c6.8 0 12.3-4.6 14.2-10.8l3.5-13.2h-48.4c-39.2 0-43.6 63.8-.7 63.8l57.5.2c11.2 0 20.6-7.2 23.4-17.8l14-51.8c4.8-19.2-9.7-36.8-28.5-36.8zM633.1 179h-18.9c-4.9 0-9.2 3.2-10.4 7.9L568.2 320c20.7 0 39.8-13.8 44.9-34.5l26.5-98.2c1.2-4.3-2-8.3-6.5-8.3zm-236.3 34.7v.1h-48.3l-26.2 98c-1.2 4.4 2.2 8.3 6.4 8.3h18.9c4.8 0 9.2-3 10.4-7.8l17.2-64H395c12.5 0 21.4 11.8 18.1 23.4l-10.6 40c-1.2 4.3 1.9 8.3 6.4 8.3H428c4.6 0 9.1-2.9 10.3-7.8l8.8-33.1c9-33.1-15.9-65.4-50.3-65.4zm98.3 74.6c-3.6 0-6-3.4-5.1-6.7l8-30c.9-3.9 3.7-6 7.8-6h32.9c2.6 0 4.6 2.4 3.9 5.1l-.7 2.6c-.6 2-1.9 3-3.9 3h-21.6c-7 0-12.6 4.6-14.2 10.8l-3.5 13h53.4c10.5 0 20.3-6.6 23.2-17.6l3.2-12c4.9-19.1-9.3-36.8-28.3-36.8h-47.3c-17.9 0-33.8 12-38.6 29.6l-10.8 40c-5 17.7 8.3 36.7 28.3 36.7h66.7c6.8 0 12.3-4.5 14.2-10.7l5.7-21z"></path>
      </svg>
    ),
    title: "Latest Control Panel",
    description:
      "We provide a popular and widely used control panel for our reseller hosting plans. cPanel is the latest version and is protected by advanced security guidelines. Every day, our experts check the security of the server, and we protect the website in real time so that it can't be hacked. Our control panel comes with all the advanced features built in.",
    highlight: "cPanel",
  },
  {
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 512 512"
        height="3em"
        width="3em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M61.7 169.4l101.5 278C92.2 413 43.3 340.2 43.3 256c0-30.9 6.6-60.1 18.4-86.6zm337.9 75.9c0-26.3-9.4-44.5-17.5-58.7-10.8-17.5-20.9-32.4-20.9-49.9 0-19.6 14.8-37.8 35.7-37.8.9 0 1.8.1 2.8.2-37.9-34.7-88.3-55.9-143.7-55.9-74.3 0-139.7 38.1-177.8 95.9 5 .2 9.7.3 13.7.3 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l77.5 230.4L249.8 247l-33.1-90.8c-11.5-.7-22.3-2-22.3-2-11.5-.7-10.1-18.2 1.3-17.5 0 0 35.1 2.7 56 2.7 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l76.9 228.7 21.2-70.9c9-29.4 16-50.5 16-68.7zm-139.9 29.3l-63.8 185.5c19.1 5.6 39.2 8.7 60.1 8.7 24.8 0 48.5-4.3 70.6-12.1-.6-.9-1.1-1.9-1.5-2.9l-65.4-179.2zm183-120.7c.9 6.8 1.4 14 1.4 21.9 0 21.6-4 45.8-16.2 76.2l-65 187.9C426.2 403 468.7 334.5 468.7 256c0-37-9.4-71.8-26-102.1zM504 256c0 136.8-111.3 248-248 248C119.2 504 8 392.7 8 256 8 119.2 119.2 8 256 8c136.7 0 248 111.2 248 248zm-11.4 0c0-130.5-106.2-236.6-236.6-236.6C125.5 19.4 19.4 125.5 19.4 256S125.6 492.6 256 492.6c130.5 0 236.6-106.1 236.6-236.6z"></path>
      </svg>
    ),
    title: "Softaculous App Installer",
    description:
      "Install WordPress and more than 285 other content management systems (CMS) with just a few clicks using our built-in Softaculous app installer. With this interface, you and your clients can manage websites, keep them up to date, and reinstall them at any time. For a better user experience, everything has been simplified.",
    highlight: "WordPress",
  },
  {
    icon: <Shield className="w-10 h-10 text-blue-600" />,
    title: "Let's Encrypt SSL Certs",
    description:
      "As part of the Let's Encrypt SSL option, SSL certificates from Let's Encrypt are given for free to all customers. You will never have to worry about the SSL of your client's website or the security of the website as a result of this service. In order to run a business as a hosting provider, it is crucial to have an SSL certificate installed. No one will buy from you if you don't have it.",
    highlight: "SSL",
  },
  {
    icon: <Zap className="w-10 h-10 text-blue-600" />,
    title: "LiteSpeed Web Server",
    description:
      "A website that loads slowly won't be able to rank on Google. We prioritize speed most of all for SEO. We utilize the LiteSpeed web server to make your website faster than ever because Apache can't handle a website that is too fast for this. That is 40x faster than ever thanks to our LiteSpeed technology.",
    highlight: "LiteSpeed",
  },
  {
    icon: <Cloud className="w-10 h-10 text-blue-600" />,
    title: "CloudLinux OS",
    description:
      "CloudLinux OS is what we use to run major server functions like PHP, Node, Python, or Ruby. The server was used by the CloudLinux operating system to balance resource usage and the process. CloudLinux OS keeps servers safe from attacks by virtualizing users' file systems.",
    highlight: "CloudLinux",
  },
  {
    icon: <Terminal className="w-10 h-10 text-blue-600" />,
    title: "Built in SSH Terminal",
    description:
      "As part of our service, we provide SSH access for your project requirements. There are many uses for SSH including logging in and performing operations on remote servers, as well as transferring data between them. There will always be a preference for this method.",
    highlight: "SSH",
  },
  {
    icon: <Lock className="w-10 h-10 text-blue-600" />,
    title: "Imunify360 Security",
    description:
      "Imunify360 is a comprehensive security platform designed for web hosting. It combines highly evolved and integrated components for proactive real-time website protection. It's just antivirus. It combines an Intrusion Prevention and Detection system, a Web Application Firewall, Real-Time Antivirus protection, a Network Firewall, and Patch Management.",
    highlight: "Security",
  },
  {
    icon: <HardDrive className="w-10 h-10 text-blue-600" />,
    title: "Daily Data Backup",
    description:
      "The responsibility for backing up your clients' data is up to us. We regularly backup all clients' data with our advanced backup system. For that reason, your clients don't have to worry about data loss. We also have one-click restoration features so that you can restore backups from the account control panel. To make sure your data is safe, we guarantee backups for up to 14 days, both monthly and quarterly.",
    highlight: "Backup",
  },
  {
    icon: <Code className="w-10 h-10 text-blue-600" />,
    title: "PHP Selector (5.6 - Latest)",
    description:
      "PHP Selector is a CloudLinux component that sits on top of CageFS. It allows each user to select a PHP version and module based on their needs. PHP selectors make your clients' websites flexible with any script or CMS. All versions are available from your control panel. From 5.4 to the latest. Sometimes, it has been necessary to update PHPs as the script demands it. Directly from the Cpanel, no need to navigate around.",
    highlight: "PHP",
  },
];

export function WhyChooseHosting({
  heading,
  subTitle,
}: {
  heading: string;
  subTitle: string;
}) {
  return (
    <section
      className="pt-10 pb-20 bg-cover bg-center bg-no-repeat dark:from-gray-900 dark:to-gray-800"
      style={{
        backgroundImage: "url('/assets/bg-curve.png')",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {heading}
          </h2>
          <p className="text-gray-600 dark:text-gray-200 max-w-3xl mx-auto">
            {subTitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.slice(0, 6).map((feature, index) => (
            <Card
              key={index}
              className="border hover:scale-105 border-gray-200 dark:border-gray-700 hover:shadow-lg bg-white dark:bg-gray-800 backdrop-blur-sm dark:hover:bg-white/10 transition-all duration-500"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 text-blue-700">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-200 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom section with dark background */}
        <div className="mt-6 rounded-2xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6  max-w-7xl mx-auto">
            {features.slice(6).map((feature, index) => (
              <Card
                key={index + 6}
                className="border hover:scale-105 border-gray-200 dark:border-gray-700 hover:shadow-lg bg-white dark:bg-gray-800 backdrop-blur-sm dark:hover:bg-white/10 transition-all duration-500"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">{feature.icon}</div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-200 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

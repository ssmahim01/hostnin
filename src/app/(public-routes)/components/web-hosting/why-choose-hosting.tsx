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
import Image from "next/image";

const features = [
  {
    icon: (
      <Image
        width={100}
        height={70}
        quality={90}
        priority
        src="https://res.cloudinary.com/daspo1tk3/image/upload/v1757450498/cpanel_wjvnvc.png"
        alt="cPanel"
        className="w-10 h-10"
      />
    ),
    title: "Latest Control Panel",
    description:
      "We provide a popular and widely used control panel for our reseller hosting plans. cPanel is the latest version and is protected by advanced security guidelines. Every day, our experts check the security of the server, and we protect the website in real time so that it can't be hacked. Our control panel comes with all the advanced features built in.",
    highlight: "cPanel",
  },
  {
    icon: (
      <Image
        width={100}
        height={70}
        quality={90}
        priority
        src="https://res.cloudinary.com/daspo1tk3/image/upload/v1757454019/wordpress_n358qr.png"
        alt="WordPress"
        className="w-10 h-10"
      />
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

export function WhyChooseHosting() {
  return (
    <section
      className="py-14  bg-cover bg-center bg-no-repeat dark:from-gray-900 dark:to-gray-800"
      style={{
        backgroundImage: "url('/assets/bg-curve.png')",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Web Hosting?
          </h2>
          <p className="text-gray-600 dark:text-gray-200 max-w-3xl mx-auto">
            With our{" "}
            <span className="text-blue-600 dark:text-blue-400 font-medium">
              Web Hosting
            </span>{" "}
            plans, you&apos;ll receive more resources for less money, ensuring
            the reliability you can count on. Starting your own business with
            Hostnin is easier than you think!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.slice(0, 6).map((feature, index) => (
            <Card
              key={index}
              className="border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800"
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

        {/* Bottom section with dark background */}
        <div className="mt-6 rounded-2xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6  max-w-7xl mx-auto">
            {features.slice(6).map((feature, index) => (
              <Card
                key={index + 6}
                className="border border-gray-200 dark:border-gray-700 hover:shadow-lg bg-white dark:bg-gray-800 backdrop-blur-sm dark:hover:bg-white/10 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">{feature.icon}</div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                          {feature.highlight}
                        </span>
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

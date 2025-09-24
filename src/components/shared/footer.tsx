"use client";
import type { FooterSection } from "@/types/footer";
import Image from "next/image";
import Link from "next/link";

const footerSections: FooterSection[] = [
  {
    title: "Hosting",
    links: [
      { label: "Web Hosting", href: "/hosting/web-hosting" },
      { label: "Cloud Hosting", href: "/hosting/cloud-hosting" },
      { label: "BDIX Hosting", href: "/hosting/bdix-hosting" },
      { label: "Turbo Hosting", href: "/hosting/turbo-hosting" },
    ],
  },
  {
    title: "Domain",
    links: [
      {
        label: "Register Your Domain",
        href: "https://my.hostnin.com/cart.php?a=add&domain=register",
      },
      {
        label: "Transfer to Us",
        href: "https://my.hostnin.com/cart.php?a=add&domain=transfer",
      },
      {
        label: "Renew Domains",
        href: "https://my.hostnin.com/index.php/cart/domain/renew",
      },
      {
        label: "Manage Domains",
        href: "https://my.hostnin.com/clientarea.php?action=domains",
      },
    ],
  },
  {
    title: "Service",
    links: [
      {
        label: "Book Consultation",
        href: "/book-consultation",
      },
      {
        label: "View Addons",
        href: "https://my.hostnin.com/cart.php?gid=addons",
      },
      {
        label: "Server Report",
        href: "https://report.hostnin.com",
      },
      {
        label: "Service Status",
        href: "https://status.hostnin.com",
      },
    ],
  },
  {
    title: "Tools",
    links: [
      {
        label: "Website Backup",
        href: "https://my.hostnin.com/index.php/store/codeguard",
      },
      {
        label: "Website Security",
        href: "https://my.hostnin.com/index.php/store/sitelock",
      },
      {
        label: "Professional Emails",
        href: "https://my.hostnin.com/index.php/store/professional-email",
      },
      {
        label: "SSL Certificates",
        href: "https://my.hostnin.com/index.php/store/ssl-certificates",
      },
    ],
  },
  {
    title: "Support",
    links: [
      {
        label: "24/7 LiveChat",
        href: "https://tawk.to/chat/64e3c190cc26a871b0308e91/1h8cqo8b6",
      },
      {
        label: "24/7 WhatsApp",
        href: "https://api.whatsapp.com/send/?phone=8801325875955&text&type=phone_number&app_absent=0",
      },
      {
        label: "24/7 Email",
        href: "mailto:support@hostnin.com",
      },
      {
        label: "File a Complain",
        href: "/complain",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Terms & Conditions", href: "/terms-conditions" },
      { label: "Affiliate", href: "/affiliate" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

// const paymentMethods: PaymentMethod[] = [
//   { name: "Visa", icon: "💳" },
//   { name: "Mastercard", icon: "💳" },
//   { name: "PayPal", icon: "💰" },
//   { name: "American Express", icon: "💳" },
//   { name: "Discover", icon: "💳" },
//   { name: "Bitcoin", icon: "₿" },
//   { name: "Stripe", icon: "💳" },
//   { name: "Razorpay", icon: "💳" },
// ];

function isExternalLink(href: string): boolean {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  );
}

export function Footer() {
  const getFullYear = new Date().getFullYear();

  return (
    <footer className="bg-[#001158] dark:bg-slate-950 text-white">
      {/* Payment Methods */}
      <div className="border-b border-blue-800 dark:border-blue-900 max-w-7xl mx-auto md:block hidden">
        <div className="container mx-auto px-4 py-4">
          <figure className="flex flex-wrap justify-center items-center gap-4">
            <Image
              src={"/assets/SSLCommerz-Pay-With-logo-All-Size-01.png"}
              alt="Payment Methods"
              width={1920}
              height={50}
              quality={90}
              priority
            />
          </figure>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container px-4 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-xl text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => {
                  const external = isExternalLink(link.href);
                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        target={external ? "_blank" : "_self"}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="text-blue-200 hover:text-white transition-colors text-base"
                      >
                        {link.label}
                        {link?.label === "Careers" && (
                          <span className="font-semibold text-yellow-400">
                            (Hiring)
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-blue-800 dark:border-blue-900 max-w-7xl mx-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col gap-4 items-start text-left">
              <Link href="/" className="flex items-start gap-2">
                <Image
                  src="/assets/footer-logo.webp"
                  alt="Hostnin Logo"
                  width={300}
                  height={240}
                  quality={90}
                  className="h-12 w-full object-contain"
                  priority
                />
              </Link>
              <p className="text-blue-200 text-sm mt-4">
                © {getFullYear}{" "}
                <Link href={"https://hostnin.com"} target="_blank">
                  Hostnin.
                </Link>{" "}
                All Rights Reserved.
              </p>
            </div>

            <div className="flex items-center md:items-end flex-col gap-4">
              <div className="flex space-x-4 text-2xl sm:text-3xl">
                <Link
                  target="_blank"
                  className="transition transform hover:scale-125 hover:text-blue-600"
                  href="https://www.facebook.com/hostninweb/"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                  </svg>
                </Link>
                <Link
                  target="_blank"
                  className="transition transform hover:scale-125 hover:text-blue-500"
                  href="https://www.linkedin.com/company/hostnin/?originalSubdomain=bd"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                  </svg>
                </Link>
                <Link
                  target="_blank"
                  className="transition transform hover:scale-125 hover:text-red-600"
                  href="https://www.youtube.com/@hostnin/null"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 576 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                  </svg>
                </Link>
                <Link
                  target="_blank"
                  className="transition transform hover:scale-125 hover:text-pink-500"
                  href="https://www.instagram.com/hostninbd/"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"></path>
                  </svg>
                </Link>
              </div>

              <div className="flex items-center md:justify-start justify-center gap-4 text-sm text-blue-200">
                <Link
                  href="/privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <div className="text-blue-700">|</div>
                <Link
                  href="/refund-policy"
                  className="hover:text-white transition-colors"
                >
                  Refund Policy
                </Link>
                <div className="text-blue-700">|</div>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

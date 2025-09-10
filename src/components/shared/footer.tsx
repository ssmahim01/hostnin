"use client";
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import type { FooterSection } from "@/types/footer";
import { PaymentMethod } from "@/types/payment-method";
import Image from "next/image";
import Link from "next/link";

const footerSections: FooterSection[] = [
  {
    title: "Hosting",
    links: [
      { label: "Web Hosting", href: "/hosting/web" },
      { label: "Cloud Hosting", href: "/hosting/cloud" },
      { label: "WordPress Hosting", href: "/hosting/wordpress" },
      { label: "VPS Hosting", href: "/hosting/vps" },
      { label: "Reseller Hosting", href: "/hosting/reseller" },
    ],
  },
  {
    title: "Domain",
    links: [
      { label: "Register New Domain", href: "/domain/register" },
      { label: "Transfer Domain", href: "/domain/transfer" },
      { label: "Domain Checker", href: "/domain/checker" },
      { label: "Bulk Domain", href: "/domain/bulk" },
      { label: "Manage Domain", href: "/domain/manage" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Website Builder", href: "/services/builder" },
      { label: "SSL Certificate", href: "/services/ssl" },
      { label: "Email Hosting", href: "/services/email" },
      { label: "Website Security", href: "/services/security" },
      { label: "Backup Service", href: "/services/backup" },
    ],
  },
  {
    title: "Tools",
    links: [
      { label: "Website Builder", href: "/tools/builder" },
      { label: "Speed Test", href: "/tools/speed" },
      { label: "Website Security", href: "/tools/security" },
      { label: "Uptime Monitor", href: "/tools/uptime" },
      { label: "SSL Certificate", href: "/tools/ssl" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "24/7 Live Chat", href: "/support/chat" },
      { label: "24/7 WhatsApp", href: "/support/whatsapp" },
      { label: "Knowledge Base", href: "/support/kb" },
      { label: "Video Tutorials", href: "/support/videos" },
      { label: "Open Ticket", href: "/support/ticket" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Terms & Conditions", href: "/company/terms" },
      { label: "Privacy Policy", href: "/company/privacy" },
      { label: "Refund Policy", href: "/company/refund" },
      { label: "About Us", href: "/company/about" },
      { label: "Contact", href: "/company/contact" },
    ],
  },
];

const paymentMethods: PaymentMethod[] = [
  { name: "Visa", icon: "💳" },
  { name: "Mastercard", icon: "💳" },
  { name: "PayPal", icon: "💰" },
  { name: "American Express", icon: "💳" },
  { name: "Discover", icon: "💳" },
  { name: "Bitcoin", icon: "₿" },
  { name: "Stripe", icon: "💳" },
  { name: "Razorpay", icon: "💳" },
];

export function Footer() {
  return (
    <footer className="bg-blue-900 dark:bg-blue-950 text-white">
      {/* Payment Methods */}
      <div className="border-b border-blue-800 dark:border-blue-900 max-w-7xl mx-auto">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center items-center gap-4">
            <span className="text-sm text-blue-200">We Accept:</span>
            <div className="flex flex-wrap gap-3">
              {paymentMethods.map((method) => (
                <div
                  key={method.name}
                  className="flex items-center justify-center w-12 h-8 bg-white rounded border text-gray-800 text-xs font-medium"
                  title={method.name}
                >
                  {method.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container px-4 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-blue-200 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-blue-800 dark:border-blue-900 max-w-7xl mx-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center">
                <Image
                  src="https://res.cloudinary.com/daspo1tk3/image/upload/v1757498973/logo11_nfcmpq.webp"
                  alt="Travel Agency Logo"
                  width={140}
                  height={80}
                  quality={90}
                  className="h-10 w-full object-contain"
                  priority
                />
              </Link>
              <span className="text-blue-200 text-sm">
                © 2024 Hostnin. All Rights Reserved.
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="w-8 h-8 bg-blue-800 hover:bg-blue-700 rounded flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-blue-800 hover:bg-blue-700 rounded flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-blue-800 hover:bg-blue-700 rounded flex items-center justify-center transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-blue-800 hover:bg-blue-700 rounded flex items-center justify-center transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center gap-4 text-sm text-blue-200">
                <a
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="/refund"
                  className="hover:text-white transition-colors"
                >
                  Refund Policy
                </a>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

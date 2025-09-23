"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Section from "@/components/shared/Section";

export default function PrivacyPolicySection() {
  return (
    <div className="pt-24 pb-20 px-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
      <header className="text-center mb-9">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-700 dark:text-gray-100 tracking-tight">
          Hostnin Privacy Policy
        </h1>
        <p className="mt-2 text-gray-500 dark:text-gray-300 text-lg">
          Last Updated: 25th August 2025
        </p>
      </header>

      <Card className="max-w-7xl mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-lg">
        <CardContent className="lg:p-12 p-6 space-y-10">
          {/* Introduction */}
          <Section title="Introduction">
            Hostnin (“we,” “our,” or “us”) respects your privacy. This Privacy
            Policy explains how we collect, use, and protect your personal
            information when you use our services. Since Hostnin operates mainly
            in Bangladesh, this policy is written considering the needs of
            Bangladeshi customers and compliance with relevant local and
            international standards.
          </Section>

          {/* Information We Collect */}
          <Section title="Information We Collect">
            <div className="text-gray-600 dark:text-gray-300 leading-relaxed space-y-4">
              <div>
                <strong>a. Personal Information</strong>
                <ul className="list-disc list-inside mt-2">
                  <li>Name, email address, phone number, billing address</li>
                  <li>
                    National ID or passport information (only if required for
                    verification)
                  </li>
                </ul>
              </div>
              <div>
                <strong>b. Payment Information</strong>
                <ul className="list-disc list-inside mt-2">
                  <li>
                    Transaction details via bKash, Nagad, Rocket, local banks,
                    and international methods
                  </li>
                  <li>We do not store full card details</li>
                </ul>
              </div>
              <div>
                <strong>c. Technical Information</strong>
                <ul className="list-disc list-inside mt-2">
                  <li>IP address, browser type, device type, login logs</li>
                  <li>Website usage and analytics data</li>
                </ul>
              </div>
              <div>
                <strong>d. Communication Data</strong>
                <ul className="list-disc list-inside mt-2">
                  <li>
                    Support tickets, live chat, emails, phone call records (for
                    training and quality assurance)
                  </li>
                </ul>
              </div>
            </div>
          </Section>

          {/* How We Use Your Information */}
          <Section title="How We Use Your Information">
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 leading-relaxed space-y-2">
              <li>To create and manage your hosting account</li>
              <li>To process payments and prevent fraud</li>
              <li>To provide customer support and resolve issues</li>
              <li>
                To send important notifications (server downtime, billing
                reminders, security alerts)
              </li>
              <li>To improve website performance and hosting quality</li>
              <li>For marketing and promotional offers (only if you opt-in)</li>
            </ul>
          </Section>

          {/* Sharing of Information */}
          <Section title="Sharing of Information">
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 leading-relaxed space-y-2">
              <li>
                We never sell your personal data. Shared only with trusted
                partners (domain registrars, payment processors, security
                providers)
              </li>
              <li>
                If required by Bangladeshi law, court order, or government
                request
              </li>
              <li>For fraud prevention and cybersecurity purposes</li>
            </ul>
          </Section>

          {/* Data Storage & Security */}
          <Section title="Data Storage & Security">
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 leading-relaxed space-y-2">
              <li>
                Personal data is stored securely in servers (Bangladesh,
                Germany, USA depending on service)
              </li>
              <li>
                Encryption (SSL/TLS), firewalls, and intrusion detection systems
                are used
              </li>
              <li>Access is restricted to authorized staff only</li>
            </ul>
          </Section>

          {/* Cookies & Tracking */}
          <Section title="Cookies & Tracking">
            Cookies are used for login sessions, analytics, and personalization.
            You may disable cookies, but some features may not work properly.
          </Section>

          {/* Your Rights */}
          <Section title="Your Rights">
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 leading-relaxed space-y-2">
              <li>Request access to your data</li>
              <li>Update or correct inaccurate details</li>
              <li>
                Request deletion of your account/data (except where required for
                compliance)
              </li>
              <li>Opt-out of promotional emails/SMS</li>
            </ul>
          </Section>

          {/* Data Retention */}
          <Section title="Data Retention">
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 leading-relaxed space-y-2">
              <li>Customer data is kept as long as the account is active</li>
              <li>
                Billing and transaction records may be stored up to 7 years
                (Bangladesh regulations)
              </li>
              <li>
                After account closure, personal data is permanently deleted
                within 90 days (except legally required records)
              </li>
            </ul>
          </Section>

          {/* Children’s Privacy */}
          <Section title="Children’s Privacy">
            Services are not intended for children under 13. We do not knowingly
            collect data from children.
          </Section>

          {/* Third-Party Services */}
          <Section title="Third-Party Services">
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 leading-relaxed space-y-2">
              <li>Domain registrars (ICANN)</li>
              <li>Payment gateways (bKash, Stripe, PayPal, banks)</li>
              <li>Security services (Cloudflare, Imunify360)</li>
            </ul>
          </Section>

          {/* Changes to This Policy */}
          <Section title="Changes to This Policy">
            We may update this policy from time to time. Updates will be posted
            on our website. Major changes will be notified via email or SMS.
          </Section>

          {/* Contact Us */}
          <Section title="Contact Us">
            If you have questions regarding this Privacy Policy, contact us:
            <br />
            Email:{" "}
            <a
              href="mailto:info@hostnin.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              info@hostnin.com
            </a>
            <br />
            Phone/WhatsApp:{" "}
            <a
              href="tel:+8801325875955"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              +880 1325 875 955
            </a>
            <br />
            Address: S Creative LLC, 8th Floor, Shefa Bhaban, Provati Abasik
            Area, Chattogram, Bangladesh
          </Section>
        </CardContent>
      </Card>
    </div>
  );
}

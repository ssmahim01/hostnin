"use client";

export default function PrivacyPolicySection() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-14">
        <h1 className="text-5xl font-extrabold text-blue-700 dark:text-blue-400 tracking-tight">
          Hostnin Privacy Policy
        </h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400 text-lg">
          Last Updated: 25th August 2025
        </p>
      </header>

      <div className="max-w-7xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-12 space-y-14">
        {/* Introduction */}
        <section className="border-l-4 border-blue-600 dark:border-blue-400 pl-6">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Introduction
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Hostnin (“we,” “our,” or “us”) respects your privacy. This Privacy
            Policy explains how we collect, use, and protect your personal
            information when you use our services. Since Hostnin operates mainly
            in Bangladesh, this policy is written considering the needs of
            Bangladeshi customers and compliance with relevant local and
            international standards.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="border-l-4 border-blue-600 dark:border-blue-400 pl-6">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Information We Collect
          </h2>
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
                  Transaction details via bKash, Nagad, Rocket, local banks, and
                  international methods
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
        </section>

        {/* How We Use Your Information */}
        <section className="border-l-4 border-blue-600 dark:border-blue-400 pl-6">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            How We Use Your Information
          </h2>
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
        </section>

        {/* Sharing of Information */}
        <section className="border-l-4 border-blue-600 dark:border-blue-400 pl-6">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Sharing of Information
          </h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 leading-relaxed space-y-2">
            <li>
              We never sell your personal data. Shared only with trusted
              partners (domain registrars, payment processors, security
              providers)
            </li>
            <li>
              If required by Bangladeshi law, court order, or government request
            </li>
            <li>For fraud prevention and cybersecurity purposes</li>
          </ul>
        </section>

        {/* Remaining sections: apply same dark mode classes */}
        {/* Data Storage & Security */}
        <section className="border-l-4 border-blue-600 dark:border-blue-400 pl-6">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Data Storage & Security
          </h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 leading-relaxed space-y-2">
            <li>
              Personal data is stored securely in servers (Bangladesh, Germany,
              USA depending on service)
            </li>
            <li>
              Encryption (SSL/TLS), firewalls, and intrusion detection systems
              are used
            </li>
            <li>Access is restricted to authorized staff only</li>
          </ul>
        </section>

        {/* Cookies & Tracking */}
        <section className="border-l-4 border-blue-600 dark:border-blue-400 pl-6">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Cookies & Tracking
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Cookies are used for login sessions, analytics, and personalization.
            You may disable cookies, but some features may not work properly.
          </p>
        </section>

        {/* Your Rights */}
        <section className="border-l-4 border-blue-600 dark:border-blue-400 pl-6">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Your Rights
          </h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 leading-relaxed space-y-2">
            <li>Request access to your data</li>
            <li>Update or correct inaccurate details</li>
            <li>
              Request deletion of your account/data (except where required for
              compliance)
            </li>
            <li>Opt-out of promotional emails/SMS</li>
          </ul>
        </section>

        {/* Data Retention */}
        <section className="border-l-4 border-blue-600 dark:border-blue-400 pl-6">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Data Retention
          </h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 leading-relaxed space-y-2">
            <li>Customer data is kept as long as the account is active</li>
            <li>
              Billing and transaction records may be stored up to 7 years
              (Bangladesh regulations)
            </li>
            <li>
              After account closure, personal data is permanently deleted within
              90 days (except legally required records)
            </li>
          </ul>
        </section>

        {/* Children’s Privacy */}
        <section className="border-l-4 border-blue-600 dark:border-blue-400 pl-6">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Children’s Privacy
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Services are not intended for children under 13. We do not knowingly
            collect data from children.
          </p>
        </section>

        {/* Third-Party Services */}
        <section className="border-l-4 border-blue-600 dark:border-blue-400 pl-6">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Third-Party Services
          </h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 leading-relaxed space-y-2">
            <li>Domain registrars (ICANN)</li>
            <li>Payment gateways (bKash, Stripe, PayPal, banks)</li>
            <li>Security services (Cloudflare, Imunify360)</li>
          </ul>
        </section>

        {/* Changes to This Policy */}
        <section className="border-l-4 border-blue-600 dark:border-blue-400 pl-6">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Changes to This Policy
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            We may update this policy from time to time. Updates will be posted
            on our website. Major changes will be notified via email or SMS.
          </p>
        </section>

        {/* Contact Us */}
        <section className="border-l-4 border-blue-600 dark:border-blue-400 pl-6">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
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
          </p>
        </section>
      </div>
    </div>
  );
}

"use client";

export default function PrivacyPolicySection() {
  return (
    <div className="bg-gray-50 min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-blue-700 tracking-tight">
          Hostnin Privacy Policy
        </h1>
        <p className="mt-2 text-gray-500 text-lg">
          Last Updated: 25th August 2025
        </p>
      </header>

      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md p-10 space-y-12">
        {/* Introduction */}
        <section className="border-l-4 border-blue-600 pl-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Introduction
          </h2>
          <div className="text-gray-600 leading-relaxed">
            Hostnin (“we,” “our,” or “us”) respects your privacy. This Privacy
            Policy explains how we collect, use, and protect your personal
            information when you use our services. Since Hostnin operates mainly
            in Bangladesh, this policy is written considering the needs of
            Bangladeshi customers and compliance with relevant local and
            international standards.
          </div>
        </section>

        {/* Information We Collect */}
        <section className="border-l-4 border-blue-600 pl-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Information We Collect
          </h2>
          <div className="text-gray-600 leading-relaxed space-y-4">
            <div>
              <strong>a. Personal Information</strong>
              <ul className="list-disc list-inside">
                <li>Name, email address, phone number, billing address</li>
                <li>
                  National ID or passport information (only if required for
                  verification)
                </li>
              </ul>
            </div>
            <div>
              <strong>b. Payment Information</strong>
              <ul className="list-disc list-inside">
                <li>
                  Transaction details via bKash, Nagad, Rocket, local banks, and
                  international methods
                </li>
                <li>We do not store full card details</li>
              </ul>
            </div>
            <div>
              <strong>c. Technical Information</strong>
              <ul className="list-disc list-inside">
                <li>IP address, browser type, device type, login logs</li>
                <li>Website usage and analytics data</li>
              </ul>
            </div>
            <div>
              <strong>d. Communication Data</strong>
              <ul className="list-disc list-inside">
                <li>
                  Support tickets, live chat, emails, phone call records (for
                  training and quality assurance)
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How We Use Your Information */}
        <section className="border-l-4 border-blue-600 pl-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            How We Use Your Information
          </h2>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed">
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

        <section className="border-l-4 border-blue-600 pl-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 __className_3fb87d">
            Sharing of Information
          </h2>
          <div className="text-gray-600 leading-relaxed __className_de9c82">
            <ul className="list-disc list-inside">
              <li>
                We never sell your personal data. Information is only shared
                with trusted partners (domain registrars, payment processors,
                security providers)
              </li>
              <li>
                If required by Bangladeshi law, court order, or government
                request
              </li>
              <li>For fraud prevention and cybersecurity purposes</li>
            </ul>
          </div>
        </section>

        <section className="border-l-4 border-blue-600 pl-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 __className_3fb87d">
            Data Storage &amp; Security
          </h2>
          <div className="text-gray-600 leading-relaxed __className_de9c82">
            <ul className="list-disc list-inside">
              <li>
                Personal data is stored securely in servers (Bangladesh,
                Germany, USA depending on service)
              </li>
              <li>
                We use encryption (SSL, TLS), firewalls, and intrusion detection
                systems
              </li>
              <li>Access is restricted to authorized staff only</li>
            </ul>
          </div>
        </section>

        <section className="border-l-4 border-blue-600 pl-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 __className_3fb87d">
            Cookies &amp; Tracking
          </h2>
          <div className="text-gray-600 leading-relaxed __className_de9c82">
            Cookies are used for login sessions, analytics, and personalization.
            You may disable cookies, but some features may not work properly.
          </div>
        </section>

        <section className="border-l-4 border-blue-600 pl-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 __className_3fb87d">
            Your Rights
          </h2>
          <div className="text-gray-600 leading-relaxed __className_de9c82">
            <ul className="list-disc list-inside">
              <li>Request access to your data</li>
              <li>Update or correct inaccurate details</li>
              <li>
                Request deletion of your account/data (except where required for
                compliance)
              </li>
              <li>Opt-out of promotional emails/SMS</li>
            </ul>
          </div>
        </section>

        <section className="border-l-4 border-blue-600 pl-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 __className_3fb87d">
            Data Retention
          </h2>
          <div className="text-gray-600 leading-relaxed __className_de9c82">
            <ul className="list-disc list-inside">
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
          </div>
        </section>

        <section className="border-l-4 border-blue-600 pl-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 __className_3fb87d">
            Children’s Privacy
          </h2>
          <div className="text-gray-600 leading-relaxed __className_de9c82">
            Services are not intended for children under 13. We do not knowingly
            collect data from children.
          </div>
        </section>

        <section className="border-l-4 border-blue-600 pl-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 __className_3fb87d">
            Third-Party Services
          </h2>
          <div className="text-gray-600 leading-relaxed __className_de9c82">
            <ul className="list-disc list-inside">
              <li>Domain registrars (ICANN)</li>
              <li>Payment gateways (bKash, Stripe, PayPal, banks)</li>
              <li>Security services (Cloudflare, Imunify360)</li>
            </ul>
          </div>
        </section>

        <section className="border-l-4 border-blue-600 pl-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 __className_3fb87d">
            Changes to This Policy
          </h2>
          <div className="text-gray-600 leading-relaxed __className_de9c82">
            We may update this policy from time to time. Updates will be posted
            on our website. Major changes will be notified via email or SMS.
          </div>
        </section>

        <section className="border-l-4 border-blue-600 pl-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Contact Us
          </h2>
          <div className="text-gray-600 leading-relaxed">
            If you have questions regarding this Privacy Policy, contact us:
            <br />
            Email:{" "}
            <a
              href="mailto:info@hostnin.com"
              className="text-blue-600 hover:underline"
            >
              info@hostnin.com
            </a>
            <br />
            Phone/WhatsApp:{" "}
            <a
              href="tel:+8801325875955"
              className="text-blue-600 hover:underline"
            >
              +880 1325 875 955
            </a>
            <br />
            Address: S Creative LLC, 8th Floor, Shefa Bhaban, Provati Abasik
            Area, Chattogram, Bangladesh
          </div>
        </section>
      </div>
    </div>
  );
}

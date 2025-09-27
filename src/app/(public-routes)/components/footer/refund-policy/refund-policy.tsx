"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RefundPolicy() {
  return (
    <section className="w-full max-w-7xl mx-auto pt-24 pb-20 px-4 lg:px-8">
      <h1 className="text-4xl font-extrabold text-blue-600 dark:text-white mb-8 text-center">
        Refund Policy
      </h1>

      <p className="mb-10 text-gray-700 dark:text-neutral-300 text-lg leading-relaxed text-justify">
        At <span className="font-semibold">Hostnin</span>, we are committed to
        ensuring customer satisfaction with our services. If you are not
        completely satisfied, we provide a transparent and straightforward
        refund policy. Please read the following terms and conditions for full
        details on our refund process.
      </p>

      {/* 1. Refund Eligibility */}
      <Card className="mb-10 bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl font-bold mb-4 text-blue-600 text-center">
            1. Refund Eligibility
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-neutral-100">
            30-Day Money-Back Guarantee:
          </h3>
          <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-neutral-300 space-y-1">
            <li>
              All hosting services provided by Hostnin are covered by our 30-day
              money-back guarantee.
            </li>
            <li>
              The 30-day period begins from the date your service was first
              activated.
            </li>
            <li>
              Refunds processed must comply with our Terms of Service and
              Acceptable Use Policy.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-neutral-100">
            Exclusions:
          </h3>
          <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-neutral-300 space-y-1">
            <li>
              Domain Name Services: Non-refundable once registered or renewed.
            </li>
            <li>
              Add-on Services: SSL certificates, privacy protection, and
              third-party software may not be refundable once activated.
            </li>
            <li>
              Web Builder &amp; SEO Services: Non-refundable due to upfront
              costs and third-party licenses.
            </li>
            <li>Custom Services: Non-refundable unless specified.</li>
            <li>
              Service Issues: Refunds may be provided as Hostnin credit if
              service issues occur.
            </li>
            <li>
              Customer Behavior: Aggressive or unlawful behavior may result in
              refund denial and account ban.
            </li>
            <li>No Refund for VPS, Dedicated, or Reseller Hosting Services.</li>
          </ul>
        </CardContent>
      </Card>

      {/* 2. Refund Process */}
      <Card className="mb-10 bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl font-bold mb-4 text-blue-600 text-center">
            2. Refund Process and Timelines
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-neutral-100">
            bKash Payments:
          </h3>
          <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-neutral-300 space-y-1">
            <li>Refunds processed within 24 hours.</li>
            <li>Refund credited to the original bKash account.</li>
            <li>Contact support if refund is not received within 24 hours.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-neutral-100">
            Bank Transfers &amp; Other Payments:
          </h3>
          <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-neutral-300 space-y-1">
            <li>Processed within 3–7 business days depending on the bank.</li>
            <li>
              Hostnin is not responsible for delays caused by banks or external
              factors.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-neutral-100">
            Credit/Debit Card Payments:
          </h3>
          <p className="text-gray-700 dark:text-neutral-300 mb-4">
            Typically take up to 7 working days depending on payment gateway and
            issuing bank.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-neutral-100">
            SSLCommerz and Other Payment Partners:
          </h3>
          <p className="text-gray-700 dark:text-neutral-300 mb-4">
            Refunds typically take 3–7 working days. Exact time depends on the
            payment partner&apos;s procedures.
          </p>
        </CardContent>
      </Card>

      {/* 3. Requesting a Refund */}
      <Card className="mb-10 bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl font-bold mb-4 text-blue-600 text-center">
            3. Requesting a Refund
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-neutral-300 space-y-1">
            <li>
              Submit a refund request through Hostnin support channels or
              dashboard.
            </li>
            <li>Include your order number, reason, and transaction details.</li>
            <li>
              Refunds will be issued to the original payment method or as
              Hostnin account credit.
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* 4. Special Cases */}
      <Card className="mb-10 bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl font-bold mb-4 text-blue-600 text-center">
            4. Special Cases and Considerations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-neutral-300 space-y-1">
            <li>
              Service Upgrades/Downgrades: Refund calculated based on original
              plan minus usage fees.
            </li>
            <li>
              Promotional Offers: Refund adjusted based on promotion terms.
            </li>
            <li>
              Partial Refunds: May be granted depending on service usage or
              circumstances.
            </li>
            <li>
              Chargebacks: Initiating chargebacks may result in refund denial
              and account termination.
            </li>
          </ul>
        </CardContent>
      </Card>

      <p className="text-gray-700 dark:text-neutral-300 text-lg leading-relaxed text-center">
        <strong>Contact Us:</strong> Our support team is available 24/7 for any
        questions or clarifications.
      </p>
    </section>
  );
}

"use client";

import { termsSections } from "@/data/terms-conditions";

export default function TermsAndConditions() {
  return (
    <div className="bg-[#f7f9fa] dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-7">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1877f2] font-['Urbanist',sans-serif]">
            Hostnin Terms & Conditions
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg max-w-2xl mx-auto font-['Mulish',sans-serif]">
            Last Updated: 25 August 2025
          </p>
        </div>

        {termsSections.map((section) => (
          <section
            key={section.id}
            className="mb-8 bg-white dark:bg-gray-800 p-4 md:p-8 rounded-lg shadow-sm"
          >
            <h2 className="text-2xl font-bold mb-4 text-center font-['Urbanist',sans-serif]">
              {section.title}
            </h2>

            {section.content && (
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 font-['Mulish',sans-serif]">
                {section.content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}

            {section.subsections &&
              section.subsections.map((sub, idx) => (
                <div key={idx} className="mt-4">
                  <h3 className="text-xl font-semibold mb-2 font-['Urbanist',sans-serif]">
                    {sub.subtitle}
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 font-['Mulish',sans-serif]">
                    {sub.content.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
          </section>
        ))}

        <div className="text-center mt-8">
          <p className="text-gray-600 dark:text-gray-300 text-sm font-['Mulish',sans-serif]">
            For questions, contact:{" "}
            <a
              href="mailto:legal@hostnin.com"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              legal@hostnin.com
            </a>{" "}
            | WhatsApp/Phone: +880 1325 875 955 | Office: Chattogram, Bangladesh
          </p>
        </div>
      </div>
    </div>
  );
}

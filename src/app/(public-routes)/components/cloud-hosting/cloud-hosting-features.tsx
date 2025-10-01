"use client";

import FeatureBlock from "@/components/shared/hosting/feature-block";

export default function CloudHostingFeatures() {
  return (
    <section className="w-full py-8 sm:py-10 xs:py-14 px-4 sm:px-6 xs:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16 xs:gap-20">
        <FeatureBlock
          heading="We Offers Lighting Fast Loading Speed"
          description={`Speed is one of the most basic but powerful features that you will get instantly with your Shared hosting package. A fast loading website ensures that your competitor are not able to snatch your potential customers.
          In case you have any confusion regarding which Email Solution is best suited for your business, you can contact us for assistance. Live Chat is available 24 hours a day, 7 days a week.`}
          bullets={[
            "16+ CDN Included (Worthy as CloudFlare Premium Plan)",
            "100% Secure & safe Shell (SSH) Access",
            "Web Optimization feature for SEO",
            "Unlimited Download and Upload Speed through FTP See Pricing",
          ]}
          scrollId={true}
          buttonLabel="See Pricing"
          imageSrc="/assets/gif-assets/motion.gif"
          imageAlt="Features"
        />

        <FeatureBlock
          heading="Let us take worries away & put time back in your day"
          largeHeading={true}
          description={`We offer expert 24/7/365 problem-solving for everyone. For a closer partnership, choose the Advanced Support add-on that enhances your support experience or the Premium Support add-on where our Senior Support Engineers work as an extension of your in-house team.`}
          bullets={[
            "24/7 Chat Support through messenger",
            "Live Call Support through What's App",
            "Max. 1 Hours Email Support",
            "Max. 30 Minute ticket reply",
            "Anydesk/TeamViewer Support",
          ]}
          buttonLabel="See Pricing"
          scrollId={true}
          imageSrc="/assets/customer-support-3-2048x1745.webp"
          imageAlt="Support Illustration"
          reverse
        />
      </div>
    </section>
  );
}

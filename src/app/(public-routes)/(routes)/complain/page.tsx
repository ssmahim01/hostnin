import { Metadata } from "next";
import ComplainFeatures from "../../components/complain/complain-features";
import ComplainForm from "../../components/complain/complain-form";
import ComplainHeader from "../../components/complain/complain-header";

export const metadata: Metadata = {
  title: "Submit Complain | Hostnin",
  description:
    "Submit your complaint to Hostnin's support team. Fill out the form and our technical experts will reach out to resolve your issue promptly.",
  keywords: "Hostnin, complaint, support, customer service, issue reporting",
   openGraph: {
    title: "Submit Complain | Hostnin",
    description:
      "Submit your complaint to Hostnin's support team. Fill out the form and our technical experts will reach out to resolve your issue promptly.",
    url: "https://hostnin.com/complain",
    type: "website",
    images: [
      {
        url: "https://hostnin.com/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hostnin Hosting Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Submit Complain | Hostnin",
    description:
      "Submit your complaint to Hostnin's support team. Fill out the form and our technical experts will reach out to resolve your issue promptly.",
    images: ["https://hostnin.com/assets/og-image.jpg"],
  },
};

export default function ComplainPage() {
  return (
    <div className="pt-24 pb-16 container mx-auto px-4 lg:px-8 max-w-7xl">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" /> */}

      <div className="relative z-10 space-y-10">
            <ComplainHeader />
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <ComplainForm />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ComplainFeatures />
          </div>
        </div>
      </div>
    </div>
  );
}

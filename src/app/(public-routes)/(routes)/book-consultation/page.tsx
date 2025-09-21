import { Metadata } from "next";
import CalendlyWidget from "../../components/book-consultation/calendly-widget";

export const metadata: Metadata = {
  title: "Book Consultation | Hostnin",
  description: "Schedule a consultation with Hostnin using Calendly.",
  keywords: "book consultation, hostnin, calendly, schedule meeting",
};

export default function BookConsultation() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
        Book a Consultation
      </h1>

        <CalendlyWidget url="https://calendly.com/hostnin-info/discove" />
    </div>
  );
}
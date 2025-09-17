"use client";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="border-l-4 border-blue-600 dark:border-blue-400 pl-6">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        {title}
      </h2>
      <div className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
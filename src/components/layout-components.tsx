"use client";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { ToasterProvider } from "@/components/ToasterProvider/ToasterProvider";
import { ScrollProvider } from "@/components/shared/scroll-provider";
import { usePathname } from "next/navigation";

export default function LayoutComponents({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <Navbar />
      <main className={`${pathname === "/hosting/web-hosting" ? "" : "pt-7"}`}>
        {children}
      </main>
      <ScrollProvider />
      <ToasterProvider />
      <Footer />
    </>
  );
}

"use client";
import { useState } from "react";
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
  const [showBanner, setShowBanner] = useState(true);

  const mainPadding =
    pathname === "/hosting/web-hosting" ? showBanner ? "pt-12" : "" : showBanner ? "pt-14" : "";

  return (
    <>
      
      <Navbar setShowBanner={setShowBanner} />
      <main className={mainPadding}>{children}</main>
      <ScrollProvider />
      <ToasterProvider />
      <Footer />
    </>
  );
}

"use client";

import dynamic from "next/dynamic";

const ScrollToTopButton = dynamic(
  () => import("@/components/shared/scroll-to-top"),
  { ssr: false }
);

export function ScrollProvider() {
  return <ScrollToTopButton />;
}

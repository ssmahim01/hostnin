"use client";

import { useEffect } from "react";

interface ScrollToSectionProps {
  id: string;
}

export default function ScrollToSection({ id }: ScrollToSectionProps) {
  useEffect(() => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -100;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [id]);

  return null;
}

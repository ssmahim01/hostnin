"use client";

import { useEffect, useRef } from "react";

interface CalendlyWidgetProps {
  url: string;
  height?: number;
  minWidth?: number;
}

export default function CalendlyWidget({
  url,
  height = 700,
  minWidth = 320,
}: CalendlyWidgetProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <div
      ref={ref}
      className="calendly-inline-widget -mt-10"
      data-url={url}
      style={{ minWidth: `${minWidth}px`, height: `${height}px` }}
    />
  );
}

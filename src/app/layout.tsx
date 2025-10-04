import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider/theme-provider";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { ToasterProvider } from "@/components/ToasterProvider/ToasterProvider";
import { ScrollProvider } from "@/components/shared/scroll-provider";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Premium Web Hosting Solutions | Hostnin",
  description:
    "Hostnin is a web hosting company that provides reliable and affordable web hosting services.",
  metadataBase: new URL("https://hostnin.com"),
  openGraph: {
    title: "Premium Web Hosting Solutions | Hostnin",
    description:
      "Hostnin is a web hosting company that provides reliable and affordable web hosting services.",
    url: "https://hostnin.com",
    siteName: "Hostnin",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hostnin Web Hosting",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Web Hosting Solutions | Hostnin",
    description:
      "Reliable and affordable web hosting solutions with global data centers.",
    images: ["/assets/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KVN2PWTQ');`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="pt-14">{children}</main>
          <ScrollProvider />
          <ToasterProvider />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90, 100],
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com", pathname: "/**" },
      { protocol: "https", hostname: "photos.app.goo.gl", pathname: "/**" },
    ],
  },
  experimental: {
    scrollRestoration: true,
  },
  async headers() {
    return [
      // Cache static Next.js assets for 1 year
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },

      // Cache your uploaded assets (images, fonts, etc.)
      {
        source: "/assets/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },

      // Cache optimized images for 1 month
      {
        source: "/_next/image(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, must-revalidate",
          },
        ],
      },

      // Do NOT cache HTML/pages (always revalidate)
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

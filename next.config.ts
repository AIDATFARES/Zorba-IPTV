import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 160, 240, 320],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      // Article 1: Speed requirements
      {
        source: "/blog/iptv-internet-speed-requirements",
        destination: "/blog/iptv-internet-speed-guide",
        permanent: true,
      },
      {
        source: "/blog/internet-speed-for-iptv",
        destination: "/blog/iptv-internet-speed-guide",
        permanent: true,
      },
      {
        source: "/blog/iptv-speed-requirements-guide",
        destination: "/blog/iptv-internet-speed-guide",
        permanent: true,
      },
      // Article 2: Firestick apps
      {
        source: "/blog/best-iptv-players-firestick",
        destination: "/blog/best-firestick-iptv-apps",
        permanent: true,
      },
      {
        source: "/blog/best-iptv-apps-firestick-2026",
        destination: "/blog/best-firestick-iptv-apps",
        permanent: true,
      },
      {
        source: "/blog/best-iptv-apps-firestick",
        destination: "/blog/best-firestick-iptv-apps",
        permanent: true,
      },
      // Article 3: Smart TV apps
      {
        source: "/blog/best-smart-tv-iptv-players",
        destination: "/blog/best-smart-tv-iptv-apps",
        permanent: true,
      },
      {
        source: "/blog/best-iptv-apps-smart-tv-2026",
        destination: "/blog/best-smart-tv-iptv-apps",
        permanent: true,
      },
      {
        source: "/blog/best-iptv-apps-smart-tv",
        destination: "/blog/best-smart-tv-iptv-apps",
        permanent: true,
      },
      // Article 4: Troubleshooting
      {
        source: "/blog/fix-iptv-not-working-troubleshooting",
        destination: "/blog/fix-iptv-not-working-guide",
        permanent: true,
      },
      {
        source: "/blog/iptv-not-working-2026",
        destination: "/blog/fix-iptv-not-working-guide",
        permanent: true,
      },
      {
        source: "/blog/how-to-fix-iptv-not-working",
        destination: "/blog/fix-iptv-not-working-guide",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;


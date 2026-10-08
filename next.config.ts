import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
      qualities: [75, 100],

    remotePatterns: [
      {
        protocol: "https",
      hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
      hostname: "cdn-icons-png.flaticon.com",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
      },
    ],
  },
};

export default nextConfig;

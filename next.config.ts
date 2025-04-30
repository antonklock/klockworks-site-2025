import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.kwmedia.klockworks.xyz',
      },
    ],
  },
};

export default nextConfig;

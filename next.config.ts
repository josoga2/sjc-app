import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.thehackbio.com",
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;

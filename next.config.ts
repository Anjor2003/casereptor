import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qah8jm2u1f.ufs.sh",
      },
    ],
  },
};

export default nextConfig;

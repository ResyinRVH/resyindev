import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 320, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
  reactCompiler: true,
};

export default nextConfig;

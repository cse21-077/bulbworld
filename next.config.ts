import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // This allows builds to complete even with ESLint errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
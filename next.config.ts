import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    INFURA_API_KEY: "",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    typedRoutes: process.env.TURBOPACK ? false : true,
    reactCompiler: true,
  },
};

export default nextConfig;

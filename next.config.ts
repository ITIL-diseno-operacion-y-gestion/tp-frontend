import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // eslint-disable-next-line n/no-process-env
    typedRoutes: process.env.TURBOPACK ? false : true,
    reactCompiler: true,
  },
};

export default nextConfig;

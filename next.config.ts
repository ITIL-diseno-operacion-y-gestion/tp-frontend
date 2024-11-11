import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["recharts", "react-is"],
  experimental: {
    // eslint-disable-next-line n/no-process-env
    typedRoutes: process.env.TURBOPACK ? false : true,
    esmExternals: "loose",
  },
};

export default nextConfig;

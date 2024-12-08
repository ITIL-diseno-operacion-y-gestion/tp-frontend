import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    typedRoutes: process.env.TURBOPACK ? false : true,
    reactCompiler: true,
    serverActions: {
      allowedOrigins: ["proxy.proxy-production.svc.cluster.local"],
    },
  },
};

export default nextConfig;

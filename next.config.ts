import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    typedRoutes: process.env.TURBOPACK ? false : true,
    reactCompiler: true,
    serverActions: {
      allowedOrigins: [
        "*",
        "itil-frontend.netlify.app",
        "localhost:3000",
        "https://itil-frontend.netlify.app",
      ],
    },
  },
};

export default nextConfig;

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
  headers: async () => {
    return [
      {
        source: "*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://itil-frontend.netlify.app",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,POST,PUT,DELETE,OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

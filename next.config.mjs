/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // eslint-disable-next-line n/no-process-env
    typedRoutes: process.env.TURBOPACK ? false : true,
  },
};

export default nextConfig;

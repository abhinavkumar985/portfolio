import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: 'export', // Enable static export
  basePath: '/portfolio',
  distDir: 'out',
};

export default nextConfig;

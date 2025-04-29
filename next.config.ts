import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: 'export', // Enable static export
  basePath: '/my-portfolio',
  distDir: 'out',
};

export default nextConfig;

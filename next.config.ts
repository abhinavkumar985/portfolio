import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export', // Enable static export
  basePath: isProd ? '/my-portfolio' : '', // Set basePath only for production
};

export default nextConfig;

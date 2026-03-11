import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['example.com', 'another-source.com'], // List your allowed domains here
  },
};

export default nextConfig;

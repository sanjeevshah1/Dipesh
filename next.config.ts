import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["placehold.co","www.coursera.org"], // Add the hostname here
    dangerouslyAllowSVG: false, // Allow SVGs
  },
};

export default nextConfig;

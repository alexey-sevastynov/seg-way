import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/seg-way",
  output: "export",
  images: {
    domains: [],
    unoptimized: true,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/sag-way",
  output: "export",
  images: {
    domains: ["localhost", "alexey-sevastynov.github.io"],
    unoptimized: true,
  },
};

export default nextConfig;

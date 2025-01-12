import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/sag-way",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.15.13"],
  output: "export",
  basePath: "/PetCamargo",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

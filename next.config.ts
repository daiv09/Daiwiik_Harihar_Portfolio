import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flowbite.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "img.daisyui.com",
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
      },
    ],
    dangerouslyAllowSVG: true, // Allows SVG images
    contentSecurityPolicy: "default-src 'self'; img-src * data:;", // Secure external images
  },
};

export default nextConfig;

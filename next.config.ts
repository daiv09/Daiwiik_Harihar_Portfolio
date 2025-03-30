import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["flowbite.com", "placehold.co","img.daisyui.com"], // Correct domain names
    dangerouslyAllowSVG: true, // Allows SVG images
    contentSecurityPolicy: "default-src 'self'; img-src * data:;", // Secure external images
  },
};

export default nextConfig;

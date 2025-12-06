import { i18n } from "./i18n.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["luxury-real-estate-media.b-cdn.net", "images.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "luxury-real-estate-media.b-cdn.net",
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;

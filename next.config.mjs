/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // DO NOT put unoptimized: true
    formats: ["image/avif", "image/webp"],
    domains: ["luxury-real-estate-media.b-cdn.net", "images.unsplash.com"],
    remotePatterns: [
      { protocol: "https", hostname: "luxury-real-estate-media.b-cdn.net" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
    deviceSizes: [360, 480, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [64, 96, 128, 256, 320, 384, 512],
  },
};

export default nextConfig;

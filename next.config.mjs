/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // ← bypass optimizer to avoid 500 timeouts
    remotePatterns: [
      {
        protocol: "https",
        hostname: "luxury-real-estate-media.b-cdn.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

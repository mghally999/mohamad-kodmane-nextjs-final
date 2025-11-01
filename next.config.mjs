/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["luxury-real-estate-media.b-cdn.net", "images.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "luxury-real-estate-media.b-cdn.net",
        pathname: "/**",
      },
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig; // <-- ESM export

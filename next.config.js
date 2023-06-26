/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["barakahit.net", "d33wubrfki0l68.cloudfront.net"],
  },
};

module.exports = nextConfig;

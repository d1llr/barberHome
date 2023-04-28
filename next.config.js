/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["speedmouse.ru"],
    formats: ["image/webp"],
  },
}

module.exports = nextConfig

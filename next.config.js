/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["speedmouse.ru", 'assets.yclients.com','be.cdn.yclients.com'],
    formats: ["image/webp"],
    unoptimized: true
  },
  output: 'serverless',
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["speedmouse.ru", 'assets.yclients.com'],
    formats: ["image/webp"],
  },
  output: 'serverless',
}

module.exports = nextConfig

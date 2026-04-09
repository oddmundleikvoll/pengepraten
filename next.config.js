/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com', 'www.pexels.com'],
  },
}

module.exports = nextConfig

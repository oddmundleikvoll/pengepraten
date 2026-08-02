/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com', 'www.pexels.com'],
  },
  async redirects() {
    return [
      {
        source: '/kredittkort/beste-kredittkort-norge-2026',
        destination: '/kredittkort/beste-kredittkort-2026',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

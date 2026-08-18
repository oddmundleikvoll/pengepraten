/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'www.pexels.com' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/verkt%C3%B8y/boligl%C3%A5nskalkulator',
        destination: '/verktoy/boliglanskalkulator',
        permanent: true,
      },
      {
        source: '/verkt%C3%B8y/l%C3%A5nekalkulator',
        destination: '/verktoy/lanekalkulator',
        permanent: true,
      },
      {
        source: '/verkt%C3%B8y/sparekalkulator',
        destination: '/verktoy/sparekalkulator',
        permanent: true,
      },
      {
        source: '/verkt%C3%B8y',
        destination: '/verktoy',
        permanent: true,
      },
      {
        source: '/min-boligl%C3%A5n',
        destination: '/min-boliglan',
        permanent: true,
      },
      {
        source: '/kredittkort/beste-kredittkort-norge-2026',
        destination: '/kredittkort/beste-kredittkort-2026',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

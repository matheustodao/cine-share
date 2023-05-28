/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org'
      }
    ]
  },

  headers: async () => ([
    {
      source: '/:page*',
      headers: [
        {
          key: 'Access-Control-Allow-Origin',
          value: '*'
        },
        {
          key: 'Access-Control-Allow-Methods',
          value: '*'
        },
        {
          key: 'Access-Control-Allow-Headers',
          value: 'Content-Type, Authorization',
        }
      ]
    }
  ])
}

module.exports = nextConfig

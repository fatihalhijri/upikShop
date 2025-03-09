/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
        {
            source: '/register',
            destination: '/auth/register'
        },
        {
            source: '/login',
            destination: '/auth/login'
        },
        {
            source: '/lupapass',
            destination: '/auth/lupapass'
        },
        
    ]
},
  images: {
    domains: ['localhost'], // Tambahkan localhost sebagai domain gambar
  },
};

module.exports = nextConfig;

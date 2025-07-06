/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/Generate',
        destination: '/generate',
        permanent: true,
      },
      {
        source: '/Profilepic',
        destination: '/profilepic',
        permanent: true,
      },
    ]
  },
}

export default nextConfig;

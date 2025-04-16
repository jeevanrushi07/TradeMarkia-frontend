/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['tmsearch.uspto.gov'],
  },
  experimental: {
    serverActions: true,
  }
};

export default nextConfig;

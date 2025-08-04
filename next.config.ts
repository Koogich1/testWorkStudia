import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['r810983k-1337.euw.devtunnels.ms'],
  },
  async rewrites() {
    return [
      {
        source: '/api/proxy/:path*',
        destination: 'https://r810983k-1337.euw.devtunnels.ms/:path*',
      },
    ];
  },
};

export default nextConfig;

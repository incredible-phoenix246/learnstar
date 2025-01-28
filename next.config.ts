import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
      },
      {
        protocol: 'http',
        hostname: 'vercel-storage.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
      },
    ],
  },
};

export default nextConfig;

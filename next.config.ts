import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  poweredByHeader: false,

  async rewrites() {
    return [
			{
				source: '/auth/:path*',
				destination: `${process.env.NEXT_PUBLIC_API_URL}/auth/:path*`,
			},
			{
				source: '/test/:path*',
				destination: `${process.env.NEXT_PUBLIC_API_URL}/test/:path*`,
			},
			{
				source: ':path*',
				destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
			},
		];
  },
};

export default nextConfig;

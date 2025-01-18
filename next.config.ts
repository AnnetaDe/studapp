import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  poweredByHeader: false,

  async rewrites() {
    return [
			{
				source: '/login',
				destination: `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
			},
			{
				source: '/register',
				destination: `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
			},
			{
				source: '/private/dashboard',
				destination: `${process.env.NEXT_PUBLIC_API_URL}/test/performance`,
			},
			{
				source: '/private/me',
				destination: `${process.env.NEXT_PUBLIC_API_URL}/auth/me`,
			},

			{
				source: '/test/:path*',
				destination: `${process.env.NEXT_PUBLIC_API_URL}/test/:path*`,
			},
		];
  },
};

export default nextConfig;

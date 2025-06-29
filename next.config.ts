/* eslint-disable @typescript-eslint/naming-convention */
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	webpack: (config) => {
		config.watchOptions = {
			poll: 1000,
			aggregateTimeout: 300,
			ignored: /node_modules/,
		};
		return config;
	},
	// Enable React strict mode for better development
	reactStrictMode: true,
	// Add images configuration
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'randomuser.me',
				port: '',
				pathname: '/portraits/**',
			},
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'i.pravatar.cc',
				port: '',
				pathname: '/**',
			},
		],
	},
};

export default nextConfig;

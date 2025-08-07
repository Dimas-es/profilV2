import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
		mdxRs: true,
	},
	webpack: (config, { dev, isServer }) => {
		// Suppress Contentlayer-related webpack cache warnings
		if (dev) {
			config.infrastructureLogging = {
				level: 'error',
			};
		}
		return config;
	},
};

export default withContentlayer(nextConfig);

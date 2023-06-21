/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		loader: 'akamai',
		path: '',
	  },
	  trailingSlash: true,
};
const withVideos = require('next-videos')

module.exports = withVideos()
module.exports = {
	env: {
	},
};

module.exports = nextConfig;

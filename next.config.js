/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // <-- required for next export
  images: {
    unoptimized: true, // <-- avoids error with next/image
  },
  basePath: '/dev-portfolio', // required if hosted at github.com/username/YOUR-REPO-NAME
  trailingSlash: true,         // improves GitHub Pages compatibility
};

module.exports = nextConfig;
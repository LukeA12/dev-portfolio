/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // disable blocking on eslint errors
  },
};

module.exports = nextConfig;
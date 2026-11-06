/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@heroicons/react"],
  },
  async redirects() {
    return [
      {
        source: "/o-nas",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/",
        destination: "/revenue",
        permanent: true,
      },

      {
        source: "/analytics",
        destination: "/revenue",
        permanent: true,
      },

      {
        source: "/crm",
        destination: "/revenue",
        permanent: true,
      },

      {
        source: "/apps",
        destination: "/revenue",
        permanent: true,
      },
    ];
  },

  images: {
    domains: ["picsum.photos"],
  },
};

module.exports = nextConfig;

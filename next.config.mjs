/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  images: {
    remotePatterns: [
      {
        hostname: "api.microlink.io",
      },
    ],
  },
};

export default nextConfig;

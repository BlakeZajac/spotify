/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lgbvcsojylfeevugjveb.supabase.co",
      },
    ],
  },
};

module.exports = nextConfig;

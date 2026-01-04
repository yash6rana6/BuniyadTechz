/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Enable standalone output for Vercel to detect server files
  output: "standalone",

  // Optional but good practice
  reactStrictMode: true,

  // Keep your existing settings
  turbopack: {},
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;

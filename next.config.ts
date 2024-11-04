/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/martacloud/**",
      },
      {
        protocol: "https",
        hostname: "rickandmortyapi.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;

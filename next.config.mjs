/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'media.istockphoto.com',
          },
          {
            protocol: 'https',
            hostname: 'nextui.org',
          }
        ],
      },
};

export default nextConfig;

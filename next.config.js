/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.buymeacoffee.com',
            port: '',
          },
        ],
    }
}

module.exports = nextConfig

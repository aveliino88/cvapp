/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-eval' 'unsafe-inline' https://*.clerk.accounts.dev https://www.google.com https://www.gstatic.com;
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
              img-src 'self' data: https:;
              font-src 'self' data: https://fonts.gstatic.com;
              frame-src 'self' https://*.clerk.accounts.dev https://accounts.google.com https://www.google.com;
              connect-src 'self' https://*.clerk.accounts.dev wss://*.clerk.accounts.dev https://api.ipify.org;
              worker-src 'self' blob:;
            `.replace(/\s+/g, ' ').trim()
          }
        ]
      }
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'djangoappv1.b-cdn.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'nofomo.pro',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/general/:path*', // Match `/general/...`
        destination: 'http://localhost:3000/general/:path*', // Forward to backend
      },
    ];
  },
};
 
export default withNextIntl(nextConfig);
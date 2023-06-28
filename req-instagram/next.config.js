/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: 'Access-Control-Allow-Credentials',
    value: 'true',
  },
  {
    key: 'Access-Control-Allow-Origin',
    value: '*',
  },
  {
    key: 'Access-Control-Allow-Methods',
    value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
  },
  {
    key: 'Access-Control-Allow-Headers',
    value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
  },
];

const nextConfig = {
  reactStrictMode: false,
  env: {
    apiUrl:
      process.env.NODE_ENV === "production"
        ? process.env.NEXT_PUBLIC_PROD_API_URL
        : process.env.NEXT_PUBLIC_DEV_API_URL,
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;

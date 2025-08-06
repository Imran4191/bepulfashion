export default {
  experimental: {
    // Disable PPR temporarily to avoid build issues
    // ppr: true,
    inlineCss: true,
    useCache: true
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/s/files/**'
      }
    ]
  }
};
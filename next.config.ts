export default {
  experimental: {
    ppr: true,
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
  },
  // Add this to handle dynamic routes properly during build
  async generateBuildId() {
    return 'build-' + Date.now().toString();
  },
  // Ensure proper handling of dynamic routes
  trailingSlash: false,
  // Add proper error handling for build-time errors
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  }
};
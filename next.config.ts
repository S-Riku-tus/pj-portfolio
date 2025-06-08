/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['qiita-image-store.s3.ap-northeast-1.amazonaws.com'],
  },
  // Qiita APIへのCORS対応
  async rewrites() {
    return [
      {
        source: '/api/qiita/:path*',
        destination: 'https://qiita.com/api/v2/:path*',
      },
    ]
  },
}

module.exports = nextConfig
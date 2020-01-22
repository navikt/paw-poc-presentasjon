const nextConfig = {
  target: 'serverless',
  exportTrailingSlash: true,
  assetPrefix: process.env.BASE_PATH || '',
}

module.exports = nextConfig

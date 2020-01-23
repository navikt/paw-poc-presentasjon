const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

const nextConfig = {
  target: 'serverless',
  exportTrailingSlash: true,
  assetPrefix: process.env.BASE_PATH || '',
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
}

module.exports = withMDX(nextConfig)

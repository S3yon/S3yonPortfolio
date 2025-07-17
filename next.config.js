/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: [],
  },
  images: {
    unoptimized: true,
  },
  output: "export",
  trailingSlash: false,
  basePath: "",
  assetPrefix: "",
  publicRuntimeConfig: {
    staticFolder: '/public',
  },
}

module.exports = nextConfig

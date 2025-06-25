/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: [],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
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

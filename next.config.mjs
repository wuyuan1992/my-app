/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  transpilePackages: ["@douyinfe/semi-ui", "@douyinfe/semi-icons"],
}

export default nextConfig

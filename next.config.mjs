import semi from "@douyinfe/semi-next"

/** @type {import('next').NextConfig} */
const nextConfig = semi.default({
  omitCss: false,
})({
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  transpilePackages: ["@douyinfe/semi-ui", "@douyinfe/semi-icons"],
})

export default nextConfig

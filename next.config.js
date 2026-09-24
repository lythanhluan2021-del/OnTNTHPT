const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      alasql$: path.resolve(__dirname, "node_modules/alasql/dist/alasql.min.js"),
    };

    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      crypto: false,
      net: false,
      tls: false,
      child_process: false,
    };

    return config;
  },
};

module.exports = nextConfig;

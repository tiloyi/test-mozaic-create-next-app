const sassConfigMozaic = require("@mozaic-ds/css-dev-tools/sassConfig");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: { ...sassConfigMozaic },
};

module.exports = nextConfig;

const includePaths =
  require("@mozaic-ds/css-dev-tools/sassConfig").includePaths;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [...includePaths],
  },
};

module.exports = nextConfig;

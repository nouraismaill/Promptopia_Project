const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  serverExternalPackages: ["mongoose"],
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
};

module.exports = nextConfig;

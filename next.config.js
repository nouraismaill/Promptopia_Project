const nextConfig = {
  appDir: true, // Move `appDir` outside of experimental
  serverExternalPackages: ["mongoose"], // Update to `serverExternalPackages`
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

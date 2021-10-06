module.exports = {
  reactStrictMode: true,
  webpack: (config, { isDev, isServer }) => {
    const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
    if (!isDev) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "static",
          openAnalyzer: false,
          reportFilename: isServer
            ? "../../../public/report-server.html"
            : "../public/report-client.html",
        })
      );
    }
    return config;
  },
};

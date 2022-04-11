module.exports = {
  webpack: function(config) {
    return config;
  },
  devServer: function(configFunction) {
    return function(proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);

      config.hot = true;
      config.historyApiFallback = {
        ...config.historyApiFallback,
        rewrites: [
          // return 404 for non existing locale and prevent fallback to /index.html
          { from: /\/locales\/.+/, to: ({ request }) => request.url },
        ],
      };

      return config;
    };
  },
};

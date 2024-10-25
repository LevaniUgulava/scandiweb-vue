const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      // This allows requests to /display to be proxied to the specified target
      '/display': {
        target: 'http://scandi.infinityfreeapp.com',
        changeOrigin: true,
        pathRewrite: { '^/display': '' }, // Remove the /display prefix when forwarding the request
      },
    },
  },
});


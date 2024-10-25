const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/display': {
        target: 'http://scandi.infinityfreeapp.com',
        changeOrigin: true,
        pathRewrite: { '^/display': '' }, // This will remove /display from the request path
      },
    },
  },
});

// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://scandiweb12.000.pe',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }, 
        secure: false, 
      },
    },
  },
};

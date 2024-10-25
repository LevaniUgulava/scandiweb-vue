const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://scandi.infinityfreeapp.com',
                changeOrigin: true,
                pathRewrite: { '^/api': '' }, // Remove the /api prefix when forwarding
            },
        },
    },
});

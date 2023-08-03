const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/memory-game/'
    : '/',
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/styles/abstracts/_variables.scss";'
      }
    }
  }
})

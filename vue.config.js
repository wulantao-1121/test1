const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 代理跨域
  devServer: {
    host: '10.99.7.5',
    port: '8080',
    proxy: 'http://localhost:808'
  }
})

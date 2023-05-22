const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
  // 代理跨域
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: ''
  //       // pathRewrite: { '^/api': '' }
  //     }
  //   }
  // }
})

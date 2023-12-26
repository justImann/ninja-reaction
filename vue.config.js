const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // publicPath: '/ninja-reaction/public/index.js',
    publicPath: process.env.NODE_ENV === "production" ? "/ninja-reaction/" : "/",
  transpileDependencies: true
})

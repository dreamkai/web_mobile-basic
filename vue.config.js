const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: './', // vueConf.baseUrl, // 根域上下文目录
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false, // 是否开启eslint保存检测，有效值：ture | false | 'error'
  transpileDependencies: [], // 默认babel-loader忽略mode_modules，这里可增加例外的依赖包名
  productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
  css: {
  },
 
  configureWebpack: config => {
    Object.assign(config, {
      // 开发生产共同配置
      resolve: {
        extensions: [".js", ".vue", ".json"],
        alias: {
          "@": path.resolve(__dirname, "./src"),
          vue$: "vue/dist/vue.esm.js"
        }
      }
    });
  },
  pwa: {
    
  },
  devServer: {
    open: true,
    host: 'localhost',
    port: 8081,
    proxy: {
      '/api': {
        target: 'http://47.99.215.186:8181/app/mock/41',//请求地址
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' //请求地址
} } }
 } 
}
// webpack.dev.js
const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const StylelintPlugin = require('stylelint-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

// 合并公共配置,并添加开发环境配置
module.exports = merge(baseConfig, {
  mode: 'development', // 开发模式,打包更加快速,省了代码优化步骤
  devtool: 'eval-cheap-module-source-map', // 源码调试模式,后面会讲
  devServer: {
    port: 2023, // 服务端口号
    compress: false, // gzip压缩,开发环境不开启,提升热更新速度
    hot: true, // 开启热更新，后面会讲react模块热替换具体配置
    historyApiFallback: true, // 解决history路由404问题
    static: {
      directory: path.join(__dirname, '../public'), //托管静态资源public文件夹
    },
  },
  plugins: [
    // 添加热更新插件
    new ReactRefreshWebpackPlugin(),
    // 样式代码中避免错误并强制规范
    new StylelintPlugin({
      configFile: path.resolve(__dirname, '../.stylelintrc.js'),
      extensions: ['less'],
      files: 'src/**/*.less',
      fix: true,
      customSyntax: 'postcss-less',
      lintDirtyModulesOnly: true,
      threads: true,
      exclude: ['node_modules'],
    }),
  ],
});

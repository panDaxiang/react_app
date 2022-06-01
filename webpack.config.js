const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const resolve = url => path.resolve(__dirname, url)

const port = 5000

module.exports = {
  stats: 'errors-only',
  mode: 'development',
  entry: resolve('./src/index.tsx'),
  output: {
    filename: 'js/[name].[contenthash:5].js',
    chunkFilename: 'js/[name].chunk.[contenthash:5].js',
    path: resolve('./dist'), // 对应一个绝对路径，此路径是你希望一次性打包的目录
    publicPath: '', // 静态文件的
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    // 创建 import 或 require 的别名
    alias: {
      '@': resolve('./src'),
    },
  },
  module: {
    // 不需要解析的第三方模块
    // noParse: /jquery/,
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        loader: 'babel-loader',
        include: resolve('./src'),
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.(css|less)$/,
        include: resolve('./src'),
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/i,
        type: 'asset',
        generator: {
          filename: 'img/[hash][ext][query]' // 局部指定输出位置
        },
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024 // 限制于 8kb
          }
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 生成页面title标题， <%=htmlWebpackPlugin.options.title%>在html这样使用
      title: 'react',
      // 生成html的文件名
      filename: 'index.html',
      // 指定生成的文件所依赖的模板
      template: resolve('./index.html'),
    }),
    new FriendlyErrorsWebpackPlugin()
  ],
  devServer: {
    port,
    hot: true
  }
}

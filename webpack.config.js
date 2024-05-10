const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const MyPlugin = require('./myPlugin.ts')

const resolve = url => path.resolve(__dirname, url)

const port = 5000

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    index: { import: './src/index.tsx', runtime: 'solid-runtime' } 
  },
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
        loader: 'esbuild-loader',
        include: resolve('./src'),
        options: {
          // cacheDirectory: true,
          target: 'es2015'
        }
      },
      {
        test: /\.css$/,
        // include: resolve('./src'),
        use: ['style-loader', 'css-loader', { loader: 'esbuild-loader', options: { minify: true } }]
      },
      {
        test: /\.less$/,
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
      title: 'react_demo',
      // 生成html的文件名
      filename: 'index.html',
      // 指定生成的文件所依赖的模板
      template: resolve('./index.html'),
    }),
    new FriendlyErrorsWebpackPlugin(),
    new MyPlugin(),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    port,
    hot: true,
    client: {
      progress: true,
    },
  },
  stats: 'errors-only'
}

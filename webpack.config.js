const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname + '/build')
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, 'build')
    },
    port: 3000
  },
  mode: 'production',
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules',
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    // 번들시 html만 파일로 추출하게 해주는 플러그인이다.
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      minify:
        process.env.NODE_ENV === 'production'
          ? {
              collapseWhitespace: true,
              removeComments: true
            }
          : false
    }),
    // 번들시 css만 파일로 추출하게 해주는 플러그인이다.
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    // License.txt 파일 build시 제외
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['**/*.LICENSE.txt'],
      protectWebpackAssets: false
    }),
    // bundle 크기를 보여주는 플러그인
    new BundleAnalyzerPlugin()
  ]
};

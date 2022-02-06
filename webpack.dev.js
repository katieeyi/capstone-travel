const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/client/index.js',
  mode: 'development',
  devtool: 'source-map',
  stats: 'verbose',
  module: {
    rules: [
      {
        test: '/\.js$',
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
        ]
      },
      {
        test: /\.html$/,
        use:{
          loader: 'html-loader'
        }
      },
      {
          test: /\.(png|svg|webp|jpeg|jpg|gif)$/,
          type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin ({
      template: './src/client/views/index.html',
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
}

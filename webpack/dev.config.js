const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  entry: './examples/main.js',
  output: {
    filename: 'main.js',
  },
  devServer: {
    publicPath: '/',
    hot: true,
    contentBase: './',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: './examples/index.html',
      filename: 'index.html',
      inject: true,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
});

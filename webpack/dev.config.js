const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  entry: './examples/main.js',
  output: {
    filename: 'bundle.js',
  },
  devServer: {
    publicPath: '/',
    contentBase: './examples',
    hot: true,
  },
});

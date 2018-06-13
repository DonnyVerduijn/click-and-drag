module.exports = {
  output: {
    filename: 'click-and-drag.min.js',
  },
  devServer: {
    publicPath: '/',
    contentBase: './public',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};

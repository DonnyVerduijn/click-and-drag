module.exports = {
  //   entry: {
  //     app: './src/index',
  //     context: '/',
  //   },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};

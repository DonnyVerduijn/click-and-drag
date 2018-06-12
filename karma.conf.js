
module.exports = (config) => {
  config.set({
    preprocessors: {
      // add webpack as preprocessor
      'src/**/*.js': ['webpack', 'sourcemap'],
      'test/**/*.js': ['webpack', 'sourcemap'],
    },
    webpack: {
      // karma watches the test entry points
      // (you don't need to specify the entry option)
      // webpack watches dependencies
      // webpack configuration
      mode: 'development',
    },
    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      stats: 'none',
      logLevel: 'silent',
      devtool: 'inline-source-map',
    },
    frameworks: ['mocha', 'chai'],
    files: [
      // all files ending in "_test"
      { pattern: 'test/**/*.js', watched: false },
      // each file acts as entry point for the webpack configuration
    ],
    reporters: ['progress'],
    port: 9876, // karma web server port
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['MyChromeHeadless'],
    autoWatch: false,
    // singleRun: false, // Karma captures browsers, runs the tests and exits
    concurrency: Infinity,
    customLaunchers: {
      MyChromeHeadless: {
        base: 'ChromeHeadless',
        flags: ['--disable-translate', '--disable-extensions', '--remote-debugging-port=9223'],
      },
    },
  });
};

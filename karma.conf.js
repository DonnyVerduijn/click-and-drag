const testConfig = require('./webpack/test.config');

module.exports = config => {
  config.set({
    files: ['test/start.js'],
    preprocessors: {
      'test/start.js': 'webpack',
    },
    webpack: testConfig,
    reporters: ['progress', 'coverage-istanbul'],
    coverageIstanbulReporter: {
      reports: ['text'],
      fixWebpackSourcePaths: true,
    },
    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      stats: 'none',
      logLevel: 'silent',
      devtool: 'inline-source-map',
    },
    frameworks: ['mocha', 'chai'],
    colors: true,
    logLevel: config.LOG_INFO,
    customLaunchers: {
      MyChromeHeadless: {
        base: 'ChromeHeadless',
        flags: [
          '--disable-translate',
          '--disable-extensions',
          '--remote-debugging-port=9223',
        ],
      },
    },
    browsers: ['MyChromeHeadless'],
    autoWatch: true,
    singleRun: false, // Karma captures browsers, runs the tests and exits
    concurrency: Infinity,
  });
};

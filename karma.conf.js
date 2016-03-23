var webpack = require('webpack');
var webpackConfig = require('./webpack.config');

module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ],
    frameworks: [ 'mocha' ],
    files: ['./app/js/**/*.spec.js'],
    webpack: webpackConfig,
    preprocessors: {'./app/js/**/*.js': [ 'webpack' ]},
    reporters: [ 'progress' ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: true,
    plugins: [
      require('karma-webpack'),
      'karma-mocha',
      'karma-chrome-launcher',
    ]
  });
};

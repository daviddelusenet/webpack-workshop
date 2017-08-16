const webpack = require('webpack');
const { resolve } = require('path');

module.exports = function(env) {
  return {
    context: resolve(__dirname, './src'), // The context is an absolute string to the directory that contains the entry files.
    entry: { // The entry object is where webpack looks to start building the bundle
      app: './javascript/App.js'
    },
    devtool: 'cheap-module-source-map', // https://webpack.js.org/configuration/devtool/
    output: {
      path: resolve(__dirname, './dist/js'),
      filename: '[name].min.js',
      publicPath: '/js/'
    }
  }
};

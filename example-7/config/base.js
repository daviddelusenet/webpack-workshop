const webpack = require('webpack');
const { resolve } = require('path');

module.exports = function() {
  return {
    context: resolve(__dirname, './../src'), // The context is an absolute string to the directory that contains the entry files.
    entry: { // The entry object is where webpack looks to start building the bundle
      app: ['babel-polyfill', './javascript/App.js']
    },
    output: {
      path: resolve(__dirname, './../dist/js'),
      filename: '[name].min.js',
      publicPath: '/js/' // The bundled files will be available in the browser under this path
    },
    module: {
      rules: [
        {
          test: /\.js$/, // Check for all js files
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    }
  }
};

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
    resolve: {
      modules: ['node_modules', 'src/javascript/components', 'src/javascript/utils', 'src/javascript/libs'],
      alias: {
        'TweenLite': resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
        'TweenMax': resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
        'TimelineLite': resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
        'TimelineMax': resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
        'ScrollMagic': resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
        'animation.gsap': resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
        'debug.addIndicators': resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
      }
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

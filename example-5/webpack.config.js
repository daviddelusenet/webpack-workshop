const webpack = require('webpack');
const { resolve } = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = function() {
  return {
    context: resolve(__dirname, './src'), // The context is an absolute string to the directory that contains the entry files.
    entry: { // The entry object is where webpack looks to start building the bundle
      app: './javascript/App.js'
    },
    devtool: 'cheap-module-source-map', // https://webpack.js.org/configuration/devtool/
    devServer: {
      contentBase: resolve(__dirname, './dist'), // The folder from where the files get served
      compress: true, // Enable gzip compression for everything served
      port: 3100
    },
    output: {
      path: resolve(__dirname, './dist/js'),
      filename: '[name].min.js',
      publicPath: '/js/' // The bundled files will be available in the browser under this path
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'style-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                importLoaders: 2
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: () => {
                  return [
                    require('autoprefixer')({
                      browsers: 'last 10 versions'
                    })
                  ]
                }
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new BrowserSyncPlugin(
        // BrowserSync options
        {
          // Browse to http://localhost:3000/ during development
          host: 'localhost',
          port: 3000,
          // Proxy the Webpack Dev Server endpoint through BrowserSync
          proxy: 'http://localhost:3100',
          open: true
        },
        // Plugin options
        {
        // Prevent BrowserSync from reloading the page and let Webpack Dev Server take care of this
        reload: false
      })
    ]
  }
};

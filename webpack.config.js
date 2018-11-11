
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const sourcePath = path.join(__dirname, './src');
const outPath = path.join(__dirname, './dist');
const env = process.env.NODE_ENV;
const port = process.env.PORT || 9000;

const config = {
  context: sourcePath,

  mode: env || 'development',

  entry: ['./index.tsx'],

  output: {
    filename: 'index.js',
    path: outPath
  },

  // target: 'electron-renderer',
  target: 'web',

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader'
      }
    ]
  },

  resolve: {
    modules: [sourcePath, 'node_modules'],
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      reducer: sourcePath
    }
  },

  plugins: [
    new WebpackCleanupPlugin(),
    new HtmlWebpackPlugin({
      template: "index.html"
    }),
    new ExtractTextPlugin({
      filename: './statics/styles/main.css',
    })
  ],

  devServer: {
    contentBase: outPath,
    hot: false,
    inline: true,
    port: port,
    historyApiFallback: {
      disableDotRule: true
    },
    stats: 'minimal'
  }
}

module.exports = config;
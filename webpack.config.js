const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  plugins: [
  new CopyWebpackPlugin([
    // relative path is from src
    { from: './app/assets/images/favicon.ico' }, // <- your path to favicon
  ])
],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  context: __dirname,
  entry: './frontend/monte_crysto.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};

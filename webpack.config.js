const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './code/indexSnapshot.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
  resolve: {
    mainFields: ['browser', 'module', 'main']
  }
};

module.exports = config;

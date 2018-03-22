const path = require('path');

var libraryName = 'TOTP';

var config = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'totp.min.js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components|test)/,
        query: {
          presets: ['es2015']
        }
      },
    ]
  },
  resolve: {
    extensions: ['.js']
  }
}
module.exports = config;
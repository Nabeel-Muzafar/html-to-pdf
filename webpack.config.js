const path = require('path');

module.exports = {
  mode: 'development', // or 'production'
  entry: './src/index.js', // Update to your actual entry file
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.json'],
    fallback: {
    //   "fs": false,
    //   "path": require.resolve("path-browserify"),
    //   "os": require.resolve("os-browserify/browser"),
    //   "stream": require.resolve("stream-browserify"),
    //   "util": require.resolve("util/"),
    //   "zlib": require.resolve("browserify-zlib"),
    //   "assert": require.resolve("assert/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader', // If using Babel for JavaScript transpilation
      },
    ],
  },
};

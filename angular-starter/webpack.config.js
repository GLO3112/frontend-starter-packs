var webpack = require("webpack");

module.exports = {
  entry: {
    "lib": "./src/Lib",
    "app": "./src/Index"
  },
  output: {
    path: __dirname,
    filename: "./dist/js/[name].bundle.js"
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.ts/,
        loaders: ['ts-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"lib", /* filename= */"./dist/js/lib.bundle.js")
  ]
};

var webpack = require("webpack");

module.exports = {
  cache: true,
  entry: "./app/main.js",
  output: {
    path: __dirname + "/app",
    filename: "bundle.js"
  },
  devtool: "source-map",
  module: {
    loaders: [
      {test: /\.css$/, loader: "style!css"},
      {test: /\.less$/, loader: "style!css!less"},
      {test: /\.json$/, loader: "json"},
      {test: /\.jsx$/, loader: "jsx-loader"},
      {test: /\.js$/, loader: "jsx-loader"},
      {test: /\.ls$/, loader: "livescript-loader"}
    ]
  }
};

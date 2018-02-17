const path = require("path");

const configurate = require("./webpack.config.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpack = require("webpack");
const root = path.resolve(process.cwd());

const option = {
  devtool: "cheap-module-eval-source-map",
  entry: [
    "react-hot-loader/patch",
    "webpack-hot-middleware/client",
    path.join(root, "src/app.jsx"), // Start with src/app.js

  ],
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      inject: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
};

module.exports = configurate(option);

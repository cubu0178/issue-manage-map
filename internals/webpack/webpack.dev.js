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
    path.join(root, "app/app.jsx"), // Start with src/app.jsx
  ],
  plugins: [
    new HtmlWebpackPlugin({
      template: "app/index.html",
      inject: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
};

module.exports = configurate(option);

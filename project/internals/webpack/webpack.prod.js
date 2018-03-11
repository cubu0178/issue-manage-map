const path = require("path");

const configurate = require("./webpack.config.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const root = path.resolve(process.cwd());

const option = {
  entry: [
    path.join(root, "project/app/app.jsx"), // Start with src/app.js
  ],
  plugins: [
    // Minify and optimize the index.html
    new HtmlWebpackPlugin({
      template: "app/index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),
  ]
};

module.exports = configurate(option);

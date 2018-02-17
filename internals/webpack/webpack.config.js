const path = require("path");

const root = path.resolve(process.cwd());

// configurate function used in the config files
const configurate = (options) => ({
  entry: options.entry,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    path: path.join(root, "build"),
    publicPath: "/",
    filename: "bundle.js"
  },
  
  plugins: options.plugins.concat([]),
  devtool: options.devtool
});

module.exports = configurate;

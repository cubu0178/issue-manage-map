const combineLoaders  = require("webpack-combine-loaders");
const path = require("path");

// Paths
const root = path.resolve(process.cwd());
const app = path.join(process.cwd(), "project/app");

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
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: combineLoaders([
          {
            loader: "style-loader"
          }, {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[name]__[local]___[hash:base64:5]",
              importLoaders: 1
            }
          }, {
            loader: "postcss-loader",
            options: {
              config: {
                path: "../postcss/postcss.config.js"
              }
            }
          }
        ])
      },
      {
        // Preprocess 3rd party .css files located in node_modules
        test: /\.css$/,
        include: /node_modules/,
        use: ["style-loader", "css-loader"],
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    alias: {
      "app": app
    }
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

const path = require("path");
const webpack = require("webpack");
const express = require("express");
const config = require("../internals/webpack/webpack.dev.js");

const app = express();
const compiler = webpack(config);

app.use(require("webpack-dev-middleware")(compiler, {
  publicPath: config.output.publicPath,
  logLevel: "warn"
}));

app.use(require("webpack-hot-middleware")(compiler));

app.get("*", function(req, res) {
  console.log(process.cwd());
  res.sendFile(path.join(process.cwd(), "build/index.html"));
});

app.listen(3000, (err) => {
  if (err) {
    return console.error(err);
  }

  console.log("Listening at http://localhost:3000/");
});

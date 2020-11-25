const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: "./app/scripts/index.js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: "app/index.html", to: "index.html" },
        { from: "app/assets/", to: "assets/" },
        { from: "app/favicon.png", to: "favicon.png" },
        { from: "app/humans.txt", to: "humans.txt" },
        { from: "app/robots.txt", to: "robots.txt" },
        { from: "app/service-worker.js", to: "service-worker.js" },
        { from: "app/manifest.webmanifest", to: "manifest.webmanifest" }
      ],
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: false, // default = false
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // watchContentBase: true,
    compress: true,
    port: 8000, //process.env.PORT, // Defaults to 8080
    open: true
  },
  // devServer: {
  //   stats: 'errors-only',
  //   index: 'index.php',
  //   contentBase: path.resolve(__dirname, 'wp-content/themes/beepix/'),
  //   watchContentBase: true,
  //   publicPath: 'http://localhost:8080/wp-content/themes/beepix',
  //   proxy: {
  //     context: () => true,
  //     target: 'http://localhost/beepix-webpack/dist'
  //   },
  //   host: process.env.HOST, // Defaults to `localhost`
  //   port: process.env.PORT, // Defaults to 8080
  //   open: true
  // }
};

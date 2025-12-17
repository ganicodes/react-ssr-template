const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

// const ENV = process.env.NODE_ENV || "development";
// console.log('ENV: ', ENV);

const babelLoader = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: [
            ["@babel/preset-env"],
            ["@babel/preset-react", { runtime: "automatic" }],
          ],
        },
      },
    },
  ],
};

const resolve = {
  extensions: [".js", ".jsx"],
  alias: {
    "@src": path.resolve(__dirname, "src/"),
    "@pages": path.resolve(__dirname, "src/pages/"), // Alias for the pages directory
  },
};

const serverConfig = {
  target: "node",
  entry: "./src/server.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.cjs",
  },
  module: babelLoader,
  plugins: [
    new webpack.EnvironmentPlugin({
      PORT: 3001,
    }),
  ],
  resolve,
};

const clientConfig = {
  target: "web",
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/static",
    filename: "client.js",
  },
  module: babelLoader,
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new webpack.EnvironmentPlugin({
      PORT: 3000,
    }),
  ],
  resolve,
};

module.exports = [serverConfig, clientConfig];

const webpack = require("webpack")
const LoadablePlugin = require('@loadable/webpack-plugin')
const Path = require("path")
const AssetsPlugin = require("assets-webpack-plugin")
const BUILD_DIR = "./assets/build/"
const version = "1.0.0"

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: {
    app: ["./src/client/App.jsx"],
    vendor: [
      "react",
      "react-dom",
      "react-router",
      "react-router-dom",
      "react-router-config"
    ]
  },
  output: {
    path: Path.resolve(__dirname, BUILD_DIR),
    filename:
      process.env.NODE_ENV == "production"
        ? `[name].[hash].${version}.js`
        : `[name].${version}.js`,
    publicPath: "/assets/build/"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-config|react-router-dom)[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  },
  plugins: [
    new AssetsPlugin({
      prettyPrint: true,
      path: Path.join(__dirname, "./src/config")
    }),
    new LoadablePlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              babelrc: false,
              presets: ["@babel/preset-env", "@babel/react"],
              plugins: ["transform-class-properties", "syntax-dynamic-import"],
              env: {
                production: {
                  presets: []
                }
              }
            }
          }
        ]
      }
    ]
  }
}

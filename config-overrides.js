const { override, addWebpackModuleRule } = require("customize-cra");
// const webpack = require("webpack");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = override(
  addWebpackModuleRule({
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  })
);

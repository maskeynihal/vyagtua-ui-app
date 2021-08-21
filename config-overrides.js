const {
  override,
  addWebpackModuleRule,
  addWebpackAlias,
  addWebpackResolve,
} = require("customize-cra");

const path = require("path");
// const webpack = require("webpack");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  webpack: override(
    addWebpackAlias({
      react: path.resolve(__dirname, "./node_modules/react"),
    }),
    addWebpackResolve({
      symlinks: false,
    })
  ),
};

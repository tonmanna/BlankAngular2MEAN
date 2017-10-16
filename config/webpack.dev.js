var webpackMerge = require("webpack-merge");
var commonConfig = require("./webpack.common.js");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var LiveReloadPlugin = require("webpack-livereload-plugin");
var TsConfigPathsPlugin = require("awesome-typescript-loader").TsConfigPathsPlugin;

module.exports = webpackMerge(commonConfig, {
    devtool: "cheap-module-eval-source-map",
    watch: true,
    watchOptions: {
        poll: true
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "./src/index.html", inject: "body", filename: "index.html" }),
        new LiveReloadPlugin({ appendScriptTag: true }),
        new TsConfigPathsPlugin({ tsconfig: "tsconfig.json", compiler: "typescript" })
    ]
});
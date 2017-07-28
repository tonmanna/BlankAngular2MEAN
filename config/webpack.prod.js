var webpack = require("webpack");
var webpackMerge = require("webpack-merge");
var commonConfig = require("./webpack.common.js");
const ENV = process.env.NODE_ENV = process.env.ENV = "production";
var HtmlWebpackPlugin = require("html-webpack-plugin");
var TsConfigPathsPlugin = require("awesome-typescript-loader").TsConfigPathsPlugin;

module.exports = webpackMerge(commonConfig, {
    devtool: "source-map",
    plugins: [
        new webpack
        .optimize
        .UglifyJsPlugin({
            mangle: {
                keep_fnames: true
            }
        }),
        new webpack
        .optimize
        .CommonsChunkPlugin({
            name: [
                "app", "polyfills", "vendor"
            ],
            minChunks: Infinity
        }),
        new webpack.DefinePlugin({
            "process.env": {
                "ENV": JSON.stringify(ENV)
            }
        }),
        new HtmlWebpackPlugin({ template: "./src/index.html", inject: "body", filename: "index.html" }),
        new webpack.ProvidePlugin({ swal: "swal", $: "jquery", jQuery: "jquery", jquery: "jquery", "window.jQuery": "jquery" }),
        new TsConfigPathsPlugin({ tsconfig: "tsconfig.json", compiler: "typescript" })
    ]
});
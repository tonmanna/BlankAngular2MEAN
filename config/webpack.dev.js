var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var path = require('path');
const ENV = process.env.NODE_ENV = process.env.ENV = 'development';

module.exports = webpackMerge(commonConfig, {

    devtool: 'cheap-module-eval-source-map',
    output: {
        path: helpers.root('/public/app'),
        filename: '[name].js',
        chunkFilename: '[id].js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jquery: "jquery"
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                htmlLoader: {

                }
            }
        })
    ],
    watch: true,
    watchOptions: {
        poll: true
    }
});
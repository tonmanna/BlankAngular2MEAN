var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('/public/app'),
        publicPath: '/app',
        filename: '[name].js',
        chunkFilename: '[id].js'
    },

    htmlLoader: {
        minimize: false // workaround for ng2
    },

    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.ProvidePlugin({
            $: "jquery",
            jquery: "jquery",
            jQuery: "jquery",
            "windows.jQuery": "jquery"
        }),
    ],

    watch: true,
    watchOptions: {
        poll: true
    }
});

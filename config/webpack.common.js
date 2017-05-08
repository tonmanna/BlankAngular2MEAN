var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var path = require('path');

module.exports = {
    entry: {
        'app': './src/main.ts',
        'polyfills': './src/polyfills.ts',
        'twbs': 'bootstrap-loader'
    },
    output: {
        path: helpers.root('/dist'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [{
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
                exclude: [/\.(spec|e2e)\.ts$/]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.css$/,
                use: ['raw-loader']
            },
            {
                test: /\.scss$/,
                use: ['raw-loader', 'sass-loader']
            },
            {
                test: /bootstrap\/dist\/js\/umd\//,
                use: 'imports-loader?jQuery=jquery'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            },
            {
                test: /\.(jpe?g|png|gif|svg|csv|mp4|ogv|woff2|ttf|woff|eot)$/,
                loader: 'url-loader'
            },
            {
                test: /\.json/,
                loader: 'json-loader'
            },
        ]
    }
};
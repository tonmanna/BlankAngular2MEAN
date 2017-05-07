var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var path = require('path');

module.exports = {
    entry: {
        'app': './src/main.ts',
        'polyfills': './src/polyfills.ts'
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [{
                test: /\.ts$/,
                use: ['awesome-typescript-loader']
            },
            {
                test: /\.html$/,
                use: ['file-loader?name=html/[name].[ext]']
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                use: ["file-loader"]
            },
            {
                test: /\.css$/,
                use: ['file-loader?name=css/[name].[ext]']
            }
        ]
    }
};
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const babel = require('./webpack/babel');
const css = require('./webpack/css');
const sass = require('./webpack/sass');
const sassModule = require('./webpack/sass-module');
const html = require('./webpack/html');
const files = require('./webpack/files');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: './',
        filename: 'bundle.js'
    },
    mode: 'production',
    module: {
        rules: [babel, css, sass, sassModule, html, files]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ],
    stats: 'errors-only',
    resolve: {
        extensions: ['.webpack.js', '.js', '.jsx', '.json']
    }
};

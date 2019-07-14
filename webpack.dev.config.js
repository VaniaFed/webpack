const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const js = require('./webpack/js');
const css = require('./webpack/css');
const sass = require('./webpack/sass');
const sassModule = require('./webpack/sass-module');
const html = require('./webpack/html');
const files = require('./webpack/files');

const devMode = process.env.NODE_ENV !== 'production';
module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [js, css, sass, sassModule, html, files]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
        }),
        new StyleLintPlugin({
            configPath: './.stylelintrc'
        }),
    ],
    devtool: 'source-map',
    stats: 'errors-only',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
        publicPath: '/'
    },
    resolve: {
        extensions: ['.webpack.js', '.js', '.jsx', '.json']
    }
};

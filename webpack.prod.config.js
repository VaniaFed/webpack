const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

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
            filename: './index.html',
            minify: {
                collapseWhitespace: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ],
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin()],
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            automaticNameMaxLength: 30,
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },
    stats: 'errors-only',
    resolve: {
        extensions: ['.webpack.js', '.js', '.jsx', '.json'],
        alias: {
            Components: path.resolve(__dirname, 'src/components/')
        }
    }
};

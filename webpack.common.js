const path = require('path');

const devMode = process.env.NODE_ENV !== 'production';
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');

const css = require('./webpack/css');
const sass = require('./webpack/sass');
const sassModule = require('./webpack/sass-module');
const html = require('./webpack/html');
const files = require('./webpack/files');

const common = merge([
    {
        entry: './src/index.jsx',
        output: {
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/',
            filename: 'bundle.js'
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
                filename: devMode ? '[name].css' : '[name].[hash].css',
                chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
            })
        ],
        module: {
            rules: [css, sass, sassModule, html, files]
        },
        resolve: {
            extensions: ['.webpack.js', '.js', '.jsx', '.json'],
            alias: {
                Components: path.resolve(__dirname, 'src/components/')
            }
        },
        optimization: {
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
        }
    }
]);
module.exports = common;

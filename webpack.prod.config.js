const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const babel = require('./webpack/babel');
const merge = require('webpack-merge');

const commonConfig = require('./webpack.common');

const prodConfig = merge([
    {
        mode: 'production',
        module: {
            rules: [babel]
        },
        optimization: {
            minimizer: [new OptimizeCSSAssetsPlugin(), new TerserPlugin({})]
        }
    }
]);

module.exports = merge(commonConfig, prodConfig);

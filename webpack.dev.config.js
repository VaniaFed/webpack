const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const js = require('./webpack/js');

const devConfig = merge([
    {
        mode: 'development',
        plugins: [
            new StyleLintPlugin({
                configFile: './.stylelintrc',
                syntax: 'sass'
            })
        ],
        module: {
            rules: [js]
        },
        devtool: 'source-map',
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            port: 9000,
            publicPath: '/',
            stats: 'errors-only'
        }
    }
]);

module.exports = merge(commonConfig, devConfig);

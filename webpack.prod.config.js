const merge = require('webpack-merge');

const baseConfig = require('./webpack/webpack-config');
const prodConfig = require('./webpack/webpack-prod-config');
const devserverConfig = require('./webpack/webpack-devserver-config');
const aliasConfig = require('./webpack/webpack-alias');

module.exports = merge([baseConfig, prodConfig, devserverConfig, aliasConfig]);

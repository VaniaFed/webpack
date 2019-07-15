const merge = require('webpack-merge');

const baseConfig = require('./webpack/webpack-config');
const devConfig = require('./webpack/webpack-dev-config');
const devserverConfig = require('./webpack/webpack-devserver-config');
const aliasConfig = require('./webpack/webpack-alias');

module.exports = merge([baseConfig, devConfig, devserverConfig, aliasConfig]);

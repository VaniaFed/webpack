const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    test: /\.css$/,
    use: [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                hmr: process.env.NODE_ENV === 'development'
            }
        },
        {
            loader: 'css-loader',
            options: {
                modules: false
            }
        },
        {
            loader: 'postcss-loader',
            options: {
                ident: 'postcss',
                plugins: [require('autoprefixer')()]
            }
        }
    ]
};

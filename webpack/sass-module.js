const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    test: /\.module.sass$/,
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
                localIdentName: '[hash:8]',
                modules: true
            }
        },
        {
            loader: 'postcss-loader',
            options: {
                ident: 'postcss',
                plugins: [require('autoprefixer')()]
            }
        },
        'sass-loader'
    ]
};

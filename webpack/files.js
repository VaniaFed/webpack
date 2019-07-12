module.exports = {
    test: /\.png|jpg|jpeg|svg|gif$/,
    use: [
        {
            loader: 'url-loader',
            options: {
                limit: 10000
            }
        }
    ]
};

module.exports = {
    mode: 'production',  //development

    module: {
        rules: [{
            use: {
                loader: 'babel-loader',
            },
        }],
    },

    devtool:'source-map',
    devServer: {
        static: './dist',
    },
};
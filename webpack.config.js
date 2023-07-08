module.exports = {
    mode: 'production',  //development

    module: {
        rules: [{
            use: {
                loader: 'babel-loader',
            },
        }],
    },

    devServer: {
        static: './dist',
    },
};
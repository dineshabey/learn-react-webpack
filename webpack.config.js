let mode = 'development';

if (process.env.NODE_ENV === 'production') {
    mode = 'production';
}


module.exports = {
    mode,

    module: {
        rules: [{
            
            use: {
                loader: 'babel-loader',
            },
        }],
    },

    devtool: 'source-map',
    devServer: {
        static: './dist',
    },
};
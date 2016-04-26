const path = require('path');

module.exports = {
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'eslint'

            }
        ],
        loaders: [
            {
                test: [/\.js$/, /\.jsx?$/, /\.es6$/],
                exclude: 'node_modules',
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.es6']
    }
};
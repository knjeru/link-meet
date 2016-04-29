const path = require('path');

module.exports = {
    entry: './src/client/index.js',
    output: {
        path: path.join(__dirname, './src/client'),
        filename: 'bundle.js'
    },
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
                exclude: '/node_modules/',
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.es6']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: "./src/client",
        hot: true,
        port: 3000
    }
};
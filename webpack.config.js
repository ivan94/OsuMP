var webpack = require('webpack');

module.exports = {
    entry: {
        app: ['webpack/hot/dev-server', './src/main.js']
    },
    output: {
        path: __dirname + '/public/js',
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080/js/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react']
                }
            },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    target: 'electron-main'
}
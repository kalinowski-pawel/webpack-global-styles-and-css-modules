const path = require('path');
const hwp = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/dist')
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: {
                                localIdentName: '[name]__[local]___[hash:base64:5]',
                            },
                        },
                    },
                    {
                        loader: 'less-loader',
                        options: { sourceMap: true },
                    },
                ],
                include: /\.module\.less$/,
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true },
                    },
                    {
                        loader: 'less-loader',
                        options: { sourceMap: true },
                    },
                ],
                exclude: /\.module\.less$/,
            }
        ]
    },
    plugins: [
        new hwp({template: path.join(__dirname, '/src/index.html')})
    ]
};

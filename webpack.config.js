var path = require('path');
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    resolve: {
            extensions: ['.jsx', '.js'],
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react']
                }
            }
        }, {
            test: /\.(woff|svg|eot|ttf)\??.*$/,
            loader: 'url-loader?name=fonts/[name].[md5:hash:hex:7].[ext]'
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'file-loader'
              }
            ]
        }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html'
        })
    ]
}

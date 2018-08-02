var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var pathsToClean = [
    'dist'
]

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
            test: /\.(png|jpg|gif|jpeg)$/,
            use: [
              {
                loader: 'file-loader'
              }
            ]
        }],
    },
    plugins: [
        new CleanWebpackPlugin(pathsToClean),
        new CopyWebpackPlugin([{
            from: 'src/images',
            to: 'src/images'
        }, {
            from: 'src/data',
            to: 'src/data'
        }]),
        new ExtractTextPlugin("css/styles.css"),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html'
        })
    ]
}

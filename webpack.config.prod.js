var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: __dirname + "/src/index.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js",
        publicPath: "./"
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['react-hot-loader/babel']
                    }
                } 

            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader"},
                    { loader: "css-loader"}
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                uglifyOptions: {
                    compress: {
                        warnings: false,
                        reduce_vars: false
                    },
                    output: {
                        comments: false
                    },
                    sourceMap: true
                }
            })
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: __dirname + "/public/index.html",
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            }
        })
    ],
};
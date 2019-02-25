module.exports = {
    entry: __dirname + "/src/index.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }

            }
        ]
    },
    devServer: {
        contentBase: "./public",
        historyApiFallback: true,
        inline: true
    }
};
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {test: /\.(js|jsx)$/, exclude: /node_modules/, use: 'babel-loader'},
            {test: /\.css$/, use: ['style-loader', 'css-loader']}
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
      },
    plugins: [
        new htmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]

};

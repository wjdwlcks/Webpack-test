const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// export
module.exports = {
    //parcel index.html
    // 파일을 읽어들이기 시작하는 진입정 설정
    entry: './JS/main.js',

    //결과물(번들)을 변환하는 설정
    output: {
        // path: path.resolve(__dirname, 'public'),
        // filename: 'main.js',
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },

    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),

        new CopyPlugin({
            patterns: [{
                from: 'static'
            }]
        })
    ],

    devServer: {
        host: 'localhost'
    }
}
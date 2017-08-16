const path = require('path');
//作用：每次构建生成不同的js文件时，实时更新html
// const HtmlWebpackPlugin = require('Html-webpack-plugin');
//每次构建，清除以往构建生成的文件
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const webpackConfig = {
    entry: {
        app: "./src/index.js",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, '../dist')
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(['dist']), 
        // new HtmlWebpackPlugin({
        //     title: 'web site'
        // }),
        // new webpack.HotModuleReplacementPlugin(),  //局部加载，webpack本身提供，模块变化时，实时更新展示，不用全部引入
        new webpack.optimize.CommonsChunkPlugin({//提取生成的文件中的共有的代码，到common.bundle.js
            name: 'common' // Specify the common bundle's name.
        })
    ],
    // devServer: {
    //   contentBase: './dist',   //启动webpack-dev-server实时展示开发结果
    //   hot: true
    // },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            },
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader',
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
        ]
    }
}
if(process.env.NODE_ENV === 'production'){
    // webpackConfig.plugins.push(
    //     // minify JS
    //     new webpack.optimize.UglifyJsPlugin({
    //         compress: {
    //             warnings: false
    //         }
    //     })
    // );
}
module.exports = webpackConfig;
/**
 * Created by Administrator on 2017/10/18.
 */
var webpack = require("webpack")
module.exports = {
    devtool: "source-map",
    entry: {
        index: __dirname + "/src/index.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js",
        publicPath: "/dist"
    },
    devServer: {
        inline: true,
        contentBase: "./",
        port: '8088',
        historyApiFallback: true,
        proxy: {
            '/v4/api/*': {
                target: 'http://m.maizuo.com',
                host: 'm.maizuo.com',
                changeOrigin:true
            }
        }
        /*
         在前端 发起 /v4/api/billboard/home请求
         转发到  http://m.maizuo.com/v4/api/billboard/home
         */
    },
    module:{
        loaders:[

            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'//添加对样式表的处理,内联样式
            },

            {
                test:/\.js$/, //随便起的test 名字
                exclude: /node_modules/, //排除一个
                // exclude: /(node_modules|src)/, //*****排除多个怎么写？？？
                loader:'babel-loader',
                query:{
                    presets:['es2015','react']
                }

            },

            {
                test: /\.scss$/,
                loader:'style-loader!css-loader!sass-loader'
            },

            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]?[hash]' //目标文件夹
                }
            }, //添加对字体文件的支持。

            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]'
                }
                //(1)将代码中依赖的图片资源复制到目标文件夹img/文件夹下面
                //(2)自动更新静态url地址(根据publicPath)。
            }

        ]
    },
    plugins:[
        // new webpack.optimize.UglifyJsPlugin({
        //   output: {
        //     comments: false,  // 移除所有的注释
        //   },
        //   compress: {
        //     warnings: false
        //   }
        // })
    ]
}
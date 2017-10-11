/**
 * author yinwk
 * createTime 2017/7/21 13:56
 * description clown laugh at you~
 */
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const BUILD_DIR = path.resolve(__dirname, "../build");
const APP_DIR = path.resolve(__dirname, "../scripts");
const DLL_DIR = path.resolve(__dirname, "../dist");
const ROOT_DIR = path.resolve(__dirname, "../");
const MANIFEST_DIR = require(path.resolve(__dirname, DLL_DIR + "/vendor_manifest.dll.json"));
const PUBLIC_DIR = "/";
const STYLESHEET_DIR = path.resolve(__dirname, "../stylesheets");

const PORT = "9077";

const webpackConfigDev = {
    devtool: "source-map",
    entry: {
        index: APP_DIR + "/index.js"
    },
    output: {
        publicPath: PUBLIC_DIR,
        filename: "[name].bundle.js",
        path: BUILD_DIR
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                include: [
                    APP_DIR,
                    DLL_DIR
                ],
                use: [
                    "babel-loader"
                ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {loader: "css-loader", options: {importLoaders: 1}},
                        {
                            loader: "postcss-loader"
                        }
                    ],
                    publicPath: STYLESHEET_DIR
                })
            },
            {
                test: /\.(jpg|png|jpeg|gif|bmp)$/,
                use: "url-loader?limit=10000"
            }
        ]
    },
    resolve: {
        modules: [
            APP_DIR,
            "node_modules"
        ]
    },
    externals: {
        jquery: "jQuery"
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: "develop"
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DllReferencePlugin({
            manifest: MANIFEST_DIR,
            context: ROOT_DIR
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                unused: true,
                dead_code: true,
                warnings: false
            },
            comments: false
        }),
        new ExtractTextPlugin("[name].bundle.css"),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
        }),
        new HtmlWebpackPlugin({
            publicPath: PUBLIC_DIR,
            filename: "index.html",
            template: ROOT_DIR + "/index.html",
            chunks: ["index"]
        })
    ],
    devServer: {
        host: "0.0.0.0",
        port: PORT,
        proxy: {}
    }
};

module.exports = webpackConfigDev;

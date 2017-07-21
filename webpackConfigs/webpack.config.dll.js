/**
 * author yinwk
 * createTime 2017/7/21 13:55
 * description clown laugh at you~
 */
const webpack = require("webpack");
const path = require("path");
const autoprefixer = require("autoprefixer");

const DLL_DIR = path.resolve(__dirname, "../dist");
const APP_DIR = path.resolve(__dirname, "../scripts");
const ROOT_DIR = path.resolve(__dirname, "../..");
const PUBLIC_DIR = "/";
const AUTO_PRE_FIXERS_BROWSERS = [
    "Android >= 4",
    "IOS >= 7",
    "Chrome >= 35",
    "Firefox >= 31",
    "Explorer >= 9",
    "Opera >= 12",
    "Safari >= 7.1"
];

const webpackDllConfig = {
    devtool: "eval",
    entry: {
        vendor: ["babel-polyfill", "babel-plugin-transform-decorators-legacy", "babel-plugin-transform-object-assign"]
    },
    output: {
        publicPath: PUBLIC_DIR,
        filename: "[name].dll.js",
        path: DLL_DIR,
        library: "[name]_[chunkhash]"
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
        new webpack.DllPlugin({
            path: path.join(DLL_DIR, "[name]_manifest.dll.json"),
            //对应output里面的library属性
            name: "[name]_[chunkhash]",
            context: ROOT_DIR
        }),
        new webpack.optimize.UglifyJsPlugin({
            source_map: true,
            compress: {
                unused: false,
                dead_code: false,
                warnings: true
            },
            comments: true
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [autoprefixer({browsers: AUTO_PRE_FIXERS_BROWSERS})]
            }
        })
    ]
};

module.exports = webpackDllConfig;
/**
 * author yinwk
 * createTime 2017/7/21 13:56
 * description clown laugh at you~
 */
const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ROOT_DIR = path.resolve(__dirname, "../");
const DLL_DIR = path.resolve(__dirname, "../dist");
const APP_DIR = path.resolve(__dirname, "../scripts");
const BUILD_DIR = path.resolve(__dirname, "../build");

const webpackDevConfig = {
    entry: {},
    output: {
        publicPath: "/",
        path: BUILD_DIR,
        filename: "[name].bundle.js"
    },
    externals: {
        jquery: "jQuery"
    },
    resolve: {
        modules: [
            "node_modules",
            APP_DIR,
            DLL_DIR
        ]
    }
};

module.exports = webpackDevConfig;
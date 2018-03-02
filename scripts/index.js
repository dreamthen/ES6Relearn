/**
 * author yinwk
 * createTime 2017/7/21 23:16
 * description clown laugh at you~
 */
// const world = "world";
// console.log(`hello ${world}`);
import "babel-polyfill";
import "./lesson/aQuery";
import "./lesson/javaScriptDesignModal";
import "./lesson/jsPackage";
import "./lesson/factory";
// import {
//     MAX_NUMBER,
//     name,
//     person
// } from "./lesson/lesson18";
// console.log(MAX_NUMBER, name);
// person();
// import * as util from "./lesson/lesson18";
// console.log(util.MAX_NUMBER, util.name);
// util.person();
import "./lesson/aQuery";
import "./lesson/lesson1";
import "./lesson/lesson2";
import "./lesson/lesson3";
import "./lesson/lesson4";
import "./lesson/lesson5";
import "./lesson/lesson6";
import "./lesson/lesson7";
import "./lesson/lesson8";
import "./lesson/lesson9";
import "./lesson/lesson10";

var data = [
    {prop: 1, val: 100, grade: 'A'},
    {prop: 5, val: 110, grade: 'A'},
    {prop: 9, val: 114, grade: 'A'},
    {prop: 4, val: 130, grade: 'B'},
    {prop: 7, val: 141, grade: 'C'},
    {prop: 6, val: 122, grade: 'B'},
    {prop: 8, val: 103, grade: 'A'},
    {prop: 7, val: 151, grade: 'C'}
];

function sortByVal(a, b) {
    return a["val"] - b["val"];
}

data.sort(sortByVal);

let map = {},
    arr = [],
    arr_end = [];
for (let dataItem of data) {
    if (!map[dataItem["grade"]]) {
        arr = [...arr, {grade: dataItem["grade"], data: [dataItem]}];
        map[dataItem["grade"]] = dataItem;
    } else {
        for (let arrItem of arr) {
            if (arrItem["grade"] === dataItem["grade"]) {
                arrItem["data"] = [...arrItem["data"], dataItem];
            }
        }
    }
}
for (let endItem of arr) {
    arr_end = [...arr_end, endItem["data"]];
}
console.log(arr_end);


//Array解构赋值方法
function destructuringArray(targetArray, formatter) {
    let simpleArray = [],
        exchangeArray = [],
        result = {};

    function splitToArray(formatter) {
        let regExp = /\[(.*)\]/,
            new_formatter = formatter.replace(regExp, "$1"),
            end_formatter = new_formatter.replace(regExp, ""),
            formatter_exec = regExp.exec(new_formatter) && regExp.exec(new_formatter)[0],
            new_array = end_formatter.split(",");
        exchangeArray = [...exchangeArray, new_array];
        formatter_exec && splitToArray(formatter_exec);
    }

    function formatToArray(targetArray) {
        let flag = false;
        for (let item of targetArray) {
            if (Object.prototype.toString.call(item) === "[object Array]") {
                simpleArray = [...simpleArray, targetArray];
                flag = true;
                formatToArray(item);
            }
        }
        if (!flag) {
            simpleArray = [...simpleArray, targetArray];
        }
    }

    splitToArray(formatter);
    formatToArray(targetArray);
    console.log(simpleArray, exchangeArray);
    for (let [index, item] of exchangeArray.entries()) {
        for (let key of item.keys()) {
            item[key] && (result[item[key]] = simpleArray[index][key]);
        }
    }
    return result;
}

let result = destructuringArray([1, [2, 4, [5, 6]], 3], "[a,c]");
console.log(result);


/**
 * author yinwk
 * createTime 2017/7/21 23:16
 * description clown laugh at you~
 */
// const world = "world";
// console.log(`hello ${world}`);
import "babel-polyfill";
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
import "./lesson/lesson11";
import "./lesson/lesson12";
import "./lesson/lesson13";
import "./lesson/lesson14";
import "./lesson/lesson15";
import "./lesson/lesson16";
import "./lesson/lesson17";
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
import util from "./lesson/lesson18";

console.log(util.MAX_NUMBER, util.name);
util.person();
import "./lesson/aQuery";

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
    return b["val"] - a["val"];
}

let dataSort = data.sort(sortByVal);
let map = {},
    end_arr = [],
    result_arr = [];
for (let dataItem of dataSort) {
    let dataMine = dataItem;
    if (!map[dataMine.grade]) {
        end_arr.push({
            grade: dataMine.grade,
            data: [dataMine]
        });
        map[dataMine.grade] = dataMine;
    } else {
        for (let endItem of end_arr) {
            if (endItem.grade === dataMine.grade) {
                endItem.data.push(dataMine);
                break;
            }
        }
    }
}

for(let endItem of end_arr) {
    result_arr = [...result_arr, endItem["data"]];
}
console.log(result_arr);

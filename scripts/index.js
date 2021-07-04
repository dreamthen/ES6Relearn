/**
 * author yinwk
 * createTime 2017/7/21 23:16
 * description clown laugh at you~
 */
// const world = "world";
// console.log(`hello ${world}`);
import "babel-polyfill";
// import "./lesson/lesson1";
// import "./lesson/lesson2";
// import "./lesson/lesson3";
// import "./lesson/lesson4";
// import "./lesson/lesson5";
// import "./lesson/lesson6";
// import "./lesson/lesson7";
// import "./lesson/lesson8";
// import "./lesson/lesson9";
// import "./lesson/lesson10";
// import "./lesson/lesson11";
// import "./lesson/lesson12";
// import "./lesson/lesson13";
// import "./lesson/lesson14";
// import "./lesson/lesson15";
// import "./lesson/lesson16";
// import "./lesson/lesson17";
// import "./lesson/aQuery";
// import "./lesson/javaScriptDesignModal";
// import "./lesson/jsPackage";
// import "./lesson/factory";
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
// import util from "./lesson/lesson18";
// console.log(util.MAX_NUMBER, util.name);
// util.person();
// import "./lesson/aQuery";
// var data = [
//     {prop: 1, val: 100, grade: 'A'},
//     {prop: 5, val: 110, grade: 'A'},
//     {prop: 9, val: 114, grade: 'A'},
//     {prop: 4, val: 130, grade: 'B'},
//     {prop: 7, val: 141, grade: 'C'},
//     {prop: 6, val: 122, grade: 'B'},
//     {prop: 8, val: 103, grade: 'A'},
//     {prop: 7, val: 151, grade: 'C'}
// ];
// function sortByVal(a, b) {
//     return b["val"] - a["val"];
// }
// let dataSort = data.sort(sortByVal);
// let map = {},
//     end_arr = [],
//     result_arr = [];
// for (let dataItem of dataSort) {
//     let dataMine = dataItem;
//     if (!map[dataMine.grade]) {
//         end_arr.push({
//             grade: dataMine.grade,
//             data: [dataMine]
//         });
//         map[dataMine.grade] = dataMine;
//     } else {
//         for (let endItem of end_arr) {
//             if (endItem.grade === dataMine.grade) {
//                 endItem.data.push(dataMine);
//                 break;
//             }
//         }
//     }
// }
// for(let endItem of end_arr) {
//     result_arr = [...result_arr, endItem["data"]];
// }
// console.log(result_arr);
// LHS RHS RHS RHS
// function foo(a) {
// var b = a;
// return a + b;
// }
//LHS RHS LHS
// var c = foo(2);
//RHS RHS
// console.log(c);
// RHS RHS RHS
// function foo(a) {
// console.log(a + b);
// }
//LHS
// var b = 2;
//RHS LHS
// foo(2);
// 严格模式下,严禁自动或者隐式的声明一个变量
// 编译器有能力同时声明和赋值一个变量,函数声明不会分配另外一个线程
// 词法作用域
// function evalSolution(solution = '') {
// 	eval(solution);
// 	var b = 100;
// 	console.log(a + b);
// }
// var a = 100;
// var b = 99;
// evalSolution('var b = 100;');
// with
// eval修改了当前的词法作用域
// var obj = {
// 	a: 'a',
// 	b: 'b',
// 	c: 'c'
// };
// obj.d = 'd';
// obj.e = 'e';
// obj.f = 'f';
// console.log(obj);
// with(obj) {
// 	d = 'dd';
// }
// with基于obj创造了一个新的词法作用域
// 非严格模式下,会在全局作用域下声明一个变量a
// function operation() {
// 	a = 10;
// }
// operation();
// console.log(a);
// 10
// Javascript执行分为两步,编译代码和引擎执行代码
// 编译代码分为三步:
// 词法分析、语法分析以及代码生成
// 词法分析实际上就是根据有无状态的表达式或者变量来进行分词
// 语法分析实际上就是抽象语法树,抽象语法树简称AST
// AST通过一定的方法来进行合成让电脑能读懂的机器语言的过程,叫做代码生成
// LHS: 赋值操作的目标是谁 RHS: 谁是赋值操作的源头
// 在严格模式下,编译器不允许自动或者隐式的声明一个变量
// 作用域,作用域链是由内向外,内部函数的作用域能看到外部函数作用域的变量,而外部函数作用域则看不到内部函数作用域的变量
// 函数声明并不是LHS操作,原因是函数声明是在代码编译时同时进行的代码执行,并不是需要多一个线程来进行LHS操作
// 词法作用域
// eval可以修改当前环境的词法作用域
// with则可以创建一个新的词法作用域
// function func(evalString = '') {
// 	eval('var a = "hello"');
// 	console.log(a);
// }
//
// var a = 'world';
// func('var a = "hello"');
// with创建了一个新的词法作用域
// var obj = {
// 	a: 'a',
// 	b: 'b',
// 	c: 'c'
// };
// with(obj) {
// 	a = 'aa';
// 	b = 'bb';
// 	c = 'cc'
// }
// console.log(obj);
// obj.a = 'aa';
// obj.b = 'bb';
// obj.c = 'cc';
// console.log(obj);
// var obj = {
// 	a: 'a',
// 	b: 'b',
// 	c: 'c'
// };
// with(obj) {
// 	a = 'aa';
// 	b = 'bb';
// 	c = 'cc';
// 	d = 'dd';
// }
// console.log(obj, d);
// 函数作用域与块级作用域
// '隐藏'声明的变量以及函数,防止污染全局作用域
// var b = 20;
// function func() {
// 	var b = 100;
// 	console.log(b);
// }
// console.log(b);
// func();
// 但是函数作用域却引起一个问题,就是必须创建一个函数,创建完函数之后,函数声明或者函数表达式要有声明一个名称,以这个名称来进行调用函数,实际上还是污染冲突了外部的全局作用域
// Javascript ES5中并不存在块级作用域
// for (var i = 0; i < 10; i++) {
// 	console.log(i);
// }
// console.log(i);
// for循环外部还是能获取到i的变量的值的,这样i实际上就已经污染了全局作用域,可能会引起变量名的冲突
// var bar = true;
// if (bar) {
// 	var foo = 'beautiful';
// 	console.log(foo);
// }
// console.log(foo);
// if判断外部还是能获取到foo的变量的值的
// 匿名函数
// 为了解决函数作用域带来的问题,比如说对全局作用域依然是污染,冲突,由此出现了匿名函数
// 但是匿名函数能起到作用的,只有闭包和立即执行函数表达式,闭包必须是一个函数包裹着另外一个函数,才会产生闭包,所以闭包并不能解决我们当前的问题
// 立即执行函数表达式
// (function () {
// 	var bar = 'foo';
// 	console.log(bar);
// })();
// console.log(bar);
// IIFE函数表达式传递参数
// (function (global = {}) {
// 	var bar = 200;
// 	function foo() {
// 		console.log(bar);
// 		console.log(global.bar);
// 	}
// 	foo();
// })(window);
// var bar = 100;
// console.log(window.bar);
// 另外一种IIFE函数表达式的写法
// (function (func = function () {
// }) {
// 	var bar = 200;
// 	func(window);
// })(function foo(global) {
// 	console.log(bar);
// 	console.log(global.bar);
// });
// var bar = 100;
// 但是IIFE匿名立即执行函数表达式也有一些问题
// 首先匿名函数对于测试追踪工具是不友好的,因为它是匿名的
// 其次匿名函数如果要调用自身的话,必须使用arguments.callee
// 最后一点匿名函数无署名,让人很难理解代码的含义
// 为了解决以上问题,我们就署名一下
// window.bar = 100;
// (function test(global) {
// 	var bar = 200;
// 	function testInner() {
// 		console.log(bar);
// 		console.log(global.bar);
// 	}
// 	testInner();
// })(window);
// 块级作用域
// ES6推出了let和const关键字,产生块级作用域
// 比如还是那个for循环的例子
// for (let i = 0; i < 10; i++) {
// 	console.log(i);
// }
// console.log(i);
// 或者还是那个if判断的例子
// let使得块级作用域产生了一个块级气泡,只有里面的区域能访问到变量或者函数,外部完全访问不到
// 为了使得块级气泡更明显,也为了之后的代码迁移更简单,让我们在块级气泡外面加一层大括号
// let bar = true;
// if (bar) {
// 	{
// 		let foo = 'beautiful';
// 		console.log(foo);
// 	}
// 	console.log(foo);
// }
// console.log(bar, foo);
// 块级作用域的实践,比如with,try/catch
// with之前谈到了,它创建了一个新的块级作用域
// try/catch则是真正的利用了块级作用域,err只在catch内部能访问到,而在外部完全访问不到
// try {
// 	undefined();
// } catch (err) {
// 	console.log(err);
// }
// console.log(err);
// 这段代码也可以这样被重构
// var bar = true, baz = 100;
// if (bar) {
// 	var foo = 200
// }
// function o() {
// 	if (foo > baz) {
// 		console.log('foo');
// 	}
// }
// o();
// 而用let则不会出现这种重构情况
// 加个大括号来让块级气泡作用域看的更清晰一些
// var bar = true, baz = 100;
// if (bar) {
// 	{
// 		let foo = 200;
// 		function o() {
// 			if (foo > baz) {
// 				console.log('foo');
// 			}
// 		}
// 		o();
// 	}
// }
// const则是一个来声明常量,不允许更改的关键字
// var bar = true;
// if (bar) {
// 	const baz = 200;
// 	console.log(baz);
// }
// console.log(baz);
// import "./lesson/aQuery";
// import "./lesson/lesson1";
// import "./lesson/lesson2";
// import "./lesson/lesson3";
// import "./lesson/lesson4";
// import "./lesson/lesson5";
// import "./lesson/lesson6";
// import "./lesson/lesson7";
// import "./lesson/lesson8";
// import "./lesson/lesson9";
// import "./lesson/lesson10";
//
// var data = [
//     {prop: 1, val: 100, grade: 'A'},
//     {prop: 5, val: 110, grade: 'A'},
//     {prop: 9, val: 114, grade: 'A'},
//     {prop: 4, val: 130, grade: 'B'},
//     {prop: 7, val: 141, grade: 'C'},
//     {prop: 6, val: 122, grade: 'B'},
//     {prop: 8, val: 103, grade: 'A'},
//     {prop: 7, val: 151, grade: 'C'}
// ];
//
// function sortByVal(a, b) {
//     return a["val"] - b["val"];
// }
//
// data.sort(sortByVal);
//
// let map = {},
//     arr = [],
//     arr_end = [];
// for (let dataItem of data) {
//     if (!map[dataItem["grade"]]) {
//         arr = [...arr, {grade: dataItem["grade"], data: [dataItem]}];
//         map[dataItem["grade"]] = dataItem;
//     } else {
//         for (let arrItem of arr) {
//             if (arrItem["grade"] === dataItem["grade"]) {
//                 arrItem["data"] = [...arrItem["data"], dataItem];
//             }
//         }
//     }
// }
// for (let endItem of arr) {
//     arr_end = [...arr_end, endItem["data"]];
// }
// console.log(arr_end);


//Array解构赋值方法
// function destructuringArray(targetArray, formatter) {
//     let simpleArray = [],
//         exchangeArray = [],
//         result = {};
//
//     function splitToArray(formatter) {
//         let regExp = /\[(.*)\]/,
//             new_formatter = formatter.replace(regExp, "$1"),
//             end_formatter = new_formatter.replace(regExp, ""),
//             formatter_exec = regExp.exec(new_formatter) && regExp.exec(new_formatter)[0],
//             new_array = end_formatter.split(",");
//         exchangeArray = [...exchangeArray, new_array];
//         formatter_exec && splitToArray(formatter_exec);
//     }
//
//     function formatToArray(targetArray) {
//         let flag = false;
//         for (let item of targetArray) {
//             if (Object.prototype.toString.call(item) === "[object Array]") {
//                 simpleArray = [...simpleArray, targetArray];
//                 flag = true;
//                 formatToArray(item);
//             }
//         }
//         if (!flag) {
//             simpleArray = [...simpleArray, targetArray];
//         }
//     }
//
//     splitToArray(formatter);
//     formatToArray(targetArray);
//     console.log(simpleArray, exchangeArray);
//     for (let [index, item] of exchangeArray.entries()) {
//         for (let key of item.keys()) {
//             item[key] && (result[item[key]] = simpleArray[index][key]);
//         }
//     }
//     return result;
// }
//
// let result = destructuringArray([1, [2, 4, [5, 6]], 3], "[a,c]");
// console.log(result);

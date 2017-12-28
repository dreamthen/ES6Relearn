//编写无new jQuery
//无限死循环
// let aQuery = function(selector, command) {
//     return new aQuery();
// };
// aQuery.prototype = {
//     name() {
//
//     },
//     age() {
//
//     }
// };
// aQuery().name();
//互相干扰
// let aQuery = function(selector, command) {
//     return aQuery.prototype.init();
// };
// aQuery.prototype = {
//     init() {
//         this.age = 18;
//         return this;
//     },
//     name() {
//         console.log("world come true~~");
//     },
//     age() {
//
//     }
// };
// aQuery().name();
// this指向init.prototype
// let aQuery = function (selector, command) {
//     return new aQuery.prototype.init();
// };
// aQuery.prototype = {
//     init() {
//         this.age = 18;
//         return this;
//     },
//     name() {
//         console.log("world come true~~");
//     },
//     age: 20
// };
// console.log(aQuery().age);
//这才是正确写法
// let aQuery = function (selector, command) {
//     return new aQuery.prototype.init();
// };
//
// aQuery.prototype = {
//     init() {
//
//     },
//     name() {
//         console.log("aQuery named jQuery");
//     },
//     age: 24
// };
// aQuery.prototype.init.prototype = aQuery.prototype;
// aQuery().name();
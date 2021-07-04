// let Book = (function () {
//     let name = "library",
//         bookNum = 0;
//     function checkID() {
//     }
//     function _book(id, name, price) {
//         if (this instanceof Book) {
//             let browBook = "";
//
//             function checkBrowBookID() {
//             }
//
//             this.id = id;
//             this.name = name;
//             this.price = price;
//             bookNum++;
//             if (bookNum > 100) {
//                 throw new Error("book over 100 num~");
//             }
//         } else {
//             return new Book(id, name, price);
//         }
//     }
//     _book.prototype = {
//         display() {
//             console.log(`The book's name is ${this.name}, id is ${this.id}, pay ${this.price}. The book has no.${bookNum}`);
//             return this;
//         }
//     };
//     return _book;
// })();
// let book = new Book(12174124, "Gary", 48);
// console.log(book.id, book.name, book.price);
// console.log(book.display().price);
// 组合式继承
// function SuperClass(name = "Gary") {
//     this.name = name;
// }
// SuperClass.prototype.getSuperValue = function () {
//     return this.name.join("-");
// };
// function SubClass(name, time = "2018-01-05") {
//     SuperClass.call(this, name);
//     this.time = time;
// }
// SubClass.prototype = new SuperClass();
// SubClass.prototype.getSubValue = function () {
//     return `${this.name.join("-")}, ${this.time}`;
// };
// let instanceSuper = new SuperClass(["Yinwk"], "2018-01-15");
// let instanceSub = new SubClass(["ZhaoYue"], "2018-01-09");
// instanceSuper.name.push("Gary");
// console.log(instanceSuper.name);
// console.log(instanceSuper.getSuperValue());
// console.log(instanceSub.name);
// console.log(instanceSub.time);
// console.log(instanceSub.getSuperValue());
// console.log(instanceSub.getSubValue());
// function instanceExtend(o) {
//     function F() {
//     }
//
//     F.prototype = o;
//     return new F();
// }
// function instancePrototypeExtend(subClass, superClass) {
//     let p = instanceExtend(superClass.prototype);
//     subClass.prototype = p;
//     p.constructor = subClass;
// }
// function SuperClass(name = "Gary") {
//     this.name = name;
//     return this;
// }
// SuperClass.prototype.getSuperValue = function () {
//     return this.name.join("-");
// };
// function SubClass(name, time = "2018-01-05") {
//     SuperClass.call(this, name);
//     this.time = time;
//     return this;
// }
// instancePrototypeExtend(SubClass, SuperClass);
// SubClass.prototype.getSubValue = function () {
//     return `${this.name.join("-")},${this.time}`;
// };
// let instanceSuper = new SuperClass(["Zhaoyue"]);
// let instanceSub = new SubClass(["Yinwk"], "2018-01-12");
// instanceSuper.name.push("Gary");
// console.log(instanceSuper.name, instanceSuper.getSuperValue());
// console.log(instanceSub.name, instanceSub.time, instanceSub.getSubValue(), instanceSub.getSuperValue());

//多继承
// function extend(target, source) {
//     for (let property in source) {
//         target[property] = source[property];
//     }
//     return target;
// }
// let book = {
//     ID: "12174124",
//     name: ["JAVAScript指南", "JAVAScript高级程序设计"]
// };
// let otherBook = {
//     color: "blue"
// };
// extend(otherBook, book);
// console.log(otherBook.ID, otherBook.name);
// otherBook.ID = "12174125";
// otherBook.name.push("了不起的React");
// console.log(otherBook.ID, otherBook.name);
// console.log(book.ID, book.name);
// let book = {
//     ID: "12174124",
//     name: ["JAVAScript指南", "JAVAScript高级程序设计"]
// };
// let bookAnother = {
//     checkID: "390685199406300019"
// };
// let otherBook = {
//     color: "blue"
// };
// Object.prototype.extendObject = function () {
//     let length = arguments.length;
//     for (let i = 0; i < length; i++) {
//         let args = arguments[i];
//         for (let property in args) {
//             this[property] = args[property];
//         }
//     }
//     return this;
// };
// otherBook.extendObject(book, bookAnother);
// console.log(otherBook.ID, otherBook.name, otherBook.checkID);
// function extend() {
//     var length = arguments.length,
//         target = arguments[0];
//     for (var i = 1; i < length; i++) {
//         let args = arguments[i];
//         for (let arg in args) {
//             target[arg] = args[arg];
//         }
//     }
//     return target;
// }
// extend(otherBook, book);
// console.log(otherBook.ID, otherBook.name);
// otherBook.ID = "12174125";
// otherBook.name.push("了不起的React");
// console.log(otherBook.ID, otherBook.name);
// console.log(book.ID, book.name);
// 多态
// function add() {
//     let length = arguments.length,
//         args = arguments;
//     switch (length) {
//         case 0:
//             return 10;
//         case 1:
//             return 10 + args[0];
//         case 2:
//             return args[0] + args[1];
//     }
// }
// console.log(add());
// console.log(add(5));
// console.log(add(6, 7));
// function Add() {
//     function none() {
//         return 10;
//     }
//     function one(number) {
//         return 10 + number;
//     }
//     function two(one, another) {
//         return one + another;
//     }
//     this.add = function () {
//         let args = arguments,
//             length = args.length;
//         switch (length) {
//             case 0:
//                 return none();
//             case 1:
//                 return one(args[0]);
//             case 2:
//                 return two(args[0], args[1]);
//         }
//     }
// }
// let add = new Add();
// console.log(add.add());
// console.log(add.add(5));
// console.log(add.add(6, 7));

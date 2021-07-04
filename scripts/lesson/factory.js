//基于类的简单工厂模式
// function FootBall(name) {
//     this.name = name;
// }
// FootBall.prototype = {
//     getMember() {
//         console.log("足球每只队伍有11个人");
//     }
// };
// function BasketBall(name) {
//     this.name = name;
// }
// BasketBall.prototype = {
//     getMember() {
//         console.log("篮球每只队伍有5个人");
//     }
// };
// function Tennis(name) {
//     this.name = name;
// }
// Tennis.prototype = {
//     getMember() {
//         console.log("网球每只队伍有1个人");
//     }
// };
// function SportsFactory(name) {
//     switch (name) {
//         case 'NBA':
//             return new BasketBall(name);
//         case 'WorldCup':
//             return new FootBall(name);
//         case 'Master\'sCup':
//             return new Tennis(name);
//     }
// }
// let sports = new SportsFactory("WorldCup");
// sports.getMember();
// let tennis = new SportsFactory('Master\'sCup');
// tennis.getMember();
// let basketball = new SportsFactory('NBA');
// basketball.getMember();
// function factory(type, name) {
//     let o = new Object();
//     o.name = name;
//     o.getName = function () {
//         console.log(this.name);
//         return this;
//     };
//     o.getMember = function () {
//         switch (type) {
//             case "NBA":
//                 console.log("每只篮球队伍有5个人");
//                 break;
//             case "WorldCup":
//                 console.log("每只足球队伍有11个人");
//                 break;
//             case "Master\'sCup":
//                 console.log("每只网球队伍有1个人");
//                 break;
//         }
//         return this;
//     };
//     return o;
// }
// let football = factory("WorldCup", "football");
// football.getName().getMember();
// let basketball = factory("NBA", "basketball");
// basketball.getMember().getName();
// let tennis = factory("Master\'sCup", "tennis");
// tennis.getName().getMember();
// 工厂方法模式
// function Factory(type, content) {
//     if (this instanceof Factory) {
//         let s = new this[type](content);
//         return s;
//     } else {
//         return new Factory(type, content);
//     }
// }
// Factory.prototype = {
//     UI(content) {
//         console.log(content);
//         return this;
//     },
//     PHP(content) {
//         console.log(content);
//         return this;
//     },
//     JavaScript(content) {
//         console.log(content);
//         return this;
//     }
// };
// let factory = [{
//     type: "PHP",
//     content: "These are PHP lessons"
// }, {
//     type: "UI",
//     content: "These are UI lessons"
// }, {
//     type: "JavaScript",
//     content: "These are JavaScript lessons"
// }];
// for (let factoryItem of factory) {
//     new Factory(factoryItem["type"], factoryItem["content"]);
// }
// function instanceObject(o) {
//     function F() {
//     }
//
//     F.prototype = o;
//     return new F();
// }
//
// function FactoryAbstract(subClass, superClass) {
//     if (subClass instanceof Function) {
//         let p = instanceObject(new FactoryAbstract[superClass]());
//         subClass.prototype = p;
//         p.constructor = subClass;
//     } else {
//         return new Error("不是函数对象，不可进行抽象!");
//     }
// }
//
// FactoryAbstract.Car = function () {
//     this.type = 'car';
// };
//
// FactoryAbstract.Car.prototype = {
//     getPrice() {
//         throw new Error("抽象函数不可直接调用!");
//     },
//     getCar() {
//         throw new Error("抽象函数不可直接调用!");
//     }
// };
//
// FactoryAbstract.Bus = function () {
//     this.type = 'bus';
// };
//
// FactoryAbstract.Bus.prototype = {
//     getPrice() {
//         throw new Error("抽象函数不可直接调用!");
//     },
//     getBus() {
//         throw new Error("抽象函数不可直接调用!");
//     }
// };
//
// FactoryAbstract.Truck = function () {
//     this.type = 'truck';
// };
//
// FactoryAbstract.Truck.prototype = {
//     getPrice() {
//         throw new Error("抽象函数不可直接调用!");
//     },
//     getTruck() {
//         throw new Error("抽象函数不可直接调用!");
//     }
// };
//
// function BMW(price, carName) {
//     this.price = price;
//     this.carName = carName;
// }
//
// FactoryAbstract(BMW, 'Car');
// BMW.prototype.getPrice = function () {
//     return this.price;
// };
// BMW.prototype.getCar = function () {
//     return this.carName;
// };
//
// function BenzTunck(price, truckName) {
//     this.price = price;
//     this.truckName = truckName;
// }
//
// FactoryAbstract(BenzTunck, 'Truck');
// BenzTunck.prototype.getPrice = function () {
//     return this.price;
// };
// BenzTunck.prototype.getTruck = function () {
//     return this.truckName;
// };
// let bmw = new BMW(200000, 'bmw');
// let benz = new BenzTunck(500000, 'benz');
// console.log(bmw.type);
// console.log(bmw.getCar(), bmw.getPrice());
// console.log(benz.type);
// console.log(benz.getTruck(), benz.getPrice());
// function instanceExtend(o) {
//     function F() {
//     }
//
//     F.prototype = o;
//     return new F();
// }
//抽象工厂方法
// function FactoryAbstract(subClass, superClass) {
//     if (typeof FactoryAbstract[superClass] === "function") {
//         let p = instanceExtend(new FactoryAbstract[superClass]());
//         subClass.prototype = p;
//         p.constructor = subClass;
//     } else {
//         return new Error("抽象对象函数不存在此方法!");
//     }
// }
// FactoryAbstract.Car = function () {
//     this.type = 'car';
// };
// FactoryAbstract.Car.prototype = {
//     getPrice() {
//         throw new Error("抽象函数方法不可直接调用!");
//     },
//     getCarName() {
//         throw new Error("抽象函数方法不可直接调用!");
//     }
// };
// FactoryAbstract.Truck = function () {
//     this.type = 'truck';
// };
// FactoryAbstract.Truck.prototype = {
//     getPrice() {
//         throw new Error("抽象函数方法不可直接调用!");
//     },
//     getTruckName() {
//         throw new Error("抽象函数方法不可直接调用!");
//     }
// };
// function BMW(price, names) {
//     this.price = price;
//     this.names = names;
// }
// FactoryAbstract(BMW, 'Car');
// BMW.prototype.getPrice = function () {
//     return this.price;
// };
// BMW.prototype.getCarName = function () {
//     return this.names;
// };
// function BenzTruck(price, names) {
//     this.price = price;
//     this.names = names;
// }
// FactoryAbstract(BenzTruck, 'Truck');
// BenzTruck.prototype.getPrice = function () {
//     return this.price;
// };
// BenzTruck.prototype.getTruckName = function () {
//     return this.names;
// };
// let bmw = new BMW(200000, "宝马");
// let benz = new BenzTruck(400000, "奔驰卡车");
// console.log(bmw.type);
// console.log(bmw.getCarName(), bmw.getPrice());
// console.log(benz.type);
// console.log(benz.getTruckName(), benz.getPrice());
//建造者模式
//创造多份简历
// function Human(param) {
//     this.skill = param.skill || '保密';
//     this.sex = param.sex || '保密';
// }
// Human.prototype = {
//     getSkill() {
//         return this.skill;
//     },
//     getSex() {
//         return this.sex;
//     }
// };
// function Named(wholeName) {
//     let that = this;
//     (function (name, that) {
//         that.name = wholeName;
//         if (name.indexOf(' ') > -1) {
//             that.FirstName = name.slice(0, name.indexOf(' '));
//             that.SecondName = name.slice(name.indexOf(' ') + 1);
//         }
//     })(wholeName, that);
// }
// function Work(work) {
//     let that = this;
//     (function (work, that) {
//         switch (work) {
//             case 'code':
//                 that.work = "工程师";
//                 that.workDescription = "每天沉醉于编程不能自拔!";
//                 break;
//             case 'UI':
//             case 'PS':
//                 that.work = '美工';
//                 that.workDescription = '更好的设计似艺术!';
//                 break;
//             case 'PM':
//                 that.work = '项目经理';
//                 that.workDescription = '管理才是一个企业前进的支柱!';
//                 break;
//         }
//     })(work, that);
// }
// Work.prototype.changeWork = function (work) {
//     this.work = work;
// };
// Work.prototype.changeWorkDescription = function (sentence) {
//     this.workDescription = sentence;
// };
// function Candidate(name, work) {
//     let _person = new Human(name);
//     _person.name = new Named(name);
//     _person.work = new Work(work);
//     return _person;
// }
// let candidate = new Candidate('Gary Yin', 'code');
// console.log(candidate.getSkill());
// console.log(candidate.name.FirstName);
// console.log(candidate.name.SecondName);
// console.log(candidate.work.work);
// console.log(candidate.work.workDescription);
// candidate.work.changeWork("PM");
// console.log(candidate.work.work);
// console.log(candidate.work.workDescription);
// candidate.work.changeWorkDescription("PM的管理使一个团队走向辉煌~");
// console.log(candidate.work.work, candidate.work.workDescription);
// 原型模式
// function instanceObject(o) {
//     function F() {
//     }
//
//     F.prototype = o;
//     return new F();
// }
// function extendInstance(subClass, superClass) {
//     let p = instanceObject(superClass.prototype);
//     subClass.prototype = p;
//     p.constructor = subClass;
// }
// function LoopImage(imageArr, type) {
//     this.imageArr = imageArr;
//     this.type = type;
// }
// LoopImage.prototype.getImageArr = function () {
//     return this.imageArr;
// };
// LoopImage.prototype.changeImageArr = function () {
//     console.log("LoopImage change Function");
// };
// function SlideImage(imageArr, type) {
//     LoopImage.call(this, imageArr, type);
// }
// extendInstance(SlideImage, LoopImage);
// SlideImage.prototype.changeImageArr = function () {
//     console.log("SlideLoopImage change Function");
// };
// function ArrowImage(imageArr, type, arrows) {
//     LoopImage.call(this, imageArr, type);
//     this.arrows = arrows;
// }
// extendInstance(ArrowImage, LoopImage);
// ArrowImage.prototype.changeImageArr = function () {
//     console.log("ArrowLoopImage change Function");
// };
// let fadeImage = new ArrowImage(['1.png', '2.png', '3.png', '4.png'], 'slide', ['left.png', 'right.png']);
// console.log(fadeImage.imageArr);
// console.log(fadeImage.type);
// console.log(fadeImage.getImageArr());
// fadeImage.changeImageArr();
// function extendObject() {
//     function F() {
//     }
//
//     let args = arguments,
//         length = args.length;
//     for (let i = 0; i < length; i++) {
//         let argItem = args[i];
//         for (let argObjectItem in argItem) {
//             F.prototype[argObjectItem] = argItem[argObjectItem];
//         }
//     }
//     return new F();
// }
//
// let extend = extendObject({
//     name: 'Gary',
//     getName() {
//         return this.name;
//     },
//     changeName(name) {
//         this.name = name;
//     },
//     getNameYearOld() {
//         console.log(`I'm ${this.name}, 10 year's old`);
//     }
// });
// console.log(extend.name);
// console.log(extend.getName());
// extend.changeName("Gary Yin");
// console.log(extend.getName());
// extend.getNameYearOld();
// console.log(extend.name);
// console.log(extend);
//单例模式
// let Gary = {
//     g(id) {
//         return document.getElementById(id);
//     },
//     css(id, css) {
//         this.g(id).style = css;
//     }
// };
// let module = {
//     action() {
//         console.log("action module~");
//     },
//     reducer() {
//         console.log("reducer module~");
//     },
//     container() {
//         console.log("container module~");
//     },
//     axios() {
//         console.log("axios module~");
//     },
//     ajax() {
//         console.log("ajax module~");
//     }
// };
// module.axios();
// module.reducer();
// module.action();
// module.ajax();
// 定义静态变量
// var staticVar = (function () {
//     var config = {
//         COUNT: 10000,
//         MONEY: 101932
//     };
//     return {
//         get(name) {
//             return config[name] ? config[name] : "无此静态变量";
//         }
//     }
// })();
// console.log(staticVar.get('MONEY'));
// 惰性加载
// var lazyLoading = (function () {
//     let _instace = null;
//
//     function Single() {
//         return {
//             privateKey: 1.1
//         }
//     }
//
//     return function () {
//         if (!_instace) {
//             _instace = Single();
//         }
//         return _instace;
//     }
// })();
// console.log(lazyLoading().privateKey);
// 单例模式
// let Gary = {
//     g(id) {
//         return document.getElementById(id);
//     },
//     css(id, style) {
//         this.g(id).style = style;
//     }
// };
// let module = {
//     action() {
//         console.log("action module");
//         return this;
//     },
//     container() {
//         console.log("container module");
//         return this;
//     },
//     reducer() {
//         console.log("reducer module");
//         return this;
//     },
//     ajax() {
//         console.log("ajax module");
//         return this;
//     },
//     axios() {
//         console.log("axios module");
//         return this;
//     }
// };
// module.action().axios().container().reducer().ajax();
// 静态变量定义
// let staticVar = (function () {
//     let config = {
//         MONEY: 101932,
//         COUNT: 9999
//     };
//     return {
//         get(name) {
//             return config[name] ? config[name] : "不存在此静态变量"
//         }
//     }
// })();
// let getStatic = staticVar.get('MONEY');
// console.log(getStatic);
// 惰性加载
// let lazyLoading = (function () {
//     let _instance = null;
//
//     function Simple() {
//         return {
//             privateInformation: "I'm KongFu Master"
//         }
//     }
//
//     return function(){
//         if(!_instance){
//             _instance = Simple();
//         }
//         return _instance;
//     }
// })();
// console.log(lazyLoading().privateInformation);
// 抽象模式
// function instanceExtend(o) {
//     function F() {
//     }
//
//     F.prototype = o;
//     return new F();
// }
// function instanceObject(subClass, superClass) {
//     let p = instanceExtend(superClass.prototype);
//     subClass.prototype = p;
//     p.constructor = subClass;
// }
// var LoopImage = function (imageArr, type) {
//     this.imageArr = imageArr;
//     this.type = type;
// };
// LoopImage.prototype.getImageArr = function () {
//     return this.imageArr;
// };
// LoopImage.prototype.changeImageArr = function () {
//     console.log("change LoopImage Array Function");
// };
// var SlideLoopImage = function (imageArr, type) {
//     LoopImage.call(this, imageArr, type);
// };
// instanceObject(SlideLoopImage, LoopImage);
// SlideLoopImage.prototype.changeImageArr = function () {
//     console.log("change SlideLoopImage Array Function");
// };
// var ArrowLoopImage = function (imageArr, type, arrows) {
//     LoopImage.call(this, imageArr, type);
//     this.arrows = arrows;
// };
// instanceObject(ArrowLoopImage, LoopImage);
// ArrowLoopImage.prototype.changeImageArr = function () {
//     console.log("change ArrowLoopImage Array Function");
// };
// let fadeImageArr = new ArrowLoopImage(["1.png", "2.png", "3.png", "4.png"], "slide", ["left.png", "right.png"]);
// console.log(fadeImageArr.imageArr);
// console.log(fadeImageArr.type);
// console.log(fadeImageArr.getImageArr());
// fadeImageArr.changeImageArr();
// let extendFunction = function () {
//     function F() {
//     }
//     let args = arguments,
//         leg = args.length;
//     for (let i = 0; i < leg; i++) {
//         let argItem = args[i];
//         for (let j in argItem) {
//             F.prototype[j] = argItem[j];
//         }
//     }
//     return new F();
// };
// let Gary = extendFunction({
//     name: "Gary",
//     getName() {
//         return this.name;
//     },
//     changeName(name) {
//         this.name = name;
//     },
//     getNameYear() {
//         console.log(`I'm ${this.name}, 10 year's old`);
//     }
// });
// console.log(Gary.name, Gary.getName());
// Gary.changeName("Gary Yin");
// console.log(Gary.name, Gary.getName());
// Gary.getNameYear();
// 建造者模式
// let Human = function(param) {
//     this.skill = param.skill || "保密";
//     this.sexy = param.sexy || "保密";
// };
// Human.prototype = {
//     getSkill() {
//         return this.skill;
//     },
//     getSexy() {
//         return this.sexy;
//     }
// };
// function Named(name) {
//     let that = this;
//     (function (name, that) {
//         that.wholeName = name;
//         if (name.indexOf(" ") > -1) {
//             that.FirstName = name.slice(0, name.indexOf(" "));
//             that.SecondName = name.slice(name.indexOf(" ") + 1);
//         }
//     })(name, that);
// }
// function Work(work) {
//     let that = this;
//     (function (work, that) {
//         switch (work) {
//             case "code":
//                 that.work = "程序员";
//                 that.workDescription = "每天沉醉于代码,不能自拔";
//                 break;
//             case "ui":
//             case "draw":
//                 that.work = "美工";
//                 that.workDescription = "设计更是一种艺术~";
//                 break;
//         }
//     })(work, that);
// }
// Work.prototype.changeWork = function(work){
//     this.work = work;
// };
// Work.prototype.changeWorkDescription = function(sentence) {
//     this.workDescription = sentence;
// };
// function Candidate(name, work) {
//     let _person = new Human(name);
//     _person.name = new Named(name);
//     _person.work = new Work(work);
//     return _person;
// }
// let candidate = new Candidate("Gary Yin", "ui");
// console.log(candidate.skill, candidate.name.wholeName, candidate.name.FirstName, candidate.name.SecondName, candidate.work.work, candidate.work.workDescription);
// candidate.work.changeWorkDescription("I Love Design~");
// console.log(candidate.work.workDescription);
// 抽象工厂模式
// function instanceObject(o) {
//     function F() {
//     }
//
//     F.prototype = o;
//     return new F();
// }
// function FactoryAbstract(subClass, superClass) {
//     if (typeof FactoryAbstract[superClass] === "function") {
//         let p = instanceObject(new FactoryAbstract[superClass]());
//         subClass.prototype = p;
//         p.constructor = subClass;
//     } else {
//         return new Error("不存在此抽象函数方法");
//     }
// }
// FactoryAbstract.Car = function () {
//     this.type = "car";
// };
// FactoryAbstract.Car.prototype = {
//     getPrice() {
//         throw new Error("不可直接调用抽象函数方法");
//     },
//     getCarName() {
//         throw new Error("不可直接调用抽象函数方法");
//     }
// };
// FactoryAbstract.Truck = function () {
//     this.type = "truck";
// };
// FactoryAbstract.Truck.prototype = {
//     getPrice() {
//         return new Error("不可直接调用抽象函数方法");
//     },
//     getTruckName() {
//         return new Error("不可直接调用抽象函数方法");
//     }
// };
// function BMW(price, names) {
//     this.price = price;
//     this.names = names;
// }
// function BenzTruck(price, names) {
//     this.price = price;
//     this.names = names;
// }
// FactoryAbstract(BMW, 'Car');
// FactoryAbstract(BenzTruck, 'Truck');
// BMW.prototype.getPrice = function () {
//     return this.price;
// };
// BMW.prototype.getCarName = function () {
//     return this.names;
// };
// BenzTruck.prototype.getPrice = function () {
//     return this.price;
// };
// BenzTruck.prototype.getTruckName = function () {
//     return this.names;
// };
// let bmw = new BMW(200000, 'bmw');
// let benz = new BenzTruck(400000, 'benzTruck');
// console.log(bmw.type);
// console.log(bmw.getPrice(), bmw.getCarName());
// console.log(benz.type);
// console.log(benz.getPrice(), benz.getTruckName());
// 工厂方法模式
// function Factory(type, content) {
//     if (this[type] instanceof Function) {
//         let p = new this[type](content);
//         return p;
//     } else {
//         return new Factory(type, content);
//     }
// }
// Factory.prototype = {
//     Javascript(content) {
//         console.log(`I love Javascript!${content}`);
//     },
//     PHP(content) {
//         console.log(`I love PHP!${content}`);
//     },
//     Python(content) {
//         console.log(`I love Python!${content}`);
//     },
//     Ruby(content) {
//         console.log(`I love Ruby!${content}`);
//     },
//     CPP(content) {
//         console.log(`I love C++!${content}`);
//     },
//     C(content) {
//         console.log(`I love C!${content}`);
//     }
// };
// let factoryArr = [{
//     type: "Javascript",
//     content: "JS"
// }, {
//     type: "C",
//     content: "C language"
// }, {
//     type: "CPP",
//     content: "C++"
// }, {
//     type: "Ruby",
//     content: "Ruby"
// }, {
//     type: "PHP",
//     content: "PHP"
// }, {
//     type: "Python",
//     content: "Python"
// }];
// for (let value of factoryArr.values()) {
//     new Factory(value["type"], value["content"]);
// }
// 外观模式
// function addEvent(dom, action, fn) {
//     if (dom.addEventListener) {
//         dom.addEventListener(action, fn);
//     } else if (dom.attachEvent) {
//         dom.attachEvent(`on${action}`, fn);
//     } else {
//         dom[`on${action}`] = fn;
//     }
// }
// let eventReset = {
//     getEvent(event) {
//         return event || window.event;
//     },
//     getTarget(event) {
//         return event.target ? event.target : event.srcElement;
//     },
//     stopPropagation(event) {
//         if (event.stopPropagation) {
//             event.stopPropagation();
//         } else {
//             event.cancelBubble = true;
//         }
//     },
//     preventDefault(event) {
//         if (event.preventDefault) {
//             event.preventDefault()
//         } else {
//             event.returnValue = false;
//         }
//     }
// };
// let prize = document.getElementById("clickPrize");
// addEvent(prize, 'click', function (e) {
//     let event = eventReset.getEvent(e);
//     console.log(eventReset.getTarget(event));
//     eventReset.stopPropagation(event);
//     eventReset.preventDefault(event);
// });
// let getElementObject = {
//     g(id) {
//         return document.getElementById(id);
//     },
//     css(id, key, value) {
//         this.g(id).style[key] = value;
//     }
// };
// getElementObject.css("clickPrize", "color", "#2dc3e8");
// 适配器模式
// let book = ['Javascript入门指南', 'JS book', 59, '张容铭'];
// function adapterToObj(arr) {
//     return {
//         name: arr[0],
//         type: arr[1],
//         price: arr[2],
//         author: arr[3]
//     }
// }
// let book_arr = adapterToObj(book);
// console.log(book_arr);
// function human(humanObj) {
//     let humanObj_default = {
//         name: 'Gary',
//         age: 24,
//         sex: 'boy',
//         hobby: 'program',
//         married: false
//     };
//     for (let human_part in humanObj_default) {
//         humanObj_default[human_part] = humanObj[human_part] || humanObj_default[human_part];
//     }
//     return humanObj_default;
// }
// let me = human({name: 'Gary Yin', age: 25, hobby: 'computer games', married: true});
// console.log(me);
// 框架适配
// window.A = A = jQuery;
// let A = A || {};
// A.g = function (id) {
//     return typeof id === "string" ? document.getElementById(id) : id;
// };
// A.on = function (dom, action, fn) {
//     let dom_real = typeof dom === "string" ? document.getElementById(dom) : dom;
//     if (dom_real.addEventListener) {
//         dom_real.addEventListener(action, fn);
//     } else if (dom_real.attachEvent) {
//         dom_real.attachEvent(`on${action}`, fn);
//     } else {
//         dom_real[`on${action}`] = fn;
//     }
// };
// A.on('clickPrize', 'click', function (e) {
//     let event = e || window.event;
//     console.log(event.target ? event.target : event.srcElement);
// });
// window.A = A = jQuery;
// A(function() {
//     A('#clickPrize').on('click', function (e) {
//         console.log(e.target ? e.target : e.srcElement);
//     });
// });
let A = A || {};
A.g = function (id) {
    return typeof id === "string" ? $(id) : id;
};
A.on = function (dom, action, fn) {
    let dom_real = typeof dom === "string" ? $(`#${dom}`) : dom;
    dom_real.on(action, fn);
};
A.on('clickPrize', 'click', function(e) {
    let event = e || window.event;
    console.log(event.target ? event.target : event.srcElement);
});
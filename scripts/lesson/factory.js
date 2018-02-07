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
function instanceObject(o) {
    function F() {
    }

    F.prototype = o;
    return new F();
}

function FactoryAbstract(subClass, superClass) {
    if (subClass instanceof Function) {
        let p = instanceObject(new FactoryAbstract[superClass]());
        subClass.prototype = p;
        p.constructor = subClass;
    } else {
        return new Error("不是函数对象，不可进行抽象!");
    }
}

FactoryAbstract.Car = function () {
    this.type = 'car';
};

FactoryAbstract.Car.prototype = {
    getPrice() {
        throw new Error("抽象函数不可直接调用!");
    },
    getCar() {
        throw new Error("抽象函数不可直接调用!");
    }
};

FactoryAbstract.Bus = function () {
    this.type = 'bus';
};

FactoryAbstract.Bus.prototype = {
    getPrice() {
        throw new Error("抽象函数不可直接调用!");
    },
    getBus() {
        throw new Error("抽象函数不可直接调用!");
    }
};

FactoryAbstract.Truck = function () {
    this.type = 'truck';
};

FactoryAbstract.Truck.prototype = {
    getPrice() {
        throw new Error("抽象函数不可直接调用!");
    },
    getTruck() {
        throw new Error("抽象函数不可直接调用!");
    }
};

function BMW(price, carName) {
    this.price = price;
    this.carName = carName;
}

FactoryAbstract(BMW, 'Car');
BMW.prototype.getPrice = function () {
    return this.price;
};
BMW.prototype.getCar = function () {
    return this.carName;
};

function BenzTunck(price, truckName) {
    this.price = price;
    this.truckName = truckName;
}

FactoryAbstract(BenzTunck, 'Truck');
BenzTunck.prototype.getPrice = function () {
    return this.price;
};
BenzTunck.prototype.getTruck = function () {
    return this.truckName;
};
let bmw = new BMW(200000, 'bmw');
let benz = new BenzTunck(500000, 'benz');
console.log(bmw.type);
console.log(bmw.getCar(), bmw.getPrice());
console.log(benz.type);
console.log(benz.getTruck(), benz.getPrice());
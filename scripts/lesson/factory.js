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
let Factory = function (type, content) {
    if (this instanceof Factory) {
        let s = new this[type](content);
        return s;
    } else {
        return new Factory(type, content);
    }
};

Factory.prototype = {
    JavaScript(content) {
        console.log(content);
    },
    PHP(content) {
        console.log(content);
    },
    UI(content) {
        console.log(content);
    },
    C(content) {
        console.log(content);
    }
};

let factoryMode = [{
    type: "JavaScript",
    content: "This is JS lessons~"
}, {
    type: "UI",
    content: "This is UI lessons~"
}, {
    type: "PHP",
    content: "This is PHP lessons~"
}];
for (let factoryItem of factoryMode) {
    new Factory(factoryItem["type"], factoryItem["content"]);
}
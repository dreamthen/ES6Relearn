//普通方式写函数方法,将函数全局变量暴露在全局中,容易造成多人开发的覆盖
function checkUserName() {
    console.log("check username");
}

function checkPassword() {
    console.log("check password");
}

function checkEmail() {
    console.log("check email");
}

checkUserName();
checkPassword();
checkEmail();

//利用对象形式进行声明
let checkObject = {
    checkUserName() {
        console.log("check obj username");
    },
    checkPassword() {
        console.log("check obj password");
    },
    checkEmail() {
        console.log("check obj email");
    }
};
checkObject.checkUserName();
checkObject.checkPassword();
checkObject.checkEmail();

//利用类对象形式进行声明，但是消耗很大的资源
function CheckFuncObj() {
    this.checkUserName = function () {
        console.log("check obj func username");
    };

    this.checkPassword = function () {
        console.log("check obj func password");
    };

    this.checkEmail = function () {
        console.log("check obj func email");
    };
}

let checkFuncObj = new CheckFuncObj();
checkFuncObj.checkUserName();
checkFuncObj.checkPassword();
checkFuncObj.checkEmail();

//利用类原型进行声明
let checkFuncObjPrototype = function () {
};
checkFuncObjPrototype.prototype.checkUserName = function () {
    console.log("check obj func prototype username");
};

checkFuncObjPrototype.prototype.checkPassword = function () {
    console.log("check obj func prototype password");
};

checkFuncObjPrototype.prototype.checkEmail = function () {
    console.log("check obj func prototype email");
};

let checkFuncObjPrototypeDeclaration = new checkFuncObjPrototype();
checkFuncObjPrototypeDeclaration.checkUserName();
checkFuncObjPrototypeDeclaration.checkPassword();
checkFuncObjPrototypeDeclaration.checkEmail();

//利用类原型声明链式结构
let CheckFuncObjChain = function () {
};
CheckFuncObjChain.prototype.checkUserName = function () {
    console.log("check obj func chain username");
    return this;
};

CheckFuncObjChain.prototype.checkPassword = function () {
    console.log("check obj func chain password");
    return this;
};

CheckFuncObjChain.prototype.checkEmail = function () {
    console.log("check obj func chain email");
    return this;
};

let checkFuncObjChain = new CheckFuncObjChain();
checkFuncObjChain.checkUserName().checkPassword().checkEmail();

//不使用类,函数进行声明
let checkObjClass = function () {
    return {
        checkUserName() {
            console.log("check obj class username");
            return this;
        },
        checkPassword() {
            console.log("check obj class password");
            return this;
        },
        checkEmail() {
            console.log("check obj class email");
            return this;
        }
    }
};
let checkClass = checkObjClass();
checkClass.checkUserName().checkPassword().checkEmail();

//在原型类上面绑定
// Function.prototype.checkUserName = function() {
//     console.log("check func username");
//     return this;
// };
//
// Function.prototype.checkPassword = function() {
//     console.log("check func password");
//     return this;
// };
//
// Function.prototype.checkEmail = function(){
//     console.log("check func email");
//     return this;
// };
//
// function checkFunc(){}
// checkFunc.checkUserName().checkPassword().checkEmail();

//在原型类上面绑定添加方法的方法
// Function.prototype.addMethod = function (name, func) {
//     this[name] = func;
//     return this;
// };
//
// function Method() {
// }
//
// Method.addMethod("checkUserName", function () {
//     console.log("check obj func method username");
//     return this;
// });
//
// Method.addMethod("checkPassword", function () {
//     console.log("check obj func method password");
//     return this;
// });
//
// Method.addMethod("checkEmail", function () {
//     console.log("check obj func method email");
//     return this;
// });
//
// Method.checkUserName().checkPassword().checkEmail();
// let method = new Method();
// method.checkUserName().checkPassword().checkEmail();

Function.prototype.addMethod = function(name, func) {
    this.prototype[name] = func;
    return this;
};

// let method = function(){};
//
// method.addMethod("checkUserName", function() {
//     console.log("check obj func method username");
//     return this;
// });
//
// method.addMethod("checkPassword", function(){
//     console.log("check obj func method password");
//     return this;
// });
//
// method.addMethod("checkEmail", function(){
//     console.log("check obj func method email");
//     return this;
// });

// method.checkUserName().checkPassword().checkEmail();

let Method = function(){};

Method.addMethod("checkUserName", function() {
    console.log("check obj func method username");
    return this;
});

Method.addMethod("checkPassword", function(){
    console.log("check obj func method password");
    return this;
});

Method.addMethod("checkEmail", function(){
    console.log("check obj func method email");
    return this;
});

let method = new Method();
method.checkUserName().checkPassword().checkEmail();





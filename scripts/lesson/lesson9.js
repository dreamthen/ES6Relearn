//Object对象
{
    //Object对象属性设置
    let name = "yinwk";
    let age = 24;
    let obj = {
        name,
        age
    };
    console.log(obj);
}

{
    //Object方法设置
    let obj = {
        name(value) {
            return typeof value === "string";
        },
        age(value) {
            return typeof value === "number" && value > 18;
        }
    };
    console.log(obj.name("yinwk"));
    // console.log(obj.age(28));
    // console.log(obj.age(16));
    console.log(obj.age(20));
}

{
    //Object.is
    //Object.assign
    let array = [];
    let arrayAno = [];
    let number = 11;
    let numberAno = 11;
    console.log("Object is", array === arrayAno);
    console.log("Object is", Object.is(array, arrayAno));
    console.log("Object is", number === numberAno);
    console.log("Object is", Object.is(number, numberAno));
    let obj = {
        name: "yinwk",
        age: 24,
        hobby: "play computer game"
    };
    let newObj = Object.assign(obj, {name: "zhaoyue", hobby: "program"});
    // let newObj = Object.assign({}, obj, {name: "zhaoyue", hobby: "program"});
    console.log(newObj);
}

{
    //Object.keys values entries
    let person = {
        name: "yinwk",
        age: 24,
        hobby: "program",
        [Symbol.iterator]() {
            let self = this;
            let personArray = [];
            for (let value of Object.values(self)) {
                personArray.push(value);
            }
            let index = 0;
            let len = personArray.length;
            return {
                next() {
                    if (index < len) {
                        return {
                            value: personArray[index++],
                            done: false
                        }
                    } else {
                        return {
                            value: personArray[index++],
                            done: true
                        }
                    }
                }
            }
        }
    };
    for (let value of person) {
        console.log("let of------", value);
    }
    for (let key of Object.keys(person)) {
        console.log("keys------", key);
    }
    for (let value of Object.values(person)) {
        console.log("values------", value);
    }
    for (let [key, value] of Object.entries(person)) {
        console.log("entries------", key, value);
    }
    Object.getOwnPropertyNames(person).forEach((nameItem, nameIndex) => {
        console.log("getOwnPropertyNames------", nameItem);
    });
}
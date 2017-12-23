//函数扩展
{
    function person(name = "yinwk", age, hobby = "play computer games") {
        console.log("name:" + name, "age:" + age, "hobby:" + hobby);
    }

    person("zhaoyue", 24, "program");
}

{
    let x = 8;

    function xPlusy(z = 7, y = x) {
        console.log(x, y, z);
    }

    xPlusy();
}

{
    function personAno(...args) {
        for (let argItem of args) {
            console.log(argItem);
        }
    }

    personAno("yinwk", 24, "zhaoyue", "boy", "computer games");
}

{
    let arr = [true, "monkey", 88, {name: "xiaoming", age: 23}];
    let [judge, , ...newArr] = arr;
    console.log(judge, newArr);
    console.log(...newArr);
}

{
    let name = "yinwk",
        age = 24,
        hobby = "program";

    // let stringFunc = `hello ${name},I'm ${age} years old,my hobby is ${hobby}`;

    function personThird(s, v1, v2, v3) {
        return v1 + s[0] + s[1] + v2 + s[2] + v3;
    }

    let newStringFunc = personThird` hello ${name},I'm ${age} years old,my hobby is ${hobby}`;
    console.log(newStringFunc);
}

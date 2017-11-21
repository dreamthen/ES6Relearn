{
    //函数默认参数
    function person(name = "yinwk", age = 25) {
        console.log("name:", name, "age:", age);
    }

    person();
    person("yinwenkai", 23);
}

{
    //函数默认变量
    let name = "yinwk";

    // function personAno(name, person = name, hobby = "play computer games") {
    //     console.log("name:", name, "person:", person, "hobby:", hobby);
    // }

    function personAno(names, person = name, hobby = "play computer games") {
        console.log("name:", names, "person:", person, "hobby:", hobby);
    }

    personAno("yinwenkai");
}

{
    //函数参数数组
    function newFunc(...args) {
        for (let value of args) {
            console.log("args combine array:", value);
        }
    }

    newFunc("yinwk", 24, "play computer games");
}

{
    //函数数组转化参数
    function newFuncArray(...args) {
        for (let value of args) {
            console.log("property combine array:", value);
        }
    }

    let arr = ["yinwk", 24, "play computer games"];
    console.log("array combine property:", ...arr);
    newFuncArray(...arr);
}

{
    //``配合函数
    let name = 'yinwk',
        age = 24,
        hobby = 'program';

    function personReturn(v, s1, s2, s3) {
        return s1 + v[1] + v[0] + s2 + v[2] + s3;
    }

    let me = personReturn`I'm ${name}, ${age} years old, I like ${hobby}`;
    console.log(me);
}

{
    //伪函数
    function reallyFunc(num) {
        return innerFunc(num);
    }

    function innerFunc(num) {
        return num * 3;
    }

    let endNum = reallyFunc(21);
    console.log(endNum);
}
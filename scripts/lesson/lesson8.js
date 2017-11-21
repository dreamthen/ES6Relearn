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

}
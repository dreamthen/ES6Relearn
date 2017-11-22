{
    //数组解构赋值
    let arr = [true, "yinwk", 24, {hobby: "program"}, [7, 6, 5, 4, 3, 2, 1]];
    let [, name, age, hobby, arrayNumber] = arr;
    console.log("name:", name, "age:", age, "hobby:", hobby, "array number:", arrayNumber);
    let arrAno = ["yinwk", 28, 24, 7, 77, 17, 89];
    let [myName, , myAge, , , luckNumber,] = arrAno;
    console.log("myName:", myName, "myAge:", myAge, "luckNumber:", luckNumber);
}

{
    //对象结构赋值
    let person = {
        name: "yinwenkai",
        age: 24,
        lover: "zhaoyue",
        hobby: "program"
    };

    let {name: myName, age: myAge, lover: myLover, hobby: myHobby} = person;
    console.log("myName:", myName, "myAge:", myAge, "myLover:", myLover, "myHobby:", myHobby);
}
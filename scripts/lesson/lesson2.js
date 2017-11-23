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
    //对象解构赋值
    let person = {
        name: "yinwenkai",
        age: 24,
        lover: "zhaoyue",
        hobby: "program"
    };

    let {name: myName, age: myAge, lover: myLover, hobby: myHobby} = person;
    console.log("myName:", myName, "myAge:", myAge, "myLover:", myLover, "myHobby:", myHobby);
}

{
    //复杂对象解构赋值
    let person = {
        id: 370683199306300013,
        information: {
            name: "yinwk",
            age: 24,
            hobby: {
                games: ["LOL", "PBug"],
                job: "program"
            }
        }
    };

    let {id: idCard, information: {name: myName, age: myAge, hobby: {games: myLoveGames, job: myJob}}} = person;
    console.log("id:", idCard, "name:", myName, "age:", myAge, "hobby:", myLoveGames.join(" and "), "job:", myJob);
}
//解构赋值
{
    //数组解构赋值
    let arr_structure = [777, "yinwk", true, {
        name: "yinwk",
        age: 25
    }, false, 0.05, [99, 87, 101, 77, 17, 24, 8, 16, 11]];
    let [lucky_number, name, , information, , , sports_arr] = arr_structure;
    console.log(lucky_number, name, information, sports_arr);
    let [, , , id_card, ...arr_ano] = arr_structure;
    console.log(id_card, arr_ano);
}

{
    //对象解构赋值
    let obj_structure = {
        name: "yinwenkai",
        age: 20,
        hobby: "play computer games"
    };

    let {name: my_name, age: my_age, hobby: my_hobby} = obj_structure;
    console.log(my_name, my_age, my_hobby);

    let obj_structure_difficult = {
        id: "370683199306300013",
        information: {
            name: "尹文楷",
            age: 24,
            like: "basketball",
            hobby: "computer games",
            luckNumber: [7, 11, 24]
        }
    };

    let {id: idCard, information: {name: myName, age: myAge, like: mySports, hobby: myGame, luckNumber: myLucky}} = obj_structure_difficult;
    console.log("ID:" + idCard, "Name:" + myName, "Age:" + myAge, "Sports:" + mySports, "Hobby:" + myGame, "LuckyNumber:" + myLucky);
}
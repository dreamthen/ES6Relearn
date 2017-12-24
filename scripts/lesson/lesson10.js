//set and map
{
    let set = new Set([true, "yinwenkai", 24, "program", {luckyNumber: 77}]);
    console.log(set);
    let setObj = new Set();
    let monkey = {name: "monkey"};
    setObj.add(77);
    setObj.add("clearLove");
    setObj.add(monkey);
    console.log(setObj, setObj.size, setObj.has(77), setObj.has(monkey));
    for (let value of setObj) {
        console.log("for let of......", value);
    }
    for (let key of setObj.keys()) {
        console.log("keys......", key);
    }

    for (let value of setObj.values()) {
        console.log("values......", value);
    }

    for (let [key, value] of setObj.entries()) {
        console.log("entries......", key, value);
    }

    setObj.forEach((setItem, index) => {
        console.log("forEach......", setItem);
    });

    setObj.delete(77);
    // setObj.delete({name: "monkey"});
    console.log(setObj);
    setObj.clear();
    console.log(setObj);
}

{
    //weakSet
    //no size
    //no clear function
    //no 遍历
    let weakSet = new WeakSet([{judge: true}, {luckyNumber: 77}, {sayHello: "helloWorld"}]);
    console.log(weakSet);
    let zero = {name: "zero"};
    let weakSetObj = new WeakSet();
    weakSetObj.add({name: "monkey"});
    weakSetObj.add(zero);
    console.log(weakSetObj, weakSetObj.size, weakSetObj.has({name: "monkey"}), weakSetObj.has(zero));
    // for (let value of weakSetObj) {
    //     console.log("for let of......", value);
    // }
    weakSetObj.delete({name: "monkey"});
    weakSetObj.delete(zero);
    console.log(weakSetObj);
    // weakSetObj.clear();
    // console.log(weakSetObj);
}

{
    //map
    let map = new Map([["name", "yinwenkai"], ["age", 24], ["hobby", "program"], ["love", {name: "zhaoyue", age: 23}]]);
    console.log(map);
    let mapObj = new Map();
    mapObj.set("luckyNumber", 7);
    mapObj.set("ID", "370683199306300013");
    mapObj.set("lover", {name: "zhaoyue", age: 24});
    mapObj.set({hobby: "program"}, "I love my hobby");
    console.log(mapObj, mapObj.size, mapObj.has("ID"), mapObj.has("lover"), map.has("luckNumber"), map.has({hobby: "program"}), mapObj.get("ID"));
    for (let value of mapObj) {
        console.log("for let of......", value);
    }
    for (let key of mapObj.keys()) {
        console.log("keys......", key);
    }
    for (let value of mapObj.values()) {
        console.log("values......", value);
    }
    for (let [key, value] of mapObj.entries()) {
        console.log("entries......", key, value);
    }
    mapObj.forEach((item, index) => {
        console.log("forEach......", item);
    });
    mapObj.delete("lover");
    console.log(mapObj);
    mapObj.clear();
    console.log(mapObj);
}

{
    //weakMap
    //1.no size
    //2.no clear function
    //3.no 遍历
    let weakMap = new WeakMap([[{luckyNumber: "luckyNumber"}, {luckyNumber: 77}], [{ID: "ID"}, {ID: "370683199306300013"}]]);
    console.log(weakMap);
    let weakMapObj = new WeakMap(),
        zero = {name: "zero"};
    weakMapObj.set({hobby: "program"}, "I love my hobby");
    weakMapObj.set(zero, "I love zero in onePiece");
    console.log(weakMapObj, weakMapObj.size, weakMapObj.has({hobby: "program"}), weakMapObj.has(zero), weakMapObj.get({hobby: "program"}), weakMapObj.get(zero));
    // for (let value of weakMapObj) {
    //     console.log("for let of......", weakMapObj);
    // }
    weakMapObj.delete({hobby: "program"});
    weakMapObj.delete(zero);
    console.log(weakMapObj);
    // weakMapObj.clear();
    // console.log(weakMapObj);
}
{
    //Set
    // let set = new Set(["hello,world", true, 24, 6]);
    // console.log(set, set.size);
    let set = new Set();
    let obj = {name: 'yinwk'};
    set.add("hello,world");
    set.add(true);
    set.add(24);
    set.add(6);
    set.add(obj);
    console.log(set, set.size);
    console.log(set.has(true), set.has("hello,world"), set.has(24), set.has(obj));
    for (let value of set) {
        console.log('let of......', value);
    }

    for (let key of set.keys()) {
        console.log('keys......', key);
    }

    for (let value of set.values()) {
        console.log('values......', value);
    }
    for (let [key, value] of set.entries()) {
        console.log('entries......', key, value);
    }
    set.forEach((setItem, setIndex) => {
        console.log('forEach......', setItem);
    });
    // set.delete(true);
    // set.delete(24);
    // set.delete(obj);
    // console.log(set);
    // set.clear();
    // console.log(set);
    let setAno = new Set([24, 56, 89, 3, 100, 26, 44, 66]);
    console.log(setAno, setAno.size);
}

{
    //WeakSet
    //只能接收对象
    //1.无size
    //2.无clear
    //3.no 遍历
    // let weakSet = new WeakSet([{name: 'yinwk'}, true, 100]);
    let weakSet = new WeakSet();
    let weakObj = {name: "Gary"};
    let weakNum = {num: 365};
    weakSet.add(weakObj);
    weakSet.add(weakNum);
    console.log(weakSet, weakSet.size);
    console.log(weakSet.has(weakObj));
    console.log(weakSet.has({name: "Gary"}));
    weakSet.delete(weakNum);
    console.log(weakSet.has(weakObj), weakSet.has(weakNum));
    // for (let value of weakSet) {
    //     console.log(value);
    // }
}

{
    //Map
    let map = new Map();
    map.set("name", "yinwk");
    map.set("age", 24);
    map.set("isMan", true);
    map.set("blood", {blood: "B"});
    console.log(map, map.size, map.get("blood"));
    console.log(map.has("blood"), map.has("age"), map.has("isMen"));
    // map.delete("isMan");
    // console.log(map);
    // map.clear();
    // console.log(map);
    for (let value of map) {
        console.log("let of---", value);
    }
    for (let key of map.keys()) {
        console.log("keys---", key);
    }
    for (let value of map.values()) {
        console.log("values---", value);
    }
    for (let [key, value] of map.entries()) {
        console.log("entries---", key, value);
    }
    map.forEach((mapItem, mapIndex) => {
        console.log(mapItem);
    });
    //unique
    let mapNum = new Map([["name", "yinwk"], ["age", 24], ["hobby", "play computer games"]]);
    console.log(mapNum);
}

{
    //WeakMap
    // let weakMap = new WeakMap([["name", "yinwk"]]);
    //只能用对象作为Map的key
    //1.无size
    //2.无clear function
    //3.no 遍历
    let weakMap = new WeakMap();
    let name = {name: "yinwk"};
    let age = {age: 24};
    weakMap.set(name, "yiwk");
    weakMap.set(age, 24);
    console.log(weakMap, weakMap.size);
    console.log(weakMap.has(name), weakMap.has(age), weakMap.has({name: "yinwk"}));
    // weakMap.delete(name);
    // console.log(weakMap);
    // weakMap.clear();
    // for (let value of weakMap.values()) {
    //     console.log(value);
    // }
}

{
    //Set和Array比较
    let set = new Set();
    let arr = [];
    let username = {username: "yinwk"};
    //增(添加对象)
    // add push
    set.add(username);
    arr.push(username);
    console.log(set, arr);
    //查
    //has includes find
    console.log(set.has(username), arr.includes(username), arr.find((arrItem, arrIndex) => arrItem.username));
    //改
    // username["username"] = "赵悦";
    set.forEach((setItem, setIndex) => setItem.username ? setItem.username = "赵悦" : "");
    arr.forEach((arrItem, arrIndex) => arrItem.username ? arrItem.username = "赵悦" : "");
    console.log(set, arr);
    //删
    // set.delete(username);
    set.forEach((setItem, setIndex) => setItem.username ? set.delete(setItem) : "");
    let index = arr.findIndex((arrItem, arrIndex) => arrItem.username);
    arr.splice(index, 1);
    console.log(set, arr);
}

{
    //Map和Array比较
    let map = new Map();
    let array = [];
    let username = {username: "yinwk"};
    //增
    map.set("username", {username: "yinwk"});
    array.push(username);
    console.log(map, array);
    //查
    console.log(map.has("username"), array.includes(username), array.find((arrayItem, arrayIndex) => arrayItem.username));
    //改
    map.set("username", {username: "zhaoyue"});
    // username["username"] = "zhaoyue";
    array.forEach((arrayItem, arrayIndex) => arrayItem.username ? arrayItem.username = "zhaoyue" : "");
    console.log(map, array);
    //删
    map.delete("username");
    let index = array.findIndex((arrayItem, arrayIndex) => arrayItem.username);
    array.splice(index, 1);
    console.log(map, array);
}

{
    //Set,Map和Object比较
    let set = new Set();
    let map = new Map();
    let obj = {};
    let username = {username: "yinwk"};
    //增
    set.add(username);
    map.set("username", {username: "yinwk"});
    obj["username"] = "yinwk";
    console.log(set, map, obj);
    //查
    console.log(set.has(username), map.has("username"), "username" in obj);
    //改
    map.set("username", {username: "zhaoyue"});
    // username["username"] = "zhaoyue";
    set.forEach((setItem, setIndex) => setItem.username ? setItem.username = "zhaoyue" : "");
    obj["username"] = "zhaoyue";
    console.log(set, map, obj);
    //删
    map.delete("username");
    // set.delete(username);
    set.forEach((setItem, setIndex) => setItem.username ? set.delete(setItem) : "");
    delete obj["username"];
    console.log(set, map, obj);
}
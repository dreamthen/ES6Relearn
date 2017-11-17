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
    map.delete("isMan");
    console.log(map);
    map.clear();
    console.log(map);
}

{
    //WeakMap
}
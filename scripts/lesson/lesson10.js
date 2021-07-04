//set,map,weakSet,weakMap
{
    let set = new Set([7771, true, "good boy", {name: "Gary", age: 25}]);
    console.log(set);
    let set_real = new Set(),
        me = {name: "Gary Yin"};
    set_real.add(77771);
    set_real.add(false);
    set_real.add("good girl");
    set_real.add({front_end: "YinWenKai", back_end: "LiuZhenJi"});
    set_real.add(me);
    console.log(set_real, set_real.size, set_real.has("good girl"), set_real.has({
        front_end: "YinWenKai",
        back_end: "LiuZhenJi"
    }), set_real.has(me));
    for (let setItem of set_real) {
        console.log(setItem);
    }
    for (let key of set_real.keys()) {
        console.log(key);
    }
    for (let value of set_real.values()) {
        console.log(value);
    }
    for (let [key, value] of set_real.entries()) {
        console.log(`${JSON.stringify(key)}------${JSON.stringify(value)}`);
    }
    set_real.delete({
        front_end: "YinWenKai",
        back_end: "LiuZhenJi"
    });
    set_real.delete(me);
    console.log(set_real);
    set_real.clear();
    console.log(set_real);

    //WeakSet
    //no size
    //no clear function
    //no 遍历
    let weakSet = new WeakSet([{name: "Gary", age: 25}]);
    console.log(weakSet);
    let weakSet_real = new WeakSet(),
        weak_me = {name: "Gary Yin", age: 26};
    weakSet_real.add({front_end: "YinWenKai", back_end: "LiuZhenJi"});
    weakSet_real.add(weak_me);
    console.log(weakSet_real, weakSet_real.size, weakSet_real.has({
        front_end: "YinWenKai",
        back_end: "LiuZhenJi"
    }), weakSet_real.has(weak_me));
    weakSet_real.delete({
        front_end: "YinWenKai",
        back_end: "LiuZhenJi"
    });
    weakSet_real.delete(weak_me);
    console.log(weakSet_real);
    // weakSet_real.clear();
    // console.log(weakSet_real);
    // for (let weakItem of weakSet_real) {
    //     console.log(weakItem);
    // }
    // for (let key of weakSet_real.keys()) {
    //     console.log(key);
    // }
    // for (let value of weakSet_real.values()) {
    //     console.log(value);
    // }
    // for (let [key, value] of weakSet_real.entries()) {
    //     console.log(`${key}------${value}`);
    // }
    let map = new Map([["name", "YinWenKai"], [{age: 30}, {real_age: 25}], [false, true], [666666, "弹幕"], [[8, 10, 15, 6, 3, 1, 9], {thats: "数组"}]]);
    console.log(map);
    let map_real = new Map(),
        map_object = {name: "五五开"};
    map_real.set(66666, "大司马");
    map_real.set({name: "大司马"}, {money: 68886});
    map_real.set(false, true);
    map_real.set("平台", ["斗鱼", "战旗", "熊猫", "全民"]);
    map_real.set(map_object, "挂逼");
    console.log(map_real, map_real.size, map_real.has(66666), map_real.has({name: "大司马"}), map_real.has(map_object), map_real.get(false), map_real.get({name: "大司马"}), map_real.get(map_object));
    for (let mapItem of map_real) {
        console.log(mapItem);
    }
    for (let key of map_real.keys()) {
        console.log(key);
    }
    for (let value of map_real.values()) {
        console.log(value);
    }
    for (let [key, value] of map_real.entries()) {
        console.log(`${JSON.stringify(key)}------${JSON.stringify(value)}`);
    }
    map_real.delete({name: "大司马"});
    map_real.delete(map_object);
    console.log(map_real);
    map_real.clear();
    console.log(map_real);
    //WeakMap
    //no size
    //no clear
    //no 遍历
    // let weakMap = new WeakMap([[{name: "大司马"}, {money: "两千万"}]]);
    let weakMap_real = new WeakMap(),
        weakMap_real_object = {name: "大司马"};
    weakMap_real.set({name: "大司马"}, {money: "两千万"});
    weakMap_real.set(weakMap_real_object, "挂逼");
    console.log(weakMap_real, weakMap_real.size, weakMap_real.has({name: "大司马"}), weakMap_real.has(weakMap_real_object));
    // for (let weakMapItem of weakMap_real) {
    //     console.log(weakMapItem);
    // }
    // for(let key of weakMap_real.keys()){
    //     console.log(key);
    // }
    // for (let value of weakMap_real.values()) {
    //     console.log(value);
    // }
    // for (let [key, value] of weakMap_real.entries()) {
    //     console.log(`${key}------${value}`);
    // }
    weakMap_real.delete({name: "大司马"});
    weakMap_real.delete(weakMap_real_object);
    console.log(weakMap_real);
    // weakMap_real.clear();
    // console.log(weakMap_real);
}

{
    // set,map与数组对比
    // 增
    let set = new Set(),
        map = new Map(),
        arr = [],
        insertObj = {name: "大司马"};
    set.add({name: "五五开"});
    set.add(77777);
    set.add(true);
    set.add(insertObj);
    map.set({name: "五五开"}, "挂逼");
    map.set(66666, "大司马");
    map.set(true, false);
    map.set(insertObj, {money: "两千万"});
    arr.push({name: "五五开"}, 77777, true, insertObj);
    console.log(set, map, arr);
    // 查
    console.log(set.has({name: "五五开"}), set.has(77777), set.has(insertObj), set.forEach((setItem, setIndex) => {
        setItem["name"] === "五五开" ? console.log(setItem) : null;
    }));
    console.log(map.has({name: "五五开"}), map.has(66666), map.has(insertObj));
    console.log(arr.includes({name: "五五开"}), arr.includes(77777), arr.includes(insertObj));
    console.log(arr.find((arrItem, arrIndex) => {
        return arrItem["name"] === "五五开" ? arrItem["name"] : null
    }));
    // 改
    set.forEach((setItem, setIndex) => {
        setItem["name"] === "五五开" ? setItem["name"] = "小智" : null;
    });
    map.set({name: "五五开"}, "开挂");
    map.set(66666, "小智");
    map.set(insertObj, {money: "三千万"});
    arr.find((arrItem, arrIndex) => {
        return arrItem["name"] === "五五开" ? arrItem["name"] = "小智" : null;
    });
    console.log(set, map, arr);
    //删
    set.delete({name: "小智"});
    set.delete(insertObj);
    map.delete({name: "五五开"});
    map.delete(insertObj);
    let index = arr.findIndex((findItem, findIndex) => {
        return findItem["name"] === "小智" ? findItem["name"] : null;
    });
    arr.splice(index, 1);
    console.log(set, map, arr);
}

{
    // set,map与对象相比
    let set = new Set(),
        map = new Map(),
        object = {},
        insertObject = {name: "大司马"};
    // 增
    set.add(insertObject);
    map.set(insertObject, {money: "三千万"});
    object = insertObject;
    //查
    console.log(set.has(insertObject), map.has(insertObject), "name" in object);
    //改
    set.forEach((setItem, setIndex) => {
        setItem["name"] === "大司马" ? setItem["name"] = "小智" : null;
    });
    map.set(insertObject, {money: "四千万"});
    object["name"] = "小智";
    console.log(set, map, object);
    //删
    set.delete(insertObject);
    map.delete(insertObject);
    delete object["name"];
    console.log(set, map, object);
}
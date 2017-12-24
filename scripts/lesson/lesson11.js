{
    //set,map和数组比较
    //增
    let set = new Set(),
        map = new Map(),
        arr = Array.from(Array.apply(null, {length: 0}));
    let id = {ID: "370683199306300013"},
        name = {name: "yinwk"};
    set.add(id);
    set.add(name);
    map.set("id", id);
    map.set("name", name);
    arr.push(id);
    arr.push(name);
    console.log(`set:${set}`, `map:${map}`, `array:${arr}`);
    console.log(set, map, arr);
    //查
    console.log(set.has(id), map.has("id"), arr.find((item) => item["ID"] ? item["ID"] : null), arr.includes(id));
    //改
    let newId = {ID: "370683199306300014"};
    set.forEach((item, index) => item["ID"] ? item["ID"] = newId["ID"] : null);
    map.set("id", newId);
    arr.forEach((arrItem, index) => arrItem["ID"] ? arrItem["ID"] = newId["ID"] : null);
    console.log(set, map, arr);
    //删
    set.delete(id);
    map.delete("id");
    let index = arr.findIndex((item, index) => item["ID"] ? item["ID"] : null);
    arr.splice(index, 1);
    console.log(set, map, arr);
}

{
    //set,map和对象比较
    let set = new Set(),
        map = new Map(),
        object = {};
    let id = {ID: "370683199306300013"},
        name = {name: "yinwk"},
        mapIDKey = {propType: "ID"};
    //增
    set.add(id);
    set.add(name);
    map.set(mapIDKey, id);
    map.set({propType: "name"}, name);
    object["ID"] = id;
    object["name"] = name;
    console.log(set, map, object);
    //查
    console.log(set.has(id), map.has(mapIDKey), "ID" in object);
    //改
    let newID = "370683199306300014";
    set.forEach((setItem, index) => setItem["ID"] ? setItem["ID"] = newID : null);
    map.set(mapIDKey, {ID: newID});
    object["ID"] = newID;
    console.log(set, map, object);
    //删
    // set.delete(id);
    set.forEach((setItem, index) => setItem["name"] ? set.delete(setItem) : null);
    map.delete(mapIDKey);
    delete object["ID"];
    console.log(set, map, object);
}
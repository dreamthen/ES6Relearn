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
    // set.delete(true);
    // set.delete(24);
    // set.delete(obj);
    // console.log(set);
    // set.clear();
    // console.log(set);
    // unique
    let setAno = new Set([24, 56, 89, 3, 100, 26, 44, 66]);
    console.log(setAno, setAno.size);
}

{
    //WeakSet
}

{
    //Map
}

{
    //WeakMap
}
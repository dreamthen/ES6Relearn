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
}
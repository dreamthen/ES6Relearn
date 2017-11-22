{
    //Array.of
    let arr = Array.of(true, "yinwk", 24, {luckyNum: 7});
    for (let arrValue of arr) {
        console.log("array of:", arrValue);
    }
}

{
    //Array.from
    function arr(num) {
        // return Array.from(new Array(num), function map(item, index){ return index + 1});
        return Array.from(Array.apply(null, {length: num}), function map(item, index) {
            return index + 1;
        });
    }

    let arrayNum = arr(9);
    console.log(arrayNum);
}

{
    //Array.keys .values .entries
    let ofArr = Array.from(Array.apply(null, {length: 8}), function map(item, index) {
        return index * 3;
    });
    for (let value of ofArr) {
        console.log("let of------", value);
    }
    for (let key of ofArr.keys()) {
        console.log("keys------", key);
    }
    for (let value of ofArr.values()) {
        console.log("values------", value);
    }
    for (let [key, value] of ofArr.entries()) {
        console.log("entries------", key, value);
    }
}

{
    //Array.fill填充替换 Array.copyWithin内复制
    let obj = {username: "CLAY"};
    let arr = [24, true, "yinwk", obj];
    // arr.fill(777);
    // arr.fill(777, 1, 3);
    // arr.fill(777, 0, 3);
    // arr.copyWithin(2, 0, 3);
    // arr.copyWithin(0, 1, 3);
    arr.copyWithin(3, 1, 2);
    console.log(arr);
}

{
    //Array.find .findIndex
    let arr = [{username: "CLAY"}, true, {username: "clown"}, 24, "laugh at you~"];
    let arrAno = arr.find(function finder(findItem, findIndex) {
        return findItem.username;
    });
    let arrIndex = arr.findIndex(function findIndexer(findIndexItem, findIndex) {
        return typeof findIndexItem === "number";
    });
    console.log(arrAno, arrIndex);
}

{
    //Array.includes
    let obj = {hobby: "play computer games"};
    let arr = [true, "yinwk", 24, obj];
    console.log(arr.includes(true));
    console.log(arr.includes("yinwk"));
    console.log(arr.includes(24));
    console.log(arr.includes(obj));
}
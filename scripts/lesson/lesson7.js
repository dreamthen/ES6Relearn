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
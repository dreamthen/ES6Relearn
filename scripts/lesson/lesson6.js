//数组扩展
{
    let arrayOf = Array.of(99, true, "Gary", [8, 10, 6, 7, 5, 2, 4, 1], {name: "Gary", age: 25});
    console.log(arrayOf);
    let arrayFrom = Array.from(["sunshine_girl", false, 777, {body: "very good", foot: "sports shoes"}]);
    console.log(arrayFrom);

    function arrFunc(num) {
        return Array.from(Array.apply(null, {length: num}), function map(item, index) {
            return index + 1;
        });
    }

    let arrayFromAno = arrFunc(10);
    console.log(arrayFromAno);
    let array_fill = [99, true, "Gary Yin"];
    // console.log(array_fill.fill(77));
    console.log(array_fill.fill(77771, 1));
    // console.log(array_fill.fill(7771, 0, 2));
    let array_copyWithin = [99, true, "Gary", [8, 10, 6, 7, 5, 2, 4, 1], {name: "Gary", age: 25}];
    // console.log(array_copyWithin.copyWithin(0, 3, 5));
    // console.log(array_copyWithin.copyWithin(2, 3, 5));
    // console.log(array_copyWithin.copyWithin(1, 2, 4));
}

{
    let array = [true, 77, "good boy", {son: "尹一鸣", girl: "尹一菲"}];
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
    for (let arrayItem of array) {
        console.log(arrayItem);
    }
    for (let key of array.keys()) {
        console.log(key);
    }
    for (let value of array.values()) {
        console.log(value);
    }
    for (let [key, value] of array.entries()) {
        console.log(`${key}------${JSON.stringify(value)}`);
    }
    console.log(array.includes(true), array.includes("good boy"), array.includes({son: "尹一鸣", girl: "尹一菲"}));
    console.log(array.find(function find(item, index) {
        return item["son"];
    }));
    console.log(array.findIndex(function findIndex(item, index) {
        // return Object.prototype.toString.call(item) === "[object String]";
        return Object.prototype.toString.call(item) === "[object String]";
    }));
}
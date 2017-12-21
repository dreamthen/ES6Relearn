//数组
let arrayOf = Array.of(true, "yinwk", 77, {name: 'yinwenkai', age: 24});
console.log(arrayOf);


let arrayFrom = Array.from([22, 56, 78, 100, 7, 77, 46, 88]);
console.log(arrayFrom);

function arrayFunc(num) {
    return Array.from(Array.apply(null, {length: num}), function map(item, index) {
        return index + 1;
    });
}

let newArray = arrayFunc(10);
console.log(newArray);

let arrayFromNow = Array.from([true, "yinwk", 77, {name: 'yinwenkai', age: 24}]);
for (let fromi = 0; fromi < arrayFromNow.length; fromi++) {
    console.log("for let......", fromi, arrayFromNow[fromi]);
}

for (let letof of arrayFromNow) {
    console.log("letof......", letof);
}

for (let keys of arrayFromNow.keys()) {
    console.log("keys......", keys);
}

for (let values of arrayFromNow.values()) {
    console.log("values......", values);
}

for (let [key, value] of arrayFromNow.entries()) {
    console.log("entries......", key, value);
}

arrayFromNow.forEach(function each(item, index) {
    console.log("forEach......", item);
});

console.log(arrayFromNow.fill(77));
// console.log(arrayFromNow.fill(7, 0, 1));

console.log(arrayFromNow.includes(true), arrayFromNow.includes(77), arrayFromNow.includes({
    name: 'yinwenkai',
    age: 24
}));

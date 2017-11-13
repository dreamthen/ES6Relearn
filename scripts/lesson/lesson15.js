{
    //iterator demo
    let arr = ["hello", "world"];
    let arrObj = arr[Symbol.iterator]();
    console.log(arrObj.next());
    console.log(arrObj.next());
    console.log(arrObj.next());
}

{
    let obj = {};
    obj[Symbol.iterator] = function* () {
        yield 1;
        yield 2;
        yield 3;
    };
    for (let value of obj) {
        console.log(value);
    }
}
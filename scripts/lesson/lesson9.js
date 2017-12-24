//Symbol
{
    let symbolString = Symbol(77);
    let symbolStringAno = Symbol(77);
    console.log(symbolString === symbolStringAno);
    // console.log(symbolString == symbolStringAno);
}

{
    // let symbolStringFor = Symbol.for({name: "yinwenkai"});
    let symbolStringFor = Symbol.for(77);
    // let symbolStringForAno = Symbol.for({name: "yinwenkai"});
    let symbolStringForAno = Symbol.for(77);
    console.log(symbolStringFor === symbolStringForAno);
}

{
    let symbolLuckyNumber = Symbol.for(7);
    let obj = {
        name: "yinwenkai",
        age: 24,
        hobby: "program",
        [symbolLuckyNumber]: "myLuckyNumber"
    };
    for (let key of Object.keys(obj)) {
        console.log(key, obj[key]);
    }

    Object.getOwnPropertyNames(obj).forEach((item, index) => {
        console.log(item, obj[item]);
    });

    Object.getOwnPropertySymbols(obj).forEach((item, index) => {
        console.log(item, obj[item]);
    });

    Reflect.ownKeys(obj).forEach((item, index) => {
        console.log(item, obj[item]);
    });
}
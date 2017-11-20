{
    //Symbol
    // let symbolOne = Symbol({hobby: "play computer game"});
    // let symbolTwo = Symbol({hobby: "play computer game"});
    let symbolOne = Symbol("play computer game");
    let symbolTwo = Symbol("play computer game");
    console.log(symbolOne === symbolTwo);
    let symbolThree = Symbol.for({love: "zhaoyue"});
    let symbolFour = Symbol.for({love: "zhaoyue"});
    console.log(symbolThree === symbolFour);
}

{
    //Symbol遍历 keys
    let symbol = Symbol.for({hobby: "program"});
    let obj = {
        name: "yinwk",
        age: 24,
        [symbol]: "hobby is program"
    };
    for (let keys of Object.keys(obj)) {
        console.log(keys);
    }
    Object.getOwnPropertySymbols(obj).forEach((symbolItem, symbolIndex) => {
        console.log(symbolItem);
    });
    Reflect.ownKeys(obj).forEach((ownKeysItem, ownKeysIndex) => {
        console.log(ownKeysItem);
    });
}
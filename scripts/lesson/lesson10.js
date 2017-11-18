{
    //Symbol
    let symbolOne = Symbol({hobby: "play computer game"});
    let symbolTwo = Symbol({hobby: "play computer game"});
    console.log(symbolOne === symbolTwo);
    let symbolThree = Symbol.for({love: "zhaoyue"});
    let symbolFour = Symbol.for({love: "zhaoyue"});
    console.log(symbolThree === symbolFour);
}

{
    //Symbol遍历
    let symbol = Symbol.for({hobby: "program"});
    let obj = {
        name: "yinwk",
        age: 24,
        [symbol]: "hobby is program"
    };
}
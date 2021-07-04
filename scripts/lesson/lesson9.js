//Symbol用法
{
    let symbol_one = Symbol(99),
        symbol_two = Symbol(99),
        symbol_three = Symbol("myWorld"),
        symbol_four = Symbol(true),
        symbol_for_one = Symbol.for("worldMe"),
        symbol_for_two = Symbol.for("worldMe"),
        symbol_for_three = Symbol.for({name: "Gary", age: 25}),
        symbol_for_four = Symbol.for({name: "Gary", age: 25});
    console.log(symbol_one, symbol_two, symbol_three, symbol_four, symbol_one === symbol_two);
    console.log(symbol_for_one, symbol_for_two, symbol_for_three, symbol_for_four, symbol_for_one === symbol_for_two, symbol_for_three === symbol_for_four);
    let hasSymbolObject = {
        name: "Gary",
        [Symbol.for("age")]: 27
    };
    console.log(hasSymbolObject);
    Object.getOwnPropertyNames(hasSymbolObject).forEach(function (item, index) {
        console.log(item);
    });
    Object.getOwnPropertySymbols(hasSymbolObject).forEach(function (item, index) {
        console.log(item);
    });
    Reflect.ownKeys(hasSymbolObject).forEach(function (item, index) {
        console.log(item);
    });
}
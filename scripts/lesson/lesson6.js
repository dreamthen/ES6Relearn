{
    //Number
    //二进制,0b开头
    let anoTwo = 0b111101;
    //八进制,0o开头
    let anoEight = 0o67;
    //十六进制,0x开头
    let anoSixteen = 0x20bb7;
    console.log("二进制:", anoTwo, "八进制:", anoEight, "十六进制:", anoSixteen);
}

{
    //Number.isFinite
    let anoFinite = Infinity;
    let anoSixteen = 0x20bb7;
    let anoNumber = 100;
    console.log(Number.isFinite(anoFinite));     //false
    console.log(Number.isFinite(anoSixteen));    //true
    console.log(Number.isFinite(anoNumber));     //true
}

{
    //Number.isNaN
    let number = 199;
    let string = "123";
    let nan = {name: "Gary"};
    let nanFact = NaN;
    console.log(Number.isNaN(number));    //false
    console.log(Number.isNaN(string));    //false
    console.log(Number.isNaN(nan));       //false
    console.log(Number.isNaN(nanFact));   //true
}

{
    //Number.MAX_SAFE_INTEGER Number.MIN_SAFE_INTEGER Number.isInteger
    //Number.isSafeInteger
    console.log(Number.MAX_SAFE_INTEGER);
    console.log(Number.MIN_SAFE_INTEGER);
    let maxSafeInteger = Number.MAX_SAFE_INTEGER,
        minSafeInteger = Number.MIN_SAFE_INTEGER,
        number = 199,
        string = "yinwk",
        obj = {t: "T a moment"},
        anoSixteen = 0x20bb7;
    console.log(Number.isInteger(maxSafeInteger), Number.isInteger(minSafeInteger), Number.isInteger(number), Number.isInteger(string), Number.isInteger(obj), Number.isInteger(anoSixteen), Number.isInteger(maxSafeInteger + 1));
    console.log(Number.isSafeInteger(maxSafeInteger), Number.isSafeInteger(minSafeInteger), Number.isSafeInteger(number), Number.isSafeInteger(string), Number.isSafeInteger(obj), Number.isSafeInteger(anoSixteen), Number.isSafeInteger(maxSafeInteger + 1));
}

{
    //Math.ceil 向上取整
    //Math.floor 向下取整
    //Math.trunc 去尾取整
    let myCeil = 2.1;
    let myFloor = 2.9;
    let myTrunc = 3.8;
    let yourTrunc = 3.1;
    console.log(Math.ceil(myCeil));     //3
    console.log(Math.floor(myFloor));   //2
    console.log(Math.trunc(myTrunc));   //3
    console.log(Math.trunc(yourTrunc)); //3
}

{
    //Math.sqrt 平方根
    //Math.cbrt 立方根
    let sqrtNumber = 16;
    let cbrtNumber = 27;
    console.log(Math.sqrt(sqrtNumber));  //4
    console.log(Math.cbrt(cbrtNumber));  //3
}
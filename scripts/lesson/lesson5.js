//数值扩展
{
    //二进制
    let number_two = 0b11011,
        //八进制
        number_eight = 0o72,
        //十六进制
        number_sixteenth = 0x20bb7;
    console.log(number_two, number_eight, number_sixteenth);
}

{
    let finite = Infinity,
        notFinite = 1999;
    console.log(Number.isFinite(finite), Number.isFinite(notFinite));   //false,true
    let nan = NaN,
        notNaN = 777;
    console.log(Number.isNaN(nan), Number.isNaN(notNaN));               //true,false
    let string = "776",
        number = 998;
    let safeInteger = 7771,
        notSafeInteger = 9007199254740992;
    console.log(Number.isInteger(safeInteger), Number.isInteger(notSafeInteger));
    console.log(Number.isSafeInteger(safeInteger), Number.isSafeInteger(notSafeInteger), Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
}

{
    //ceil,floor,trunc
    let ceil_number = 3.1,
        floor_number = 3.9,
        trunc_number = 3.64,
        trunc_number_ano = 3.43;
    console.log(Math.ceil(ceil_number), Math.floor(floor_number), Math.trunc(trunc_number), Math.trunc(trunc_number_ano));
}

{
    let sqrt_number = 16,
        cbrt_number = 125;
    console.log(Math.sqrt(sqrt_number), Math.cbrt(cbrt_number));
}
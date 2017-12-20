//数值扩展
{
    let b_number = 0b11011;
    let o_number = 0o75;
    let x_number = 0x20bb7;
    console.log("二进制: " + b_number, "八进制: " + o_number, "十六进制: " + x_number);
}

{
    let infinity_number = Infinity,
        finite_number = 188,
        nan_number = NaN,
        number = 27,
        string = "12";
    console.log(Number.isFinite(infinity_number), Number.isFinite(finite_number));
    console.log(Number.isNaN(nan_number), Number.isNaN(number));
    console.log(Number.isInteger(number), Number.isInteger(string));
    console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
    console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1), Number.isSafeInteger(Number.MIN_SAFE_INTEGER + 1));
}

{
    let ceil_number = 2.3,
        floor_number = 2.8,
        trunc_number = 2.7;
    console.log(Math.ceil(ceil_number));
    console.log(Math.floor(ceil_number));
    console.log(Math.trunc(trunc_number));
}

{
    let sqrt_number = 25,
        cbrt_number = 27;
    console.log(Math.sqrt(sqrt_number));
    console.log(Math.cbrt(cbrt_number));
}
{
    //字符串扩展
    let string = `\u{20bb7}`;
    console.log(string.length);
    let string_ano = `I love zhaoyue, \u{20bb7}么么`;
    console.log(string_ano.length);
    for (let i = 0; i < string_ano.length; i++) {
        console.log(string_ano[i]);
    }
    for (let stringI of string_ano) {
        console.log(stringI);
    }
    console.log(string_ano.charAt(16), string_ano.charAt(17));
    console.log(string_ano.charCodeAt(16), string_ano.charCodeAt(17));
    console.log(string_ano.codePointAt(16), string_ano.codePointAt(17));
    console.log(string_ano.codePointAt(16).toString(16), string_ano.codePointAt(17).toString(16));
}

{
    console.log(String.fromCharCode(0x20bb7));
    console.log(String.fromCodePoint(0x20bb7));
}

{
    //includes
    //startsWith
    //endsWith
    let string_includes = "includes";
    let string_startsWith = "startsWith";
    let string_endsWith = "endsWith";
    console.log(string_includes.includes("a"), string_includes.includes("d"));
    console.log(string_startsWith.startsWith("s"));
    console.log(string_endsWith.endsWith("h"));
}

{
    //repeat
    let string_repeat = "yinwk";
    console.log(string_repeat.repeat(3));
}

{
    //padStart
    //padEnd
    let pad_start = "good";
    let pad_end = "bad";
    console.log(pad_start.padStart(10, "yinwk"));
    console.log(pad_end.padEnd(11, "lucky"));
}

{
    //raw
    let raw_string = "Hi\nclay";
    console.log(raw_string);
    console.log(String.raw`Hi\nclay`);
}
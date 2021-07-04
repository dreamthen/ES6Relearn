//字符串扩展
{
    let string_expand = "\u{20bb7}告";
    console.log(string_expand, string_expand.length);
    for (let i = 0; i < string_expand.length; i++) {
        console.log(string_expand[i]);
        console.log(string_expand.charAt(i), string_expand.charCodeAt(i));
        console.log(string_expand.at(i), string_expand.codePointAt(i));
    }
    console.log(string_expand.at(0), string_expand.codePointAt(0), string_expand.codePointAt(1));
}

{
    let string_number = 0x20bb7;
    console.log(String.fromCharCode(string_number), String.fromCodePoint(string_number));
}

{
    let nameMe = "Gary Yin";
    console.log(nameMe.includes("c"), nameMe.includes("Y"), nameMe.includes("I"), nameMe.includes("ary Yi"));
    console.log(nameMe.startsWith("Gary"), nameMe.startsWith("ary"), nameMe.endsWith("in"), nameMe.endsWith("Yi"));
    console.log(nameMe.repeat(1), nameMe.repeat(3));
}

{
    let padStart_string = "yinwenkai",
        padEnd_string = "Gary";
    console.log(padStart_string.padStart(13, "good"), padStart_string.padStart(16, "good"), padStart_string.padStart(9, "bad"));
    console.log(padEnd_string.padEnd(10, "is good"), padEnd_string.padEnd(15, "is good"), padEnd_string.padEnd(4, "is bad"));
}

{
    let raw_string = "hello,everybody~\nnice to meet you~";
    console.log(raw_string, String.raw`hello,everybody~\nnice to meet you~`);
}
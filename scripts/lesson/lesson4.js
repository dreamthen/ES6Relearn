//字符串
{
    let u_string = `\u{20bb7}`;
    console.log(u_string);
    console.log(u_string.length);
    let sayHello = `hello yinwenkai, I'm \u{20bb7}, Nice to meet you~`;
    console.log(sayHello, sayHello.length);
    console.log(sayHello.charAt(21), sayHello.charAt(22));
    console.log(sayHello.charCodeAt(21), sayHello.charCodeAt(22));
    console.log(sayHello.codePointAt(21), sayHello.codePointAt(22));
    console.log(sayHello.codePointAt(21).toString(16), sayHello.codePointAt(22).toString(16));
}

{
    console.log(String.fromCharCode(65), String.fromCharCode(0x20bb7));
    console.log(String.fromCodePoint(65), String.fromCodePoint(0x20bb7));
}

{
    let string_includes = `includes c and il`;
    console.log(string_includes.includes('y'), string_includes.includes('and'));
    let string_startsEndsWith = `yinwenkai and zhaoyue`;
    console.log(string_startsEndsWith.startsWith('wen'), string_startsEndsWith.startsWith('yin'));
    console.log(string_startsEndsWith.endsWith('zhao'), string_startsEndsWith.endsWith('yue'));
    let string_repeat = `repeatOne`;
    console.log(string_repeat.repeat(3));
}

{
    let string_padStart = `yinwenkai`;
    console.log(string_padStart.padStart(16, 'I\'m'));
    let string_padEnd = `24`;
    console.log(string_padEnd.padEnd(20, 'year\'s old'));
}

{
    let name = `yinwenkai`,
        age = 24,
        hobby = `computer games`;

    // let person_string = `hello ${name}, I'm ${age} year's old, my hobby is ${hobby}`;

    function person(s, v1, v2, v3) {
        return v1 + s[1] + s[0] + v2 + s[2] + v3;
    }

    console.log(person`hello I'm ${name}, ${age} year's old, my hobby is ${hobby}`);
}

{
    //换行符转义
    console.log(`I'm\nyinwenkai`);
    console.log(String.raw`I'm\nyinwenkai`);
}
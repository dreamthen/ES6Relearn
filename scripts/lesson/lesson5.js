{
    let name = 'yinwk',
        age = 24,
        hobby = "program";

    function person(v, s1, s2, s3) {
        return s1 + v[1] + v[0] + s2 + v[2] + s3;
    }

    let yinwk = person`I'm ${name}, ${age} years old, I like ${hobby}`;
    console.log(yinwk);
}

{
    let string_u = `\u{20bb7}`;
    console.log(string_u);
    let string_lol = "I love \u{20bb7}LOL";
    console.log(string_lol.length);
    for (let lol = 0; lol < string_lol.length; lol++) {
        console.log(string_lol[lol]);
    }
    for (let lolItem of string_lol) {
        console.log(lolItem);
    }
    console.log(string_lol.charAt(7), string_lol.charAt(8));
    console.log(string_lol.charCodeAt(7), string_lol.charCodeAt(8));
    console.log(string_lol.codePointAt(7), string_lol.codePointAt(8));
    console.log(string_lol.codePointAt(7).toString(16), string_lol.codePointAt(8).toString(16));
}

{
    let number_u = 0x20bb7;
    console.log(String.fromCharCode(number_u));
    console.log(String.fromCodePoint(number_u));
}
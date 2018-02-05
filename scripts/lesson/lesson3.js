//正则表达式
// {
//     let regExp = new RegExp("world", "g");
//     let regExpString = "World";
//     console.log(regExp.test(regExpString));
//     let regExpNew = /world/g;
//     console.log(regExpNew.test(regExpString));
//     let regExpOld = new RegExp("world", "ig");
//     console.log(regExpOld.test(regExpString));
//     let regExpNewVersion = new RegExp(/world/g, "ig");
//     console.log(regExpNewVersion.test(regExpString));
//     console.log(regExp.flags, regExpNew.flags, regExpOld.flags, regExpNewVersion.flags);
// }
//
// {
//     let regExp_g = /b+/g;
//     let regExp_y = /b+/y;
//     // let regExp_string = "worldbbbbworldbbbworldbbworldbworld";
//     let regExp_string = "bbbbworldbbbworldbbworldbworld";
//     console.log(regExp_g.exec(regExp_string));
//     console.log(regExp_g.exec(regExp_string));
//     console.log(regExp_g.exec(regExp_string));
//     console.log(regExp_g.exec(regExp_string));
//     // console.log(regExp_y.exec(regExp_string));
//     console.log(regExp_y.exec(regExp_string));
//     console.log(regExp_y.exec(regExp_string));
//     console.log(regExp_g.sticky);
//     console.log(regExp_y.sticky);
// }
//
// {
//     console.log(/\u38df/.test(`\u2df5\u38df`));
//     console.log(/\u38df/u.test(`\u2df5\u38df`));
//     let a = "a";
//     console.log(/\u{61}/.test(a));
//     console.log(/\u{61}/u.test(a));
//     let u_string = `\u{20bb7}`;
//     console.log(u_string);
//     console.log(/\u{20bb7}/.test(u_string));
//     console.log(/\u{20bb7}/u.test(u_string));
//     let base_string = `𠮷𠮷`;
//     console.log(/𠮷{2}/.test(base_string));
//     console.log(/𠮷{2}/u.test(base_string));
// }
// RegExp正则表达式
{
    let regExp = new RegExp("world", "g");
    let regExpNew = new RegExp(/world/gi);
    let regNew = /world/g;
    let regExpNow = new RegExp(/world/i, "gi");
    let regString = "hello World";
    console.log(regExp.test(regString));
    console.log(regExpNew.test(regString));
    console.log(regNew.test(regString));
    console.log(regExpNow.test(regString));
    console.log(regExp.flags, regExpNew.flags, regNew.flags, regExpNow.flags);
}

{
    let regExp = /^\uD383/,
        regExpNew = /^\uD383/u;
    console.log(regExp.test("\uD383\u20BB"), regExpNew.test("\uD383\u20BB"));
    let string = "𠮷";
    console.log(/^.$/.test(string), /^.$/u.test(string));
    console.log(/\u{61}/.test('a'), /\u{61}/u.test('a'), /\u{20bb7}/.test(string), /\u{20bb7}/u.test(string));
    console.log(/𠮷{2}/.test(`${string}${string}`), /𠮷{2}/u.test(`${string}${string}`));
    let stringAno = "𠮷𠮷";

    function unicodeFormatLength(string) {
        let regExp = new RegExp(/./g, "gu");
        let length = string.match(regExp).length;
        return length > 0 ? length : 0;
    }

    console.log(stringAno.length);
    console.log(unicodeFormatLength(stringAno));
}

{
    //g flag修饰符对于正则表达式匹配位置没有要求
    //y flag修饰符对于正则表达式匹配位置必须从上一个匹配完的位置开始
    let regExp_g = /b+_/g;
    let regExp_y = /b+_/y;
    let string = "bbbb_bbb_bb_b_";
    console.log(regExp_g.exec(string));
    console.log(regExp_g.exec(string));
    console.log(regExp_g.exec(string));
    console.log(regExp_g.exec(string));
    console.log(regExp_g.exec(string));
    console.log(regExp_y.exec(string));
    console.log(regExp_y.exec(string));
    console.log(regExp_y.exec(string));
    console.log(regExp_y.exec(string));
    console.log(regExp_y.exec(string));
    console.log(regExp_g.sticky);
    console.log(regExp_y.sticky);
}

{

}
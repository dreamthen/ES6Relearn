//正则表达式
{
    let regExp = new RegExp("world", "g");
    let regExpString = "World";
    console.log(regExp.test(regExpString));
    let regExpNew = /world/g;
    console.log(regExpNew.test(regExpString));
    let regExpOld = new RegExp("world", "ig");
    console.log(regExpOld.test(regExpString));
    let regExpNewVersion = new RegExp(/world/g, "ig");
    console.log(regExpNewVersion.test(regExpString));
}

{
    let regExp_g = /b+/g;
    let regExp_y = /b+/y;
    // let regExp_string = "worldbbbbworldbbbworldbbworldbworld";
    let regExp_string = "bbbbworldbbbworldbbworldbworld";
    console.log(regExp_g.exec(regExp_string));
    console.log(regExp_g.exec(regExp_string));
    console.log(regExp_g.exec(regExp_string));
    console.log(regExp_g.exec(regExp_string));
    // console.log(regExp_y.exec(regExp_string));
    console.log(regExp_y.exec(regExp_string));
    console.log(regExp_y.exec(regExp_string));
}

{
    console.log(/\u38df/.test(`\u2df5\u38df`));
    console.log(/\u38df/u.test(`\u2df5\u38df`));
    let a = "a";
    console.log(/\u{61}/.test(a));
    console.log(/\u{61}/u.test(a));
    let u_string = `\u{20bb7}`;
    console.log(u_string);
    console.log(/\u{20bb7}/.test(u_string));
    console.log(/\u{20bb7}/u.test(u_string));
    let base_string = `𠮷𠮷`;
    console.log(/𠮷{2}/.test(base_string));
    console.log(/𠮷{2}/u.test(base_string));
}
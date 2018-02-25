//正则扩展
{
    let regExp_old = new RegExp("^world$", "g"),
        regExp_old_simple = /^world$/g,
        regExp_new = new RegExp(/^world$/g),
        regExp_new_simple = /^world$/ig,
        regExp_new_easy = new RegExp(/^world$/g, "ig");
    let string = "World";
    console.log(regExp_old.test(string), regExp_old_simple.test(string), regExp_new.test(string), regExp_new_simple.test(string), regExp_new_easy.test(string));
    console.log(regExp_old.flags, regExp_old_simple.flags, regExp_new.flags, regExp_new_easy.flags, regExp_new_simple.flags);
}
//y扩展符
{
    let regExp_g = /b+/g,
        regExp_y = /b+_*/y,
        stringExp = "bbbb_bbb_bb_b";
    // console.log(regExp_g.exec(stringExp));
    // console.log(regExp_g.exec(stringExp));
    // console.log(regExp_g.exec(stringExp));
    // console.log(regExp_g.exec(stringExp));
    // console.log(regExp_g.exec(stringExp));
    console.log(regExp_y.exec(stringExp));
    console.log(regExp_y.exec(stringExp));
    console.log(regExp_y.exec(stringExp));
    console.log(regExp_y.exec(stringExp));
    console.log(regExp_y.exec(stringExp));
    console.log(regExp_g.sticky, regExp_y.sticky, regExp_g.flags, regExp_y.flags);
}

//u扩展符
{
    let string_u = "\u{20bb7}";
    console.log(string_u);
    console.log(/\u20bb/.test("\u20cc\u20bb"));
    console.log(/\u20bb/u.test("\u20bb\u20cc"));
    let string_a = "a";
    console.log(/\u{61}/.test(string_a));
    console.log(/\u{61}/u.test(string_a));
    console.log(/\u{20bb7}/.test(string_u), /\u{20bb7}/u.test(string_u));
    let string_u_cn = "𠮷";
    console.log(/𠮷{2}/.test("𠮷𠮷"), /𠮷{2}/u.test("𠮷𠮷"));
    console.log(/\u{20bb7}/.test("𠮷"), /\u{20bb7}/u.test("𠮷"));
}
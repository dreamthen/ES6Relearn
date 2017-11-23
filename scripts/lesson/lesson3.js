{
    let word = "Word";
    let reg_old = new RegExp("word", "g");
    let reg_old_ano = /word/g;
    let reg_new = new RegExp("word", "gi");
    let reg_new_es6 = new RegExp(/word/g, "gi");
    console.log(reg_old.test(word));
    console.log(reg_old_ano.test(word));
    console.log(reg_new.test(word));
    console.log(reg_new_es6.test(word));
    //获取筛选参数
    console.log(reg_old.flags, reg_new.flags, reg_new_es6.flags);
}

{
    //y筛选参数
    //只从字符串的第一个字符开始匹配,并且只匹配第一组
    let reg_g = /[b]+/g;
    let reg_y = /[b]+/y;
    let y_string = "bbbbniubbbniubbniub";
    console.log(reg_g.exec(y_string));
    console.log(reg_g.exec(y_string));
    console.log(reg_g.exec(y_string));
    console.log(reg_g.exec(y_string));
    // console.log(reg_y.exec(y_string));
    console.log(reg_y.exec(y_string));
    console.log(reg_y.exec(y_string));
    console.log(reg_g.sticky);
    console.log(reg_y.sticky);
}

{
    //u筛选参数
    let u_string = `\u{20bb7}`;
    console.log(u_string);
    console.log(/\u20bb/.test(`\u20bb\u3d8f`));
    console.log(/\u20bb/u.test(`\u20bb\u3d8f`));
    let a = 'a';
    console.log(/\u{61}/.test(a));
    console.log(/\u{61}/u.test(a));
    console.log(/\u{20bb7}/.test(u_string));
    console.log(/\u{20bb7}/u.test(u_string));
    let u_string_china = "𠮷𠮷";
    console.log(/𠮷{2}/.test(u_string_china));
    console.log(/𠮷{2}/u.test(u_string_china));
}
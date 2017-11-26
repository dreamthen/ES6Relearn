{
    //正则扩展
    let reg_old = new RegExp("world", "g");
    let reg_old_transform = /world/g;
    let reg_new = new RegExp("world", "gi");
    let reg_new_transform = new RegExp(/world/g, "gi");
    let reg_string = "World";
    console.log(reg_old.test(reg_string), reg_old_transform.test(reg_string), reg_new.test(reg_string), reg_new_transform.test(reg_string));
    console.log(reg_old.flags, reg_old_transform.flags, reg_new.flags, reg_new_transform.flags);
}

{
    //y筛选参数
    // let string_y = "niubbbbniubbbniubbniub";
    let string_y = "bbbbniubbbniubbniub";
    let reg_g = /[b]+/g;
    let reg_y = /[b]+/y;
    console.log(reg_g.exec(string_y));   //bbbb
    console.log(reg_g.exec(string_y));   //bbb
    console.log(reg_g.exec(string_y));   //bb
    console.log(reg_g.exec(string_y));   //b
    // console.log(reg_y.exec(string_y));   //null
    console.log(reg_y.exec(string_y));   //bbbb
}

{
    //u筛选参数
    console.log(/\u20bb/.test("\u20bb\u3d8f"));
    console.log(/\u20bb/u.test("\u20bb\u3d8f"));
    let a_string = "a";
    console.log(/\u{61}/.test(a_string));
    console.log(/\u{61}/u.test(a_string));
    let string_u = `\u{20bb7}`;
    console.log(/\u{20bb7}/.test(string_u));
    console.log(/\u{20bb7}/u.test(string_u));
    console.log(string_u);
    let string_u_transform = "𠮷𠮷";
    console.log(/𠮷{2}/.test(string_u_transform));
    console.log(/𠮷{2}/u.test(string_u_transform));
}
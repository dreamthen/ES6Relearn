{
    //Proxy代理
    let obj = {
        name: "Gary",
        time: "2017-06-30",
        _r: 370883199306300013
    };
    let obj_transform = new Proxy(obj, {
        get(target, key) {
            if (key === "time") {
                return target[key].replace('2017', '1993');
            } else {
                return target[key];
            }
        },
        set(target, key, value) {
            if (key !== "name") {
                target[key] = value;
            }
        },
        has(target, key) {
            if (key === "name") {
                return false;
            } else {
                return target[key];
            }
        }
    });
    console.log(Reflect.get(obj_transform, 'time'));
    console.log(Reflect.get(obj_transform, '_r'));
    console.log(Reflect.get(obj_transform, 'name'));
    Reflect.set(obj_transform, 'name', 'Simon');
    Reflect.set(obj_transform, 'time', '2017-12-25');
    console.log(Reflect.get(obj_transform, 'name'));
    console.log(Reflect.get(obj_transform, 'time'));
    console.log(Reflect.has(obj_transform, 'name'));
    console.log(Reflect.has(obj_transform, '_r'));
    console.log(Reflect.has(obj_transform, 'time'));
}

{
    //Proxy和Reflect相结合进行检验类的属性类型
    function proxyProperty(target, inspect) {

    }
}
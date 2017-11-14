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
        },
        ownKeys(target) {

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
    function proxyWithReflect(person, inspect) {
        return new Proxy(person, {
            set(target, key, value, proxy) {
                if (target.hasOwnProperty(key)) {
                    let inspectFunc = inspect[key];
                    let val = inspectFunc.call(target, value);
                    if (!!val) {
                        return Reflect.set(target, key, value, proxy);
                    } else {
                        throw new Error(`${key}类型错误`);
                    }
                } else {
                    throw new Error(`${key}不存在`);
                }
            }
        });
    }

    let inspectObj = {
        name(value) {
            return typeof value === "string";
        },
        age(value) {
            return typeof value === "number" && value > 18;
        }
    };

    class Person {
        constructor(name = 'yinwenkai', age = 24) {
            this.name = name;
            this.age = age;
            return proxyWithReflect(this, inspectObj);
        }
    }

    let yinwk = new Person();
    console.log(yinwk.name, yinwk.age);
    // yinwk.name = 18;
    // yinwk.age = 15;
    // yinwk.age = "yinwk";
    yinwk.age = 23;
    console.log(yinwk.name, yinwk.age);
}
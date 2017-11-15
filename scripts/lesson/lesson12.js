{
    //Proxy代理
    let obj = {
        name: "Gary",
        time: "2017-06-30",
        _r: 370883199306300013
    };
    let ProxyObj = new Proxy(obj, {
        get(target, key) {
            if (key === "time") {
                return target[key].replace('2017', '1993');
            } else {
                return target[key];
            }
        },
        set(target, key, value) {
            if (key !== "name") {
                return value;
            } else {
                return target[key];
            }
        },
        has(target, key) {
            if (key === "name") {
                return false;
            } else {
                return target[key];
            }
        },
        deleteProperty(target, key) {
            if (key === "time") {
                return true;
            }
            return target[key];
        },
        ownKeys(target) {
            return Object.keys(target).filter((filterItem, filterIndex) => {
                return filterItem.indexOf("_") === -1;
            });
        }
    });
    console.log(ProxyObj.name, ProxyObj.time, ProxyObj._r);
    ProxyObj.name = 'Simon';
    ProxyObj.time = '2017-12-25';
    console.log(ProxyObj.name, ProxyObj.time);
    // console.log(Reflect.get(obj_transform, 'time'));
    // console.log(Reflect.get(obj_transform, '_r'));
    // console.log(Reflect.get(obj_transform, 'name'));
    // Reflect.set(obj_transform, 'name', 'Simon');
    // Reflect.set(obj_transform, 'time', '2017-12-25');
    // console.log(Reflect.get(obj_transform, 'name'));
    // console.log(Reflect.get(obj_transform, 'time'));
    // console.log(Reflect.has(obj_transform, 'name'));
    // console.log(Reflect.has(obj_transform, '_r'));
    // console.log(Reflect.has(obj_transform, 'time'));
    // Reflect.ownKeys(obj_transform).forEach((ownKeysItem, ownKeysIndex) => {
    //     console.log(ownKeysItem);
    // });
}

{
    //Proxy和Reflect相结合进行检验类的属性类型
    function proxyWithReflect(person, inspect) {
        return new Proxy(person, {
            set(target, key, value, proxy) {
                if (target.hasOwnProperty(key)) {
                    let inspectObj = inspect[key];
                    let val = inspectObj.call(target, value);
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

    const inspectResource = {
        name(value) {
            return typeof value === "string";
        },
        age(value) {
            return typeof value === "number" && value > 18;
        }
    };

    class Person {
        constructor(name = 'yinwk', age = 22) {
            this.name = name;
            this.age = age;
            return proxyWithReflect(this, inspectResource);
        }
    }

    let yinwk = new Person();
    console.log(yinwk.name, yinwk.age);
    // yinwk.name = 18;
    // yinwk.age = 16;
    // yinwk.age = "zhaoyue";
    yinwk.age = 20;
    console.log(yinwk.name, yinwk.age);
}
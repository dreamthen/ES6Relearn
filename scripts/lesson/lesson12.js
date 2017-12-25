//Proxy and Reflect
{
    let person = {
        ID: "370683199307050013",
        name: "yinwenkai",
        age: 24,
        _r: "13963827938"
    };

    let personProxy = new Proxy(person, {
        get(target, key) {
            if (key === "ID") {
                return target[key].replace("1993", "1994");
            }
            return target[key];
        },
        set(target, key, value) {
            if (key === "name") {
                return target[key];
            }
            target[key] = value;
            return target[key];
        },
        has(target, key) {
            if (key === "age") {
                return false;
            }
            return target[key];
        },
        deleteProperty(target, key) {
            if (key === "name") {
                delete target[key];
                return true;
            }
            return target[key];
        },
        ownKeys(target) {
            return Object.keys(target).filter((item, index) => item.indexOf("_") !== -1);
        }
    });

    console.log(personProxy.ID, personProxy.name, personProxy.age, personProxy._r);
    personProxy.name = "zhaoyue";
    personProxy.age = 23;
    console.log(personProxy.ID, personProxy.name, personProxy.age, personProxy._r);
    console.log("age" in personProxy, "ID" in personProxy, "name" in personProxy, "_r" in personProxy);
    // delete personProxy["ID"];
    // delete personProxy["name"];
    // delete personProxy["age"];
    // delete personProxy["_r"];
    // console.log(personProxy.ID, personProxy.name, personProxy.age, personProxy._r);
    Reflect.ownKeys(personProxy).forEach((item, index) => {
        console.log(item);
    });
}

{
    function personProxy(person, inspect) {
        return new Proxy(person, {
            set(target, key, value, proxy) {
                if (target.hasOwnProperty(key)) {
                    let val = inspect[key].call(target, value);
                    if (!!val) {
                        return Reflect.set(target, key, value, proxy);
                    } else {
                        throw new Error(`${key}不合法,不能为${JSON.stringify(value)}`);
                    }
                } else {
                    throw new Error(`${target}不存在${key}`);
                }
            }
        });
    }

    let personInspect = {
        name(value) {
            return typeof value === "string";
        },
        age(value) {
            return typeof value === "number" && value >= 18;
        }
    };

    class Human {
        constructor(name = "yinwk", age = 24) {
            this.name = name;
            this.age = age;
            return personProxy(this, personInspect);
        }
    }

    // let hm = new Human();
    let hm = new Human("yinwk", 23);
    // hm.name = {name: "yinwk"};
    // hm.name = 24;
    hm.name = "zhaoyue";
    // hm.age = 14;
    // hm.age = [14, true, {bind: "bind this"}];
    hm.age = 22;
    console.log(hm.name, hm.age);
}
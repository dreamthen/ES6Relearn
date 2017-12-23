//对象
{
    let name = "yinwk",
        age = 24,
        hobby = "program";
    let obj = {
        name,
        age,
        hobby,
        sayHello() {
            console.log(`hello,${this.name}`);
        }
    };
    console.log(obj);
    obj.sayHello();
}

{
    let newObj = {number: 7},
        newNumber = 77;
    console.log(Object.is(newObj, {number: 7}), newObj === {number: 7});
    console.log(Object.is(newNumber, 77), newNumber === 77);
}

{
    let person = {
        name: "yinwk",
        age: 26
    };
    let judgePerson = {
        age: 24,
        hobby: "program"
    };
    // let assignObj = Object.assign(person, judgePerson);
    let assignObj = Object.assign({}, person, judgePerson);
    console.log(assignObj);
}

{
    let yinwenkai = {
        username: "Mix时代",
        age: 24,
        ID: "370683199306300013",
        [Symbol.iterator]() {
            let self = this,
                arr_key = Object.keys(self),
                length = arr_key.length,
                index = 0;
            return {
                next() {
                    if (index < length) {
                        return {
                            value: self[arr_key[index++]],
                            done: false
                        }
                    } else {
                        return {
                            value: self[arr_key[index++]],
                            done: true
                        }
                    }
                }
            }
        }
    };

    for (let key of Object.keys(yinwenkai)) {
        console.log(key);
    }

    for (let value of Object.values(yinwenkai)) {
        console.log(value);
    }

    for (let [key, value] of Object.entries(yinwenkai)) {
        console.log(key, value);
    }


    for (let value of yinwenkai) {
        console.log(value);
    }
}
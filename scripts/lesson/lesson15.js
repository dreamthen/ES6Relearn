{
    //iterator demo
    let arr = ["hello", "world"];
    let arrObj = arr[Symbol.iterator]();
    console.log(arrObj.next());
    console.log(arrObj.next());
    console.log(arrObj.next());
}

{
    let obj = {};
    obj[Symbol.iterator] = function* () {
        yield 1;
        yield 2;
        yield 3;
    };
    for (let value of obj) {
        console.log(value);
    }
}

{
    //重写对象[Symbol.iterator]
    let obj = {
        name: ['yinwk', 'love', 'zhaoyue'],
        age: [25, 24],
        [Symbol.iterator]() {
            let self = this;
            let personArray = self.name.concat(self.age);
            let index = 0;
            let len = personArray.length;
            return {
                next() {
                    if (index < len) {
                        return {
                            value: personArray[index++],
                            done: false
                        }
                    } else {
                        return {
                            value: personArray[index++],
                            done: true
                        }
                    }
                }
            }
        }
    };

    for (let value of obj) {
        console.log(value);
    }
}
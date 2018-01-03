//iterator
{
    let arr = [true, "world", 86, {name: "yinwenkai", age: 24}],
        arrIterator = arr[Symbol.iterator]();
    // console.log(arrIterator.next());
    // console.log(arrIterator.next().value);
    console.log(arrIterator.next().done);
    // console.log(arrIterator.next());
    // console.log(arrIterator.next().value);
    console.log(arrIterator.next().done);
    // console.log(arrIterator.next());
    // console.log(arrIterator.next().value);
    console.log(arrIterator.next().done);
    // console.log(arrIterator.next());
    // console.log(arrIterator.next().value);
    console.log(arrIterator.next().done);
    // console.log(arrIterator.next());
    // console.log(arrIterator.next().value);
    console.log(arrIterator.next().done);
    for (let arrItem of arr) {
        console.log("for let of......", arrItem);
    }
}

{
    let object = {
        name: "Gary",
        age: 25,
        sex: "boy",
        lover: false,
        hobby: {
            sports: ["basketball", "football", "tennis"],
            movies: "save Jones"
        },
        [Symbol.iterator]() {
            let self = this,
                obj_key_array = Object.keys(self),
                length = obj_key_array.length,
                index = 0;
            return {
                next() {
                    if (index < length) {
                        return {
                            value: self[obj_key_array[index++]],
                            done: false
                        }
                    } else {
                        return {
                            value: self[obj_key_array[index++]],
                            done: true
                        }
                    }
                }
            }
        }
    };

    for (let objItem of object) {
        console.log(objItem);
    }
}
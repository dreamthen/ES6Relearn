//对象扩展
{
    let car = "Benz",
        carName = "Benz",
        carNumber = "370683199306300018",
        carObject = {name: "法拉利", carNumber: "鲁F35J15"},
        carObjectAno = {name: "法拉利", carNumber: "鲁F35J150", carPerson: "Gary Yin", carTime: "10 years"};
    let objExpand = {
        car,
        carNumber,
        myCar() {
            return `car name:${this.car}, car number:${this.carNumber}`
        },
        [Symbol.iterator]() {
            let self = this,
                arr_object = Object.keys(self),
                length = arr_object.length,
                index = 0;
            return {
                next() {
                    if (index < length) {
                        return {
                            value: self[arr_object[index++]],
                            done: false
                        }
                    } else {
                        return {
                            value: self[arr_object[index++]],
                            done: true
                        }
                    }
                }
            }
        }
    };
    console.log(objExpand, objExpand["car"], objExpand["carNumber"], objExpand.myCar());
    console.log(Object.is(car, carNumber), car === carName, Object.is(car, carName), Object.is(carObject, carObject), Object.is(carObject, carObjectAno));
    // let carObj = Object.assign(carObject, carObjectAno);
    let carObj = Object.assign({}, carObject, carObjectAno);
    console.log(carObj);
    for (let objItem of objExpand) {
        console.log(objItem);
    }
    for (let key of Object.keys(carObj)) {
        console.log(key);
    }
    for (let value of Object.values(carObj)) {
        console.log(value);
    }
    for (let [key, value] of Object.entries(carObj)) {
        console.log(`${key}------${value}`);
    }

    let nameMe = "Gary",
        ageMe = 25,
        hobby = {sports: "basketball", job: "programmer"};

    function exchangeFunc(s, v1, v2, v3, v4) {
        return v1 + s[1] + s[0] + v2 + s[2] + v3 + s[3] + v4;
    }

    let exchangedIntroduce = exchangeFunc`hello, I'm ${nameMe}, ${ageMe} year's old, I like play ${hobby["sports"]}. My job is ${hobby["job"]}`;
    console.log(exchangedIntroduce);

    // for (let carObjItem of carObj) {
    //     console.log(carObjItem);
    // }
}
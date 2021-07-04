//函数扩展
{
    function expand(name = "Gary", age = 25) {
        console.log(name, age);
    }

    expand();
    expand("YinWenKai", 26);

    function exchange(firstName = "Gary", lastName = firstName) {
        console.log(firstName, lastName);
    }

    exchange("Wen Kai", "Yin");

    function exchangeArray([, age = 24, , hobby = {sports: ["basketball", "tennis", "table tennis"], job: "program"}]) {
        console.log(age, hobby);
    }

    exchangeArray(["Gary", 25, true, {sports: ["football", "basketball", "table tennis"], job: "programmer"}]);

    function exchangeObject({carName: car = "Benz", carNumber: number = 370683199306300016, carCountry}) {
        console.log(car, number, carCountry);
    }

    exchangeObject({carName: "法拉利", carNumber: 370683199403100018, carCountry: "The United States Of America"});

    function exchangeParam(...args) {
        for (let argItem of args) {
            console.log(argItem);
        }
    }

    exchangeParam(777, true, "good boy", {name: "Gary", age: 25});
    let [...arrayParam] = [777, true, "good boy", {name: "Gary", age: 25}];
    console.log(arrayParam, ...arrayParam);
    //箭头函数
    let max = num => num * 5;
    console.log(max(8));
    let add = (number, numberAno) => {
        number = number * 2;
        return number / numberAno;
    };
    console.log(add(40, 8));
}
// export let NAME = "yinwk";
// export function test() {
//     console.log("ECMAScript 2015 test");
// }
// export class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
let NAME = "yinwk";
function test() {
    console.log("ECMAScript 2015 test");
}
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

export default {
    NAME,
    test,
    Person
};
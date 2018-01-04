//Decorators 修饰器
{
    //只读
    let readOnly = function (target, name, descriptors) {
        descriptors.writable = false;
        return descriptors;
    };

    class Person {
        constructor(name = 'yinwk', age = 24) {
            this.name = name;
            this.age = age;
        }

        @readOnly
        tryIt() {
            console.log("I like readOnly~");
        }
    }

    let person = new Person();
    person.tryIt();
    // person.tryIt = function () {
    //     console.log("I like writable~");
    // };
    // person.tryIt();
}

{
    //静态属性
    let staticProperty = function (target, name, descriptors) {
        target.hiddenName = "zhaoyueHide";
        target.findName = "yinwenkaiFind";
    };

    @staticProperty
    class Person {
        constructor(name = 'yinwenkai', age = 25) {
            this.name = name;
            this.age = age;
        }
    }

    let person = new Person('zhaoyue', 24);
    console.log(person.name, person.age, Person.hiddenName, Person.findName);
}

{
    //日志系统
    function logSystem(log) {
        return function (target, name, descriptors) {
            let descriptorsValue = descriptors.value;
            descriptors.value = function (args) {
                console.info(log);
                descriptorsValue.apply(this, args);
            };
        }
    }

    class Person {
        constructor(name = 'yinwenkai', age = 24) {
            this.name = name;
            this.age = age;
        }

        @logSystem('see')
        see() {
            console.log(`${this.name} see`);
        }

        @logSystem('hear')
        hear() {
            console.log(`${this.name} hear she is ${this.age} year's old`);
        }
    }

    let person = new Person('zhaoyue', 16);
    person.see();
    person.hear();
}


{
    //类和对象
    class Person {
        constructor(name = 'Gary', age = 24) {
            this.name = name;
            this.age = age;
        }
    }

    // let yinwk = new Person();
    // console.log(yinwk.name, yinwk.age);
    let yinwk = new Person('yinwk', 25);
    console.log(yinwk.name, yinwk.age);
}

{
    //继承
    class Person {
        constructor(name = 'Gary', age = 25) {
            this.name = name;
            this.age = age;
        }
    }

    class Yinwk extends Person {
        constructor(name = 'yinwk', age = 24, hobby = 'play computer game') {
            super(name, age);
            this.hobby = hobby;
        }
    }

    let yinwk = new Yinwk('zhaoyue', 23, 'yoga');
    console.log(yinwk.name, yinwk.age, yinwk.hobby);
}

{
    //getter and setter
    class Person {
        constructor(name = 'Gary', age = 24) {
            this.name = name;
            this.age = age;
        }

        get changeName() {
            return `changeName:${this.name}`;
        }

        set changeName(value) {
            this.name = value;
        }
    }

    let yinwk = new Person("yinwk", 25);
    console.log(yinwk.name, yinwk.age, yinwk.changeName);
    yinwk.changeName = "clown laugh at you";
    console.log(yinwk.changeName);
}

{
    //静态属性
    class Person {
        constructor(name = 'Gary', age = 24) {
            this.name = name;
            this.age = age;
        }
    }

    Person.hobby = 'computer program';
    let yinwk = new Person('yinwk', 23);
    console.log(yinwk.name, yinwk.age, Person.hobby);
}

{
    //静态方法
    class Person {
        constructor(name = 'Gary', age = 24) {
            this.name = name;
            this.age = age;
        }

        tell() {
            return "tell me why";
        }
    }

    let yinwk = new Person("yinwk", 23);
    console.log(yinwk.name, yinwk.age, yinwk.tell());
}
//类和对象
{
    class Person {
        constructor(name = "yinwk", age = 24) {
            this.name = name;
            this.age = age;
        }
    }

    // let person = new Person();
    let person = new Person("Gary", 25);
    console.log(person["name"], person["age"]);
}

{
    class Person {
        constructor(name = "zhaoyue", age = 24) {
            this.name = name;
            this.age = age;
        }
    }

    class Gary extends Person {
        constructor(name, age, hobby = "play computer game") {
            super(name, age);
            this.hobby = hobby;
        }
    }

    let gary = new Gary("Gary", 25);
    console.log(gary["name"], gary["age"], gary["hobby"]);
}

{
    //静态方法
    class Person {
        constructor(name = "xiuhaiyan", age = 52) {
            this.name = name;
            this.age = age;
        }
    }

    class Gary extends Person {
        constructor(name, age, hobby = "advertisement") {
            super(name, age);
            this.hobby = hobby;
        }

        sayHello() {
            console.log("hello I'm", this.name, ",Nice to meet you~ I'm", this.age, "year's old.I love", this.hobby, "!");
        }
    }

    let gary = new Gary("yinqingdong", 51);
    console.log(gary["name"], gary["age"], gary["hobby"]);
    gary.sayHello();
}

{
    //静态属性
    class Person {
        constructor(name = "xiuhaiyan", age = 52) {
            this.name = name;
            this.age = age;
        }
    }

    class Gary extends Person {
        constructor(name, age, hobby = "advertisement") {
            super(name, age);
            this.hobby = hobby;
        }

        sayHello() {
            console.log("hello I'm", this.name, ",Nice to meet you~ I'm", this.age, "year's old.I love", this.hobby, "!");
        }
    }

    Gary.eyes = "I love blue eye~";
    Gary.ears = "I love small ears~";

    let gary = new Gary("yinqingdong", 51, "program");
    console.log(gary["name"], gary["age"], gary["hobby"], Gary.eyes, Gary.ears);
    gary.sayHello();
}
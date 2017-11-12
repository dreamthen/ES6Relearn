{
    //decorators修饰器
    //只读
    let readOnly = function (target, name, descriptors) {
        descriptors.writable = false;
        return descriptors;
    };

    class Tell {
        @readOnly
        tell() {
            return "tell me why~";
        }
    }

    let tellObj = new Tell();
    // tellObj.tell = function () {
    //     return "tell you why~";
    // };
    console.log(tellObj.tell());
}

{
    //静态属性
    let myName = function (target, name, descriptors) {
        target.username = "Gary";
        target.age = 24;
    };

    @myName
    class Person {
        constructor(name = 'zhaoy') {
            this.name = name;
        }
    }

    console.log(Person.username, Person.age);
}

{
    //日志系统
    let log = function (event) {
        return function (target, name, descriptors) {
            let source_code = descriptors.value;
            descriptors.value = (...args) => {
                source_code.apply(target, args);
                console.info(`log ${event}`);
            };
        }
    };

    class Log {
        @log('show')
        show() {
            console.log("event show");
        }

        @log('click')
        click() {
            console.info("event click");
        }
    }

    let logInfo = new Log();
    logInfo.show();
    logInfo.click();
}
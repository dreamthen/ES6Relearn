{
    //控制器 generators
    let generatorDemo = function* () {
        yield "a";
        yield "b";
        // yield "c";
        return "c";
    };
    let generators = generatorDemo();
    console.log(generators.next());
    console.log(generators.next());
    console.log(generators.next());
    console.log(generators.next());
}

{
    //与Iterators配合
    let obj = {};
    obj[Symbol.iterator] = function* () {
        yield 1;
        yield 2;
        yield 3;
    };
    for (let objItem of obj) {
        console.info(objItem);
    }
}

{
    //几个值的循环场景
    // let generatorBackground = function* () {
    //     while (1) {
    //         yield "A";
    //         yield "B";
    //         yield "C";
    //     }
    // };
    //
    // let generatorLoop = generatorBackground();
    // console.log(generatorLoop.next());
    // console.log(generatorLoop.next());
    // console.log(generatorLoop.next());
    // console.log(generatorLoop.next());
    // console.log(generatorLoop.next());
}

{
    //几个值的循环场景
    // let generatorBackground = async function () {
    //     while (1) {
    //         await "A";
    //         await "B";
    //         await "C";
    //     }
    // };
    //
    // let generatorLoop = generatorBackground();
    // console.log(generatorLoop.next());
    // console.log(generatorLoop.next());
    // console.log(generatorLoop.next());
    // console.log(generatorLoop.next());
    // console.log(generatorLoop.next());
}

{
    //抽奖
    let price = function (count) {
        console.log(`剩余次数:${count}次`);
    };

    let generatorPrice = function* (count) {
        while (count > 0) {
            count--;
            yield price(count);
        }
    };

    let generatorPricePractice = generatorPrice(5);
    let button = document.createElement("button");
    button.textContent = "抽奖";
    document.body.appendChild(button);
    button.addEventListener("click", function () {
        generatorPricePractice.next();
    }, false);
}

{
    //长轮询
    let ajax = function* () {
        yield new Promise(function (resolve, reject) {
            setTimeout(function timer() {
                resolve({code: 1});
            }, 200);
        });
    };

    let pull = function () {
        let ajaxPull = ajax();
        let step = ajaxPull.next();
        step.value.then(function resolve(code) {
            if (code['code'] !== 0) {
                setTimeout(function timer() {
                    console.info("wait");
                    pull();
                }, 1000);
            } else {
                console.log(code);
            }
        }, function reject() {

        });
    };
    pull();
}
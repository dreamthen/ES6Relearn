//Generator控制器
{
    let generatorFunc = function* () {
        yield 'A';
        yield 'B';
        yield 'C';
    };

    let generator = generatorFunc();
    console.log(generator.next());
    console.log(generator.next());
    console.log(generator.next());
    console.log(generator.next());
}

//Generator控制器async await
{
    function* starGenerator() {
        yield true;
        yield "world";
        yield 77;
        yield ["save Jone", "kongfu yoga"];
    }

    // let starGenerator = async function () {
    //     await true;
    //     await "world";
    //     await 77;
    //     await ["save Jone", "kongfu yoga"];
    // };
    let star = starGenerator();
    console.log(star.next());
    console.log(star.next());
    console.log(star.next());
    console.log(star.next());
    console.log(star.next());
}

//Generator循环控制器
{
    function* loopGenerator() {
        while (true) {
            yield 'A';
            yield 'B';
            yield 'C';
        }
    }

    let loop = loopGenerator();
    console.log(loop.next());
    console.log(loop.next());
    console.log(loop.next());
    console.log(loop.next());
    console.log(loop.next());
}

//抽奖
{
    function showNum(num) {
        console.log(num);
    }

    let priceLucky = function* (count = 5) {
        while (count > 0) {
            yield showNum(count);
            count--;
        }
    };

    let price = priceLucky(6),
        button = document.getElementById("priceCount");
    button.onclick = function (e) {
        price.next();
    };
}

//长轮询
{

}
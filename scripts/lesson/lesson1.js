//let/const
//块作用域
function loop(num) {
    // for (var i = 0; i < num; i++) {
    //     console.log(i);
    // }
    // console.log(i);
    for (let i = 0; i < num; i++) {
        console.log(i);
    }
    // console.log(i);
}

loop(5);

var word = "let me say a word";

function newLet() {
    {
        let word = "let you say a word";
        console.log(word);
        word = "let us say a word";
        console.log(word);
    }
    console.log(word);
}

newLet();

{
    const WORD = "my word is zhaoyue I love you~";
    // WORD = "your word is zhaoyue I love you~";
    console.log(WORD);
}

{
    //const只是一个指针指向内存的一个区域，并不是不可变
    const obj = {
        name: "yinwk",
        age: 24
    };

    obj.name = "zhaoyue";
    obj.age = 25;
    console.log(obj);
}


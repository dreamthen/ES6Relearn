//解构赋值
{
    // let arr = [99, true, "Gary", [8, 7, 2, 10, 3, 5, 1], {apple: "苹果", banana: "香蕉"}];
    // let [luckyNumber, judgement, name, arrayNumber, {apple: appleAno}] = arr;
    // console.log(luckyNumber, judgement, name, arrayNumber, appleAno);
    // let [luckyNumber = 6688, judgement = false, name = "YinWenKai", arrayNumber, {apple: appleCN, banana: bananaCN}] = [777, true, "Gary", [8, 7, 2, 10, 3, 5, 1], {
    //     apple: "苹果",
    //     banana: "香蕉"
    // }];
    // console.log(luckyNumber, judgement, name, arrayNumber, appleCN, bananaCN);
    // let object = {
    //     ID: 370683199306300013,
    //     name: undefined,
    //     sexy: undefined,
    //     married: undefined,
    //     hobby: {
    //         sports: ["basketball", "tennis", "table tennis"],
    //         job: ["front_end", "program"]
    //     }
    // };
    // let {
    //     ID: ID_Card,
    //     name: me = "YinWenKai",
    //     sexy: meSexy = "girl",
    //     married: married = true,
    //     hobby,
    //     hobby: {
    //         sports: sportsMe,
    //         job: jobMe
    //     },
    //     hobby: {
    //         sports: [sportsOne, sportsTwo, sportsThree],
    //         job: [mainJob, secondJob]
    //     }
    // } = object;
    // console.log(ID_Card, me, meSexy, married, hobby, sportsMe, jobMe, sportsOne, sportsTwo, sportsThree, mainJob, secondJob);
    // let x = 10,
    //     y = 77;
    // [y, x] = [x, y];
    // console.log(x, y);
    let [, judgement, , ...arr_garbage] = [99, true, "world", false, {sun: "sun shine"}];
    console.log(judgement, arr_garbage);
}
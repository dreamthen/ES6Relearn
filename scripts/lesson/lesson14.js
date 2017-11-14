{
    //ajax setTimeout处理异步
    let ajax = function (callback) {
        console.log("执行");
        setTimeout(function timer() {
            callback && callback();
        }, 1000);
    };
    ajax(function () {
        console.log("执行完毕一");
    });
}

{
    //ajax Promise处理异步
    let ajax = function () {
        return new Promise(function (resolve, reject) {
            console.log("执行二");
            setTimeout(function timer() {
                resolve();
            }, 2000);
        });
    };

    ajax().then(function resolve() {
        console.log("执行完毕二");
    }, function reject() {

    });
}

{
    //ajax Promise连接处理
    let ajax = function () {
        return new Promise(function (resolve, reject) {
            console.log("执行三");
            setTimeout(function timer() {
                resolve();
            }, 3000);
        });
    };

    ajax().then(function resolve() {
        return new Promise(function (resolve, reject) {
            console.log("执行四");
            setTimeout(function timer() {
                resolve();
            }, 4000);
        });
    }, function reject() {

    }).then(function resolve() {
        setTimeout(function timer() {
            console.log("执行三四完毕");
        }, 5000);
    }, function reject() {

    });
}

{
    //异常处理
    let ajax = function (num) {
        return new Promise(function (resolve, reject) {
            if (num > 5) {
                resolve();
            } else {
                // reject();
                throw new Error(`${num}只能大于5`);
            }
        });
    };

    ajax(4).then(function resolve() {
        console.log("数据正常");
    }).catch(function err(error) {
        console.log(error);
    });
    // , function reject() {
    //     console.log("数据只能大于5");
    // }
}

{
    //all与race,图片异步加载完毕显现
    function loadImage(src) {
        return new Promise(function (resolve, reject) {
            let img = document.createElement("img");
            img.src = src;
            img.onload = function () {
                resolve(img);
            };
            img.onerror = function () {
                reject(img);
            }
        });
    }

    function showImage(imgs) {
        // imgs.forEach((imgItem, imgIndex) => {
        //     document.body.appendChild(imgItem);
        // });
        let p = document.createElement("p");
        p.appendChild(imgs);
        document.body.appendChild(p);
    }

    // Promise.all([
    //     loadImage("http://116.62.65.162:9024/images/keryiBarter_description_bg.png"),
    //     loadImage("http://116.62.65.162:9024/images/keryiBarter_login_bg.png"),
    //     loadImage("http://116.62.65.162:9024/images/keryiBarter_register_bg.png")
    // ]).then(showImage);
    Promise.race([
        loadImage("http://116.62.65.162:9024/images/keryiBarter_description_bg.png"),
        loadImage("http://116.62.65.162:9024/images/keryiBarter_login_bg.png"),
        loadImage("http://116.62.65.162:9024/images/keryiBarter_register_bg.png")
    ]).then(showImage);
}
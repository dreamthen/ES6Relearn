//setTimeout同步
{
    function setTime() {
        console.log("setTimeout 0s");
        setTimeout(function timer() {
            console.log("setTimeout 1s");
            setTimeout(function timer() {
                console.log("setTimeout 2s");
            }, 2000);
        }, 1000);
    }

    setTime();
}
//Promise同步
{
    function setPromise() {
        return new Promise(function promise(resolve, reject) {
            console.log("setPromise 0s");
            setTimeout(function timer() {
                resolve();
            }, 1000);
        });
    }

    setPromise().then(function resolve() {
        return new Promise(function promise(resolve, reject) {
            console.log("setPromise 1s");
            setTimeout(function timer() {
                resolve();
            }, 2000);
        });
    }, function reject() {

    }).then(function resolve() {
        return new Promise(function promise(resolve, reject) {
            console.log("setPromise 2s");
            setTimeout(function timer() {
                resolve();
            }, 3000);
        });
    }, function reject() {

    }).then(function resolve() {
        console.log("setPromise 3s");
    }, function reject() {

    });
}

//Promise异常
{
    function errorPromise(number) {
        return new Promise(function promise(resolve, reject) {
            if (number > 5) {
                resolve();
            } else {
                // reject();
                throw new Error("错误!数字小于等于5");
            }
        });
    }

    // errorPromise(6).then(function resolve() {
    //     console.log("正常~数字均大于5");
    // }, function reject() {
    //     console.error("错误!数字小于等于5");
    // });

    errorPromise(5).then(function resolve() {
        console.log("正常~数字均大于5");
        // }, function reject() {
        //     // console.error("错误!数字小于等于5");
    }).catch(function errorHandler(error) {
        // console.log(error);
        console.error(error);
    });
}

//Promise all race
{
    function showImg(src) {
        // Promise.all
        // imgs.forEach(function img(imgItem, imgIndex) {
        //     var img = document.createElement("img");
        //     img.src = imgItem;
        //     img.onload = function () {
        //         document.body.appendChild(img);
        //     };
        //     img.onerror = function (error) {
        //         console.error(error);
        //     };
        // });
        var img = document.createElement("img");
        img.src = src;
        img.onload = function () {
            document.body.appendChild(img);
        };
        img.onerror = function (error) {
            console.error(error);
        };
    }

    function makeImg() {
        //     return Promise.all([
        //         "http://www.1jtec.com/images/keryiBarter_description_bg.png",
        //         "http://www.1jtec.com/images/keryiBarter_login_bg.png",
        //         "http://www.1jtec.com/images/keryiBarter_register_bg.png"
        //     ]).then(showImg.bind(this));
        return Promise.race([
            "http://www.1jtec.com/images/keryiBarter_description_bg.png",
            "http://www.1jtec.com/images/keryiBarter_login_bg.png",
            "http://www.1jtec.com/images/keryiBarter_register_bg.png"
        ]).then(showImg.bind(this));
    }

    makeImg();
}


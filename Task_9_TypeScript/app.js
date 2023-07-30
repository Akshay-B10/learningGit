"use strict";
const num1Ele = document.querySelector("#num1");
const num2Ele = document.querySelector("#num2");
const btnEle = document.querySelector("button");
const numArr = [];
const strgArr = [];
;
function addTwoNo(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    else if (typeof x === "string" && typeof y === "string") {
        return x + " " + y;
    }
    else {
        return +x + +y;
    }
}
;
function objFunc(res) {
    console.log(res.val, res.date);
}
;
btnEle.addEventListener("click", () => {
    const num1 = num1Ele.value;
    const num2 = num2Ele.value;
    const numRes = addTwoNo(+num1, +num2);
    numArr.push(numRes);
    const strgRes = addTwoNo(num1, num2);
    strgArr.push(strgRes);
    console.log(numArr, strgArr);
});
const promise = new Promise((res, rej) => {
    setTimeout(() => {
        res("It worked");
    }, 1000);
}).then(strg => {
    console.log(strg.split("w"));
});

const num1Ele = document.querySelector("#num1") as HTMLInputElement;
const num2Ele = document.querySelector("#num2") as HTMLInputElement;
const btnEle = document.querySelector("button")!;

const numArr: Array<number> = [];
const strgArr: string[] = [];

type numOrStrg = number | string;
type result = { val: number; date: Date };

interface resultObj {
    val: number;
    date: Date
};

function addTwoNo(x: numOrStrg, y: numOrStrg) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    } else if (typeof x === "string" && typeof y === "string") {
        return x + " " + y;
    } else {
        return +x + +y;
    }
};

function objFunc(res: result) {
    console.log(res.val, res.date);
};

btnEle.addEventListener("click", () => {
    const num1 = num1Ele.value;
    const num2 = num2Ele.value;
    const numRes = addTwoNo(+num1, +num2);
    numArr.push(numRes as number);
    const strgRes = addTwoNo(num1, num2);
    strgArr.push(strgRes as string);
    console.log(numArr, strgArr);
});

const promise = new Promise<string>((res, rej) => {
    setTimeout(() => {
        res("It worked");
    }, 1000);
}).then(strg => {
    console.log(strg.split("w"));
});
const obj = {
    key1: 10,
    key2: 20,
    key3: 30
};
let {key1, key3} = {...obj};
console.log(key1, key3); // 10 30

const arr = ["val1", "val2"];
const [v1, v2] = arr;
console.log(v1, v2); // val1 val2

key1 = 1;
key2 = 2;
console.log(obj.key1, obj.key3); // 10 30
const arr = ["apple", "oranges", " ", "mango", " ", "lemon"];
const newArr = arr.map((fruit) => {
    if (fruit == " ") {
        return "empty string";
    } else {
        return fruit;
    }
})
console.log(newArr);
// Output: ["apple", "oranges", "empty string", "mango", "empty string", "lemon"]
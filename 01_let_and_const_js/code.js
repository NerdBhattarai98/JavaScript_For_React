// // Let - Allows to create a variable whose value can be reassigned
// // const - Allows to create a variable whose value cannot be reassigned

// // var is not used in 

// let a = 1
// let b = 2

// let sum = a + b
// console.log(sum)

// var - used to declare variables but not used now alot
// var — the older declaration keyword, which you'll encounter in legacy code. Prefer const and `let in modern JavaScript.

// let name = "Anbit";
// let age = 21;

// age = 25;


// Error because of reassigning the const values
// console.log(name)
// console.log(age)

// const username = "Anbit";
// username = "Bhattarai"; 

// print(username)

// Using a let variable

// let score = 0;

// score = 10;
// score = 25;

// console.log(score);

const appName = "ShopLite";
const price = 500;

let quantity = 1;

quantity = 3;

const total = price * quantity;

console.log(appName);
console.log(total);

// Notice that total can be declared with const because it doesn't need to be reassigned, even though it was calculated using a variable.
// Rule: Start with const. Change it to let only if reassignment is necessary.
"use strict";
// app.ts
//Working with functions
let greeting = "Hello TypeScript!";
let year = 2025;
let isLearning = true;
console.log(greeting);
console.log("Current year is: ", year);
if (isLearning) {
    console.log("Keepr up the great work!");
}
else {
    console.log("Tiem to start learning!");
}
function add(a, b) {
    return a + b;
}
let sum = add(3, 7);
console.log("The sum is: ", sum);
let myTest;
myTest = "3";
let myNumber;
myNumber = 10;
let myBoolean = true;
myBoolean = false;
let myAny;
myAny = "123";
let myNull;
myNull = null;
let myUndefined;
myUndefined = undefined;
let inferredString = "Hello";
let inferredYear = 2025;
let inferredisLearning = true;
function logMessage(message) {
    console.log(message);
}
logMessage("This function doesn't return anything");
function greet(name, age) {
    if (age) {
        return `Hello ${name}! You are ${age} years old.`;
    }
    return `Hello ${name}!`;
}
console.log(greet("Steph")); //Works
console.log(greet("Steph", 25)); //Works
function calculatePrice(item, quantity = 1) {
    return `Item ${item}, Quantity ${quantity}`;
}
console.log("\n");
console.log(calculatePrice("Laptop")); //Item: laptop, Quantity: 1
console.log(calculatePrice("Laptop", 5)); //Item: laptop, Quantity: 5

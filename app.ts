// app.ts
//Working with functions

let greeting: string = "Hello TypeScript!";
let year: number = 2025;
let isLearning: boolean = true;

console.log(greeting);
console.log("Current year is: ", year);

if (isLearning) {
    console.log("Keepr up the great work!");
} else {
    console.log("Tiem to start learning!");
}

function add(a: number, b: number) {
    return a + b;
}

let sum: number = add(3, 7);

console.log("The sum is: ", sum);

let myTest: string;
myTest = "3";

let myNumber: number;
myNumber = 10;

let myBoolean: boolean = true;
myBoolean = false;

let myAny: any;
myAny = "123";

let myNull: null;
myNull = null;

let myUndefined: undefined;
myUndefined = undefined;

let inferredString = "Hello";
let inferredYear = 2025;
let inferredisLearning = true;

function logMessage(message: string): void {
    console.log(message);
}

logMessage("This function doesn't return anything");

function greet(name: string, age?: number): string {
    if (age) {
        return `Hello ${name}! You are ${age} years old.`;
    }
    return `Hello ${name}!`;
}

console.log(greet("Steph"));    //Works
console.log(greet("Steph", 25));    //Works

function calculatePrice(item: string, quantity: number = 1): string {
    return `Item ${item}, Quantity ${quantity}`;
}

console.log("\n");
console.log(calculatePrice("Laptop"));  //Item: laptop, Quantity: 1
console.log(calculatePrice("Laptop", 5)); //Item: laptop, Quantity: 5
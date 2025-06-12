"use strict";
// app1.ts
let productName = "Automation Suite"; //Inferred as string
let version = 1.0; //Inferred as number
let isActive = true; //Inferred as boolean
console.log('Product: ${productName}, Version: ${version}, Active: ${isActive}');
// ---Functions---
console.log("*******Functions*****");
// Function with explicit types for parameters and return value
function multiply(num1, num2) {
    return num1 * num2;
}
let result = multiply(7, 8);
console.log("Multiplication result: ", result);
console.log("explicit types", "\n");
// Function with 'void' return type
function displayStatus(status) {
    console.log(`Current status: ${status.toUpperCase()}`);
}
displayStatus("Running tests");
console.log("\n");
// Function with an optional parameter
function createGreetings(name, title) {
    if (title) {
        return `Greetings ${title} ${name}!`;
    }
    return `Greetings ${name}!`;
}
console.log(createGreetings("Alice", null));
console.log(createGreetings("Bob", "Mr."));
console.log("\n");
// // Function with a default parameter
function generateReport(reportName, format = "pdf") {
    return `Generating report ${reportName} in ${format} format`;
}
console.log(generateReport("Daily summary")); //uses default format
console.log(generateReport("Weekly overview", "csv")); //uses specified format
// --- Experiment: Introduce a type error with functions ---
// Try to call one of your functions with an incorrect type and observe the error in Cursor/terminal.
// For example:
// multiply("abc", 5); // This should cause an error
// let responseData: any; // Inferred as 'any' if no initial value, explicit 'any' better
// // later:
// responseData = { message: "Success" }; // TypeScript won't complain much
// vs.
// let responseData1: { message: string; status: number; }; // Explicitly typed
// // later:
// responseData1 = { message: "Success", status: 200 }; // Type-safe
// responseData1 = { message: "Error" }; // TypeScript error - 'status' property missing!
let x;
console.log(x);

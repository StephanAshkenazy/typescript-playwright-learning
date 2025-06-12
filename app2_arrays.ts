// app2_arrays.ts

//Moving to Phase 2: Working with Data Structures - Arrays and Objects (Interfaces)
//Syntax: Type[] or Array<Type>

//TypeScript
//Common Array Syntax
// let numbers: number[] = [1, 2, 3];
// let names: string[] = ["Alice", "Bob"];
// let booleans: Array<boolean> = [true, false, true];

// Attempting to add a wrong type causes an error
// numbers.push("four"); // Error!

//Arrays of Mixed Types (less common, but possible):
// let mixedArray: (string | number)[] = ["apple", 1, "banana", 2];

// 2. Objects and Interfaces (The Big One for Playwright POM!):
// This is perhaps the most crucial concept for structured test automation. 
// Playwright's Page Object Model relies heavily on representing web pages as objects. 
// TypeScript's Interfaces are perfect for defining the "shape" of these objects.

// An interface is a way to define a contract for an object's structure. 
// It specifies what properties an object should have and what their types should be.

// --- Arrays ---

// Array of numbers
let testScores: number[] = [85, 92, 78, 95, 88];
console.log("Test Scores: ", testScores);

// Array of strings
let studentNames: string[] = ["Alex", "Maria", "Chris"];
console.log("Student Names: ", studentNames);

// Try to add a non-number to testScores (expect an error)
//testScores.push("ninety");


// --- Interfaces for Objects ---

// Define an interface for a test case
interface TestCase {
    id: string;
    title: string;
    description: string;
    priority: "High" | "Medium" | "Low";   // Literal types for specific values
    steps: string[];                     // Array of strings for test steps
    expectedResult: string;
    isAutomated?: boolean;
}


// Create an object conforming to the TestCase interface
let loginTest: TestCase = {
    id: "TC001",
    title: "Login with valid credentials",
    description: "Verify successful user login",
    priority: "High",
    steps: [
        "Navigate to the login page",
        "Enter valid username",
        "Enter valid password",
        "Click the login button",
        "Verify successful login"
    ],
    expectedResult: "User is redirected to the dashboard",
    // isAutomated is optional, so we can omit it or include it
};

console.log("Login Test Case: ", loginTest);
console.log("***Login Test Case print steps only:",("\n"), loginTest.steps.join("\n"));

// Create another test case, including the optional property
let searchTest: TestCase = {
    id: "TC002",
    title: "Search for a product",
    description: "Verify product search functionality",
    priority: "Medium",
    steps: [
        "Navigate to homepage",
        "Enter product name in search bar",
        "Click search button",
        "Verify search results"
    ],
    expectedResult: "Correct products are displayed in search results",
    isAutomated: true
};

console.log("Search Test Case: ", searchTest);
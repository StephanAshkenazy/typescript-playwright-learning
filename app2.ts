// app2.ts

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

// Defining an Interface:
interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
    address?: string;
}

// Using an Interface:
let user1: User = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    isActive: true
};

let user2: User = {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    isActive: false,
    address: "123 Main St, Anytown, USA"    // Optional property can be included
};

// Attempting to create an object that doesn't match the interface causes an error
// let invalidUser: User = {
//     id: 3,
//     name: "Invalid User",
//     // email is missing here, will cause an error
//     isActive: true
// };

// Attempting to add an unknown property also causes an error
// let anotherInvalidUser: User = {
//     id: 4,
//     name: "Another User",
//     email: "another@example.com",
//     isActive: true,
//     phoneNumber: "123-456-7890" // Error: 'phoneNumber' does not exist in type 'User'.
// };

// readonly Properties: You can mark properties as readonly if they should 
// only be assigned during object creation.
interface Product {
    readonly id: string;
    name: string;
    price: number;
}

let laptop: Product = {
    id: "abc-123",
    name: "Super laptop",
    price: 1000
};

//laptop.id = "xyz-456"; // Error! id is readonly

//Nested Interfaces: Interfaces can contain other interfaces, allowing you to model 
// complex data structures. This is common for test data.
interface Address {
    street: string;
    city: string;
    zipCode: string;
}

interface Customer {
    customerId: number;
    firstName: string;
    lastName: string;
    shippingAddress: Address;       //Nested interface
    isPremium: boolean;
}

let customer1: Customer = {
    customerId: 1,
    firstName: "Bob",
    lastName: "Johnson",
    shippingAddress: {
        street: "123 Oak Ave",
        city: "Plovdiv",
        zipCode: "4000"
    },
    isPremium: true
}

console.log(customer1);
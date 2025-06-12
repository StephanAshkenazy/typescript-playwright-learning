"use strict";
// app2.ts
// Using an Interface:
let user1 = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    isActive: true
};
let user2 = {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    isActive: false,
    address: "123 Main St, Anytown, USA" // Optional property can be included
};
let laptop = {
    id: "abc-123",
    name: "Super laptop",
    price: 1000
};
let customer1 = {
    customerId: 1,
    firstName: "Bob",
    lastName: "Johnson",
    shippingAddress: {
        street: "123 Oak Ave",
        city: "Plovdiv",
        zipCode: "4000"
    },
    isPremium: true
};
console.log(customer1);

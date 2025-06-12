// interface_class.ts
// --- Interfaces ---
// In  essence, use an interface when you want to define a contract 
// for how an object should look or behave without 
// providing any actual implementation.

interface Person {
    firstName: string;
    lastName: string;
    age?: number; // Optional property
    greet(): string;
  }
  
  function printPersonInfo(person: Person) {
    console.log(`Name: ${person.firstName} ${person.lastName}`);
    if (person.age) {
      console.log(`Age: ${person.age}`);
    }
    console.log(person.greet());
  }
  
  // An object conforming to the Person interface
  const user: Person = {
    firstName: "John",
    lastName: "Doe",
    greet() {
      return `Hello, my name is ${this.firstName}`;
    },
  };
  
  printPersonInfo(user);
  
  class Employee implements Person {
    firstName: string;
    lastName: string;
    age: number; // Must be present if not optional in interface
  
    constructor(firstName: string, lastName: string, age: number) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    greet() {
      return `Greetings from Employee ${this.firstName}`;
    }
  }
  
  const employee = new Employee("Jane", "Smith", 30);
  printPersonInfo(employee);

// --- Classes ---
// Use a class when you want to create concrete objects that have 
// both data (properties) and logic (methods), and you need to instantiate them at runtime. 
// Often, classes will implement interfaces to guarantee they adhere to a specific contract.

  class Car {
    make: string;
    model: string;
    private _speed: number = 0; // Private property
  
    constructor(make: string, model: string) {
      this.make = make;
      this.model = model;
    }
  
    accelerate(amount: number): void {
      this._speed += amount;
      console.log(`${this.make} ${this.model} is now at ${this._speed} km/h.`);
    }
  
    brake(amount: number): void {
      this._speed -= amount;
      if (this._speed < 0) this._speed = 0;
      console.log(`${this.make} ${this.model} is now at ${this._speed} km/h.`);
    }
  
    getCurrentSpeed(): number {
      return this._speed;
    }
  }
  
  const myCar = new Car("Toyota", "Camry");
  myCar.accelerate(50);
  myCar.brake(10);
  console.log(`Current speed: ${myCar.getCurrentSpeed()}`);
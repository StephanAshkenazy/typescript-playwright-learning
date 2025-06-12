// // app2_arrays.ts

// Moving On: Phase 2, Part 2 - Enums
// Now, let's explore another useful data structure for defining 
// a set of related named constants: Enums (Enumerations).

// Enums are great for scenarios where you have a fixed set 
// of possible values, and you want to ensure type safety by 
// restricting a variable to only those specific values. 
// They make your code more readable and prevent 
// "magic strings" or "magic numbers" that could lead to errors.

// When to use Enums:

// Status codes (e.g., Success, Failure, Pending)
// User roles (e.g., Admin, Editor, Viewer)
// Directions (e.g., North, South, East, West)
// Test environment types (e.g., Dev, QA, Staging, Prod)
// Priority levels (which you already used with literal types 

enum TestStatus {
    Pending,  // 0
    Running,  // 1
    Passed,   // 2
    Failed,   // 3
    Skipped   // 4
}

let currentStatus: TestStatus = TestStatus.Running; // Output: 1 (the numeric value)
console.log(`Current Test Status: ${currentStatus}`);
console.log(`Status Name: ${TestStatus[currentStatus]}`);  // You can also access enum values by their index

// Using it in a function
function updateTestStatus(status: TestStatus): void {
    console.log(`Updating test status to: ${TestStatus[status]}`);
}

updateTestStatus(TestStatus.Passed);
// updateTestStatus(5); // Error: Argument of type '5' is not 
// assignable to parameter of type 'TestStatus'.
// updateTestStatus("Completed"); // Error: Argument of type '"Completed"' is not assignable
//  to parameter of type 'TestStatus'.

enum ErrorCode {
    FileNotFound = 404,
    ServerError = 500,
    Unauthorized = 401,
}

let lastError: ErrorCode = ErrorCode.ServerError;
console.log(`Last Error Code: ${lastError}`);       //Output: 500

// String Enums:
// String enums are generally preferred in modern TypeScript 
// because they are more readable when logged or debugged, 
// as they don't rely on numeric values.
enum Environment {
    Development = "DEV",
    Staging = "STG",
    Production = "PROD",
}

let currentEnv: Environment = Environment.Development;
// You can also access enum values by their string name
console.log(`Current Environment: ${currentEnv}`);

function runTestEnvironment(env: Environment): void {
    console.log(`Starting tests in ${env} environment...`);
    //Logic to configure tests based on environment
    if (env === Environment.Production) {
        console.log("Running tests in Production environment...");
    }

}

runTestEnvironment(Environment.Development);
runTestEnvironment(Environment.Production);

// runTestsInEnvironment("UAT"); // Error: Argument of 
// type '"UAT"' is not assignable to parameter of type 'Environment'.
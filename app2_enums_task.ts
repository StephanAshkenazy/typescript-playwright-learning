// // app2_enums_task.ts

// --- Numeric Enum Example: User Roles ---
enum UserRole {
    Guest,  // 0
    User,   // 1
    Moderator,  // 2
    Admin,  // 3
}

let userRole: UserRole = UserRole.User;
console.log(`User's role (numeric) is: ${userRole}`);
console.log(`User's role (string) is: ${UserRole[userRole]}`);

function checkPermissions(role: UserRole): void {
    if (role === UserRole.Admin) {
        console.log("Admin: You have full access to the system.");
    } else if (role === UserRole.Moderator) {
        console.log("Moderator access granted.");
    } else if (role === UserRole.User) {
        console.log("Standart user access granted.");
    } else {
        console.log("Limited Guest access granted.");
    }
}

checkPermissions(UserRole.Admin);
checkPermissions(UserRole.Guest);


// --- String Enum Example: Browser Types (Relevant for Playwright!) ---
enum BrowserType {
    Chromium = "chromium",
    Firefox = "firefox",
    WebKit = "webkit",
}

let preferredBrowser: BrowserType = BrowserType.Chromium;
console.log(`Preferred Browser: ${preferredBrowser}`);

function launchBrowser(browser: BrowserType): void {
    console.log(`Attempting to launch ${browser} browser...`);
    // In a real Playwright scenario, this is where you'd use the browser type
    // like `playwright[browser].launch()`
    if (browser === BrowserType.Firefox) {
        console.log("Firefox is selected for testing.");
    } else if (browser === BrowserType.WebKit) {
        console.log("WebKit (Safari)is selected for testing.");
    } else {
        console.log("Chromium (Chrome/Edge) is selected for testing.");
    }
}

launchBrowser(BrowserType.Firefox);
launchBrowser(BrowserType.Chromium);
launchBrowser(BrowserType.WebKit);
// launchBrowser("chrome"); // Try uncommenting this line and observe the error!
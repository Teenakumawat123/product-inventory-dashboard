# Interactive Product Inventory & Analytics Dashboard

## Project Overview

The **Interactive Product Inventory & Analytics Dashboard** is a console-based application developed using JavaScript. It demonstrates core JavaScript concepts by managing product inventory, categorizing products based on price, calculating total inventory value, filtering affordable products, and generating formatted reports.

The application allows users to add new products through `prompt()` and displays inventory information and financial analytics in the browser console.

## Project Objectives

- Understand JavaScript variables, arrays, and objects.
- Accept and validate user input using `prompt()`.
- Convert string input into numeric values using `Number()`.
- Apply conditional statements using `if...else` and `switch`.
- Implement loops and flow-control statements.
- Create reusable functions and arrow functions.
- Calculate total inventory value.
- Filter affordable products using `filter()`.
- Display inventory records using `forEach()`.
- Generate formatted reports using `map()`.

## Features

- **Product Initialization:** Starts with predefined products, including Laptop and Mouse.
- **Add New Products:** Accepts a product name and price from the user.
- **Input Validation:** Checks for empty names, invalid prices, and non-positive values.
- **Product Categorization:** Assigns Budget, Standard, or Premium categories based on price.
- **Inventory Display:** Lists products with their prices and categories.
- **Financial Analytics:** Calculates the total value of all products.
- **Affordable Product Filtering:** Identifies products priced below $200.
- **Formatted Reports:** Converts product names to uppercase and displays their prices.
- **Array Methods:** Demonstrates `forEach()`, `filter()`, and `map()`.

## Technologies Used

- JavaScript (ES6+)
- HTML5 (optional, for launching the script in a browser)
- Browser Developer Console

## Project Structure

```text
product-inventory-dashboard/
│
├── index.html
├── script.js
└── README.md
```

- `index.html` — Loads the JavaScript application in a browser.
- `script.js` — Contains the inventory logic and analytics.
- `README.md` — Documents the project, its features, and usage.

## 🚀 How to Run the Project

1. Clone or download this repository.
2. Open the project folder.
3. Open `index.html` in a modern web browser, if the HTML launcher is included.
4. Open the browser Developer Tools using `F12` or `Ctrl + Shift + J` on Windows.
5. Navigate to the Console tab.
6. Enter the product name when prompted, such as `Monitor`.
7. Enter the product price, such as `150`.
8. View the inventory roster and financial analytics in the console.

**Note:** The application uses browser-based `prompt()` dialogs and displays its results in the console. It does not require a database or external JavaScript libraries.

## Sample Output

```text
--- Initializing Inventory System ---
[Prompt executed: User adds "Monitor" at "$150"]

--- Processing Inventory Roster (forEach) ---
* Item: Laptop ($800) -> Category: Premium
* Item: Mouse ($25) -> Category: Budget
* Item: Monitor ($150) -> Category: Standard

--- Financial Analytics ---
Total Inventory Value: $975
Filtered Affordable Items (Under $200): ["Mouse","Monitor"]
Formatted Report List: ["LAPTOP: $800","MOUSE: $25","MONITOR: $150"]
```

## Concepts Demonstrated

| Concept | Application |
|---|---|
| Arrays and Objects | Store product information |
| `prompt()` and `Number()` | Accept and convert user input |
| `if...else` | Assign product categories |
| `switch` | Determine category badges |
| `for` and `while` loops | Process inventory and validate input |
| `break` and `continue` | Control loop execution |
| Regular Functions | Calculate inventory statistics |
| Arrow Functions | Process and transform data |
| `forEach()` | Display inventory |
| `filter()` | Find affordable products |
| `map()` | Generate formatted reports |
| Scope | Manage local variables within functions |

## Future Enhancements

- Build a responsive dashboard using HTML, CSS, JavaScript, and React.js.
- Develop a backend using Node.js and Express.js.
- Integrate MongoDB or MySQL for persistent data storage.
- Create REST APIs for product CRUD operations.
- Add user authentication and authorization.
- Implement stock tracking, low-stock alerts, and sales management.
- Add charts, analytics, and downloadable reports.
- Improve security, error handling, and input validation.
- Add automated testing and deploy the application online.
- Expand the project into a complete full-stack inventory management system.


This project is created for educational purposes as part of a JavaScript learning project.


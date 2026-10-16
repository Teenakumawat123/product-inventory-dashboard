console.log("--- Initializing Inventory System ---");

// 1. INITIAL INVENTORY

const inventory = [
    {
        name: "Laptop",
        price: 800
    },
    {
        name: "Mouse",
        price: 25
    }
];


// 2. CATEGORY ASSIGNMENT USING IF...ELSE

function getCategory(price) {

    if (price < 100) {
        return "Budget";
    } else if (price < 500) {
        return "Standard";
    } else {
        return "Premium";
    }

}


// 3. CATEGORY BADGE USING SWITCH

function getCategoryBadge(category) {

    switch (category) {

        case "Budget":
            return "Budget";

        case "Standard":
            return "Standard";

        case "Premium":
            return "Premium";

        default:
            return "Unknown";
    }

}


// 4. ADD PRODUCT USING PROMPT()

const productName = prompt("Enter product name:");

const priceInput = prompt("Enter product price:");


// 5. INPUT VALIDATION

if (
    productName !== null &&
    productName.trim() !== "" &&
    priceInput !== null &&
    priceInput.trim() !== "" &&
    Number.isFinite(Number(priceInput)) &&
    Number(priceInput) > 0
) {

    const newProduct = {
        name: productName.trim(),
        price: Number(priceInput)
    };

    inventory.push(newProduct);

    console.log(
        `[Prompt executed: User adds "${newProduct.name}" at "$${newProduct.price}"]`
    );

} else {

    console.log("Invalid input. Product was not added.");

}


// 6. PROCESS INVENTORY USING FOREACH()

console.log("\n--- Processing Inventory Roster (forEach) ---");

inventory.forEach((product) => {

    const category = getCategory(product.price);

    const badge = getCategoryBadge(category);

    console.log(
        `* Item: ${product.name} ($${product.price}) -> Category: ${badge}`
    );

});


// 7. CALCULATE TOTAL INVENTORY VALUE

function calculateTotalValue(products) {

    let total = 0;

    for (let i = 0; i < products.length; i++) {

        total += products[i].price;

    }

    return total;

}


// 8. FILTER AFFORDABLE PRODUCTS

const affordableItems = inventory.filter(
    (product) => product.price < 200
);


// 9. FORMAT REPORT USING MAP()

const formattedReport = inventory.map(
    (product) => {

        return `${product.name.toUpperCase()}: $${product.price}`;

    }
);


// 10. DISPLAY FINANCIAL ANALYTICS

console.log("\n--- Financial Analytics ---");

console.log(
    `Total Inventory Value: $${calculateTotalValue(inventory)}`
);

console.log(
    "Filtered Affordable Items (Under $200):",
    JSON.stringify(
        affordableItems.map((product) => product.name)
    )
);

console.log(
    "Formatted Report List:",
    JSON.stringify(formattedReport)
);
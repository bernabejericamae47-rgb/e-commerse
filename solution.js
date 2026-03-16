// solution.js
// Lab 4: JavaScript Fundamentals
// Pair Programming Assignment

// ============================================
// Problem 1: The Strict Type Checker
// ============================================
function checkVariable(input) {
    switch (typeof input) {
        case 'string':
        case 'number':
        case 'boolean':
        case 'bigint':
        case 'undefined':
            return typeof input;
        default:
            return 'object';
    }
}

// Test Problem 1
console.log('=== Problem 1: Type Checker ===');
console.log(checkVariable('hello'));     // 'string'
console.log(checkVariable(42));           // 'number'
console.log(checkVariable(true));         // 'boolean'
console.log(checkVariable(undefined));    // 'undefined'
console.log(checkVariable(null));         // 'object'
console.log(checkVariable({}));           // 'object'
console.log(checkVariable([]));           // 'object'


// ============================================
// Problem 2: Secure ID Generator
// ============================================
function generateIDs(count) {
    const ids = [];
    
    for (let i = 0; i < count; i++) {
        if (i === 5) {
            continue; // Skip number 5
        }
        ids.push(ID-${i});
    }
    
    return ids;
}

// Test Problem 2
console.log('\n=== Problem 2: Secure ID Generator ===');
console.log(generateIDs(7));  // ["ID-0", "ID-1", "ID-2", "ID-3", "ID-4", "ID-6"]
console.log(generateIDs(10)); // Includes IDs up to 9, skipping 5


// ============================================
// Problem 3: The Functional Sum
// ============================================
function calculateTotal(...numbers) {
    // Check if all arguments are numbers
    numbers.forEach(num => {
        if (typeof num !== 'number') {
            throw new TypeError('Invalid input: All arguments must be numbers');
        }
    });
    
    // Use reduce to sum all numbers
    return numbers.reduce((sum, current) => sum + current, 0);
}

// Test Problem 3
console.log('\n=== Problem 3: Functional Sum ===');
console.log(calculateTotal(1, 2, 3, 4, 5)); // 15

// Uncomment to test error handling:
// try {
//     console.log(calculateTotal(1, 2, '3', 4));
// } catch (error) {
//     console.log('Error caught:', error.message);
// }


// ============================================
// Problem 4: Leaderboard Filter
// ============================================
function getTopScorers(playerList) {
    return playerList
        .filter(player => player.score > 😎              // Filter players with score > 8
        .map(player => player.name)                       // Get only the names
        .join(', ');                                      // Join with comma and space
}

// Test Problem 4
console.log('\n=== Problem 4: Leaderboard Filter ===');
const players = [
    { name: 'Alice', score: 10 },
    { name: 'Bob', score: 5 },
    { name: 'Charlie', score: 9 },
    { name: 'David', score: 7 },
    { name: 'Eve', score: 12 },
    { name: 'Frank', score: 8 },
    { name: 'Grace', score: 11 },
    { name: 'Henry', score: 6 },
    { name: 'Ivy', score: 4 },
    { name: 'Jack', score: 15 }
];

console.log(getTopScorers(players)); // Should output: "Alice, Charlie, Eve, Grace, Jack"


// ============================================
// Problem 5: The Private Inventory
// ============================================
class Item {
    // Private property
    #discount = 0.1; // 10% discount
    
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    
    // Getter for final price
    get finalPrice() {
        return this.price - (this.price * this.#discount);
    }
    
    // Optional: Method to display item details
    displayInfo() {
        console.log(${this.name}: Original Price = $${this.price}, Final Price = $${this.finalPrice});
    }
}

// Test Problem 5
console.log('\n=== Problem 5: Private Inventory ===');
const item1 = new Item('Laptop', 1000);
const item2 = new Item('Mouse', 50);
const item3 = new Item('Keyboard', 80);

console.log(item1.finalPrice); // 900
console.log(item2.finalPrice); // 45
console.log(item3.finalPrice); // 72

item1.displayInfo();
item2.displayInfo();
item3.displayInfo();

// Demonstrate that #discount is truly private
console.log('Accessing discount directly:', item1.discount); // undefined
console.log('Accessing private field:', item1.#discount); // Would cause SyntaxError if uncommented


// ============================================
// Problem 6: Robust Division
// ============================================
function safeDivide(a, b) {
    try {
        if (b === 0) {
            throw new Error('Cannot divide by zero');
        }
        return a / b;
    } catch (error) {
        return error.message;
    } finally {
        console.log('Operation attempted');
    }
}

// Test Problem 6
console.log('\n=== Problem 6: Robust Division ===');
console.log('Result:', safeDivide(10, 2));  // Should log "Operation attempted" then show 5
console.log('Result:', safeDivide(10, 0));  // Should log "Operation attempted" then show error message
console.log('Result:', safeDivide(15, 3));  // Should log "Operation attempted" then show 5


// ============================================
// Additional Tests to Verify All Solutions
// ============================================
console.log('\n=== Additional Verification Tests ===');

// Verify Problem 1 - Edge cases
console.log('P1 - Symbol:', checkVariable(Symbol('id'))); // 'object' (Symbol is not in switch cases)
console.log('P1 - Function:', checkVariable(() => {}));  // 'object'

// Verify Problem 2 - Boundary cases
console.log('P2 - Count 0:', generateIDs(0));  // []
console.log('P2 - Count 1:', generateIDs(1));  // ["ID-0"]
console.log('P2 - Count 6:', generateIDs(6));  // ["ID-0", "ID-1", "ID-2", "ID-3", "ID-4"]

// Verify Problem 3 - More sums
console.log('P3 - Empty sum:', calculateTotal()); // 0
console.log('P3 - Single number:', calculateTotal(42)); // 42

// Verify Problem 4 - Different player list
const smallPlayerList = [
    { name: 'Test1', score: 9 },
    { name: 'Test2', score: 8 },
    { name: 'Test3', score: 10 }
];
console.log('P4 - Small list:', getTopScorers(smallPlayerList)); // "Test1, Test3"

// Verify Problem 5 - More items
const item4 = new Item('Sale Item', 20);
console.log('P5 - Sale item final price:', item4.finalPrice); // 18

// Verify Problem 6 - More division scenarios
console.log('P6 - Negative numbers:', safeDivide(-10, 2));  // -5
console.log('P6 - Decimal division:', safeDivide(7, 2));    // 3.5
// =========================================
// SPENDWISE - JAVASCRIPT FOUNDATION
// =========================================


// =========================================
// 1. APPLICATION DATA
// =========================================

// Store the current budgeting information
let budget = 50000;
let expenses = 31250;


// =========================================
// 2. BUDGET CALCULATION FUNCTION
// =========================================

// Calculates the remaining balance
function calculateBalance(budget, expenses) {
    return budget - expenses;
}


// =========================================
// 3. COLLECT USER INPUT
// =========================================

// Ask the user to enter their budget
let userBudget = prompt("Enter your monthly budget:");

// Ask the user to enter their total expenses
let userExpenses = prompt("Enter your total expenses:");


// =========================================
// 4. CONVERT USER INPUT TO NUMBERS
// =========================================

// Prompt values are received as strings,
// so they must be converted to numbers.
userBudget = Number(userBudget);
userExpenses = Number(userExpenses);


// =========================================
// 5. PERFORM CALCULATION
// =========================================

// Use the reusable function to calculate
// the remaining balance.
let remainingBalance = calculateBalance(
    userBudget,
    userExpenses
);


// =========================================
// 6. DISPLAY RESULTS IN CONSOLE
// =========================================

console.log("=================================");
console.log("       SPENDWISE SUMMARY");
console.log("=================================");

console.log("Monthly Budget: KSh " + userBudget);
console.log("Total Expenses: KSh " + userExpenses);
console.log("Remaining Balance: KSh " + remainingBalance);

console.log("=================================");


// =========================================
// 7. ADDITIONAL BUDGET FUNCTION
// =========================================

// Calculates how much of the budget has been spent
function calculateSpendingPercentage(budget, expenses) {
    return (expenses / budget) * 100;
}


// Calculate spending percentage
let spendingPercentage = calculateSpendingPercentage(
    userBudget,
    userExpenses
);


// Display spending percentage
console.log(
    "Percentage of Budget Spent: " +
    spendingPercentage.toFixed(2) +
    "%"
);

console.log("=================================");

// ==========================================
// SPENDWISE INTERACTIVE DASHBOARD
// ==========================================

// Monthly budget
const budget = 50000;

// Expense records stored in an array
let expenses = [
    {
        id: 1,
        name: "Lunch",
        category: "Food",
        amount: 500,
        date: "2026-09-01"
    },
    {
        id: 2,
        name: "Bus Fare",
        category: "Transport",
        amount: 200,
        date: "2026-09-02"
    },
    {
        id: 3,
        name: "House Rent",
        category: "Rent",
        amount: 10000,
        date: "2026-09-03"
    },
    {
        id: 4,
        name: "Movie",
        category: "Entertainment",
        amount: 800,
        date: "2026-09-04"
    }
];

// Categories used by SpendWise
const categories = [
    "Food",
    "Transport",
    "Rent",
    "Entertainment",
    "Savings",
    "Utilities"
];

// ==========================================
// DOM ELEMENTS
// ==========================================

const totalBudgetElement = document.getElementById("totalBudget");
const totalSpentElement = document.getElementById("totalSpent");
const remainingBudgetElement = document.getElementById("remainingBudget");
const budgetMessageElement = document.getElementById("budgetMessage");

const expenseForm = document.getElementById("expenseForm");
const expenseNameInput = document.getElementById("expenseName");
const expenseCategoryInput = document.getElementById("expenseCategory");
const expenseAmountInput = document.getElementById("expenseAmount");
const expenseDateInput = document.getElementById("expenseDate");

const formMessageElement = document.getElementById("formMessage");

const expenseTableBody = document.getElementById("expenseTableBody");
const emptyMessage = document.getElementById("emptyMessage");

const categoryGrid = document.getElementById("categoryGrid");
const clearExpensesButton = document.getElementById("clearExpensesBtn");


// ==========================================
// FORMAT MONEY
// ==========================================

function formatMoney(amount) {
    return "KSh " + amount.toLocaleString();
}


// ==========================================
// CALCULATE TOTAL SPENDING
// ==========================================

function calculateTotalSpent() {

    let total = 0;

    // LOOP through all expense records
    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    return total;
}


// ==========================================
// GET CATEGORY TOTAL
// ==========================================

function getCategoryTotal(category) {

    let total = 0;

    // Loop through expenses
    for (let i = 0; i < expenses.length; i++) {

        if (expenses[i].category === category) {
            total += expenses[i].amount;
        }
    }

    return total;
}


// ==========================================
// FORMAT DATE
// ==========================================

function formatDate(dateString) {

    const date = new Date(dateString);

    return date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });
}


// ==========================================
// UPDATE BUDGET STATUS
// ==========================================

function updateBudgetStatus(totalSpent) {

    const remaining = budget - totalSpent;
    const percentageUsed = (totalSpent / budget) * 100;

    // DECISION MAKING USING CONDITIONALS

    if (remaining < 0) {

        budgetMessageElement.textContent =
            "You have exceeded your budget. Consider reducing unnecessary expenses.";

    } else if (percentageUsed >= 80) {

        budgetMessageElement.textContent =
            "Warning: You have used 80% or more of your monthly budget.";

    } else if (percentageUsed >= 50) {

        budgetMessageElement.textContent =
            "You have used more than half of your budget. Keep monitoring your spending.";

    } else {

        budgetMessageElement.textContent =
            "Your budget is currently healthy. Keep managing your spending wisely.";
    }
}


// ==========================================
// UPDATE SUMMARY CARDS
// ==========================================

function updateSummary() {

    const totalSpent = calculateTotalSpent();

    const remaining = budget - totalSpent;

    totalBudgetElement.textContent = formatMoney(budget);

    totalSpentElement.textContent = formatMoney(totalSpent);

    remainingBudgetElement.textContent = formatMoney(remaining);

    updateBudgetStatus(totalSpent);
}


// ==========================================
// DISPLAY EXPENSES
// ==========================================

function renderExpenses() {

    // Clear existing table rows
    expenseTableBody.innerHTML = "";

    // Check whether the array is empty
    if (expenses.length === 0) {

        emptyMessage.style.display = "block";

        return;

    } else {

        emptyMessage.style.display = "none";
    }

    // LOOP through expense records
    for (let i = 0; i < expenses.length; i++) {

        const expense = expenses[i];

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${expense.name}</td>
            <td>${expense.category}</td>
            <td>${formatMoney(expense.amount)}</td>
            <td>${formatDate(expense.date)}</td>
            <td>
                <button 
                    class="delete-btn" 
                    data-id="${expense.id}">
                    Delete
                </button>
            </td>
        `;

        expenseTableBody.appendChild(row);
    }
}


// ==========================================
// DISPLAY CATEGORIES
// ==========================================

function renderCategories() {

    categoryGrid.innerHTML = "";

    const totalSpent = calculateTotalSpent();

    // LOOP through all categories
    for (let i = 0; i < categories.length; i++) {

        const category = categories[i];

        const categoryTotal = getCategoryTotal(category);

        let percentage = 0;

        // Avoid division by zero
        if (totalSpent > 0) {

            percentage = (categoryTotal / totalSpent) * 100;
        }

        const categoryCard = document.createElement("div");

        categoryCard.className = "category-card";

        categoryCard.innerHTML = `
            <h3>${category}</h3>

            <p>
                ${formatMoney(categoryTotal)}
                (${percentage.toFixed(1)}%)
            </p>

            <div class="progress-container">
                <div 
                    class="progress-bar"
                    style="width: ${percentage}%">
                </div>
            </div>
        `;

        categoryGrid.appendChild(categoryCard);
    }
}


// ==========================================
// UPDATE ENTIRE DASHBOARD
// ==========================================

function updateDashboard() {

    updateSummary();

    renderExpenses();

    renderCategories();
}


// ==========================================
// ADD NEW EXPENSE
// ==========================================

expenseForm.addEventListener("submit", function(event) {

    // Prevent page reload
    event.preventDefault();

    const name = expenseNameInput.value.trim();

    const category = expenseCategoryInput.value;

    const amount = Number(expenseAmountInput.value);

    const date = expenseDateInput.value;


    // VALIDATION USING CONDITIONALS

    if (name === "") {

        formMessageElement.textContent =
            "Please enter an expense name.";

        return;
    }

    if (category === "") {

        formMessageElement.textContent =
            "Please select an expense category.";

        return;
    }

    if (amount <= 0 || isNaN(amount)) {

        formMessageElement.textContent =
            "Please enter a valid amount.";

        return;
    }

    if (date === "") {

        formMessageElement.textContent =
            "Please select a date.";

        return;
    }


    // Create a new expense object

    const newExpense = {

        id: Date.now(),

        name: name,

        category: category,

        amount: amount,

        date: date
    };


    // Add the new expense to the array

    expenses.push(newExpense);


    // Update the dashboard

    updateDashboard();


    // Show success message

    formMessageElement.textContent =
        "Expense added successfully!";


    formMessageElement.style.color = "#2e8b57";


    // Clear form

    expenseForm.reset();

});


// ==========================================
// DELETE EXPENSE
// ==========================================

expenseTableBody.addEventListener("click", function(event) {

    if (event.target.classList.contains("delete-btn")) {

        const expenseId = Number(event.target.dataset.id);

        // Remove the selected expense from the array

        expenses = expenses.filter(function(expense) {

            return expense.id !== expenseId;

        });

        // Update dashboard

        updateDashboard();
    }

});


// ==========================================
// CLEAR ALL EXPENSES
// ==========================================

clearExpensesButton.addEventListener("click", function() {

    if (expenses.length === 0) {

        alert("There are no expenses to clear.");

        return;
    }


    const confirmation = confirm(
        "Are you sure you want to delete all expenses?"
    );


    if (confirmation) {

        expenses = [];

        updateDashboard();

        formMessageElement.textContent =
            "All expenses have been cleared.";

        formMessageElement.style.color = "#c0392b";
    }

});


// ==========================================
// INITIAL DASHBOARD LOAD
// ==========================================

updateDashboard();

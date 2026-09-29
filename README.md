# SpendWise – Smart Money Management Dashboard

## Project Overview

SpendWise is a responsive personal budgeting dashboard designed to help users monitor their budget, expenses, spending categories, savings, and recent financial activity in one place.

The project was initially developed as a static dashboard using HTML and CSS. In Week 6, JavaScript functionality was introduced to transform the project from a purely visual interface into an application that can collect user input, process financial data, perform calculations, and display results through the browser console.

## Features

* Responsive dashboard layout
* Sidebar navigation
* Monthly budget summary
* Total budget, spending, and remaining balance
* Spending categories
* Progress indicators
* Recent expenses table
* Budgeting tips video
* Responsive design for desktop and mobile screens
* JavaScript budget calculations
* User input through JavaScript prompts
* Console-based financial summary
* Reusable JavaScript functions

## Technologies Used

* HTML5
* CSS3
* JavaScript
* Git
* GitHub
* Visual Studio Code

## Project Structure

text
SpendWise/
│
├── index.html
├── style.css
├── script.js
├── README.md
└── ad0091b1-ea10-4c53-af2f-9bebe960deea_20251115_125910_0000.png


## HTML Structure

The `index.html` file provides the structure of the SpendWise dashboard.

It contains:

* Sidebar navigation
* SpendWise branding
* Monthly budget summary
* Financial summary cards
* Spending category cards
* Recent expenses table
* Budgeting tips section
* Embedded budgeting video

The JavaScript file is linked to the HTML document using:

html
<script src="script.js"></script>


## CSS Styling

The `style.css` file controls the visual presentation of the SpendWise dashboard.

CSS concepts used include:

* CSS Grid
* Flexbox
* Responsive design
* CSS variables
* Media queries
* Hover effects
* Focus states
* Typography
* Cards and tables
* Progress indicators
* Light and dark theme support

The dashboard uses CSS Grid for the main layout, summary cards, and spending categories, while Flexbox is used for components such as the sidebar, navigation, header, cards, and section layouts.

## JavaScript Foundation

Week 6 introduces JavaScript functionality to the SpendWise project.

The JavaScript implementation demonstrates the following concepts:

* Variables
* Data types
* User input
* Type conversion
* Arithmetic calculations
* Functions
* Function parameters
* Return values
* Console output

## Variables

Variables are used to store important budgeting information.

For example:

javascript
let budget = 50000;
let expenses = 31250;


The `budget` variable represents the monthly budget, while `expenses` represents the amount spent.

The project also uses variables to store information entered by the user:

javascript
let userBudget;
let userExpenses;


These variables allow the application to process dynamic financial information.

## Data Types

The project works primarily with strings and numbers.

User input collected through `prompt()` is initially returned as a string. The `Number()` function is therefore used to convert the values into numbers.

javascript
userBudget = Number(userBudget);
userExpenses = Number(userExpenses);


This allows JavaScript to perform mathematical calculations correctly.

## Collecting User Input

SpendWise collects budgeting information using JavaScript's `prompt()` function.

javascript
let userBudget = prompt("Enter your monthly budget:");

let userExpenses = prompt("Enter your total expenses:");
`

The user provides their monthly budget and total expenses, which are then stored in variables for processing.

## Budget Calculations

SpendWise calculates the remaining balance by subtracting total expenses from the monthly budget.

javascript
function calculateBalance(budget, expenses) {
    return budget - expenses;
}


The function is called using:

javascript
let remainingBalance = calculateBalance(
    userBudget,
    userExpenses
);


For example:

text
Monthly Budget: KSh 50,000
Total Expenses: KSh 31,250

Remaining Balance:
KSh 50,000 - KSh 31,250 = KSh 18,750


## Reusable Functions

Functions help organize the JavaScript code and make calculations reusable.

The main budget function is:

javascript
function calculateBalance(budget, expenses) {
    return budget - expenses;
}


The function receives two parameters:

* `budget`
* `expenses`

It then returns the remaining balance.

The project also includes a function for calculating the percentage of the budget that has been spent:

javascript
function calculateSpendingPercentage(budget, expenses) {
    return (expenses / budget) * 100;
}


This function makes it possible to reuse the spending calculation with different budget and expense values.

## Displaying Results

The calculated results are displayed in the browser console using `console.log()`.

Example:

javascript
console.log("Monthly Budget: KSh " + userBudget);
console.log("Total Expenses: KSh " + userExpenses);
console.log("Remaining Balance: KSh " + remainingBalance);


The console output provides a clearly labelled financial summary.

Example output:

text
=================================
       SPENDWISE SUMMARY
=================================
Monthly Budget: KSh 50000
Total Expenses: KSh 31250
Remaining Balance: KSh 18750
=================================
Percentage of Budget Spent: 62.50%
=================================


## How to Run the Project

1. Clone or download the repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` in a web browser.
4. JavaScript prompts will request the monthly budget and total expenses.
5. Enter the required values.
6. Open the browser Developer Tools.
7. Select the **Console** tab.
8. View the calculated budget summary.

## Testing

The JavaScript functionality was tested by entering different budget and expense values through the browser prompts.

For example:

text
Budget: KSh 50,000
Expenses: KSh 31,250
Remaining: KSh 18,750


The application successfully calculates the remaining balance and displays the result in the browser console.

## Learning Outcomes

Through this project, I practiced how to:

* Connect JavaScript to an existing HTML project.
* Declare and use variables.
* Work with different data types.
* Collect information from users.
* Convert user input into numerical values.
* Perform arithmetic calculations.
* Create reusable functions.
* Use parameters and return values.
* Display results using the browser console.
* Integrate JavaScript functionality into an existing web project.

## Future Improvements

Future versions of SpendWise could include:

* Interactive expense forms
* Dynamic transaction management
* Automatic dashboard updates
* Local storage for saving financial data
* Interactive charts and reports
* Budget alerts
* Expense category management
* Dynamic progress bars
* Persistent user data

## Author

**DML JAY**

SpendWise – Smart Money Management Dashboard

# SpendWise Dashboard

SpendWise is a responsive budget-tracking dashboard designed to help users monitor their budgets, expenses, savings, and spending categories through a clean and structured interface.

This project was developed as part of a web development assignment focusing on **CSS Grid, Flexbox, responsive design, CSS custom properties, and micro-interactions**.

## Features

* Responsive dashboard layout
* Sidebar navigation
* Financial summary cards
* Six spending categories:

  * Food
  * Transport
  * Rent
  * Entertainment
  * Savings
  * Utilities
* Recent expenses table
* Budgeting tips section
* Hover and keyboard-focus interactions
* Responsive mobile layout
* Dark theme support using the user's system preference

## Technologies Used

* HTML5
* CSS3
* CSS Grid
* Flexbox
* CSS Custom Properties
* Google Fonts
* Responsive Media Queries

## Dashboard Layout

The dashboard uses **CSS Grid** to create the main page structure:

* Sidebar navigation
* Main content area
* Summary section
* Category section
* Recent expenses section

CSS Grid is also used to organize the summary and category cards into responsive layouts.

## Flexbox Implementation

Flexbox is used inside different dashboard components, including:

* Sidebar navigation items
* Header content
* Profile section
* Summary cards
* Category cards
* Progress information

This provides flexible alignment and spacing across different screen sizes.

## CSS Custom Properties

The project uses CSS variables defined in `:root` to maintain a consistent visual design.

Examples include:

```css
:root {
    --brand-color: #17324d;
    --accent-color: #2e8b57;
    --surface-color: #ffffff;
    --background-color: #eef2f7;
    --primary-text: #263238;
    --secondary-text: #607080;
}
```

Using custom properties makes the design easier to maintain and update.

## Responsive Design

The dashboard is designed to adapt to different screen sizes.

At widths below **768px**, the layout changes to a single-column structure to improve usability on tablets and mobile devices.

The responsive design was tested using the browser's **DevTools Device Toolbar**.

## Micro-Interactions

Category cards include subtle hover and keyboard-focus effects.

These interactions use:

* `transform`
* `box-shadow`
* `transition`

The transition duration is **200ms**, keeping the animation smooth and within the assignment requirement of 250ms or less.

## Dark Theme

The project supports a system-based dark theme using:

```css
@media (prefers-color-scheme: dark)
```

The dark theme uses CSS custom properties to adjust the dashboard's colors while maintaining the same layout and structure.

## Project Structure

```text
budget-tracker/
│
├── index.html
├── style.css
├── README.md
└── ad0091b1-ea10-4c53-af2f-9bebe960deea_20251115_125910_0000.png
```

## Getting Started

1. Clone or download the existing repository.
2. Open the project folder.
3. Open `index.html` in a web browser.
4. Resize the browser window or use DevTools Device Toolbar to test responsiveness.

## Future Improvements

Future versions could include:

* User authentication
* Adding and deleting expenses
* Automatic budget calculations
* Interactive charts
* Persistent data storage
* Monthly financial reports
* Expense filtering and searching
* Database integration

## Author

**DML JAY**

Diploma in Information Technology
Web Development & Graphic Design

## Project Repository

This project is maintained in the existing **budget-tracker** GitHub repository.
